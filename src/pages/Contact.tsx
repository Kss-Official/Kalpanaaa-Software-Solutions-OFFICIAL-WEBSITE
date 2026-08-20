import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  Loader2,
  ArrowRight,
} from "lucide-react";
import { SEO } from "../components/SEO";
import { SERVICES, NAP } from "../data/site";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Kalpanaaa Software Solutions",
    description:
      "Submit a project proposal request. Free 30-min discovery call. Response within 24 business hours.",
    mainEntity: {
      "@type": "Organization",
      name: NAP.name,
      email: NAP.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: NAP.city,
        addressRegion: NAP.region,
        addressCountry: NAP.country,
      },
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is your engagement process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "30-minute discovery call → 1-page technical proposal → fixed-price or dedicated-pod contract → Sprint Zero (CI/CD, staging env, foundation) → iterative delivery with weekly demos → zero-risk handover with full IP transfer.",
        },
      },
      {
        "@type": "Question",
        name: "What is the response SLA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All proposal requests receive an initial response within 24 business hours. Active engagements include a critical-incident response commitment documented in the engagement contract.",
        },
      },
      {
        "@type": "Question",
        name: "How is pricing structured?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Two options are available: (1) fixed-price milestone contracts for well-scoped v1 builds, and (2) a Dedicated Engineering Pod starting at INR 10,000/month for ongoing modernization work. Every project is custom-quoted against scope.",
        },
      },
    ],
  };

  const buildMailtoLink = (form: HTMLFormElement) => {
    const name =
      (form.querySelector("#name") as HTMLInputElement)?.value || "";

    const email =
      (form.querySelector("#email") as HTMLInputElement)?.value || "";

    const type =
      (form.querySelector("#type") as HTMLSelectElement)?.value || "";

    const message =
      (form.querySelector("#message") as HTMLTextAreaElement)?.value || "";

    const subject = encodeURIComponent(
      `Project Proposal: ${type} — from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject Type: ${type}\n\nProject Details:\n${message}\n\n---\nSent via kalpanaaasoftwaresolutions.in`
    );

    return `mailto:${NAP.email}?subject=${subject}&body=${body}`;
  };

  const buildWhatsAppLink = (form: HTMLFormElement) => {
    const name =
      (form.querySelector("#name") as HTMLInputElement)?.value || "";

    const email =
      (form.querySelector("#email") as HTMLInputElement)?.value || "";

    const type =
      (form.querySelector("#type") as HTMLSelectElement)?.value || "";

    const message =
      (form.querySelector("#message") as HTMLTextAreaElement)?.value || "";

    const text = encodeURIComponent(
      `*New Project Proposal — Kalpanaaa Software Solutions*\n\n*Name:* ${name}\n*Email:* ${email}\n*Project Type:* ${type}\n\n*Details:*\n${message}`
    );

    return `https://wa.me/${NAP.whatsapp}?text=${text}`;
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitting(true);

    const form = e.currentTarget;

    const action = (
      e.nativeEvent as SubmitEvent
    ).submitter?.getAttribute("value");

    if (action === "whatsapp") {
      const waLink = buildWhatsAppLink(form);

      window.open(
        waLink,
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      const mailtoLink = buildMailtoLink(form);

      window.location.href = mailtoLink;
    }

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="site-page">

      {/* =========================================================
          SEO
      ========================================================= */}

      <SEO
        title="Contact Us — Kalpanaaa Software Solutions (kalpanaaasoftwaresolutions.in)"
        description="Contact Kalpanaaa Software Solutions (kalpanaaasoftwaresolutions.in). Submit a project proposal or book a free 30-minute discovery call."
        canonical="https://kalpanaaasoftwaresolutions.in/contact"
        jsonLd={[contactPageJsonLd, faqJsonLd]}
      />



      {/* =========================================================
          CONTACT SECTION
      ========================================================= */}

      <section className="h-screen overflow-hidden">

        <div
          className="
            mx-auto
            flex
            h-full
            max-w-7xl
            flex-col
            justify-center
            px-6
            py-4
            md:px-8
            md:py-4
            lg:px-12
            lg:py-2
          "
        >

          <div
            className="
              grid
              items-start
              gap-8
              lg:grid-cols-[0.9fr_1.1fr]
              lg:gap-12
          "
          >


            {/* =====================================================
                LEFT SIDE
            ===================================================== */}

            <div>

              {/* Heading */}

              <div className="max-w-xl">

                <p className="eyebrow justify-center text-sm font-semibold text-brand tracking-widest before:w-16 after:h-px after:w-16 after:bg-current after:opacity-70">
                  Get in touch
                </p>

                <h1
                  className="
                    mt-3
                    font-display
                    text-4xl
                    font-extrabold
                    leading-[1.05]
                    tracking-tight
                    text-ink
                    sm:text-5xl
                    md:text-[58px]
                  "
                >
                  Let&apos;s build something{" "}
                  <span className="text-brand">
                    great.
                  </span>
                </h1>

                <p
                  className="
                    mt-3
                    max-w-xl
                    text-base
                    leading-relaxed
                    text-muted
                    md:text-lg
                  "
                >
                  Share your requirements. We will prepare a
                  bespoke technical proposal tailored to your
                  enterprise goals.
                </p>

              </div>



              {/* =================================================
    DIRECT INQUIRIES
================================================= */}

<div className="mt-4">

  <div
    className="
      relative
      max-w-[400px]
      overflow-hidden
      rounded-2xl
      border
      border-brand/25
      bg-[radial-gradient(circle_at_100%_0%,rgba(23,105,213,.18),transparent_55%),linear-gradient(135deg,#eef6ff,#f8fbff)]
      p-3
    "
  >

    {/* Subtle decorative glow */}

    <div
      className="
        pointer-events-none
        absolute
        -right-10
        -top-10
        h-28
        w-28
        rounded-full
        bg-brand/10
        blur-2xl
      "
    />

    {/* Content */}

    <div className="relative">

      {/* Heading */}

      <p
        className="
          mb-2
          text-xs
          font-bold
          uppercase
          tracking-[0.22em]
          text-ink
        "
      >
        Direct inquiries
      </p>


      {/* Email */}

      <a
        href={`mailto:${NAP.email}`}
        className="
          flex
          items-center
          gap-2.5
          transition-colors
          duration-200
          hover:text-brand
        "
      >

        <span
          className="
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-white
            text-brand
            shadow-[0_8px_20px_-12px_rgba(23,105,213,.6)]
          "
        >
          <Mail size={16} />
        </span>

        <span className="min-w-0">

          <span className="block text-xs font-semibold text-muted">
            Email
          </span>

          <span
            className="
              block
              break-all
              text-sm
              font-semibold
              text-ink
            "
          >
            {NAP.email}
          </span>

        </span>

      </a>


      {/* Divider */}

      <div className="my-2 border-t border-brand/10" />


      {/* Phone */}

      <a
        href={`https://wa.me/${NAP.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex
          items-center
          gap-2.5
          transition-colors
          duration-200
          hover:text-brand
        "
      >

        <span
          className="
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-white
            text-brand
            shadow-[0_8px_20px_-12px_rgba(23,105,213,.6)]
          "
        >
          <Phone size={16} />
        </span>

        <span>

          <span className="block text-xs font-semibold text-muted">
            Phone
          </span>

          <span className="block text-sm font-semibold text-ink">
            +91 {NAP.whatsapp}
          </span>

        </span>

      </a>

    </div>

  </div>

</div>



              {/* =================================================
                  WHAT HAPPENS NEXT
              ================================================= */}

              <div className="mt-5">

                <h3
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-ink
                  "
                >
                  What happens next
                </h3>


                <ol className="mt-3 space-y-2">

                  <li className="flex items-center gap-3">

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-brand/10
                        font-mono
                        text-xs
                        font-bold
                        text-brand
                      "
                    >
                      01
                    </span>

                    <span className="text-sm text-muted">
                      We acknowledge within 24h.
                    </span>

                  </li>


                  <li className="flex items-center gap-3">

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-brand/10
                        font-mono
                        text-xs
                        font-bold
                        text-brand
                      "
                    >
                      02
                    </span>

                    <span className="text-sm text-muted">
                      30-minute discovery call.
                    </span>

                  </li>


                  <li className="flex items-center gap-3">

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-brand/10
                        font-mono
                        text-xs
                        font-bold
                        text-brand
                      "
                    >
                      03
                    </span>

                    <span className="text-sm text-muted">
                      1-page technical proposal.
                    </span>

                  </li>


                  <li className="flex items-center gap-3">

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-brand/10
                        font-mono
                        text-xs
                        font-bold
                        text-brand
                      "
                    >
                      04
                    </span>

                    <span className="text-sm text-muted">
                      Contract → Sprint Zero.
                    </span>

                  </li>

                </ol>

              </div>

            </div>



            {/* =====================================================
                RIGHT SIDE — PROJECT FORM
            ===================================================== */}

            <div>

              <AnimatePresence mode="wait">

                {submitted ? (

                  /* =================================================
                     SUCCESS STATE
                  ================================================= */

                  <motion.div
                    key="success"
                    initial={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="
                      rounded-[26px]
                      border
                      border-line
                      bg-white
                      p-8
                      shadow-[0_20px_55px_rgba(15,23,42,0.08)]
                    "
                  >

                    <div className="text-center">

                      <div
                        className="
                          mx-auto
                          mb-4
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-full
                          bg-emerald-500/10
                          text-emerald-600
                        "
                      >
                        <CheckCircle2 size={32} />
                      </div>

                      <h3
                        className="
                          font-display
                          text-2xl
                          font-bold
                          text-ink
                        "
                      >
                        Proposal ready!
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                        Your request has been initiated. We have
                        opened your preferred contact app. If it
                        didn&apos;t open, please reach us directly
                        at{" "}
                        <span className="font-mono text-brand">
                          {NAP.email}
                        </span>
                        .
                      </p>

                    </div>

                  </motion.div>

                ) : (

                  /* =================================================
                     FORM
                  ================================================= */

                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleFormSubmit}
                    className="
                      rounded-[26px]
                      border
                      border-line
                      bg-white
                      p-6
                      shadow-[0_20px_55px_rgba(15,23,42,0.08)]
                      sm:p-7
                    "
                  >

                    {/* Form heading */}

                    <div>

                      <h2
                        className="
                          font-display
                          text-2xl
                          font-extrabold
                          text-ink
                          md:text-3xl
                        "
                      >
                        Tell Us About Your Project
                      </h2>

                      <p className="mt-1 text-sm text-muted">
                        All inquiries are confidential. Required
                        fields marked with{" "}
                        <span className="text-brand">*</span>.
                      </p>

                    </div>



                    {/* =================================================
                        FORM FIELDS
                    ================================================= */}

                    <div className="mt-5 space-y-3">


                      {/* Full name + Email */}

                      <div className="grid gap-3 sm:grid-cols-2">

                        <div>

                          <label
                            htmlFor="name"
                            className="
                              mb-1.5
                              block
                              text-[11px]
                              font-bold
                              uppercase
                              tracking-[0.18em]
                              text-ink
                            "
                          >
                            Full name{" "}
                            <span className="text-brand">*</span>
                          </label>

                          <input
                            id="name"
                            type="text"
                            required
                            placeholder="e.g. Gaurav Tripathi"
                            className="
                              h-11
                              w-full
                              rounded-xl
                              border
                              border-line
                              bg-white
                              px-4
                              text-sm
                              text-ink
                              placeholder:text-muted
                              focus:border-brand
                              focus:outline-none
                              focus:ring-1
                              focus:ring-brand
                              transition-all
                            "
                          />

                        </div>


                        <div>

                          <label
                            htmlFor="email"
                            className="
                              mb-1.5
                              block
                              text-[11px]
                              font-bold
                              uppercase
                              tracking-[0.18em]
                              text-ink
                            "
                          >
                            Email address{" "}
                            <span className="text-brand">*</span>
                          </label>

                          <input
                            id="email"
                            type="email"
                            required
                            placeholder="you@company.com"
                            className="
                              h-11
                              w-full
                              rounded-xl
                              border
                              border-line
                              bg-white
                              px-4
                              text-sm
                              text-ink
                              placeholder:text-muted
                              focus:border-brand
                              focus:outline-none
                              focus:ring-1
                              focus:ring-brand
                              transition-all
                            "
                          />

                        </div>

                      </div>



                      {/* Project Type */}

                      <div>

                        <label
                          htmlFor="type"
                          className="
                            mb-1.5
                            block
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-ink
                          "
                        >
                          Project type{" "}
                          <span className="text-brand">*</span>
                        </label>

                        <select
                          id="type"
                          required
                          className="
                            h-11
                            w-full
                            rounded-xl
                            border
                            border-line
                            bg-white
                            px-4
                            text-sm
                            text-ink
                            focus:border-brand
                            focus:outline-none
                            focus:ring-1
                            focus:ring-brand
                            transition-all
                          "
                        >
                          {SERVICES.map((service) => (
                            <option
                              key={service.slug}
                              value={service.slug}
                            >
                              {service.title}
                            </option>
                          ))}
                        </select>

                      </div>



                      {/* Project Details */}

                      <div>

                        <label
                          htmlFor="message"
                          className="
                            mb-1.5
                            block
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-ink
                          "
                        >
                          Project details{" "}
                          <span className="text-brand">*</span>
                        </label>

                        <textarea
                          id="message"
                          required
                          rows={4}
                          placeholder="Goals, requirements, timeline, constraints..."
                          className="
                            min-h-[100px]
                            w-full
                            resize-y
                            rounded-xl
                            border
                            border-line
                            bg-white
                            px-4
                            py-3
                            text-sm
                            leading-relaxed
                            text-ink
                            placeholder:text-muted
                            focus:border-brand
                            focus:outline-none
                            focus:ring-1
                            focus:ring-brand
                            transition-all
                          "
                        />

                      </div>

                    </div>



                    {/* =================================================
                        INFORMATION
                    ================================================= */}

                    <p className="mt-4 text-xs leading-relaxed text-muted">
                      Choose your preferred method to send your
                      proposal request. Your email client or WhatsApp
                      will open with the details pre-filled.
                    </p>



                    {/* =================================================
                        BUTTONS
                    ================================================= */}

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">

                      {/* WhatsApp */}

                      <button
                        type="submit"
                        name="action"
                        value="whatsapp"
                        disabled={submitting}
                        className="
                          flex
                          h-12
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          bg-brand
                          px-5
                          text-xs
                          font-bold
                          uppercase
                          tracking-widest
                          text-white
                          shadow-[0_16px_30px_-18px_rgba(23,105,213,.8)]
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:bg-brand-deep
                          disabled:opacity-70
                          sm:text-sm
                        "
                      >

                        {submitting ? (
                          <Loader2
                            size={17}
                            className="animate-spin"
                          />
                        ) : (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="17"
                              height="17"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>

                            Send via WhatsApp
                          </>
                        )}

                      </button>



                      {/* Email */}

                      <button
                        type="submit"
                        name="action"
                        value="email"
                        disabled={submitting}
                        className="
                          flex
                          h-12
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          border
                          border-brand
                          bg-white
                          px-5
                          text-xs
                          font-bold
                          uppercase
                          tracking-widest
                          text-brand
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:bg-brand
                          hover:text-white
                          disabled:opacity-70
                          sm:text-sm
                        "
                      >

                        {submitting ? (
                          <Loader2
                            size={17}
                            className="animate-spin"
                          />
                        ) : (
                          <>
                            <Mail size={17} />

                            Send via Email
                          </>
                        )}

                      </button>

                    </div>

                  </motion.form>

                )}

              </AnimatePresence>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}