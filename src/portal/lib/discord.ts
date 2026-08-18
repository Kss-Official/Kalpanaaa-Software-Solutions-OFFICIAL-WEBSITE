export const sendDiscordAlert = async (message: string) => {
  const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

  if (!webhookUrl || webhookUrl.includes('YOUR_DISCORD_WEBHOOK_URL')) {
    console.warn('Discord API not configured. Skipping alert:', message);
    return;
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: `🚨 **KSS HR Alert**\n\n${message}`,
      }),
    });
  } catch (error) {
    console.error('Failed to send Discord alert:', error);
  }
};
