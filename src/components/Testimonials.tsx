import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "I wanted to redesign and revamp the website of my institution. I contacted the team and they understood our requirements and delivered exactly what we needed.",
    name: "Teaching Coordinator",
    company: "Leading Educational Institution in Bangalore",
  },
  {
    quote:
      "Nextwebi, without a doubt they have what it takes to make a great web application, not to mention the professionalism and quality of their work.",
    name: "Team Lead",
    company: "Renowned R & D Firm",
  },
  {
    quote:
      "The team was professional, responsive and technically strong throughout the entire development process. They delivered a reliable and modern solution for our business.",
    name: "Business Owner",
    company: "Growing Technology Company",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === TESTIMONIALS.length - 1 ? 0 : current + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-16 md:py-20">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      {/* White background */}
      <div className="absolute inset-0 bg-white" />

      {/* Blue diagonal background */}
      <div
        className="
          hidden
          lg:block
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          background: "#1C8FC6",
          clipPath: "polygon(65% 0%, 100% 0%, 100% 100%, 31% 100%)",
        }}
      />


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-6
          md:px-8
          lg:px-12
        "
      >

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.9fr_1.5fr]
            gap-10
            lg:gap-14
            items-center
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="max-w-xl">

            <p className="eyebrow mb-5 text-sm font-semibold text-brand tracking-widest before:w-14 after:h-px after:w-14 after:bg-current after:opacity-70">
              Testimonials
            </p>

            <h2
              className="
                font-display
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-[64px]
                font-extrabold
                leading-[1.08]
                tracking-tight
                text-ink
              "
            >
              What Our Amazing
              <br />

              Clients
              <br />

              <span className="text-brand">
                Say About Us
              </span>
            </h2>


            <p
              className="
                mt-7
                max-w-lg
                text-base
                md:text-lg
                leading-relaxed
                text-muted
              "
            >
              Leading start-ups, SMEs and large-scale
              organizations have trusted us for their software
              development project requirements.
            </p>

          </div>



          {/* =================================================
              RIGHT SIDE — TESTIMONIAL CARDS
          ================================================= */}

          <div className="min-w-0">

            {/* Desktop slider */}
            <div className="hidden md:block overflow-hidden">

              <div
                className="
                  flex
                  gap-5
                  transition-transform
                  duration-700
                  ease-in-out
                "
                style={{
                  transform: `translateX(-${activeIndex * 50}%)`,
                }}
              >

                {TESTIMONIALS.map((testimonial, index) => (

                  <div
                    key={index}
                    className="
                      flex-none
                      w-[calc(50%-10px)]
                      min-h-[360px]
                      rounded-xl
                      bg-white
                      border
                      border-[#D9E2E8]
                      p-7
                      shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_14px_35px_rgba(0,0,0,0.12)]
                    "
                  >

                    {/* Quote */}
                    <div
                      className="
                        text-[#E44732]
                        leading-none
                      "
                    >
                      <Quote
                        size={36}
                        strokeWidth={3}
                        fill="currentColor"
                      />
                    </div>


                    {/* Testimonial text */}
                    <p
                      className="
                        mt-5
                        text-base
                        md:text-[17px]
                        leading-[1.55]
                        text-[#555]
                      "
                    >
                      {testimonial.quote}
                    </p>


                    {/* Read More */}
                    <button
                      type="button"
                      className="
                        mt-5
                        text-[#E44732]
                        text-sm
                        font-bold
                        hover:underline
                      "
                    >
                      Read More
                    </button>


                    {/* Divider */}
                    <div className="mt-7 border-t border-[#E2E2E2]" />


                    {/* Client */}
                    <div className="mt-5">

                      <h3
                        className="
                          text-base
                          font-bold
                          text-ink
                        "
                      >
                        {testimonial.name}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-sm
                          leading-relaxed
                          text-muted
                        "
                      >
                        {testimonial.company}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>



            {/* =================================================
                MOBILE — ONE CARD
            ================================================= */}

            <div className="md:hidden">

              <div
                className="
                  min-h-[350px]
                  rounded-xl
                  bg-white
                  border
                  border-[#D9E2E8]
                  p-6
                  shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                "
              >

                <div className="text-[#E44732]">
                  <Quote
                    size={34}
                    strokeWidth={3}
                    fill="currentColor"
                  />
                </div>


                <p
                  className="
                    mt-5
                    text-base
                    leading-[1.55]
                    text-[#555]
                  "
                >
                  {TESTIMONIALS[activeIndex].quote}
                </p>


                <button
                  type="button"
                  className="
                    mt-5
                    text-[#E44732]
                    text-sm
                    font-bold
                    hover:underline
                  "
                >
                  Read More
                </button>


                <div className="mt-7 border-t border-[#E2E2E2]" />


                <div className="mt-5">

                  <h3 className="text-base font-bold text-ink">
                    {TESTIMONIALS[activeIndex].name}
                  </h3>

                  <p className="mt-1 text-sm text-muted">
                    {TESTIMONIALS[activeIndex].company}
                  </p>

                </div>

              </div>

            </div>



            {/* =================================================
                SLIDER DOTS
            ================================================= */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-2
                mt-7
              "
            >

              {TESTIMONIALS.map((_, index) => (

                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`
                    h-2.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      activeIndex === index
                        ? "w-10 bg-brand lg:bg-white"
                        : "w-2.5 bg-brand/30 lg:bg-white/50"
                    }
                  `}
                />

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
