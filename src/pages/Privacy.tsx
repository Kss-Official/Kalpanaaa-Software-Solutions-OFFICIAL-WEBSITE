import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { SEO } from "../components/SEO";
import { SectionHeading } from "../components/SectionHeading";
import { NAP } from "../data/site";

export function Privacy() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Privacy Policy — Kalpanaaa Software Solutions (kalpanaaasoftwaresolutions.com)"
        description="Privacy policy for Kalpanaaa Software Solutions (kalpanaaasoftwaresolutions.com) — how we collect, use, share, and protect your data."
        canonical="https://kalpanaaasoftwaresolutions.com/privacy"
      />

      <section className="pt-16 pb-10 md:pt-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-brand mb-6">
            <ArrowLeft size={14} /> Home
          </Link>
          <SectionHeading as="h1" eyebrow="Legal" title="Privacy Policy" description={`Last updated: January ${NAP.founded}. ${NAP.name} ("we", "us", "our") respects your privacy and is committed to protecting your personal data.`} />
        </div>
      </section>

      <article className="pb-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8 prose prose-invert prose-slate space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
            <p>We collect information you provide directly to us through our website contact form, email, discovery calls, and engagement contracts. This includes:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Identification data: full name, email address, phone number, organisation.</li>
              <li>Project data: requirements, documents, technical specifications, source code you share with us.</li>
              <li>Communications: emails, call recordings (where you consent), support tickets.</li>
              <li>Billing data: invoicing details, tax IDs, payment information handled by our payment processor (we do not store card numbers).</li>
            </ul>
            <p>Automatically collected data: server logs, IP address, browser type, referrer, pages visited. We use minimal, privacy-respecting analytics — no third-party advertising trackers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
            <p>We process your personal data on the following legal bases:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong>Contract performance</strong> — to deliver the services you've engaged us for.</li>
              <li><strong>Legitimate interest</strong> — to respond to inquiries, send service-related communications, secure our infrastructure.</li>
              <li><strong>Consent</strong> — for marketing communications and non-essential cookies. You can withdraw consent at any time.</li>
              <li><strong>Legal obligation</strong> — to comply with tax, accounting, and statutory record-keeping requirements under Indian law.</li>
            </ul>
            <p>We do not sell your personal data. We do not share it with third parties except as required to deliver services (e.g. payment processors, infrastructure providers under contract) or as required by law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">3. Data Sharing & Sub-Processors</h2>
            <p>Where we use third-party sub-processors (cloud hosting, payment, analytics, AI inference), we maintain data-processing agreements that bind them to confidentiality and security obligations no less protective than this policy. Current sub-processors include:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Amazon Web Services (hosting, data residency in Mumbai/ap-south-1 region).</li>
              <li>Google Cloud Platform (hosting, AI inference for select workloads).</li>
              <li>OpenAI / Anthropic (AI inference — only when you explicitly engage us for AI features; data is not used for training).</li>
              <li>Payment processor for invoicing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">4. Data Security</h2>
            <p>We implement layered security controls appropriate to the sensitivity of the data:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>TLS 1.3 encryption for all data in transit.</li>
              <li>AES-256 encryption for data at rest in production databases.</li>
              <li>Role-based access control (RBAC) with least-privilege defaults.</li>
              <li>Audit logging of all access to production systems.</li>
              <li>Quarterly third-party penetration testing on production systems.</li>
              <li>SOC2-aligned operational practices; full SOC2 Type II certification targeted for FY26-27.</li>
            </ul>
            <p>Despite our efforts, no security system is impenetrable. In the event of a personal data breach, we will notify affected users and relevant authorities within 72 hours as required by applicable law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">5. Your Rights</h2>
            <p>Subject to applicable law (including the Digital Personal Data Protection Act, 2023), you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Access a copy of the personal data we hold about you.</li>
              <li>Correct inaccurate or incomplete data.</li>
              <li>Request deletion of your personal data (subject to our legal record-keeping obligations).</li>
              <li>Withdraw consent for processing based on consent.</li>
              <li>Lodge a complaint with the Data Protection Board of India.</li>
            </ul>
            <p>To exercise any of these rights, contact us at the address below. We respond to all verified requests within 30 days.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">6. Data Retention & Contact</h2>
            <p>We retain personal data only as long as necessary to provide services, comply with legal obligations, or resolve disputes. Project data is retained for 7 years post-engagement for warranty and audit purposes, then securely destroyed.</p>
            <p>For privacy inquiries or to exercise your rights, contact our Data Protection Officer:</p>
            <div className="flex items-center gap-3 mt-3 p-4 rounded-lg bg-ink-soft border border-white/5">
              <Mail size={16} className="text-brand" />
              <a href={`mailto:${NAP.email}`} className="text-brand hover:underline">{NAP.email}</a>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              {NAP.name} · {NAP.addressLine} · {NAP.city}, {NAP.region}, {NAP.country}
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
