import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { NAP } from "../data/site";

export default function StartConversationSection() {
  return (
    <section className="pt-20 pb-8 md:pt-28 md:pb-10">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">

        <div
          className="
            rounded-3xl
            border
            border-line
            bg-[radial-gradient(circle_at_88%_10%,rgba(77,145,243,.24),transparent_30%),linear-gradient(135deg,#eef6ff,#fff)]
            p-10
            md:p-16
            text-center
          "
        >

          {/* Eyebrow */}
          <p className="eyebrow justify-center">
            Start a conversation
          </p>

          {/* Heading */}
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold text-ink">
            Let’s build something great.
          </h2>

          {/* Description */}
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Share your requirements and we will prepare a bespoke technical
            proposal tailored to your enterprise goals.
          </p>

          {/* Email */}
          <p className="mt-6 text-sm text-muted">
            Inquiries:{" "}
            <a
              href={`mailto:${NAP.email}`}
              className="text-brand font-semibold hover:underline"
            >
              {NAP.email}
            </a>
          </p>

          {/* CTA */}
          <Link
            to="/contact"
            className="
              button-primary
              mt-8
              px-7
              py-4
              text-sm
              font-bold
              uppercase
              tracking-widest
            "
          >
            Submit proposal request
            <ArrowRight size={16} />
          </Link>

        </div>

      </div>
    </section>
  );
}



// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Check,
//   FileText,
//   Mail,
//   MessageSquareText,
//   Rocket,
//   Send,
// } from "lucide-react";
// import { NAP } from "../data/site";

// /* =========================================================
//    PAPER PLANE
// ========================================================= */

// function PaperPlane({ className = "" }: { className?: string }) {
//   return (
//     <svg
//       className={className}
//       viewBox="0 0 120 92"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       aria-hidden="true"
//     >
//       <path d="M10 34L110 4L78 88L55 58L10 34Z" fill="#075ee8" />
//       <path d="M55 58L110 4L70 65L78 88L55 58Z" fill="#3384ff" />
//       <path d="M10 34L55 58L110 4L42 68L10 34Z" fill="#1f78f2" />
//       <path d="M42 68L55 58L70 65L42 68Z" fill="#0f4fa8" />
//     </svg>
//   );
// }

// /* =========================================================
//    RIGHT SIDE ILLUSTRATION
// ========================================================= */

// function EnvelopeIllustration() {
//   return (
//     <div
//       className="
//         relative
//         mx-auto
//         h-[500px]
//         w-full
//         max-w-[620px]
//         sm:h-[530px]
//         lg:h-[560px]
//       "
//     >
//       {/* =====================================================
//           LARGE SOFT BLUE CIRCLE
//       ===================================================== */}

//       <div
//         className="
//           absolute
//           right-[8%]
//           top-0
//           h-[350px]
//           w-[350px]
//           rounded-full
//           bg-[#eaf3ff]
//           sm:h-[400px]
//           sm:w-[400px]
//           lg:right-[10%]
//           lg:h-[430px]
//           lg:w-[430px]
//         "
//       />

//       {/* =====================================================
//           DOT PATTERN
//       ===================================================== */}

//       <div
//         className="
//           absolute
//           left-[18%]
//           top-5
//           hidden
//           grid-cols-7
//           gap-3
//           opacity-60
//           sm:grid
//         "
//       >
//         {Array.from({ length: 35 }).map((_, index) => (
//           <span
//             key={index}
//             className="
//               h-1.5
//               w-1.5
//               rounded-full
//               bg-[#d8e7fa]
//             "
//           />
//         ))}
//       </div>

//       {/* =====================================================
//           LARGE DECORATIVE RINGS
//       ===================================================== */}

//       <div
//         className="
//           absolute
//           right-[-1%]
//           top-[48%]
//           h-[210px]
//           w-[210px]
//           rounded-full
//           border
//           border-[#e4eefb]
//           opacity-80
//         "
//       />

//       <div
//         className="
//           absolute
//           right-[3%]
//           top-[53%]
//           h-[160px]
//           w-[160px]
//           rounded-full
//           border
//           border-[#e4eefb]
//           opacity-80
//         "
//       />

//       <div
//         className="
//           absolute
//           right-[8%]
//           top-[58%]
//           h-[110px]
//           w-[110px]
//           rounded-full
//           border
//           border-[#e4eefb]
//           opacity-80
//         "
//       />

//       {/* =====================================================
//           DASHED FLIGHT PATH
//       ===================================================== */}

//       <svg
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           h-full
//           w-full
//         "
//         viewBox="0 0 620 560"
//         fill="none"
//         aria-hidden="true"
//       >
//         <path
//           d="
//             M55 350
//             C105 320 105 250 155 230
//             C220 200 280 245 350 210
//             C425 172 455 105 525 62
//           "
//           stroke="#1769d5"
//           strokeWidth="2"
//           strokeDasharray="7 8"
//         />

//         <path
//           d="
//             M55 350
//             C105 320 105 250 155 230
//           "
//           stroke="#1769d5"
//           strokeWidth="2"
//           strokeDasharray="7 8"
//         />
//       </svg>

//       {/* =====================================================
//           SMALL LEFT PAPER PLANE
//       ===================================================== */}

//       <PaperPlane
//         className="
//           absolute
//           left-[3%]
//           top-[38%]
//           h-14
//           w-20
//           rotate-[5deg]
//           opacity-90
//         "
//       />

//       {/* =====================================================
//           MAIN PAPER PLANE
//       ===================================================== */}

//       <PaperPlane
//         className="
//           absolute
//           right-[0]
//           top-[6%]
//           h-20
//           w-28
//           rotate-[-8deg]
//           sm:h-24
//           sm:w-32
//         "
//       />

//       {/* =====================================================
//           DOCUMENT
//       ===================================================== */}

//       <div
//         className="
//           absolute
//           right-[18%]
//           top-[16%]
//           h-[285px]
//           w-[220px]
//           rounded-[8px]
//           bg-white
//           shadow-[0_28px_60px_-30px_rgba(23,105,213,.55)]
//           sm:right-[20%]
//           sm:h-[320px]
//           sm:w-[245px]
//           lg:right-[21%]
//         "
//       >
//         {/* Folded corner */}

//         <div
//           className="
//             absolute
//             right-0
//             top-0
//             h-16
//             w-16
//             bg-brand
//             [clip-path:polygon(0_0,100%_100%,0_100%)]
//           "
//         />

//         {/* Check circle */}

//         <div
//           className="
//             absolute
//             left-8
//             top-16
//             flex
//             h-16
//             w-16
//             items-center
//             justify-center
//             rounded-full
//             bg-brand
//             text-white
//             shadow-[0_14px_24px_-16px_rgba(23,105,213,.9)]
//             sm:left-10
//             sm:top-20
//             sm:h-[70px]
//             sm:w-[70px]
//           "
//         >
//           <Check size={38} strokeWidth={3} />
//         </div>

//         {/* Document text */}

//         <div
//           className="
//             absolute
//             left-[105px]
//             right-6
//             top-[92px]
//             space-y-3
//             sm:left-[120px]
//             sm:top-[104px]
//           "
//         >
//           <span className="block h-2.5 w-16 rounded-full bg-[#e5effc]" />
//           <span className="block h-2.5 w-24 rounded-full bg-[#e5effc]" />
//           <span className="block h-2.5 w-20 rounded-full bg-[#e5effc]" />
//         </div>

//         {/* Lower document lines */}

//         <div
//           className="
//             absolute
//             left-8
//             right-8
//             top-[170px]
//             space-y-3
//             sm:top-[190px]
//           "
//         >
//           <span className="block h-2.5 rounded-full bg-[#e5effc]" />
//           <span className="block h-2.5 w-[85%] rounded-full bg-[#e5effc]" />
//           <span className="block h-2.5 w-[70%] rounded-full bg-[#e5effc]" />
//           <span className="block h-2.5 w-[55%] rounded-full bg-[#e5effc]" />
//         </div>
//       </div>

//       {/* =====================================================
//           BLUE ENVELOPE
//       ===================================================== */}

//       <div
//         className="
//           absolute
//           bottom-[145px]
//           right-[14%]
//           h-[185px]
//           w-[300px]
//           sm:bottom-[150px]
//           sm:right-[14%]
//           sm:h-[205px]
//           sm:w-[340px]
//           lg:right-[13%]
//           lg:h-[225px]
//           lg:w-[380px]
//         "
//       >
//         {/* Back envelope */}

//         <div
//           className="
//             absolute
//             inset-0
//             bg-[#075ee8]
//             [clip-path:polygon(0_25%,50%_60%,100%_25%,100%_100%,0_100%)]
//           "
//         />

//         {/* Left fold */}

//         <div
//           className="
//             absolute
//             bottom-0
//             left-0
//             h-full
//             w-1/2
//             bg-[#075ee8]
//             [clip-path:polygon(0_0,100%_55%,0_100%)]
//           "
//         />

//         {/* Right fold */}

//         <div
//           className="
//             absolute
//             bottom-0
//             right-0
//             h-full
//             w-1/2
//             bg-[#064fbd]
//             [clip-path:polygon(100%_0,0_55%,100%_100%)]
//           "
//         />

//         {/* Front flap */}

//         <div
//           className="
//             absolute
//             inset-x-0
//             bottom-0
//             h-[72%]
//             bg-[#1769d5]
//             [clip-path:polygon(0_0,50%_55%,100%_0,100%_100%,0_100%)]
//           "
//         />

//         {/* Highlight */}

//         <div
//           className="
//             absolute
//             left-[8%]
//             top-[27%]
//             h-[2px]
//             w-[84%]
//             bg-white/20
//           "
//         />
//       </div>

//       {/* =====================================================
//           WHAT HAPPENS NEXT CARD
//       ===================================================== */}

//       <div
//         className="
//           absolute
//           bottom-0
//           left-1/2
//           z-20
//           w-[94%]
//           -translate-x-1/2
//           rounded-[18px]
//           bg-white
//           px-5
//           py-6
//           shadow-[0_24px_55px_-28px_rgba(23,105,213,.38)]
//           sm:w-[92%]
//           sm:px-7
//           sm:py-7
//         "
//       >
//         <h3
//           className="
//             text-center
//             text-lg
//             font-extrabold
//             text-brand
//             sm:text-xl
//           "
//         >
//           What happens next?
//         </h3>

//         <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-5">
//           {nextSteps.map((step, index) => (
//             <div
//               key={step.label}
//               className="relative text-center"
//             >
//               {/* Arrow */}

//               {index < nextSteps.length - 1 && (
//                 <ArrowRight
//                   className="
//                     absolute
//                     -right-4
//                     top-7
//                     hidden
//                     text-brand/70
//                     sm:block
//                   "
//                   size={20}
//                   strokeWidth={2}
//                 />
//               )}

//               {/* Icon */}

//               <div
//                 className="
//                   mx-auto
//                   flex
//                   h-14
//                   w-14
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-[#edf5ff]
//                   text-brand
//                   sm:h-16
//                   sm:w-16
//                 "
//               >
//                 <step.icon
//                   size={27}
//                   strokeWidth={2.2}
//                 />
//               </div>

//               {/* Text */}

//               <p
//                 className="
//                   mx-auto
//                   mt-3
//                   max-w-[150px]
//                   text-[11px]
//                   font-semibold
//                   leading-snug
//                   text-ink
//                   sm:text-sm
//                 "
//               >
//                 {step.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    NEXT STEPS
// ========================================================= */

// const nextSteps = [
//   {
//     icon: FileText,
//     label: "We understand your requirements",
//   },
//   {
//     icon: MessageSquareText,
//     label: "We prepare a custom proposal",
//   },
//   {
//     icon: Rocket,
//     label: "We build solutions that drive results",
//   },
// ];

// /* =========================================================
//    MAIN SECTION
// ========================================================= */

// export default function StartConversationSection() {
//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         rounded-[24px]
//         border
//         border-[#dbe7f5]
//         bg-white
//         py-12
//         md:py-16
//         lg:py-20
//       "
//     >
//       {/* =====================================================
//           BACKGROUND DECORATION
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           bg-[radial-gradient(circle_at_0%_0%,rgba(23,105,213,.07),transparent_30%),radial-gradient(circle_at_100%_100%,rgba(23,105,213,.05),transparent_32%)]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -left-24
//           -top-24
//           h-72
//           w-72
//           rounded-full
//           border
//           border-[#d7e5ff]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -bottom-32
//           -right-24
//           h-80
//           w-80
//           rounded-full
//           bg-[#f1f7ff]
//         "
//       />

//       {/* =====================================================
//           CONTENT
//       ===================================================== */}

//       <div
//         className="
//           relative
//           mx-auto
//           grid
//           max-w-7xl
//           items-center
//           gap-10
//           px-6
//           md:px-8
//           lg:grid-cols-[0.95fr_1.05fr]
//           lg:gap-8
//           lg:px-10
//         "
//       >
//         {/* ===================================================
//             LEFT CONTENT
//         =================================================== */}

//         <div className="min-w-0">

//           {/* Eyebrow */}

//           <p
//             className="
//               eyebrow
//               justify-start
//               text-sm
//               font-semibold
//               tracking-widest
//               text-brand
//               before:w-14
//               after:h-px
//               after:w-14
//               after:bg-current
//               after:opacity-70
//             "
//           >
//             Start a conversation
//           </p>

//           {/* Heading */}

//           <h2
//             className="
//               mt-6
//               font-display
//               text-4xl
//               font-extrabold
//               leading-[1.05]
//               tracking-tight
//               text-ink
//               sm:text-5xl
//               md:text-[56px]
//               lg:text-[58px]
//             "
//           >
//             Let's build something
//             <br />
//             <span className="text-brand">great</span> together.
//           </h2>

//           {/* Description */}

//           <p
//             className="
//               mt-6
//               max-w-2xl
//               text-base
//               leading-relaxed
//               text-muted
//               md:text-lg
//             "
//           >
//             Share your requirements and we will prepare a bespoke
//             technical proposal tailored to your enterprise goals.
//           </p>

//           {/* =================================================
//               INQUIRY BOX
//           ================================================= */}

//           <a
//             href={`mailto:${NAP.email}`}
//             className="
//               mt-6
//               flex
//               max-w-[430px]
//               items-center
//               gap-4
//               rounded-[8px]
//               bg-[#edf5ff]
//               p-3
//               text-ink
//               shadow-[0_18px_34px_-30px_rgba(23,105,213,.55)]
//               transition-all
//               duration-200
//               hover:-translate-y-0.5
//               hover:bg-[#e6f0ff]
//             "
//           >
//             <span
//               className="
//                 flex
//                 h-14
//                 w-14
//                 shrink-0
//                 items-center
//                 justify-center
//                 rounded-full
//                 bg-brand
//                 text-white
//                 shadow-[0_14px_24px_-16px_rgba(23,105,213,.9)]
//               "
//             >
//               <Mail
//                 size={27}
//                 strokeWidth={2.4}
//               />
//             </span>

//             <span className="min-w-0">
//               <span
//                 className="
//                   block
//                   text-sm
//                   font-semibold
//                   text-muted
//                 "
//               >
//                 Inquiries
//               </span>

//               <span
//                 className="
//                   mt-1
//                   block
//                   break-words
//                   text-base
//                   font-extrabold
//                   text-brand
//                   sm:text-lg
//                 "
//               >
//                 {NAP.email}
//               </span>
//             </span>
//           </a>

//           {/* =================================================
//               CTA
//           ================================================= */}

//           <Link
//             to="/contact"
//             className="
//               mt-6
//               flex
//               w-full
//               max-w-[360px]
//               items-center
//               justify-between
//               gap-4
//               rounded-[8px]
//               bg-brand
//               px-4
//               py-3
//               text-xs
//               font-extrabold
//               uppercase
//               tracking-widest
//               text-white
//               shadow-[0_22px_38px_-24px_rgba(23,105,213,.95)]
//               transition-all
//               duration-300
//               hover:-translate-y-0.5
//               hover:bg-brand-deep
//               sm:text-sm
//             "
//           >
//             <span
//               className="
//                 flex
//                 h-11
//                 w-11
//                 shrink-0
//                 items-center
//                 justify-center
//                 rounded-full
//                 bg-white
//                 text-brand
//               "
//             >
//               <Send
//                 size={23}
//                 strokeWidth={2.4}
//               />
//             </span>

//             <span className="min-w-0 flex-1 text-center">
//               Submit proposal request
//             </span>

//             <ArrowRight
//               className="shrink-0"
//               size={24}
//               strokeWidth={2.2}
//             />
//           </Link>
//         </div>

//         {/* ===================================================
//             RIGHT ILLUSTRATION
//         =================================================== */}

//         <div className="min-w-0">
//           <EnvelopeIllustration />
//         </div>
//       </div>
//     </section>
//   );
// }