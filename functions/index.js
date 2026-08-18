// Kalpanaaa KSS — FCM Push Relay (Firebase Blaze plan)
// When a notification document is written to Firestore, this Cloud Function sends
// real push notifications to every registered FCM token whose role matches the
// notification's audience (e.g. admins get attendance / leave / payroll alerts).
//
// Deploy with: firebase deploy --only functions
const { onDocumentCreated } = require('firebase-functions/v2/firestore');
const { initializeApp } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { getMessaging } = require('firebase-admin/messaging');

initializeApp();
const db = getFirestore();

const BATCH_SIZE = 500;

exports.sendFcmPushOnNotification = onDocumentCreated(
  'notifications/{notificationId}',
  async (event) => {
    const notifId = event.params.notificationId;
    const snap = event.data;
    if (!snap) return;

    const data = snap.data();
    if (!data || data._fcmStatus === 'sent' || data._fcmStatus === 'skipped') return;

    const title = data.title || 'Kalpanaaa HR Alert';
    const body = data.body || 'You have a new notification from KSS HR System.';
    const audience =
      Array.isArray(data.audience) && data.audience.length > 0
        ? data.audience
        : ['SUPER_ADMIN'];

    try {
      // Gather matching FCM tokens (deduplicated by token value)
      let tokensQuery = db.collection('fcmTokens');
      if (!audience.includes('ALL')) {
        tokensQuery = tokensQuery.where('role', 'in', audience);
      }
      const tokenSnap = await tokensQuery.get();

      const uniqueTokens = [];
      const seen = new Set();
      tokenSnap.forEach((docSnap) => {
        const t = docSnap.data().token;
        if (t && typeof t === 'string' && !seen.has(t)) {
          seen.add(t);
          uniqueTokens.push(t);
        }
      });

      if (uniqueTokens.length === 0) {
        await snap.ref.update({
          _fcmStatus: 'skipped',
          _fcmSentTo: 0,
          _fcmAttemptedAt: FieldValue.serverTimestamp(),
        });
        return;
      }

      const messageBase = {
        notification: { title, body },
        data: {
          type: String(data.type || 'SYSTEM_ALERT'),
          url: '/',
          notificationId: notifId,
        },
        webpush: {
          fcm_options: { link: '/' },
        },
      };

      let sent = 0;
      const invalidTokens = new Set();

      for (let i = 0; i < uniqueTokens.length; i += BATCH_SIZE) {
        const batch = uniqueTokens.slice(i, i + BATCH_SIZE);
        try {
          const result = await getMessaging().sendEachForMulticast({
            ...messageBase,
            tokens: batch,
          });
          sent += result.successCount || 0;
          (result.responses || []).forEach((resp, idx) => {
            const err = resp && resp.error;
            if (
              err &&
              (err.code === 'messaging/invalid-registration-token' ||
                err.code === 'messaging/registration-token-not-registered')
            ) {
              invalidTokens.add(batch[idx]);
            }
          });
        } catch (e) {
          console.warn('[KSS FCM] Batch send failed:', e && e.message);
        }
      }

      // Garbage collect dead tokens so future sends stay clean
      if (invalidTokens.size > 0) {
        try {
          const allTokens = await db.collection('fcmTokens').get();
          const dead = [];
          allTokens.forEach((d) => {
            if (invalidTokens.has(d.data().token)) dead.push(d);
          });
          for (const d of dead) {
            await d.ref.delete();
          }
        } catch (e) {
          console.warn('[KSS FCM] Token cleanup failed:', e && e.message);
        }
      }

      await snap.ref.update({
        _fcmStatus: 'sent',
        _fcmSentTo: sent,
        _fcmAttemptedAt: FieldValue.serverTimestamp(),
      });
    } catch (e) {
      console.error('[KSS FCM] Push relay error:', e);
      await snap.ref
        .update({
          _fcmStatus: 'error',
          _fcmError: String((e && e.message) || e),
          _fcmAttemptedAt: FieldValue.serverTimestamp(),
        })
        .catch(() => {});
    }
  }
);
