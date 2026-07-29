import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Clock, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { SEO } from "../components/SEO";
import { SectionHeading } from "../components/SectionHeading";
import { SERVICES, NAP } from "../data/site";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const contactPageJsonLd = { "@context": "https://schema.org", "@type": "ContactPage", name: "Contact Kalpanaaa Software Solutions", description: "Submit a project proposal request. Free 30-min discovery call. Response within 24 business hours.", mainEntity: { "@type": "Organization", name: NAP.name, email: NAP.email, address: { "@type": "PostalAddress", addressLocality: NAP.city, addressRegion: NAP.region, addressCountry: NAP.country } } };
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "What is your engagement process?", acceptedAnswer: { "@type": "Answer", text: "30-minute discovery call → 1-page technical proposal → fixed-price or dedicated-pod contract → Sprint Zero (CI/CD, staging env, foundation) → iterative delivery with weekly demos → zero-risk handover with full IP transfer." } },
    { "@type": "Question", name: "What is the response SLA?", acceptedAnswer: { "@type": "Answer", text: "All proposal requests receive an initial response within 24 business hours. Active engagements include a critical-incident response commitment documented in the engagement contract." } },
    { "@type": "Question", name: "How is pricing structured?", acceptedAnswer: { "@type": "Answer", text: "Two options are available: (1) fixed-price milestone contracts for well-scoped v1 builds, and (2) a Dedicated Engineering Pod starting at INR 10,000/month for ongoing modernization work. Every project is custom-quoted against scope." } },
  ]};

  const buildMailtoLink = (form: HTMLFormElement) => {
    const name = (form.querySelector("#name") as HTMLInputElement)?.value || "";
    const email = (form.querySelector("#email") as HTMLInputElement)?.value || "";
    const type = (form.querySelector("#type") as HTMLSelectElement)?.value || "";
    const message = (form.querySelector("#message") as HTMLTextAreaElement)?.value || "";
    const subject = encodeURIComponent(`Project Proposal: ${type} — from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject Type: ${type}\n\nProject Details:\n${message}\n\n---\nSent via kalpanaaasoftwaresolutions.com`
    );
    return `mailto:${NAP.email}?subject=${subject}&body=${body}`;
  };

  const buildWhatsAppLink = (form: HTMLFormElement) => {
    const name = (form.querySelector("#name") as HTMLInputElement)?.value || "";
    const email = (form.querySelector("#email") as HTMLInputElement)?.value || "";
    const type = (form.querySelector("#type") as HTMLSelectElement)?.value || "";
    const message = (form.querySelector("#message") as HTMLTextAreaElement)?.value || "";
    const text = encodeURIComponent(
      `*New Project Proposal — Kalpana Software Solutions*\n\n*Name:* ${name}\n*Email:* ${email}\n*Project Type:* ${type}\n\n*Details:*\n${message}`
    );
    return `https://wa.me/${NAP.whatsapp}?text=${text}`;
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const action = (e.nativeEvent as SubmitEvent).submitter?.getAttribute("value");
    
    if (action === "whatsapp") {
      const waLink = buildWhatsAppLink(form);
      window.open(waLink, "_blank", "noopener,noreferrer");
    } else {
      const mailtoLink = buildMailtoLink(form);
      window.location.href = mailtoLink;
    }

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return <div className="site-page"><SEO title="Contact Us — Kalpana Software Solutions (kalpanaaasoftwaresolutions.com)" description="Contact Kalpana Software Solutions (kalpanaaasoftwaresolutions.com). Submit a project proposal or book a free 30-minute discovery call." canonical="https://kalpanaaasoftwaresolutions.com/contact" jsonLd={[contactPageJsonLd, faqJsonLd]} />
    <section className="border-b border-line/70"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24"><SectionHeading as="h1" eyebrow="Get in touch" title="Let's build something great." description="Share your requirements. We will prepare a bespoke technical proposal tailored to your enterprise goals."/></div></section>
    <section className="py-16 md:py-20"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-5 space-y-5">
        <div className="site-card rounded-2xl p-6"><h3 className="text-sm font-bold uppercase tracking-widest text-ink mb-4">Direct inquiries</h3><div className="space-y-3 text-sm"><a href={`mailto:${NAP.email}`} className="flex items-center gap-3 text-muted hover:text-brand transition-colors"><Mail size={16} className="text-brand"/><span>{NAP.email}</span></a><a href={`https://wa.me/${NAP.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted hover:text-brand transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-brand flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg><span>+91 {NAP.whatsapp} (WhatsApp)</span></a><div className="flex items-center gap-3 text-muted"><Clock size={16} className="text-brand"/><span>Response SLA: under 24 business hours</span></div><div className="flex items-start gap-3 text-muted"><MapPin size={16} className="text-brand mt-0.5 flex-shrink-0"/><span>{NAP.addressLine}</span></div></div></div>
        <div className="site-card rounded-2xl p-6"><h3 className="text-sm font-bold uppercase tracking-widest text-ink mb-4">What happens next</h3><ol className="space-y-3 text-sm text-muted"><li className="flex gap-3"><span className="font-mono text-brand">01</span>We acknowledge within 24h.</li><li className="flex gap-3"><span className="font-mono text-brand">02</span>30-minute discovery call.</li><li className="flex gap-3"><span className="font-mono text-brand">03</span>1-page technical proposal.</li><li className="flex gap-3"><span className="font-mono text-brand">04</span>Contract → Sprint Zero.</li></ol></div>
      </div>
      <div className="lg:col-span-7"><AnimatePresence mode="wait">{submitted ? <motion.div key="success" initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} className="site-card rounded-2xl p-10 text-center border-brand/40"><div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-600 mb-5"><CheckCircle2 size={32}/></div><h3 className="font-display text-2xl font-bold text-ink">Proposal ready!</h3><p className="mt-2 text-muted">Your request has been initiated. We have opened your preferred contact app. If it didn't open, please reach us directly at <span className="text-brand font-mono">{NAP.email}</span>.</p></motion.div>
      : <motion.form key="form" initial={{opacity:0}} animate={{opacity:1}} onSubmit={handleFormSubmit} className="site-card rounded-2xl p-8 space-y-5">
        <div className="grid sm:grid-cols-2 gap-5"><div><label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-muted mb-2">Full name</label><input id="name" type="text" required placeholder="e.g. Gaurav Tripathi" className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"/></div><div><label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-muted mb-2">Email address</label><input id="email" type="email" required placeholder="you@company.com" className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"/></div></div>
        <div><label htmlFor="type" className="block text-xs font-semibold uppercase tracking-widest text-muted mb-2">Project type</label><select id="type" className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all">{SERVICES.map((service)=><option key={service.slug} value={service.slug}>{service.title}</option>)}</select></div>
        <div><label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-muted mb-2">Project details</label><textarea id="message" required rows={5} placeholder="Goals, requirements, timeline, constraints..." className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all resize-y"/></div>
        <p className="text-xs text-muted">Choose your preferred method to send your proposal request. Your email client or WhatsApp will open with the details pre-filled.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <button type="submit" name="action" value="whatsapp" disabled={submitting} className="button-primary flex items-center justify-center px-7 py-4 text-sm font-bold uppercase tracking-widest gap-2 disabled:opacity-70">
            {submitting ? <Loader2 size={16} className="animate-spin"/> : <><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> Send via WhatsApp</>}
          </button>
          <button type="submit" name="action" value="email" disabled={submitting} className="button-primary flex items-center justify-center px-7 py-4 text-sm font-bold uppercase tracking-widest gap-2 disabled:opacity-70">
            {submitting ? <Loader2 size={16} className="animate-spin"/> : <><Mail size={16} /> Send via Email</>}
          </button>
        </div>
      </motion.form>}</AnimatePresence></div>
    </div></section>
  </div>;
}
