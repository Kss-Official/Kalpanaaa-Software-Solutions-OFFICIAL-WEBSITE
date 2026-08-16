import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const LEADERSHIP = [
  {
    id: 1,
    name: "Gaurav Kr Tripathi",
    role: "Founder, MD & CTO",
    image: "/cto-profile.png",
    accent: "orange",
    shortQuote:
      "Hi, I've been leading technology teams and building innovative solutions for years now...",
  },
  {
    id: 2,
    name: "Akshit Ujjain",
    role: "Co-Founder & CEO",
    image: "/Akshit Ujjain.png",
    accent: "purple",
    shortQuote:
      "Hi, we have been building, managing and growing innovative technology solutions together...",
  },
];

const CUSTOMER_REVIEWS = [
  {
    id: 1,
    name: "Ananya Deshmukh",
    role: "Founder & Director",
    location: "Mumbai, India",
    image: "/Priya_Portraits.png",
    quote:
      '"I must say, Kalpanaaa truly understands what its clients want. Their exceptional problem-solving skills, proactive methods and appealing front-end designs make them a trusted technology partner."',
  },

  {
    id: 2,
    name: "Rahul Verma",
    role: "Technology Director",
    location: "Bengaluru, India",
    image: "/Anmol_Portraits.png",
    quote:
      '"The team consistently delivers thoughtful engineering solutions with strong attention to quality, scalability and user experience. Their approach made the entire development process smooth and reliable."',
  },

  {
    id: 3,
    name: "Sneha Iyer",
    role: "Founder & CEO",
    location: "Hyderabad, India",
    image: "/Priya_Portraits.png",
    quote:
      '"Their ability to understand complex business requirements and turn them into reliable digital products has been exceptional. The team delivered a solution that exceeded our expectations."',
  },
];

export function Leadership() {
  const [activeIndex, setActiveIndex] = useState(0);

  const featured = CUSTOMER_REVIEWS[activeIndex];

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? CUSTOMER_REVIEWS.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === CUSTOMER_REVIEWS.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-20 md:py-20">

      {/* =========================================================
          SECTION HEADER
      ========================================================= */}

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">

        <div className="text-center max-w-4xl mx-auto">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-5">

            <p className="eyebrow text-sm font-semibold text-brand tracking-widest">
              Leadership
            </p>

          </div>


          {/* Heading */}
          <h2
            className="
              font-display
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-extrabold
              leading-tight
              text-ink
            "
          >
            Meet the people behind{" "}
            <span className="text-brand">
              our success
            </span>
          </h2>


          {/* Description */}
          <p
            className="
              mt-4
              text-base
              md:text-lg
              text-muted
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            Meet the experienced leaders who bring together technology,
            strategy and innovation to build meaningful digital solutions.
          </p>

        </div>



        {/* =========================================================
            LEADERSHIP CARDS
        ========================================================= */}

        <div
          className="
            mt-12
            md:mt-14
            grid
            grid-cols-1
            lg:grid-cols-[1.15fr_1.65fr]
            gap-6
            items-stretch
          "
        >

          {/* =======================================================
              LEFT SIDE — TWO SMALL OWNER CARDS
          ======================================================= */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">

            {/* ---------------------------------------------------
                SMALL CARD 1 — GAURAV
            --------------------------------------------------- */}

            <div
              className="
                group
                overflow-hidden
                rounded-[22px]
                border
                border-orange-100
                bg-white
                shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)]
              "
            >

              {/* Image area */}
              <div
                className="
                  relative
                  h-[205px]
                  overflow-hidden
                  bg-gradient-to-br
                  from-[#ff9468]
                  via-[#ff7043]
                  to-[#ff5722]
                "
              >

                {/* Decorative quote */}
                <div
                  className="
                    absolute
                    right-4
                    top-4
                    z-10
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#ff7043]
                    shadow-sm
                  "
                >
                  <Quote size={17} fill="currentColor" />
                </div>


                {/* Person image */}
                <img
                  src={LEADERSHIP[0].image}
                  alt={LEADERSHIP[0].name}
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-[190px]
                    w-[155px]
                    -translate-x-1/2
                    object-cover
                    object-top
                    transition-transform
                    duration-500
                    group-hover:scale-[1.03]
                  "
                />

              </div>


              {/* Content */}
              <div className="p-5 md:p-6">

                <div className="flex gap-3">

                  <div
                    className="
                      mt-1
                      h-[76px]
                      w-1
                      flex-shrink-0
                      rounded-full
                      bg-[#ff7043]
                    "
                  />

                  <p
                    className="
                      text-sm
                      leading-relaxed
                      text-ink
                    "
                  >
                    "{LEADERSHIP[0].shortQuote}"
                  </p>

                </div>


                {/* Person */}
                <div className="mt-10">

                  <h3
                    className="
                      text-base
                      font-extrabold
                      uppercase
                      text-ink
                    "
                  >
                    {LEADERSHIP[0].name}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-[#ff5722]
                    "
                  >
                    {LEADERSHIP[0].role}
                  </p>

                </div>

              </div>

            </div>



            {/* ---------------------------------------------------
                SMALL CARD 2 — AKSHIT
            --------------------------------------------------- */}

            <div
              className="
                group
                overflow-hidden
                rounded-[22px]
                border
                border-purple-100
                bg-white
                shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)]
              "
            >

              {/* Image area */}
              <div
                className="
                  relative
                  h-[205px]
                  overflow-hidden
                  bg-gradient-to-br
                  from-[#a78bfa]
                  via-[#8b5cf6]
                  to-[#7c3aed]
                "
              >

                {/* Quote */}
                <div
                  className="
                    absolute
                    right-4
                    top-4
                    z-10
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#7c3aed]
                    shadow-sm
                  "
                >
                  <Quote size={17} fill="currentColor" />
                </div>


                {/* Person image */}
                <img
                  src={LEADERSHIP[1].image}
                  alt={LEADERSHIP[1].name}
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-[190px]
                    w-[170px]
                    -translate-x-1/2
                    object-cover
                    object-top
                    transition-transform
                    duration-500
                    group-hover:scale-[1.03]
                  "
                />

              </div>


              {/* Content */}
              <div className="p-5 md:p-6">

                <div className="flex gap-3">

                  <div
                    className="
                      mt-1
                      h-[76px]
                      w-1
                      flex-shrink-0
                      rounded-full
                      bg-[#7c3aed]
                    "
                  />

                  <p
                    className="
                      text-sm
                      leading-relaxed
                      text-ink
                    "
                  >
                    "{LEADERSHIP[1].shortQuote}"
                  </p>

                </div>


                {/* Person */}
                <div className="mt-10">

                  <h3
                    className="
                      text-base
                      font-extrabold
                      uppercase
                      text-ink
                    "
                  >
                    {LEADERSHIP[1].name}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-[#7c3aed]
                    "
                  >
                    {LEADERSHIP[1].role}
                  </p>

                </div>

              </div>

            </div>

          </div>



          {/* =======================================================
              RIGHT SIDE — CUSTOMER REVIEW
          ======================================================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[22px]
              border
              border-line
              bg-white
              shadow-[0_8px_30px_rgba(15,23,42,0.06)]
            "
          >

            {/* Main quote area */}
            <div
              className="
                flex
                min-h-[390px]
                flex-col
                justify-between
                p-7
                md:p-9
                lg:p-10
              "
            >

              {/* Opening quote */}
              <div>

                <Quote
                  size={25}
                  className="text-[#ff7043]"
                  fill="currentColor"
                />

              </div>


              {/* Quote text */}
              <div className="flex-1 flex items-center">

                <div
                  className="
                    relative
                    my-8
                    pl-5
                    md:pl-6
                  "
                >

                  {/* Blue vertical line */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-[3px]
                      rounded-full
                      bg-brand
                    "
                  />

                  <p
                    className="
                      text-base
                      md:text-lg
                      leading-relaxed
                      text-ink
                    "
                  >
                    {featured.quote}
                  </p>

                </div>

              </div>


              {/* Closing quote */}
              <div className="flex justify-end">

                <Quote
                  size={25}
                  className="
                    rotate-180
                    text-[#ff7043]
                  "
                  fill="currentColor"
                />

              </div>


              {/* Divider */}
              <div className="mt-8 border-t border-line" />


              {/* Customer Profile */}
              <div
                className="
                  mt-7
                  flex
                  items-center
                  gap-4
                "
              >

                {/* Avatar */}
                <div
                  className="
                    h-12
                    w-12
                    flex-shrink-0
                    overflow-hidden
                    rounded-full
                    bg-brand
                  "
                >

                  <img
                    src={featured.image}
                    alt={featured.name}
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />

                </div>


                {/* Information */}
                <div>

                  <h3
                    className="
                      text-base
                      font-extrabold
                      text-ink
                    "
                  >
                    {featured.name}
                  </h3>

                  <p className="mt-1 text-sm text-muted">

                    {featured.role}

                    <span className="mx-1.5 text-brand">
                      •
                    </span>

                    {featured.location}

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>



        {/* =========================================================
            BOTTOM CONTROLS
        ========================================================= */}

        <div
          className="
            mt-6
            flex
            items-center
            justify-between
          "
        >

          {/* Dots */}
          <div className="flex items-center gap-2">

            {CUSTOMER_REVIEWS.map((item, index) => (

              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to customer review ${index + 1}`}
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    activeIndex === index
                      ? "w-9 bg-brand"
                      : "w-3 bg-slate-200 hover:bg-slate-300"
                  }
                `}
              />

            ))}

          </div>


          {/* Navigation buttons */}
          <div className="flex items-center gap-3">

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous customer review"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-line
                bg-white
                text-ink
                shadow-sm
                transition-all
                duration-200
                hover:border-brand
                hover:text-brand
                hover:shadow-md
              "
            >
              <ChevronLeft size={18} />
            </button>


            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next customer review"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-brand
                bg-white
                text-brand
                shadow-sm
                transition-all
                duration-200
                hover:bg-brand
                hover:text-white
                hover:shadow-md
              "
            >
              <ChevronRight size={18} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}