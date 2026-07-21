import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { SEO } from "../components/SEO";
import { SectionHeading } from "../components/SectionHeading";
import { NAP } from "../data/site";

export function Terms() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Terms of Service | Kalpanaaaa Software Solutions"
        description={`Terms of service governing the use of ${NAP.name} website and engagements. Effective January ${NAP.founded}.`}
        canonical="https://kalpanaaasoftwaresolutions.in/terms"
      />

      <section className="pt-16 pb-10 md:pt-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-brand mb-6">
            <ArrowLeft size={14} /> Home
          </Link>
          <SectionHeading as="h1" eyebrow="Legal" title="Terms of Service" description={`Last updated: January ${NAP.founded}. These terms govern your use of the ${NAP.name} website and any engagement contracts signed with us.`} />
        </div>
      </section>

      <article className="pb-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8 space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white">1. Services</h2>
            <p>{NAP.name} ("Kalpanaaaa", "we", "us") provides bespoke software engineering, RAG, multi-agent automation, and related consulting services. Specific deliverables, timelines, and SLAs for any engagement are defined in a signed Statement of Work (SOW) or Master Services Agreement (MSA). These website Terms of Service apply to your use of kalpanaaasoftwaresolutions.in; engagement-specific terms in the SOW or MSA govern in the event of conflict.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">2. Engagement</h2>
            <p>Engagements begin upon execution of an SOW or MSA. We operate two models:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong>Fixed-price milestone contracts</strong> — for well-scoped v1 builds. Payment is tied to milestone acceptance.</li>
              <li><strong>Dedicated Engineering Pod</strong> — starting at INR 10,000/month. Scalable up or down with 30 days' notice. Direct Slack access to founders, weekly sprint reviews.</li>
            </ul>
            <p>Either party may terminate for convenience with 30 days' written notice. Either party may terminate for material breach with 14 days' cure period. We do not lock clients into long-term commitments without cause.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">3. Payment</h2>
            <p>Payment terms are defined per SOW. Default terms for fixed-price work: 30% on signature, 40% at midpoint milestone, 30% on final acceptance. Default for ongoing pods: monthly in advance. Late payment accrues interest at 1.5% per month. We reserve the right to pause work on accounts more than 30 days overdue, with 7 days' prior written notice.</p>
            <p>All prices are exclusive of applicable taxes (GST). Invoices are payable in INR or USD as agreed.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">4. Intellectual Property — Zero-Risk Handover</h2>
            <p>On final payment for any engagement, all intellectual property created specifically for the client — including source code, documentation, infrastructure-as-code, design assets, and data schemas — transfers in full to the client. We retain rights to:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Pre-existing libraries, frameworks, and tooling we bring to the engagement (e.g. our internal scaffolding, CI templates).</li>
              <li>Generic know-how, techniques, and patterns developed during the engagement that do not incorporate client confidential information.</li>
            </ul>
            <p>Pre-existing IP is licensed to the client on a perpetual, royalty-free, non-exclusive basis as needed to use the deliverables. We never claim ownership of your data, your business logic, or anything specifically built for your problem.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">5. Confidentiality</h2>
            <p>Both parties agree to hold the other's confidential information in strict confidence and use it only for purposes of performing the engagement. Confidentiality obligations survive termination for 5 years. We sign NDAs on request before any commercial discussion, and the engagement contract contains reciprocal confidentiality terms by default.</p>
            <p>Information is not confidential if it: (a) is or becomes public through no fault of the receiving party, (b) was rightfully known before disclosure, (c) is independently developed without reference to confidential information, or (d) is required to be disclosed by law (with prompt notice to the disclosing party where lawful).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">6. Warranties & SLAs</h2>
            <p>We warrant that services will be performed in a professional and workmanlike manner consistent with industry standards. Production SLAs (uptime, latency, incident response) are defined per engagement and backed by service credits where contracted.</p>
            <p>Except as expressly stated in the SOW, we disclaim all other warranties, express or implied, including merchantability and fitness for a particular purpose. We are not liable for indirect, consequential, or punitive damages; aggregate liability is capped at fees paid in the 12 months preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">7. Termination, Governing Law & Contact</h2>
            <p>On termination, we hand over all client materials in standard formats (source repos, build artifacts, documentation, IaC). Outstanding fees remain due. Sections 4 (IP), 5 (Confidentiality), and 7 (this section) survive termination.</p>
            <p>These terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of courts in {NAP.city}, {NAP.region}. We attempt to resolve disputes amicably through direct discussion before any formal proceedings.</p>
            <p>For questions about these terms:</p>
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
