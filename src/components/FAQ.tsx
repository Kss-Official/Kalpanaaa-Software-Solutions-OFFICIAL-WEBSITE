import { useState } from "react";
import {
  ChevronDown,
  CircleHelp,
  MessageCircleQuestion,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

const FAQS = [
  {
    question: "What services does Kalpanaaa Software Solutions provide?",
    answer:
      "We provide custom software development, website development, mobile solutions, UI/UX design, SEO, AI Automation, RAG Models, and digital solutions tailored to business needs.",
  },
  {
    question:
      "Can you build a website or software according to my business requirements?",
    answer:
      "Yes. We build customized websites and software solutions based on your business requirements, goals, users, workflows, and technical needs.",
  },
  {
    question: "How much does it cost to develop a website or software?",
    answer:
      "The cost depends on the project's scope, features, design requirements, technology stack, integrations, and overall complexity. Contact us with your requirements and we can discuss the project in detail.",
  },
  {
    question:
      "How long does it take to develop a website or software application?",
    answer:
      "Development time depends on the size and complexity of the project. After understanding your requirements, we can provide a suitable development timeline.",
  },
  {
    question:
      "Do you provide website maintenance and technical support?",
    answer:
      "Yes. We provide ongoing maintenance and technical support to help keep your website or software secure, reliable, updated, and performing properly.",
  },
  {
    question:
      "Can you redesign or improve an existing website or application?",
    answer:
      "Yes. We can redesign existing websites and applications, improve their user experience, modernize the interface, optimize performance, and add new functionality.",
  },
  {
    question: "Do you provide SEO and website performance optimization?",
    answer:
      "Yes. We provide SEO and performance optimization services to improve website visibility, speed, usability, and overall performance.",
  },
  {
    question: "How can I get started with my project?",
    answer:
      "Simply contact us and share your project requirements, goals, and timeline. Our team will discuss your requirements and guide you through the next steps.",
  },
];

export default function FAQ() {
  // First FAQ is open by default
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        py-14
        md:py-20
        bg-[rgba(247,249,252,1)]
      "
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8">

        {/* =====================================================
            TOP HEADING
        ===================================================== */}

        <div className="text-center max-w-4xl mx-auto">

          {/* Got Questions pill */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              bg-[#eeeaff]
              text-brand
              text-sm
              font-medium
            "
          >
            <CircleHelp size={17} strokeWidth={2} />

            <span>Got Questions?</span>
          </div>


          {/* Main heading */}
          <h2
            className="
              mt-7
              font-display
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-extrabold
              leading-[1.05]
              tracking-tight
              text-ink
            "
          >
            Frequently Asked{" "}
            <span className="text-brand">
              Questions
            </span>
          </h2>


          {/* Description */}
          <p
            className="
              mt-5
              text-base
              sm:text-lg
              md:text-xl
              leading-relaxed
              text-muted
            "
          >
            Find quick answers to the most common questions about our
            services.
          </p>

        </div>



        {/* =====================================================
            FAQ ACCORDION BOX
        ===================================================== */}

        <div
          className="
            mt-8
            md:mt-10
            rounded-xl
            bg-white
            border
            border-[#d9dde3]
            shadow-[0_2px_8px_rgba(15,23,42,0.10)]
            px-6
            md:px-7
            lg:px-8
          "
        >

          {FAQS.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`
                  border-b
                  border-[#e3e5e8]
                  last:border-b-0
                  ${isOpen ? "pb-5" : ""}
                `}
              >

                {/* =================================================
                    QUESTION
                ================================================= */}

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    group
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-6
                    py-5
                    md:py-[19px]
                    text-left
                  "
                >

                  <span
                    className="
                      text-base
                      md:text-lg
                      font-medium
                      text-ink
                      leading-relaxed
                    "
                  >
                    {faq.question}
                  </span>


                  {/* Chevron */}
                  <span
                    className={`
                      flex
                      shrink-0
                      items-center
                      justify-center
                      transition-transform
                      duration-300
                      text-[#444]
                      ${
                        isOpen
                          ? "rotate-180"
                          : "rotate-0"
                      }
                    `}
                  >
                    <ChevronDown
                      size={20}
                      strokeWidth={2}
                    />
                  </span>

                </button>



                {/* =================================================
                    ANSWER
                ================================================= */}

                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >

                  <div className="overflow-hidden">

                    <p
                      className="
                        pr-8
                        pb-1
                        text-base
                        md:text-lg
                        leading-relaxed
                        text-[#555b65]
                      "
                    >
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>



        {/* =====================================================
            BOTTOM CONTACT CTA
        ===================================================== */}

        <div className="flex justify-center mt-10 md:mt-11">

          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              gap-5
              sm:gap-7
              rounded-full
              bg-white
              border
              border-[#e5e8ec]
              shadow-[0_4px_15px_rgba(15,23,42,0.06)]
              px-5
              py-4
              sm:px-6
              sm:py-3
            "
          >

            {/* Question icon */}
            <div className="flex items-center gap-3">

              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#f1efff]
                  flex
                  items-center
                  justify-center
                  text-brand
                "
              >
                <MessageCircleQuestion
                  size={21}
                  strokeWidth={2}
                />
              </div>


              <div>

                <p
                  className="
                    text-sm
                    md:text-base
                    font-bold
                    text-ink
                  "
                >
                  Still have questions?
                </p>

                <p
                  className="
                    text-xs
                    md:text-sm
                    text-muted
                  "
                >
                  We're here to help you!
                </p>

              </div>

            </div>


            {/* Vertical divider */}
            <div
              className="
                hidden
                sm:block
                h-10
                w-px
                bg-[#e1e4e8]
              "
            />


            {/* Contact button */}
            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                min-w-[180px]
                px-6
                py-3
                rounded-lg
                bg-brand
                text-white
                text-base
                font-medium
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-md
              "
            >
              <Send
                size={17}
                strokeWidth={2}
              />

              Contact Us
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}