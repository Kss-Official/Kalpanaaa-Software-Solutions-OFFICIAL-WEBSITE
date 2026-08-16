import{j as e,r as c,C as S,L as o,T as L,m as u,S as C,N as w}from"./index-nkB3H1Bx.js";import{Q as p,C as M,M as E,S as z,T as I,a as W,H as A,E as T,b as D,c as q,d as R,e as O,L as P,f as B,g as U}from"./lucide-react-B45pWif8.js";import{S as H}from"./SEO-BHqu-dxU.js";import{S as F}from"./shield-check-BlWj71ty.js";import{S as Q}from"./SectionHeading-DZXfEMzC.js";import{A as f}from"./arrow-right-Di99bIHy.js";import"./arrow-left-DtMdlnhU.js";import"./loader-circle-BWPviZ-E.js";import"./zap-D7YOXiPM.js";const V=[{left:"50%",top:"21.7%"},{left:"20%",top:"34.2%"},{left:"80%",top:"34.2%"},{left:"20%",top:"65.8%"},{left:"80%",top:"65.8%"},{left:"50%",top:"78.3%"}],$=e.jsx("img",{src:"./Logo-1.webp",alt:"Company logo",className:"vsc-logo-img"}),G=[{label:"UPTIME",value:"99.9%"},{label:"MODULES",value:"06"},{label:"REGIONS",value:"12"},{label:"MONITORED",value:"24/7"}];function Y({title:t,labels:n,activeLabel:s,centerLabel:r="KSS",logo:i,logoSrc:a,stats:x=G,className:v=""}){n.length!==6&&console.warn(`ServiceConstellation expects exactly 6 labels, received ${n.length}.`);const k=s??n[0],_=i??(a?e.jsx("img",{src:a,alt:"Company logo",className:"vsc-logo-img"}):$);return e.jsxs("div",{className:`vsc-panel ${v}`,children:[e.jsx("span",{className:"vsc-sr-only",children:t}),e.jsx("div",{className:"vsc-glow"}),e.jsx("div",{className:"vsc-scan"}),e.jsx("span",{className:"vsc-bracket vsc-tl"}),e.jsx("span",{className:"vsc-bracket vsc-tr"}),e.jsx("span",{className:"vsc-bracket vsc-bl"}),e.jsx("span",{className:"vsc-bracket vsc-br"}),e.jsx("span",{className:"vsc-particle",style:{left:"30%",top:"24%",animationDelay:".2s"}}),e.jsx("span",{className:"vsc-particle",style:{left:"70%",top:"24%",animationDelay:".9s"}}),e.jsx("span",{className:"vsc-particle",style:{left:"26%",top:"76%",animationDelay:"1.5s"}}),e.jsx("span",{className:"vsc-particle",style:{left:"74%",top:"76%",animationDelay:".6s"}}),e.jsx("span",{className:"vsc-particle",style:{left:"50%",top:"58%",animationDelay:"1.1s"}}),e.jsx("span",{className:"vsc-particle",style:{left:"14%",top:"50%",animationDelay:"1.8s"}}),e.jsx("span",{className:"vsc-particle",style:{left:"86%",top:"50%",animationDelay:".4s"}}),e.jsxs("div",{className:"vsc-stage",children:[e.jsxs("svg",{className:"vsc-connectors",viewBox:"0 0 600 600",preserveAspectRatio:"xMidYMid meet",children:[e.jsx("circle",{className:"vsc-ring",cx:"300",cy:"300",r:"195"}),e.jsx("circle",{className:"vsc-ring vsc-r2",cx:"300",cy:"300",r:"228"}),e.jsx("polygon",{className:"vsc-hexOuter",points:"300,175 415,240 415,360 300,425 185,360 185,240"}),e.jsx("polygon",{className:"vsc-hexInner",points:"300,210 378,255 378,345 300,390 222,345 222,255"}),e.jsx("path",{className:"vsc-link",id:"vsc-l1",d:"M300,210 L300,130"}),e.jsx("path",{className:"vsc-link",id:"vsc-l2",d:"M222,255 L120,205"}),e.jsx("path",{className:"vsc-link",id:"vsc-l3",d:"M378,255 L480,205"}),e.jsx("path",{className:"vsc-link",id:"vsc-l4",d:"M222,345 L120,395"}),e.jsx("path",{className:"vsc-link",id:"vsc-l5",d:"M378,345 L480,395"}),e.jsx("path",{className:"vsc-link",id:"vsc-l6",d:"M300,390 L300,470"}),["l1","l2","l3","l4","l5","l6"].map((l,m)=>e.jsx("circle",{className:"vsc-pulse",r:"3.2",children:e.jsx("animateMotion",{dur:`${3.2+m*.15}s`,repeatCount:"indefinite",begin:`${m*.3}s`,children:e.jsx("mpath",{href:`#vsc-${l}`})})},l))]}),e.jsxs("div",{className:"vsc-core",children:[e.jsx("span",{className:"vsc-mark",children:_}),r]}),n.slice(0,6).map((l,m)=>e.jsx("div",{className:`vsc-node ${l===k?"vsc-active":""}`,style:V[m],children:l},l))]}),x.slice(0,4).map((l,m)=>e.jsxs("div",{className:`vsc-stat vsc-s${m+1}`,children:[e.jsx("span",{className:"vsc-ind"}),l.label," ",e.jsx("b",{children:l.value})]},l.label)),e.jsxs("div",{className:"vsc-panel-tag",children:[e.jsx("span",{className:"vsc-led"}),"SYSTEM ARCHITECTURE — LIVE"]}),e.jsx("style",{children:K})]})}const K=`
.vsc-panel{
  --navy-900:#0f172a; --navy-700:#1e293b; --slate-500:#5b6b85; --slate-400:#8592a8;
  --blue-600:#1d4ed8; --blue-500:#2563eb; --blue-400:#3b82f6; --line:#e1e8f4;
  --white:#ffffff;
  --mono: ui-monospace, "SFMono-Regular", Menlo, Consolas, "Liberation Mono", monospace;
  position:relative; width:100%; max-width:520px; aspect-ratio:1/1;
  background:linear-gradient(160deg, #f6f9ff, #eaf0fb);
  border:1px solid var(--line); border-radius:32px; overflow:hidden;
  box-shadow:0 1px 2px rgba(15,23,42,0.04), 0 30px 60px -30px rgba(15,23,42,0.25), inset 0 1px 0 rgba(255,255,255,0.6);
  font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Helvetica, Arial, sans-serif;
}
.vsc-sr-only{ position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(0 0 0 0); white-space:nowrap; }
.vsc-panel::before{
  content:""; position:absolute; inset:0;
  background-image:linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size:28px 28px; opacity:.55;
  mask-image:radial-gradient(circle at 50% 46%, black 40%, transparent 78%);
}
.vsc-glow{
  position:absolute; width:60%; height:60%; left:20%; top:12%;
  background:radial-gradient(circle, rgba(59,130,246,0.16), transparent 70%);
  filter:blur(10px); animation:vsc-drift 9s ease-in-out infinite; pointer-events:none;
}
@keyframes vsc-drift{ 0%,100%{ transform:translate(0,0) scale(1);} 50%{ transform:translate(2%,-3%) scale(1.06);} }
.vsc-scan{
  position:absolute; left:0; right:0; height:140px;
  background:linear-gradient(180deg, transparent, rgba(59,130,246,0.06), transparent);
  animation:vsc-sweep 6s ease-in-out infinite; pointer-events:none;
}
@keyframes vsc-sweep{ 0%{transform:translateY(-160px); opacity:0;} 15%{opacity:1;} 85%{opacity:1;} 100%{transform:translateY(640px); opacity:0;} }
.vsc-bracket{ position:absolute; width:26px; height:26px; border:2px solid #c3d3f0; opacity:.9; }
.vsc-tl{ top:18px; left:18px; border-right:none; border-bottom:none; border-radius:6px 0 0 0; }
.vsc-tr{ top:18px; right:18px; border-left:none; border-bottom:none; border-radius:0 6px 0 0; }
.vsc-bl{ bottom:18px; left:18px; border-right:none; border-top:none; border-radius:0 0 0 6px; }
.vsc-br{ bottom:18px; right:18px; border-left:none; border-top:none; border-radius:0 0 6px 0; }
.vsc-particle{ position:absolute; width:3px; height:3px; border-radius:50%; background:#9db4dd; opacity:.5; animation:vsc-float 5s ease-in-out infinite; }
@keyframes vsc-float{ 0%,100%{transform:translateY(0); opacity:.3;} 50%{transform:translateY(-9px); opacity:.7;} }
.vsc-stage{ position:absolute; inset:0; }
.vsc-connectors{ position:absolute; inset:0; width:100%; height:100%; }
.vsc-ring{ fill:none; stroke:#c7d6f2; stroke-width:1; stroke-dasharray:2 7; animation:vsc-spin 90s linear infinite; transform-origin:300px 300px; }
.vsc-r2{ animation-direction:reverse; animation-duration:70s; stroke:#d4e0f7; }
@keyframes vsc-spin{ to{ transform:rotate(360deg); } }
.vsc-hexOuter{ fill:none; stroke:#c2d2f0; stroke-width:1; }
.vsc-hexInner{ fill:rgba(255,255,255,0.5); stroke:#aec2ec; stroke-width:1.3; }
.vsc-link{ fill:none; stroke:#a7bce6; stroke-width:1.4; stroke-dasharray:4 5; }
.vsc-pulse{ fill:var(--blue-500); filter:drop-shadow(0 0 4px rgba(37,99,235,0.7)); }
.vsc-core{
  position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
  width:92px; height:92px; border-radius:50%;
  background:linear-gradient(180deg, var(--blue-500), var(--navy-900));
  display:flex; flex-direction:column; align-items:center; justify-content:center; gap:3px;
  color:#fff; font-family:var(--mono); font-weight:800; font-size:13px; letter-spacing:0.03em;
  box-shadow:0 10px 26px -6px rgba(15,23,42,0.45), 0 0 0 6px rgba(37,99,235,0.09);
  z-index:4;
}
.vsc-core::after, .vsc-core::before{
  content:""; position:absolute; inset:-1px; border-radius:50%;
  border:1px solid rgba(37,99,235,0.35); animation:vsc-pulseRing 2.8s ease-out infinite;
}
.vsc-core::before{ animation-delay:1.4s; }
@keyframes vsc-pulseRing{ 0%{transform:scale(1); opacity:.75;} 100%{transform:scale(2.1); opacity:0;} }
.vsc-mark{ width:38px; height:26px; }
.vsc-mark svg{ width:100%; height:100%; display:block; }
.vsc-logo-img{
  width:100%; height:100%; object-fit:contain; display:block;
  mix-blend-mode:multiply;
}
.vsc-node{
  position:absolute; transform:translate(-50%,-50%);
  font-family:var(--mono); font-size:12px; font-weight:700; letter-spacing:0.03em;
  padding:12px 19px; border-radius:12px; white-space:nowrap;
  background:var(--white); color:var(--navy-700);
  border:1px solid var(--line); box-shadow:0 2px 8px rgba(15,23,42,0.06);
  transition:transform .3s cubic-bezier(.2,.8,.2,1), box-shadow .3s ease, border-color .3s ease;
  z-index:3;
}
.vsc-node:hover{ transform:translate(-50%,-50%) translateY(-4px); box-shadow:0 14px 26px -10px rgba(15,23,42,0.22); border-color:#c7d4ea; }
.vsc-active{ background:linear-gradient(180deg, var(--blue-500), var(--blue-600)); color:#fff; border-color:transparent; box-shadow:0 8px 20px -6px rgba(29,78,216,0.55); }
.vsc-stat{
  position:absolute; display:flex; align-items:center; gap:7px;
  font-family:var(--mono); font-size:10px; color:var(--slate-500);
  background:rgba(255,255,255,0.7); border:1px solid var(--line);
  padding:7px 11px; border-radius:9px; backdrop-filter:blur(2px); z-index:3;
}
.vsc-stat b{ color:var(--navy-900); font-size:11px; }
.vsc-ind{ width:5px; height:5px; border-radius:50%; background:var(--blue-500); }
.vsc-s1{ left:6%; top:8%; } .vsc-s2{ right:6%; top:8%; } .vsc-s3{ left:6%; bottom:8%; } .vsc-s4{ right:6%; bottom:8%; }
.vsc-panel-tag{
  position:absolute; bottom:20px; left:50%; transform:translateX(-50%);
  font-family:var(--mono); font-size:10.5px; color:var(--slate-400); letter-spacing:0.04em;
  display:flex; align-items:center; gap:7px; z-index:5;
}
.vsc-led{ width:6px; height:6px; border-radius:50%; background:#22c55e; box-shadow:0 0 0 3px rgba(34,197,94,0.18); animation:vsc-blink 2.2s ease-in-out infinite; }
@keyframes vsc-blink{ 50%{ opacity:.35; } }
@media (prefers-reduced-motion: reduce){ .vsc-panel *{ animation:none !important; transition:none !important; } }
@media (max-width:480px){
  .vsc-panel{ border-radius:22px; }
  .vsc-node{ font-size:10px; padding:8px 13px; }
  .vsc-core{ width:66px; height:66px; font-size:10px; }
  .vsc-mark{ width:28px; height:19px; }
  .vsc-stat{ font-size:8.5px; padding:5px 8px; }
  .vsc-stat b{ font-size:9px; }
}
`,h=[{quote:"I wanted to redesign and revamp the website of my institution. I contacted the team and they understood our requirements and delivered exactly what we needed.",name:"Teaching Coordinator",company:"Leading Educational Institution in Bangalore"},{quote:"Nextwebi, without a doubt they have what it takes to make a great web application, not to mention the professionalism and quality of their work.",name:"Team Lead",company:"Renowned R & D Firm"},{quote:"The team was professional, responsive and technically strong throughout the entire development process. They delivered a reliable and modern solution for our business.",name:"Business Owner",company:"Growing Technology Company"}];function X(){const[t,n]=c.useState(0);return c.useEffect(()=>{const s=setInterval(()=>{n(r=>r===h.length-1?0:r+1)},4e3);return()=>clearInterval(s)},[]),e.jsxs("section",{className:"relative overflow-hidden py-16 md:py-20",children:[e.jsx("div",{className:"absolute inset-0 bg-white"}),e.jsx("div",{className:`\r
          absolute\r
          inset-0\r
          pointer-events-none\r
        `,style:{background:"#1C8FC6",clipPath:"polygon(65% 0%, 100% 0%, 100% 100%, 31% 100%)"}}),e.jsx("div",{className:`\r
          relative\r
          max-w-7xl\r
          mx-auto\r
          px-6\r
          md:px-8\r
          lg:px-12\r
        `,children:e.jsxs("div",{className:`\r
            grid\r
            grid-cols-1\r
            lg:grid-cols-[0.9fr_1.5fr]\r
            gap-10\r
            lg:gap-14\r
            items-center\r
          `,children:[e.jsxs("div",{className:"max-w-xl",children:[e.jsxs("h2",{className:`\r
                font-display\r
                text-4xl\r
                sm:text-5xl\r
                md:text-6xl\r
                font-extrabold\r
                leading-[1.05]\r
                text-ink\r
              `,children:["What Our Amazing",e.jsx("br",{}),"Clients",e.jsx("br",{}),e.jsx("span",{className:"text-brand",children:"Say About Us"})]}),e.jsx("p",{className:`\r
                mt-7\r
                max-w-lg\r
                text-base\r
                md:text-lg\r
                leading-relaxed\r
                text-muted\r
              `,children:"Leading start-ups, SMEs and large-scale organizations have trusted us for their software development project requirements."})]}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("div",{className:"hidden md:block overflow-hidden",children:e.jsx("div",{className:`\r
                  flex\r
                  gap-5\r
                  transition-transform\r
                  duration-700\r
                  ease-in-out\r
                `,style:{transform:`translateX(-${t*50}%)`},children:h.map((s,r)=>e.jsxs("div",{className:`\r
                      flex-none\r
                      w-[calc(50%-10px)]\r
                      min-h-[360px]\r
                      rounded-xl\r
                      bg-white\r
                      border\r
                      border-[#D9E2E8]\r
                      p-7\r
                      shadow-[0_8px_25px_rgba(0,0,0,0.08)]\r
                      transition-all\r
                      duration-300\r
                      hover:-translate-y-1\r
                      hover:shadow-[0_14px_35px_rgba(0,0,0,0.12)]\r
                    `,children:[e.jsx("div",{className:`\r
                        text-[#E44732]\r
                        leading-none\r
                      `,children:e.jsx(p,{size:36,strokeWidth:3,fill:"currentColor"})}),e.jsx("p",{className:`\r
                        mt-5\r
                        text-base\r
                        md:text-[17px]\r
                        leading-[1.55]\r
                        text-[#555]\r
                      `,children:s.quote}),e.jsx("button",{type:"button",className:`\r
                        mt-5\r
                        text-[#E44732]\r
                        text-sm\r
                        font-bold\r
                        hover:underline\r
                      `,children:"Read More"}),e.jsx("div",{className:"mt-7 border-t border-[#E2E2E2]"}),e.jsxs("div",{className:"mt-5",children:[e.jsx("h3",{className:`\r
                          text-base\r
                          font-bold\r
                          text-ink\r
                        `,children:s.name}),e.jsx("p",{className:`\r
                          mt-1\r
                          text-sm\r
                          leading-relaxed\r
                          text-muted\r
                        `,children:s.company})]})]},r))})}),e.jsx("div",{className:"md:hidden",children:e.jsxs("div",{className:`\r
                  min-h-[350px]\r
                  rounded-xl\r
                  bg-white\r
                  border\r
                  border-[#D9E2E8]\r
                  p-6\r
                  shadow-[0_8px_25px_rgba(0,0,0,0.08)]\r
                `,children:[e.jsx("div",{className:"text-[#E44732]",children:e.jsx(p,{size:34,strokeWidth:3,fill:"currentColor"})}),e.jsx("p",{className:`\r
                    mt-5\r
                    text-base\r
                    leading-[1.55]\r
                    text-[#555]\r
                  `,children:h[t].quote}),e.jsx("button",{type:"button",className:`\r
                    mt-5\r
                    text-[#E44732]\r
                    text-sm\r
                    font-bold\r
                    hover:underline\r
                  `,children:"Read More"}),e.jsx("div",{className:"mt-7 border-t border-[#E2E2E2]"}),e.jsxs("div",{className:"mt-5",children:[e.jsx("h3",{className:"text-base font-bold text-ink",children:h[t].name}),e.jsx("p",{className:"mt-1 text-sm text-muted",children:h[t].company})]})]})}),e.jsx("div",{className:`\r
                flex\r
                items-center\r
                justify-center\r
                gap-2\r
                mt-7\r
              `,children:h.map((s,r)=>e.jsx("button",{type:"button",onClick:()=>n(r),"aria-label":`Go to testimonial ${r+1}`,className:`
                    h-2.5
                    rounded-full
                    transition-all
                    duration-300
                    ${t===r?"w-10 bg-white":"w-2.5 bg-white/50"}
                  `},r))})]})]})})]})}const Z=[{question:"What services does Kalpanaaa Software Solutions provide?",answer:"We provide custom software development, website development, mobile solutions, UI/UX design, SEO, AI Automation, RAG Models, and digital solutions tailored to business needs."},{question:"Can you build a website or software according to my business requirements?",answer:"Yes. We build customized websites and software solutions based on your business requirements, goals, users, workflows, and technical needs."},{question:"How much does it cost to develop a website or software?",answer:"The cost depends on the project's scope, features, design requirements, technology stack, integrations, and overall complexity. Contact us with your requirements and we can discuss the project in detail."},{question:"How long does it take to develop a website or software application?",answer:"Development time depends on the size and complexity of the project. After understanding your requirements, we can provide a suitable development timeline."},{question:"Do you provide website maintenance and technical support?",answer:"Yes. We provide ongoing maintenance and technical support to help keep your website or software secure, reliable, updated, and performing properly."},{question:"Can you redesign or improve an existing website or application?",answer:"Yes. We can redesign existing websites and applications, improve their user experience, modernize the interface, optimize performance, and add new functionality."},{question:"Do you provide SEO and website performance optimization?",answer:"Yes. We provide SEO and performance optimization services to improve website visibility, speed, usability, and overall performance."},{question:"How can I get started with my project?",answer:"Simply contact us and share your project requirements, goals, and timeline. Our team will discuss your requirements and guide you through the next steps."}];function J(){const[t,n]=c.useState(0),s=r=>{n(i=>i===r?-1:r)};return e.jsx("section",{className:`\r
        relative\r
        overflow-hidden\r
        py-14\r
        md:py-20\r
        bg-[rgba(247,249,252,1)]\r
      `,children:e.jsxs("div",{className:"max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8",children:[e.jsxs("div",{className:"text-center max-w-4xl mx-auto",children:[e.jsxs("div",{className:`\r
              inline-flex\r
              items-center\r
              gap-2\r
              px-5\r
              py-2\r
              rounded-full\r
              bg-[#eeeaff]\r
              text-brand\r
              text-sm\r
              font-medium\r
            `,children:[e.jsx(M,{size:17,strokeWidth:2}),e.jsx("span",{children:"Got Questions?"})]}),e.jsxs("h2",{className:`\r
              mt-7\r
              font-display\r
              text-4xl\r
              sm:text-5xl\r
              md:text-6xl\r
              font-extrabold\r
              leading-[1.05]\r
              tracking-tight\r
              text-ink\r
            `,children:["Frequently Asked"," ",e.jsx("span",{className:"text-brand",children:"Questions"})]}),e.jsx("p",{className:`\r
              mt-5\r
              text-base\r
              sm:text-lg\r
              md:text-xl\r
              leading-relaxed\r
              text-muted\r
            `,children:"Find quick answers to the most common questions about our services."})]}),e.jsx("div",{className:`\r
            mt-8\r
            md:mt-10\r
            rounded-xl\r
            bg-white\r
            border\r
            border-[#d9dde3]\r
            shadow-[0_2px_8px_rgba(15,23,42,0.10)]\r
            px-6\r
            md:px-7\r
            lg:px-8\r
          `,children:Z.map((r,i)=>{const a=t===i;return e.jsxs("div",{className:`
                  border-b
                  border-[#e3e5e8]
                  last:border-b-0
                  ${a?"pb-5":""}
                `,children:[e.jsxs("button",{type:"button",onClick:()=>s(i),"aria-expanded":a,className:`\r
                    group\r
                    w-full\r
                    flex\r
                    items-center\r
                    justify-between\r
                    gap-6\r
                    py-5\r
                    md:py-[19px]\r
                    text-left\r
                  `,children:[e.jsx("span",{className:`\r
                      text-base\r
                      md:text-lg\r
                      font-medium\r
                      text-ink\r
                      leading-relaxed\r
                    `,children:r.question}),e.jsx("span",{className:`
                      flex
                      shrink-0
                      items-center
                      justify-center
                      transition-transform
                      duration-300
                      text-[#444]
                      ${a?"rotate-180":"rotate-0"}
                    `,children:e.jsx(S,{size:20,strokeWidth:2})})]}),e.jsx("div",{className:`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${a?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"}
                  `,children:e.jsx("div",{className:"overflow-hidden",children:e.jsx("p",{className:`\r
                        pr-8\r
                        pb-1\r
                        text-base\r
                        md:text-lg\r
                        leading-relaxed\r
                        text-[#555b65]\r
                      `,children:r.answer})})})]},r.question)})}),e.jsx("div",{className:"flex justify-center mt-10 md:mt-11",children:e.jsxs("div",{className:`\r
              flex\r
              flex-col\r
              sm:flex-row\r
              items-center\r
              gap-5\r
              sm:gap-7\r
              rounded-full\r
              bg-white\r
              border\r
              border-[#e5e8ec]\r
              shadow-[0_4px_15px_rgba(15,23,42,0.06)]\r
              px-5\r
              py-4\r
              sm:px-6\r
              sm:py-3\r
            `,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`\r
                  w-10\r
                  h-10\r
                  rounded-full\r
                  bg-[#f1efff]\r
                  flex\r
                  items-center\r
                  justify-center\r
                  text-brand\r
                `,children:e.jsx(E,{size:21,strokeWidth:2})}),e.jsxs("div",{children:[e.jsx("p",{className:`\r
                    text-sm\r
                    md:text-base\r
                    font-bold\r
                    text-ink\r
                  `,children:"Still have questions?"}),e.jsx("p",{className:`\r
                    text-xs\r
                    md:text-sm\r
                    text-muted\r
                  `,children:"We're here to help you!"})]})]}),e.jsx("div",{className:`\r
                hidden\r
                sm:block\r
                h-10\r
                w-px\r
                bg-[#e1e4e8]\r
              `}),e.jsxs(o,{to:"/contact",className:`\r
                inline-flex\r
                items-center\r
                justify-center\r
                gap-2\r
                min-w-[180px]\r
                px-6\r
                py-3\r
                rounded-lg\r
                bg-brand\r
                text-white\r
                text-base\r
                font-medium\r
                shadow-sm\r
                transition-all\r
                duration-300\r
                hover:-translate-y-0.5\r
                hover:shadow-md\r
              `,children:[e.jsx(z,{size:17,strokeWidth:2}),"Contact Us"]})]})})]})})}const ee=[{num:"01",titleTop:"BUSINESS-FIRST",titleBottom:"APPROACH",desc:"We understand your business, users and goals first. Every solution we build is aligned to your vision and delivers real value.",Icon:I,color:"#075ee8",glow:"rgba(7, 94, 232, 0.16)"},{num:"02",titleTop:"ENGINEERING",titleBottom:"EXCELLENCE",desc:"We build robust, scalable and secure solutions using modern technologies and best engineering practices.",Icon:W,color:"#0c9fc2",glow:"rgba(12, 159, 194, 0.16)"},{num:"03",titleTop:"QUALITY &",titleBottom:"RELIABILITY",desc:"Quality is at the core of everything we do. We follow a rigorous process to ensure reliable, high-performance and bug-free solutions.",Icon:F,color:"#8023dc",glow:"rgba(128, 35, 220, 0.16)"},{num:"04",titleTop:"LONG-TERM",titleBottom:"PARTNERSHIP",desc:"We don't just deliver and walk away. We support, evolve and grow with you as a long-term technology partner.",Icon:A,color:"#ff4d13",glow:"rgba(255, 77, 19, 0.16)"}];function N({className:t=""}){return e.jsx("div",{className:`pointer-events-none absolute h-32 w-32 opacity-60 [background-image:radial-gradient(circle,rgba(23,105,213,.58)_1.4px,transparent_1.5px)] [background-size:18px_18px] ${t}`,"aria-hidden":"true"})}function re(){return e.jsxs("div",{className:"relative mt-8 h-[230px] sm:h-[250px]","aria-hidden":"true",children:[e.jsx("div",{className:"absolute inset-x-6 bottom-2 h-24 rounded-[50%] bg-[radial-gradient(circle,rgba(23,105,213,.22),rgba(23,105,213,.07)_42%,transparent_70%)] blur-[2px]"}),e.jsxs("svg",{className:"absolute inset-0 h-full w-full",viewBox:"0 0 360 260",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M84 198C118 226 242 226 276 198",stroke:"#d7e7ff",strokeWidth:"2"}),e.jsx("path",{d:"M112 187C140 207 220 207 248 187",stroke:"#b9d4ff",strokeWidth:"2"}),e.jsx("path",{d:"M180 109V62M180 109L82 150M180 109L278 150",stroke:"#b8d2f7",strokeDasharray:"4 5"}),e.jsx("path",{d:"M180 58C180 41 192 31 207 31",stroke:"#1769d5",strokeWidth:"2",strokeLinecap:"round"}),e.jsx("path",{d:"M78 149C78 132 90 122 105 122",stroke:"#1769d5",strokeWidth:"2",strokeLinecap:"round"}),e.jsx("path",{d:"M274 149C274 132 286 122 301 122",stroke:"#1769d5",strokeWidth:"2",strokeLinecap:"round"}),e.jsxs("g",{filter:"url(#cardShadow)",children:[e.jsx("rect",{x:"144",y:"30",width:"72",height:"58",rx:"12",fill:"white"}),e.jsx("rect",{x:"144.8",y:"30.8",width:"70.4",height:"56.4",rx:"11.2",stroke:"#d8e8ff",strokeWidth:"1.6"}),e.jsx("path",{d:"M164 62C166 51 179 48 185 56C194 52 204 58 203 68H168C164 68 162 65 164 62Z",stroke:"#1769d5",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsxs("g",{filter:"url(#cardShadow)",children:[e.jsx("rect",{x:"46",y:"122",width:"72",height:"58",rx:"12",fill:"white"}),e.jsx("rect",{x:"46.8",y:"122.8",width:"70.4",height:"56.4",rx:"11.2",stroke:"#d8e8ff",strokeWidth:"1.6"}),e.jsx("path",{d:"M75 143L65 151L75 159M89 143L99 151L89 159M86 139L78 164",stroke:"#1769d5",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsxs("g",{filter:"url(#cardShadow)",children:[e.jsx("rect",{x:"242",y:"122",width:"72",height:"58",rx:"12",fill:"white"}),e.jsx("rect",{x:"242.8",y:"122.8",width:"70.4",height:"56.4",rx:"11.2",stroke:"#d8e8ff",strokeWidth:"1.6"}),e.jsx("path",{d:"M278 141V135M278 167V161M291 154H297M259 154H265M287 145L291 141M265 167L269 163M269 145L265 141M291 167L287 163",stroke:"#1769d5",strokeWidth:"4",strokeLinecap:"round"}),e.jsx("circle",{cx:"278",cy:"154",r:"9",stroke:"#1769d5",strokeWidth:"4"})]}),e.jsxs("g",{filter:"url(#cubeShadow)",children:[e.jsx("path",{d:"M180 111L226 136V191L180 216L134 191V136L180 111Z",fill:"#1769d5"}),e.jsx("path",{d:"M180 111L226 136L180 162L134 136L180 111Z",fill:"#3384ff"}),e.jsx("path",{d:"M180 162L226 136V191L180 216V162Z",fill:"#075ee8"}),e.jsx("path",{d:"M134 136L180 162V216L134 191V136Z",fill:"#0d56d4"}),e.jsx("path",{d:"M180 105V162",stroke:"#8ec1ff",strokeWidth:"2"})]}),e.jsxs("g",{opacity:".75",children:[e.jsx("rect",{x:"111",y:"180",width:"19",height:"19",rx:"3",fill:"#d9eaff"}),e.jsx("rect",{x:"232",y:"177",width:"18",height:"18",rx:"3",fill:"#d9eaff"}),e.jsx("rect",{x:"282",y:"202",width:"21",height:"21",rx:"3",fill:"#d9eaff"}),e.jsx("rect",{x:"54",y:"205",width:"20",height:"20",rx:"3",fill:"#d9eaff"})]}),e.jsxs("defs",{children:[e.jsx("filter",{id:"cardShadow",x:"30",y:"14",width:"300",height:"185",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:e.jsx("feDropShadow",{dx:"0",dy:"10",stdDeviation:"10",floodColor:"#1769d5",floodOpacity:".14"})}),e.jsx("filter",{id:"cubeShadow",x:"104",y:"82",width:"152",height:"164",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:e.jsx("feDropShadow",{dx:"0",dy:"16",stdDeviation:"14",floodColor:"#075ee8",floodOpacity:".34"})})]})]})]})}function te(){return e.jsxs("section",{className:"relative overflow-hidden py-12 md:py-16 lg:py-20",children:[e.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(180deg,#fbfdff_0%,#f8fbff_48%,#f4f9ff_100%)]"}),e.jsx("div",{className:"pointer-events-none absolute -left-16 -top-28 h-80 w-80 rounded-full border border-[#d7e5ff]","aria-hidden":"true"}),e.jsx("div",{className:"pointer-events-none absolute -left-10 -top-20 h-64 w-64 rounded-full border border-[#d7e5ff]","aria-hidden":"true"}),e.jsx("div",{className:"pointer-events-none absolute -left-4 -top-12 h-48 w-48 rounded-full border border-[#d7e5ff]","aria-hidden":"true"}),e.jsx(N,{className:"right-8 top-8 hidden lg:block"}),e.jsx(N,{className:"bottom-[36%] left-8 hidden lg:block"}),e.jsxs("div",{className:"relative mx-auto max-w-7xl px-6 md:px-8 lg:px-10",children:[e.jsxs("div",{className:"text-center max-w-5xl mx-auto",children:[e.jsx("p",{className:"eyebrow justify-center text-sm font-semibold text-brand tracking-widest before:w-16 after:h-px after:w-16 after:bg-current after:opacity-70",children:"WHY CHOOSE US"}),e.jsxs("h2",{className:"mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold leading-[1.08] text-ink",children:["Engineering solutions",e.jsx("br",{}),"built around"," ",e.jsx("span",{className:"text-brand",children:"your business."})]}),e.jsxs("p",{className:"mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-muted",children:["We combine technology, expertise and strategic thinking",e.jsx("br",{className:"hidden sm:block"}),"to build solutions that create real impact."]})]}),e.jsxs("div",{className:"mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-[390px_minmax(0,1fr)] gap-7 lg:gap-8 items-stretch",children:[e.jsxs("div",{className:"relative overflow-hidden rounded-[18px] border border-[#dce8fb] bg-white/82 p-8 shadow-[0_22px_48px_-34px_rgba(23,105,213,.45)] backdrop-blur-sm lg:min-h-[590px]",children:[e.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,.96),rgba(242,248,255,.72))]"}),e.jsxs("div",{className:"relative flex min-h-full flex-col",children:[e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("img",{src:"/logo_full.png",alt:"Kalpanaaa Software Solutions",className:"h-auto w-[260px] max-w-full object-contain"})}),e.jsxs("h3",{className:"mt-9 font-display text-[30px] leading-[1.2] font-extrabold text-ink",children:["Kalpanaaa Software",e.jsx("br",{}),"Solutions is your",e.jsx("br",{}),e.jsxs("span",{className:"text-brand",children:["Bespoke Engineering",e.jsx("br",{}),"Partner."]})]}),e.jsx("div",{className:"mt-5 h-[3px] w-12 rounded-full bg-brand"}),e.jsx("p",{className:"mt-6 text-base leading-[1.55] text-muted",children:"From ideation to implementation, we partner with you to deliver technology solutions that are scalable, reliable and future-ready."}),e.jsx(re,{})]})]}),e.jsx("div",{className:"grid grid-cols-1 gap-7 sm:grid-cols-2",children:ee.map(t=>e.jsxs("div",{className:"relative min-h-[280px] overflow-hidden rounded-[16px] border border-[#e2ebf8] bg-white/88 p-8 shadow-[0_18px_36px_-30px_rgba(20,35,60,.48)] backdrop-blur-sm",style:{boxShadow:`0 16px 32px -30px rgba(20,35,60,.48), inset 0 -7px 0 ${t.color}`},children:[e.jsx("div",{className:"absolute -right-6 -top-8 h-40 w-40 rounded-full blur-2xl",style:{backgroundColor:t.glow}}),e.jsxs("div",{className:"relative flex items-start justify-between gap-5",children:[e.jsx("span",{className:"text-[62px] sm:text-[66px] leading-none font-extrabold tracking-tight",style:{color:t.color},children:t.num}),e.jsx("div",{className:"flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-full shadow-[0_12px_24px_-18px_rgba(20,35,60,.58)]",style:{backgroundColor:t.glow},children:e.jsx(t.Icon,{size:44,strokeWidth:3.2,style:{color:t.color}})})]}),e.jsxs("div",{className:"relative mt-6",children:[e.jsxs("p",{className:"text-[21px] leading-[1.18] font-extrabold text-ink",children:[t.titleTop,e.jsx("br",{}),e.jsx("span",{style:{color:t.color},children:t.titleBottom})]}),e.jsx("div",{className:"mt-5 h-[3px] w-10 rounded-full",style:{backgroundColor:t.color}}),e.jsx("p",{className:"mt-7 text-[15px] leading-[1.55] text-muted max-w-[330px]",children:t.desc})]})]},t.num))})]})]})]})}function se(){return e.jsx("section",{className:"py-16 md:py-16 bg-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-8 lg:px-10",children:[e.jsxs("div",{className:"flex items-end justify-between flex-wrap gap-6 mb-12",children:[e.jsx(Q,{eyebrow:"What we build",title:"Bespoke engineering capabilities",description:"Full-lifecycle software engineering across web, mobile, cloud, QA, RAG, and multi-agent systems."}),e.jsxs(o,{to:"/services",className:"text-brand text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 hover:underline transition-all duration-300",children:["All services",e.jsx(f,{size:14})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 lg:auto-rows-[185px]",children:[e.jsxs(o,{to:"/services/website-development",className:`\r
          group relative overflow-hidden rounded-2xl\r
          border border-blue-200\r
          bg-white\r
          lg:row-span-2\r
          min-h-[380px]\r
          shadow-[0_4px_20px_rgba(37,99,235,0.06)]\r
          transition-all duration-300 ease-out\r
          hover:-translate-y-1\r
          hover:border-blue-400\r
          hover:shadow-[0_14px_35px_rgba(37,99,235,0.14)]\r
        `,children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50"}),e.jsxs("div",{className:`\r
            absolute right-[-35px] bottom-[-25px]\r
            w-[330px] h-[280px]\r
            transition-transform duration-500 ease-out\r
            group-hover:scale-[1.03]\r
          `,children:[e.jsx("div",{className:"absolute inset-0 rounded-[30px] bg-gradient-to-br from-blue-100/70 via-blue-50/60 to-blue-400/70 rotate-[-8deg]"}),e.jsxs("div",{className:"absolute right-4 bottom-5 w-[275px] h-[190px] rounded-xl bg-white shadow-2xl rotate-[-7deg] border border-blue-100 overflow-hidden",children:[e.jsxs("div",{className:"h-7 border-b border-blue-100 flex items-center gap-1.5 px-3",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-200"}),e.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-200"}),e.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-200"})]}),e.jsxs("div",{className:"p-5",children:[e.jsx("div",{className:"w-24 h-3 rounded bg-blue-100"}),e.jsx("div",{className:"mt-3 w-36 h-5 rounded bg-blue-500/80"}),e.jsx("div",{className:"mt-2 w-28 h-2 rounded bg-blue-100"}),e.jsxs("div",{className:"mt-6 flex gap-3",children:[e.jsx("div",{className:"w-20 h-14 rounded-lg bg-blue-50"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx("div",{className:"w-full h-2 rounded bg-blue-100"}),e.jsx("div",{className:"w-3/4 h-2 rounded bg-blue-100"}),e.jsx("div",{className:"w-1/2 h-2 rounded bg-blue-200"})]})]})]})]})]}),e.jsxs("div",{className:"relative z-10 p-7 h-full flex flex-col",children:[e.jsx("div",{className:"text-brand mb-5 transition-transform duration-300 group-hover:scale-110 origin-left",children:e.jsxs("svg",{width:"27",height:"27",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"14",rx:"2",stroke:"currentColor",strokeWidth:"1.8"}),e.jsx("path",{d:"M8 21h8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})}),e.jsx("h3",{className:"text-2xl font-extrabold text-ink leading-tight",children:"Website Development"}),e.jsx("p",{className:"mt-5 max-w-[285px] text-sm md:text-[15px] leading-[1.45] text-ink",children:"We build fast, responsive and SEO-friendly websites that help your business stand out online."}),e.jsx("span",{className:"mt-7 inline-flex items-center gap-2 text-brand text-sm font-medium transition-transform duration-300 group-hover:translate-x-1",children:"Learn more →"})]})]}),e.jsxs(o,{to:"/services/mobile-app-development",className:`\r
          group relative overflow-hidden rounded-2xl\r
          border border-blue-200\r
          bg-gradient-to-br from-white via-white to-blue-50\r
          shadow-[0_4px_20px_rgba(37,99,235,0.06)]\r
          transition-all duration-300 ease-out\r
          hover:-translate-y-1\r
          hover:border-blue-400\r
          hover:shadow-[0_14px_35px_rgba(37,99,235,0.14)]\r
        `,children:[e.jsx("div",{className:"absolute right-[-15px] top-[-15px] w-40 h-40 rounded-full bg-blue-100/70 blur-2xl"}),e.jsx("div",{className:`\r
            absolute right-4 bottom-[-15px]\r
            w-[105px] h-[190px]\r
            rounded-[22px]\r
            bg-gradient-to-br from-blue-100 to-blue-500\r
            rotate-[8deg] p-1 shadow-xl\r
            transition-transform duration-500 ease-out\r
            group-hover:scale-[1.04]\r
          `,children:e.jsxs("div",{className:"w-full h-full bg-white rounded-[19px] p-3",children:[e.jsx("div",{className:"mx-auto w-8 h-1 rounded-full bg-slate-200"}),e.jsx("div",{className:"mt-5 w-full h-3 rounded bg-blue-100"}),e.jsx("div",{className:"mt-2 w-3/4 h-2 rounded bg-blue-200"}),e.jsxs("div",{className:"mt-6 h-16 rounded-lg bg-blue-50 relative overflow-hidden",children:[e.jsx("div",{className:"absolute left-2 bottom-3 w-3 h-7 rounded bg-blue-300"}),e.jsx("div",{className:"absolute left-7 bottom-3 w-3 h-10 rounded bg-blue-400"}),e.jsx("div",{className:"absolute left-12 bottom-3 w-3 h-5 rounded bg-blue-500"})]})]})}),e.jsxs("div",{className:"relative z-10 p-6 h-full flex flex-col",children:[e.jsx("div",{className:"text-brand mb-3 transition-transform duration-300 group-hover:scale-110 origin-left",children:e.jsxs("svg",{width:"25",height:"25",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("rect",{x:"6",y:"2",width:"12",height:"20",rx:"2",stroke:"currentColor",strokeWidth:"1.8"}),e.jsx("circle",{cx:"12",cy:"18",r:"1",fill:"currentColor"})]})}),e.jsx("h3",{className:"text-xl font-extrabold text-ink leading-tight max-w-[300px]",children:"Mobile App Development"}),e.jsx("p",{className:"mt-2 text-sm leading-[1.4] text-ink max-w-[250px]",children:"Powerful mobile applications for Android & iOS that deliver seamless user experiences."}),e.jsx("span",{className:"mt-auto text-orange-500 text-sm font-medium transition-transform duration-300 group-hover:translate-x-1",children:"Learn more →"})]})]}),e.jsxs(o,{to:"/services/custom-software-development",className:`\r
          group relative overflow-hidden rounded-2xl\r
          border border-blue-200\r
          bg-gradient-to-br from-white via-white to-blue-50\r
          shadow-[0_4px_20px_rgba(37,99,235,0.06)]\r
          transition-all duration-300 ease-out\r
          hover:-translate-y-1\r
          hover:border-blue-400\r
          hover:shadow-[0_14px_35px_rgba(37,99,235,0.14)]\r
        `,children:[e.jsxs("div",{className:`\r
            absolute right-[-10px] top-[-15px] opacity-80\r
            transition-transform duration-500 ease-out\r
            group-hover:scale-[1.04]\r
          `,children:[e.jsx("div",{className:"w-36 h-36 rounded-2xl bg-blue-50 border border-blue-100 rotate-12"}),e.jsx("div",{className:"absolute top-10 right-8 w-24 h-20 rounded-xl bg-gradient-to-br from-blue-100 to-blue-500 shadow-xl -rotate-6 flex items-center justify-center",children:e.jsx("span",{className:"text-white text-3xl font-bold",children:"</>"})})]}),e.jsxs("div",{className:"relative z-10 p-6 h-full flex flex-col",children:[e.jsx("div",{className:"text-brand mb-3 transition-transform duration-300 group-hover:scale-110 origin-left",children:e.jsx("svg",{width:"27",height:"27",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("h3",{className:"text-xl font-extrabold text-ink leading-tight",children:"Custom Software Development"}),e.jsx("p",{className:"mt-2 text-sm leading-[1.4] text-ink max-w-[280px]",children:"Tailored software solutions designed to solve your unique business challenges."}),e.jsx("span",{className:"mt-auto text-brand text-sm font-medium transition-transform duration-300 group-hover:translate-x-1",children:"Learn more →"})]})]}),e.jsxs(o,{to:"/services/ui-ux-design",className:`\r
          group relative overflow-hidden rounded-2xl\r
          border border-orange-200\r
          bg-gradient-to-br from-white via-white to-orange-50\r
          shadow-[0_4px_20px_rgba(249,115,22,0.07)]\r
          lg:col-span-2\r
          transition-all duration-300 ease-out\r
          hover:-translate-y-1\r
          hover:border-orange-300\r
          hover:shadow-[0_14px_35px_rgba(249,115,22,0.16)]\r
        `,children:[e.jsxs("div",{className:`\r
            absolute right-[-15px] bottom-[-30px]\r
            w-[420px] h-[220px]\r
            transition-transform duration-500 ease-out\r
            group-hover:scale-[1.03]\r
          `,children:[e.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-200/70 rotate-[-3deg]"}),e.jsxs("div",{className:"absolute right-6 bottom-4 w-[320px] h-[170px] rounded-xl bg-white border border-orange-100 shadow-xl p-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"w-20 h-3 rounded bg-orange-100"}),e.jsx("div",{className:"ml-auto w-8 h-3 rounded bg-orange-200"})]}),e.jsxs("div",{className:"mt-5 flex gap-3",children:[e.jsx("div",{className:"w-20 h-24 rounded-lg bg-orange-50"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"w-32 h-4 rounded bg-orange-200"}),e.jsxs("div",{className:"mt-4 grid grid-cols-3 gap-2",children:[e.jsx("div",{className:"h-14 rounded bg-orange-50"}),e.jsx("div",{className:"h-14 rounded bg-orange-100"}),e.jsx("div",{className:"h-14 rounded bg-orange-200"})]}),e.jsx("div",{className:"mt-3 w-full h-2 rounded bg-orange-100"})]})]})]})]}),e.jsxs("div",{className:"relative z-10 p-6 h-full flex flex-col",children:[e.jsx("div",{className:"text-orange-500 mb-3 transition-transform duration-300 group-hover:scale-110 origin-left",children:e.jsxs("svg",{width:"27",height:"27",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2",stroke:"currentColor",strokeWidth:"1.8"}),e.jsx("path",{d:"M7 8h4M7 12h10M7 16h6",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]})}),e.jsx("h3",{className:"text-xl font-extrabold text-ink",children:"UI/UX Design"}),e.jsx("p",{className:"mt-3 text-sm md:text-[15px] leading-[1.4] text-ink max-w-[390px]",children:"We design intuitive and engaging interfaces that enhance user satisfaction and drive results."}),e.jsx("span",{className:"mt-auto text-brand text-sm font-medium transition-transform duration-300 group-hover:translate-x-1",children:"Learn more →"})]})]}),e.jsxs(o,{to:"/services/ai-chatbot-automation",className:`\r
          group relative overflow-hidden rounded-2xl\r
          border border-blue-200\r
          bg-gradient-to-r from-white to-blue-100\r
          shadow-[0_4px_20px_rgba(37,99,235,0.06)]\r
          lg:col-span-2\r
          transition-all duration-300 ease-out\r
          hover:-translate-y-1\r
          hover:border-blue-400\r
          hover:shadow-[0_14px_35px_rgba(37,99,235,0.14)]\r
        `,children:[e.jsxs("div",{className:`\r
            absolute right-10 bottom-[-20px]\r
            w-[220px] h-[180px]\r
            transition-transform duration-500 ease-out\r
            group-hover:scale-[1.04]\r
          `,children:[e.jsx("div",{className:"absolute right-5 bottom-8 w-[130px] h-[95px] rounded-[35px] bg-gradient-to-br from-white to-blue-200 shadow-xl border border-blue-100",children:e.jsxs("div",{className:"absolute top-8 left-8 right-8 h-10 rounded-full bg-slate-900 flex items-center justify-center gap-4",children:[e.jsx("span",{className:"w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]"}),e.jsx("span",{className:"w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]"})]})}),e.jsx("div",{className:"absolute right-[-5px] top-2 w-14 h-10 rounded-full bg-blue-500 rotate-12 opacity-80"}),e.jsx("div",{className:"absolute left-3 bottom-4 w-12 h-12 rounded-full bg-blue-100"})]}),e.jsxs("div",{className:"relative z-10 p-6 h-full flex flex-col",children:[e.jsx("div",{className:"text-brand mb-3 transition-transform duration-300 group-hover:scale-110 origin-left",children:e.jsxs("svg",{width:"27",height:"27",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M7 8h10a4 4 0 014 4v1a4 4 0 01-4 4H9l-4 3v-7a5 5 0 012-5z",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),e.jsx("circle",{cx:"9",cy:"13",r:"1",fill:"currentColor"}),e.jsx("circle",{cx:"12",cy:"13",r:"1",fill:"currentColor"}),e.jsx("circle",{cx:"15",cy:"13",r:"1",fill:"currentColor"})]})}),e.jsx("h3",{className:"text-xl font-extrabold text-ink",children:"AI Chatbot & Automation"}),e.jsx("p",{className:"mt-3 text-sm md:text-[15px] leading-[1.4] text-ink max-w-[390px]",children:"Automate conversations, reduce manual work, and improve customer support with AI."}),e.jsx("span",{className:"mt-auto text-brand text-sm font-medium transition-transform duration-300 group-hover:translate-x-1",children:"Learn more →"})]})]}),e.jsxs(o,{to:"/services/cloud-devops",className:`\r
          group relative overflow-hidden rounded-2xl\r
          border border-blue-200\r
          bg-gradient-to-br from-white via-white to-blue-100\r
          shadow-[0_4px_20px_rgba(37,99,235,0.06)]\r
          lg:row-span-2\r
          transition-all duration-300 ease-out\r
          hover:-translate-y-1\r
          hover:border-blue-400\r
          hover:shadow-[0_14px_35px_rgba(37,99,235,0.14)]\r
        `,children:[e.jsxs("div",{className:`\r
            absolute bottom-[-10px] right-[-10px]\r
            w-[250px] h-[260px]\r
            transition-transform duration-500 ease-out\r
            group-hover:scale-[1.04]\r
          `,children:[e.jsx("div",{className:"absolute bottom-4 right-8 w-[170px] h-[120px] rounded-[50%] bg-blue-100 blur-xl"}),e.jsx("div",{className:"absolute bottom-14 right-12 w-[150px] h-[75px] rounded-full bg-white shadow-xl border border-blue-100"}),e.jsx("div",{className:"absolute bottom-16 right-20 w-[115px] h-[70px] rounded-full bg-blue-100",children:e.jsx("div",{className:"absolute inset-4 rounded-full bg-blue-50"})}),e.jsx("div",{className:"absolute bottom-0 right-12 w-[130px] h-[90px] rounded-xl bg-gradient-to-br from-white to-blue-100 border border-blue-200 shadow-lg",children:e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsx("div",{className:"h-4 rounded bg-blue-200"}),e.jsx("div",{className:"h-4 rounded bg-blue-100"}),e.jsx("div",{className:"h-4 rounded bg-blue-200"})]})})]}),e.jsxs("div",{className:"relative z-10 p-7 h-full flex flex-col",children:[e.jsx("div",{className:"text-brand mb-5 transition-transform duration-300 group-hover:scale-110 origin-left",children:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M7 18h10a4 4 0 00.5-7.97A5.5 5.5 0 007 9.5a4.5 4.5 0 000 9z",stroke:"currentColor",strokeWidth:"1.7"}),e.jsx("path",{d:"M9 14l-2 2 2 2M15 14l2 2-2 2",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]})}),e.jsx("h3",{className:"text-2xl font-extrabold text-ink",children:"Cloud & DevOps"}),e.jsx("p",{className:"mt-5 text-sm md:text-[15px] leading-[1.45] text-ink max-w-[285px]",children:"Scalable cloud solutions and DevOps practices to ensure performance, reliability, and security."}),e.jsx("span",{className:"mt-auto text-brand text-sm font-medium transition-transform duration-300 group-hover:translate-x-1",children:"Learn more →"})]})]}),e.jsxs(o,{to:"/services/cybersecurity",className:`\r
          group relative overflow-hidden rounded-2xl\r
          border border-blue-200\r
          bg-gradient-to-br from-white to-blue-50\r
          shadow-[0_4px_20px_rgba(37,99,235,0.06)]\r
          transition-all duration-300 ease-out\r
          hover:-translate-y-1\r
          hover:border-blue-400\r
          hover:shadow-[0_14px_35px_rgba(37,99,235,0.14)]\r
        `,children:[e.jsxs("div",{className:`\r
            absolute right-5 bottom-[-10px]\r
            w-32 h-36\r
            transition-transform duration-500 ease-out\r
            group-hover:scale-[1.05]\r
          `,children:[e.jsx("div",{className:"absolute inset-3 bg-blue-500/15 blur-xl rounded-full"}),e.jsx("div",{className:"absolute inset-4 bg-gradient-to-br from-blue-300 to-blue-700 [clip-path:polygon(50%_0%,90%_15%,85%_65%,50%_100%,15%_65%,10%_15%)] shadow-xl"}),e.jsx("div",{className:"absolute inset-[42px] border-2 border-white rounded-full"})]}),e.jsxs("div",{className:"relative z-10 p-5 h-full flex flex-col",children:[e.jsx("div",{className:"text-brand mb-3 transition-transform duration-300 group-hover:scale-110 origin-left",children:e.jsx("svg",{width:"25",height:"25",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M12 3l7 3v5c0 4.5-2.9 8.1-7 10-4.1-1.9-7-5.5-7-10V6l7-3z",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"})})}),e.jsx("h3",{className:"text-xl font-extrabold text-ink",children:"Cybersecurity"}),e.jsx("p",{className:"mt-2 text-sm leading-[1.35] text-ink max-w-[260px]",children:"Protect your data and systems with our robust security solutions and best practices."}),e.jsx("span",{className:"mt-auto text-brand text-sm font-medium transition-transform duration-300 group-hover:translate-x-1",children:"Learn more →"})]})]}),e.jsxs(o,{to:"/services/software-maintenance",className:`\r
          group relative overflow-hidden rounded-2xl\r
          border border-orange-200\r
          bg-gradient-to-br from-white via-white to-orange-50\r
          shadow-[0_4px_20px_rgba(249,115,22,0.07)]\r
          transition-all duration-300 ease-out\r
          hover:-translate-y-1\r
          hover:border-orange-300\r
          hover:shadow-[0_14px_35px_rgba(249,115,22,0.16)]\r
        `,children:[e.jsxs("div",{className:`\r
            absolute right-5 bottom-[-10px]\r
            w-32 h-32\r
            transition-transform duration-500 ease-out\r
            group-hover:scale-[1.05]\r
            group-hover:rotate-3\r
          `,children:[e.jsx("div",{className:"absolute inset-2 rounded-full border-[18px] border-orange-100"}),e.jsx("div",{className:"absolute inset-7 rounded-full bg-orange-500"}),e.jsx("div",{className:"absolute inset-[43px] rounded-full bg-white"})]}),e.jsxs("div",{className:"relative z-10 p-5 h-full flex flex-col",children:[e.jsx("div",{className:"text-orange-500 mb-3 transition-transform duration-300 group-hover:scale-110 origin-left",children:e.jsxs("svg",{width:"25",height:"25",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M18 8a6 6 0 00-11.5 2",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round"}),e.jsx("path",{d:"M6 16a6 6 0 0011.5-2",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round"}),e.jsx("path",{d:"M4 10l2-2 2 2M20 14l-2 2-2-2",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("h3",{className:"text-xl font-extrabold text-ink leading-tight",children:"Software Maintenance & Support"}),e.jsx("p",{className:"mt-2 text-sm leading-[1.35] text-ink max-w-[300px]",children:"We keep your software running smoothly with continuous support and maintenance."}),e.jsx("span",{className:"mt-auto text-orange-500 text-sm font-medium transition-transform duration-300 group-hover:translate-x-1",children:"Learn more →"})]})]}),e.jsxs(o,{to:"/services/quality-assurance",className:`\r
          group relative overflow-hidden rounded-2xl\r
          border border-blue-200\r
          bg-white\r
          lg:row-span-2\r
          min-h-[380px]\r
          shadow-[0_4px_20px_rgba(37,99,235,0.06)]\r
          transition-all duration-300 ease-out\r
          hover:-translate-y-1\r
          hover:border-blue-400\r
          hover:shadow-[0_14px_35px_rgba(37,99,235,0.14)]\r
        `,children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50"}),e.jsxs("div",{className:`\r
            absolute right-[-25px] bottom-[-15px]\r
            w-[280px] h-[260px]\r
            transition-transform duration-500 ease-out\r
            group-hover:scale-[1.04]\r
          `,children:[e.jsx("div",{className:"absolute inset-0 rounded-full bg-blue-100/60 blur-3xl"}),e.jsxs("div",{className:"absolute right-8 bottom-8 w-[190px] h-[170px] rounded-2xl bg-white border border-blue-100 shadow-xl rotate-[-6deg] p-5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"w-20 h-3 rounded bg-blue-100"}),e.jsx("div",{className:"w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center",children:e.jsx("span",{className:"text-blue-600 text-sm",children:"✓"})})]}),e.jsxs("div",{className:"mt-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] flex items-center justify-center",children:"✓"}),e.jsx("div",{className:"w-24 h-2 rounded bg-blue-100"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-5 h-5 rounded-full bg-blue-400 text-white text-[10px] flex items-center justify-center",children:"✓"}),e.jsx("div",{className:"w-20 h-2 rounded bg-blue-100"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-5 h-5 rounded-full bg-blue-300 text-white text-[10px] flex items-center justify-center",children:"✓"}),e.jsx("div",{className:"w-28 h-2 rounded bg-blue-100"})]})]})]})]}),e.jsxs("div",{className:"relative z-10 p-7 h-full flex flex-col",children:[e.jsx("div",{className:"text-brand mb-5 transition-transform duration-300 group-hover:scale-110 origin-left",children:e.jsxs("svg",{width:"27",height:"27",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M12 3l7 3v5c0 4.5-2.9 8.1-7 10-4.1-1.9-7-5.5-7-10V6l7-3z",stroke:"currentColor",strokeWidth:"1.8"}),e.jsx("path",{d:"M8 12l2.5 2.5L16 9",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("h3",{className:"text-2xl font-extrabold text-ink",children:"Quality Assurance (QA)"}),e.jsx("p",{className:"mt-5 max-w-[285px] text-sm md:text-[15px] leading-[1.45] text-ink",children:"Rigorous testing and quality processes to deliver reliable, high-performance and bug-free software."}),e.jsx("span",{className:"mt-7 inline-flex items-center gap-2 text-brand text-sm font-medium transition-transform duration-300 group-hover:translate-x-1",children:"Learn more →"})]})]}),e.jsxs(o,{to:"/services/it-consulting",className:`\r
          group relative overflow-hidden rounded-2xl\r
          border border-blue-200\r
          bg-gradient-to-br from-white via-white to-blue-50\r
          shadow-[0_4px_20px_rgba(37,99,235,0.06)]\r
          transition-all duration-300 ease-out\r
          hover:-translate-y-1\r
          hover:border-blue-400\r
          hover:shadow-[0_14px_35px_rgba(37,99,235,0.14)]\r
        `,children:[e.jsxs("div",{className:`\r
            absolute right-[-15px] bottom-[-20px]\r
            w-[190px] h-[180px]\r
            transition-transform duration-500 ease-out\r
            group-hover:scale-[1.04]\r
          `,children:[e.jsx("div",{className:"absolute inset-0 rounded-full bg-blue-100/70 blur-2xl"}),e.jsxs("div",{className:"absolute right-5 bottom-5 w-[125px] h-[120px] rounded-2xl bg-white border border-blue-100 shadow-xl p-4 rotate-6",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-blue-100"}),e.jsx("div",{className:"w-12 h-2 rounded bg-blue-100 mt-1"})]}),e.jsxs("div",{className:"mt-5 space-y-2",children:[e.jsx("div",{className:"w-full h-2 rounded bg-blue-200"}),e.jsx("div",{className:"w-3/4 h-2 rounded bg-blue-100"}),e.jsx("div",{className:"w-full h-2 rounded bg-blue-100"})]}),e.jsx("div",{className:"mt-4 w-12 h-8 rounded bg-blue-500"})]})]}),e.jsxs("div",{className:"relative z-10 p-6 h-full flex flex-col",children:[e.jsx("div",{className:"text-brand mb-3 transition-transform duration-300 group-hover:scale-110 origin-left",children:e.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M4 20V9l8-5 8 5v11",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),e.jsx("path",{d:"M8 20v-6h8v6M9 9h6",stroke:"currentColor",strokeWidth:"1.8"})]})}),e.jsx("h3",{className:"text-xl font-extrabold text-ink",children:"IT Consulting"}),e.jsx("p",{className:"mt-2 text-sm leading-[1.4] text-ink max-w-[260px]",children:"Strategic technology guidance that helps businesses make smarter decisions."}),e.jsx("span",{className:"mt-auto text-brand text-sm font-medium transition-transform duration-300 group-hover:translate-x-1",children:"Learn more →"})]})]}),e.jsxs(o,{to:"/services/vc-funding",className:`\r
          group relative overflow-hidden rounded-2xl\r
          border border-blue-200\r
          bg-gradient-to-br from-white via-white to-blue-50\r
          shadow-[0_4px_20px_rgba(37,99,235,0.06)]\r
          transition-all duration-300 ease-out\r
          hover:-translate-y-1\r
          hover:border-blue-400\r
          hover:shadow-[0_14px_35px_rgba(37,99,235,0.14)]\r
        `,children:[e.jsxs("div",{className:`\r
            absolute right-[-10px] bottom-[-5px]\r
            w-[190px] h-[170px]\r
            transition-transform duration-500 ease-out\r
            group-hover:scale-[1.04]\r
          `,children:[e.jsx("div",{className:"absolute inset-0 bg-blue-100/50 blur-3xl rounded-full"}),e.jsxs("div",{className:"absolute right-8 bottom-8 flex items-end gap-3",children:[e.jsx("div",{className:"w-7 h-12 rounded-t-md bg-blue-200"}),e.jsx("div",{className:"w-7 h-20 rounded-t-md bg-blue-300"}),e.jsx("div",{className:"w-7 h-28 rounded-t-md bg-blue-500"}),e.jsx("div",{className:"absolute right-[-15px] top-[-20px] text-blue-600 text-4xl font-bold",children:"↗"})]})]}),e.jsxs("div",{className:"relative z-10 p-6 h-full flex flex-col",children:[e.jsx("div",{className:"text-brand mb-3 transition-transform duration-300 group-hover:scale-110 origin-left",children:e.jsxs("svg",{width:"27",height:"27",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M4 18V9M9 18v-5M14 18v-8M19 18V4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),e.jsx("path",{d:"M4 7l5-3 5 2 5-4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("h3",{className:"text-xl font-extrabold text-ink",children:"VC Funding"}),e.jsx("p",{className:"mt-2 text-sm leading-[1.4] text-ink max-w-[270px]",children:"Helping startups and growing businesses connect with the right funding opportunities."}),e.jsx("span",{className:"mt-auto text-brand text-sm font-medium transition-transform duration-300 group-hover:translate-x-1",children:"Learn more →"})]})]}),e.jsxs(o,{to:"/services/digital-marketing-seo",className:`\r
          group relative overflow-hidden rounded-2xl\r
          border border-orange-200\r
          bg-gradient-to-br from-white via-white to-orange-50\r
          shadow-[0_4px_20px_rgba(249,115,22,0.07)]\r
          lg:col-span-2\r
          transition-all duration-300 ease-out\r
          hover:-translate-y-1\r
          hover:border-orange-300\r
          hover:shadow-[0_14px_35px_rgba(249,115,22,0.16)]\r
        `,children:[e.jsxs("div",{className:`\r
            absolute right-[-15px] bottom-[-25px]\r
            w-[400px] h-[220px]\r
            transition-transform duration-500 ease-out\r
            group-hover:scale-[1.03]\r
          `,children:[e.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-200/70 rotate-[-3deg]"}),e.jsx("div",{className:"absolute right-8 bottom-5 w-[300px] h-[155px] rounded-xl bg-white border border-orange-100 shadow-xl p-5",children:e.jsxs("div",{className:"flex items-end gap-4 h-full",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"w-20 h-3 rounded bg-orange-100"}),e.jsxs("div",{className:"mt-5 flex items-end gap-2 h-20",children:[e.jsx("div",{className:"w-5 h-8 rounded-t bg-orange-200"}),e.jsx("div",{className:"w-5 h-12 rounded-t bg-orange-300"}),e.jsx("div",{className:"w-5 h-16 rounded-t bg-orange-400"}),e.jsx("div",{className:"w-5 h-20 rounded-t bg-orange-500"})]})]}),e.jsx("div",{className:"w-28 h-20 rounded-lg bg-orange-50 flex items-center justify-center",children:e.jsx("span",{className:"text-orange-500 text-3xl font-bold",children:"↗"})})]})})]}),e.jsxs("div",{className:"relative z-10 p-6 h-full flex flex-col",children:[e.jsx("div",{className:"text-orange-500 mb-3 transition-transform duration-300 group-hover:scale-110 origin-left",children:e.jsxs("svg",{width:"27",height:"27",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M4 18V9M9 18v-5M14 18v-8M19 18V4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),e.jsx("path",{d:"M4 7l5-3 5 2 5-4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("h3",{className:"text-xl font-extrabold text-ink",children:"Digital Marketing & SEO"}),e.jsx("p",{className:"mt-3 text-sm md:text-[15px] leading-[1.4] text-ink max-w-[390px]",children:"Data-driven digital marketing and SEO strategies that improve visibility, reach and business growth."}),e.jsx("span",{className:"mt-auto text-orange-500 text-sm font-medium transition-transform duration-300 group-hover:translate-x-1",children:"Learn more →"})]})]})]})]})})}const ne=[{title:"Learnova",category:"Education Platform",description:"A full-stack e-learning platform designed for students, instructors and administrators with dedicated dashboards and learning management capabilities.",image:"/Learnova.png",href:"/projects/learnova",tags:["React","Node.js","Express","Prisma","PostgreSQL"],position:"lg:absolute lg:left-[7%] lg:top-[30px] lg:w-[35%] lg:-rotate-[5deg] lg:z-10"},{title:"HireBridge",category:"Recruitment Platform",description:"A role-based job scraping and recruitment platform that connects students with job opportunities and provides hiring managers with recruitment tools.",image:"/Hirebridge.png",href:"/projects/hirebridge",tags:["React","Vite","Node.js","Express","Prisma","PostgreSQL"],position:"lg:absolute lg:left-1/2 lg:top-0 lg:w-[35%] lg:-translate-x-1/2 lg:z-30"},{title:"Bondly",category:"Travel Discovery",description:"A travel discovery platform that helps users discover, explore, post stories, chat with people and connect with travel destinations and experiences.",image:"/Bondly.png",href:"/projects/bondly",tags:["React","Node.js","Hono","PostgreSQL","Redis"],position:"lg:absolute lg:right-[7%] lg:top-[26px] lg:w-[35%] lg:rotate-[5deg] lg:z-20"}];function ae(){return e.jsxs("section",{className:"relative overflow-x-hidden overflow-y-visible site-surface py-14 md:py-16",children:[e.jsx("div",{className:"pointer-events-none absolute inset-x-0 top-[52%] h-64 bg-[radial-gradient(circle,rgba(23,105,213,.08),transparent_66%)]"}),e.jsxs("div",{className:"relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12",children:[e.jsxs("div",{className:"mx-auto max-w-4xl text-center",children:[e.jsx("p",{className:"eyebrow justify-center text-sm font-semibold text-brand tracking-widest before:w-14 after:h-px after:w-14 after:bg-current after:opacity-70",children:"Industries we serve"}),e.jsxs("h2",{className:"mt-4 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[58px] font-extrabold leading-[0.98] tracking-tight text-black",children:["Projects That",e.jsx("br",{}),e.jsx("span",{className:"text-brand",children:"Make an Impact"})]}),e.jsxs("p",{className:"mx-auto mt-5 max-w-3xl text-base md:text-lg leading-relaxed text-ink",children:["We build digital solutions that drive growth, solve real problems",e.jsx("br",{className:"hidden md:block"}),"and create long-lasting impact for the businesses."]})]}),e.jsx("div",{className:"relative mt-9 grid grid-cols-1 gap-7 md:grid-cols-3 lg:block lg:h-[505px] lg:pb-8",children:ne.map((t,n)=>e.jsxs(o,{to:t.href,className:`
                group relative block overflow-hidden rounded-[24px]
                border-2 border-[#74aefb] bg-white
                shadow-[0_20px_38px_-24px_rgba(23,105,213,.58)]
                transition-all duration-500 ease-out
                hover:-translate-y-3 hover:rotate-0 hover:scale-[1.025]
                hover:shadow-[0_30px_52px_-22px_rgba(23,105,213,.72)]
                focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-300
                ${t.position}
              `,style:{animation:`project-card-rise .7s ${n*120}ms ease-out both`},children:[e.jsx("div",{className:"absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[#8ec1ff] bg-white/90 text-brand shadow-[0_10px_22px_-14px_rgba(23,105,213,.7)] backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white",children:e.jsx(T,{size:17,strokeWidth:2.5})}),e.jsx("div",{className:"p-3.5 pb-0",children:e.jsxs("div",{className:"relative h-[200px] overflow-hidden rounded-[16px] bg-[#071021] shadow-[inset_0_0_0_1px_rgba(255,255,255,.15)] md:h-[190px] lg:h-[185px]",children:[e.jsx("img",{src:t.image,alt:`${t.title} project screenshot`,className:"h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"})]})}),e.jsxs("div",{className:"flex min-h-[270px] flex-col p-6 md:min-h-[300px] lg:min-h-[250px]",children:[e.jsx("p",{className:"text-xs font-extrabold uppercase tracking-wide text-brand",children:t.category}),e.jsx("h3",{className:"mt-4 font-display text-2xl font-extrabold leading-tight text-black md:text-[26px]",children:t.title}),e.jsx("p",{className:"mt-4 text-sm font-semibold leading-[1.45] text-black",children:t.description}),e.jsx("div",{className:"mt-5 flex flex-wrap gap-2",children:t.tags.slice(0,4).map(s=>e.jsx("span",{className:"rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand",children:s},s))}),e.jsxs("span",{className:"mt-auto inline-flex items-center justify-end gap-2 pt-5 text-sm font-extrabold text-brand transition-all duration-300 group-hover:gap-3",children:["View project",e.jsx(f,{size:16})]})]})]},t.title))})]}),e.jsx("style",{children:`
        @keyframes project-card-rise {
          from {
            opacity: 0;
            transform: translateY(28px) scale(.96);
          }
          to {
            opacity: 1;
          }
        }
      `})]})}const d=[{id:1,name:"Gaurav Kr Tripathi",role:"Founder, MD & CTO",image:"/cto-profile.png",accent:"orange",shortQuote:"Hi, I've been leading technology teams and building innovative solutions for years now..."},{id:2,name:"Akshit Ujjain",role:"Co-Founder & CEO",image:"/Akshit Ujjain.png",accent:"purple",shortQuote:"Hi, we have been building, managing and growing innovative technology solutions together..."}],g=[{id:1,name:"Ananya Deshmukh",role:"Founder & Director",location:"Mumbai, India",image:"/Priya_Portraits.png",quote:'"I must say, Kalpanaaa truly understands what its clients want. Their exceptional problem-solving skills, proactive methods and appealing front-end designs make them a trusted technology partner."'},{id:2,name:"Rahul Verma",role:"Technology Director",location:"Bengaluru, India",image:"/Anmol_Portraits.png",quote:'"The team consistently delivers thoughtful engineering solutions with strong attention to quality, scalability and user experience. Their approach made the entire development process smooth and reliable."'},{id:3,name:"Sneha Iyer",role:"Founder & CEO",location:"Hyderabad, India",image:"/Priya_Portraits.png",quote:'"Their ability to understand complex business requirements and turn them into reliable digital products has been exceptional. The team delivered a solution that exceeded our expectations."'}];function ie(){const[t,n]=c.useState(0),s=g[t],r=()=>{n(a=>a===0?g.length-1:a-1)},i=()=>{n(a=>a===g.length-1?0:a+1)};return e.jsx("section",{className:"relative overflow-hidden bg-[#f8fafc] py-20 md:py-20",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-8 lg:px-12",children:[e.jsxs("div",{className:"text-center max-w-4xl mx-auto",children:[e.jsx("div",{className:"flex items-center justify-center gap-4 mb-5",children:e.jsx("p",{className:"eyebrow text-sm font-semibold text-brand tracking-widest",children:"Leadership"})}),e.jsxs("h2",{className:`\r
              font-display\r
              text-4xl\r
              sm:text-5xl\r
              md:text-6xl\r
              font-extrabold\r
              leading-tight\r
              text-ink\r
            `,children:["Meet the people behind"," ",e.jsx("span",{className:"text-brand",children:"our success"})]}),e.jsx("p",{className:`\r
              mt-4\r
              text-base\r
              md:text-lg\r
              text-muted\r
              max-w-3xl\r
              mx-auto\r
              leading-relaxed\r
            `,children:"Meet the experienced leaders who bring together technology, strategy and innovation to build meaningful digital solutions."})]}),e.jsxs("div",{className:`\r
            mt-12\r
            md:mt-14\r
            grid\r
            grid-cols-1\r
            lg:grid-cols-[1.15fr_1.65fr]\r
            gap-6\r
            items-stretch\r
          `,children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5",children:[e.jsxs("div",{className:`\r
                group\r
                overflow-hidden\r
                rounded-[22px]\r
                border\r
                border-orange-100\r
                bg-white\r
                shadow-[0_8px_30px_rgba(15,23,42,0.06)]\r
                transition-all\r
                duration-300\r
                hover:-translate-y-1\r
                hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)]\r
              `,children:[e.jsxs("div",{className:`\r
                  relative\r
                  h-[205px]\r
                  overflow-hidden\r
                  bg-gradient-to-br\r
                  from-[#ff9468]\r
                  via-[#ff7043]\r
                  to-[#ff5722]\r
                `,children:[e.jsx("div",{className:`\r
                    absolute\r
                    right-4\r
                    top-4\r
                    z-10\r
                    flex\r
                    h-10\r
                    w-10\r
                    items-center\r
                    justify-center\r
                    rounded-full\r
                    bg-white\r
                    text-[#ff7043]\r
                    shadow-sm\r
                  `,children:e.jsx(p,{size:17,fill:"currentColor"})}),e.jsx("img",{src:d[0].image,alt:d[0].name,className:`\r
                    absolute\r
                    bottom-0\r
                    left-1/2\r
                    h-[190px]\r
                    w-[155px]\r
                    -translate-x-1/2\r
                    object-cover\r
                    object-top\r
                    transition-transform\r
                    duration-500\r
                    group-hover:scale-[1.03]\r
                  `})]}),e.jsxs("div",{className:"p-5 md:p-6",children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:`\r
                      mt-1\r
                      h-[76px]\r
                      w-1\r
                      flex-shrink-0\r
                      rounded-full\r
                      bg-[#ff7043]\r
                    `}),e.jsxs("p",{className:`\r
                      text-sm\r
                      leading-relaxed\r
                      text-ink\r
                    `,children:['"',d[0].shortQuote,'"']})]}),e.jsxs("div",{className:"mt-10",children:[e.jsx("h3",{className:`\r
                      text-base\r
                      font-extrabold\r
                      uppercase\r
                      text-ink\r
                    `,children:d[0].name}),e.jsx("p",{className:`\r
                      mt-1\r
                      text-xs\r
                      font-bold\r
                      uppercase\r
                      tracking-wider\r
                      text-[#ff5722]\r
                    `,children:d[0].role})]})]})]}),e.jsxs("div",{className:`\r
                group\r
                overflow-hidden\r
                rounded-[22px]\r
                border\r
                border-purple-100\r
                bg-white\r
                shadow-[0_8px_30px_rgba(15,23,42,0.06)]\r
                transition-all\r
                duration-300\r
                hover:-translate-y-1\r
                hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)]\r
              `,children:[e.jsxs("div",{className:`\r
                  relative\r
                  h-[205px]\r
                  overflow-hidden\r
                  bg-gradient-to-br\r
                  from-[#a78bfa]\r
                  via-[#8b5cf6]\r
                  to-[#7c3aed]\r
                `,children:[e.jsx("div",{className:`\r
                    absolute\r
                    right-4\r
                    top-4\r
                    z-10\r
                    flex\r
                    h-10\r
                    w-10\r
                    items-center\r
                    justify-center\r
                    rounded-full\r
                    bg-white\r
                    text-[#7c3aed]\r
                    shadow-sm\r
                  `,children:e.jsx(p,{size:17,fill:"currentColor"})}),e.jsx("img",{src:d[1].image,alt:d[1].name,className:`\r
                    absolute\r
                    bottom-0\r
                    left-1/2\r
                    h-[190px]\r
                    w-[170px]\r
                    -translate-x-1/2\r
                    object-cover\r
                    object-top\r
                    transition-transform\r
                    duration-500\r
                    group-hover:scale-[1.03]\r
                  `})]}),e.jsxs("div",{className:"p-5 md:p-6",children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:`\r
                      mt-1\r
                      h-[76px]\r
                      w-1\r
                      flex-shrink-0\r
                      rounded-full\r
                      bg-[#7c3aed]\r
                    `}),e.jsxs("p",{className:`\r
                      text-sm\r
                      leading-relaxed\r
                      text-ink\r
                    `,children:['"',d[1].shortQuote,'"']})]}),e.jsxs("div",{className:"mt-10",children:[e.jsx("h3",{className:`\r
                      text-base\r
                      font-extrabold\r
                      uppercase\r
                      text-ink\r
                    `,children:d[1].name}),e.jsx("p",{className:`\r
                      mt-1\r
                      text-xs\r
                      font-bold\r
                      uppercase\r
                      tracking-wider\r
                      text-[#7c3aed]\r
                    `,children:d[1].role})]})]})]})]}),e.jsx("div",{className:`\r
              relative\r
              overflow-hidden\r
              rounded-[22px]\r
              border\r
              border-line\r
              bg-white\r
              shadow-[0_8px_30px_rgba(15,23,42,0.06)]\r
            `,children:e.jsxs("div",{className:`\r
                flex\r
                min-h-[390px]\r
                flex-col\r
                justify-between\r
                p-7\r
                md:p-9\r
                lg:p-10\r
              `,children:[e.jsx("div",{children:e.jsx(p,{size:25,className:"text-[#ff7043]",fill:"currentColor"})}),e.jsx("div",{className:"flex-1 flex items-center",children:e.jsxs("div",{className:`\r
                    relative\r
                    my-8\r
                    pl-5\r
                    md:pl-6\r
                  `,children:[e.jsx("div",{className:`\r
                      absolute\r
                      left-0\r
                      top-0\r
                      h-full\r
                      w-[3px]\r
                      rounded-full\r
                      bg-brand\r
                    `}),e.jsx("p",{className:`\r
                      text-base\r
                      md:text-lg\r
                      leading-relaxed\r
                      text-ink\r
                    `,children:s.quote})]})}),e.jsx("div",{className:"flex justify-end",children:e.jsx(p,{size:25,className:`\r
                    rotate-180\r
                    text-[#ff7043]\r
                  `,fill:"currentColor"})}),e.jsx("div",{className:"mt-8 border-t border-line"}),e.jsxs("div",{className:`\r
                  mt-7\r
                  flex\r
                  items-center\r
                  gap-4\r
                `,children:[e.jsx("div",{className:`\r
                    h-12\r
                    w-12\r
                    flex-shrink-0\r
                    overflow-hidden\r
                    rounded-full\r
                    bg-brand\r
                  `,children:e.jsx("img",{src:s.image,alt:s.name,className:`\r
                      h-full\r
                      w-full\r
                      object-cover\r
                    `})}),e.jsxs("div",{children:[e.jsx("h3",{className:`\r
                      text-base\r
                      font-extrabold\r
                      text-ink\r
                    `,children:s.name}),e.jsxs("p",{className:"mt-1 text-sm text-muted",children:[s.role,e.jsx("span",{className:"mx-1.5 text-brand",children:"•"}),s.location]})]})]})]})})]}),e.jsxs("div",{className:`\r
            mt-6\r
            flex\r
            items-center\r
            justify-between\r
          `,children:[e.jsx("div",{className:"flex items-center gap-2",children:g.map((a,x)=>e.jsx("button",{type:"button",onClick:()=>n(x),"aria-label":`Go to customer review ${x+1}`,className:`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  ${t===x?"w-9 bg-brand":"w-3 bg-slate-200 hover:bg-slate-300"}
                `},a.id))}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{type:"button",onClick:r,"aria-label":"Previous customer review",className:`\r
                flex\r
                h-10\r
                w-10\r
                items-center\r
                justify-center\r
                rounded-full\r
                border\r
                border-line\r
                bg-white\r
                text-ink\r
                shadow-sm\r
                transition-all\r
                duration-200\r
                hover:border-brand\r
                hover:text-brand\r
                hover:shadow-md\r
              `,children:e.jsx(D,{size:18})}),e.jsx("button",{type:"button",onClick:i,"aria-label":"Next customer review",className:`\r
                flex\r
                h-10\r
                w-10\r
                items-center\r
                justify-center\r
                rounded-full\r
                border\r
                border-brand\r
                bg-white\r
                text-brand\r
                shadow-sm\r
                transition-all\r
                duration-200\r
                hover:bg-brand\r
                hover:text-white\r
                hover:shadow-md\r
              `,children:e.jsx(q,{size:18})})]})]})]})})}const b=[{number:"01",navTitle:"Discover",navSubtitle:"Understand the opportunity",pill:"STEP 01",title:"Discovery & Strategy",color:"#1769d5",light:"#edf5ff",glow:"rgba(23,105,213,.8)",description:"We dive deep into your business, users, market, and goals to define a clear strategy and product roadmap.",image:"/development-step-1.jpeg",points:["Business & requirement analysis","Technical planning & roadmap","User research & interviews","Competitor analysis"]},{number:"02",navTitle:"Design",navSubtitle:"Shape the experience",pill:"STEP 02",title:"UX/UI Design",color:"#6d3df4",light:"#f2efff",glow:"rgba(109,61,244,.68)",description:"We turn strategy into intuitive, engaging designs that deliver seamless user experiences and strong visual impact.",image:"/development-step-2.jpeg",points:["User flows & information architecture","Interactive prototypes","Wireframes & layouts","Usability testing","UI design & design system","Design for all devices"]},{number:"03",navTitle:"Develop",navSubtitle:"Build the solution",pill:"STEP 03",title:"Development & Testing",color:"#0c9fc2",light:"#eafaff",glow:"rgba(12,159,194,.68)",description:"We bring designs to life with clean, scalable code and rigorous testing to ensure performance, security, and reliability at every step.",image:"/development-step-3.jpeg",points:["Frontend development","Database design & optimization","Backend development","QA & testing","API integration","Performance & security"]},{number:"04",navTitle:"Launch",navSubtitle:"Take it to the world",pill:"STEP 04",title:"Deployment & Launch",color:"#ff6b18",light:"#fff3eb",glow:"rgba(255,107,24,.68)",description:"We ensure a smooth launch to production with rigorous checks, monitoring, and ongoing support for long-term success.",image:"/development-step-4.jpeg",points:["Production deployment","Monitoring & analytics","Final QA & validation","Bug fixes & optimizations","Security & performance checks","Ongoing support"]}],oe=3800;function le(){const[t,n]=c.useState(0),s=b[t];return c.useEffect(()=>{const r=window.setInterval(()=>{n(i=>(i+1)%b.length)},oe);return()=>window.clearInterval(r)},[]),e.jsxs("section",{className:"bg-white py-12 md:py-14",children:[e.jsxs("div",{className:"mx-auto max-w-7xl px-6 md:px-8 lg:px-10",children:[e.jsxs("div",{className:"mx-auto max-w-5xl text-center",children:[e.jsx("p",{className:"eyebrow justify-center text-sm font-semibold text-brand tracking-widest before:w-14 after:h-px after:w-14 after:bg-current after:opacity-70",children:"OUR DEVELOPMENT PROCESS"}),e.jsxs("h2",{className:"mt-4 font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-ink sm:text-5xl md:text-[56px]",children:["From idea to impact,"," ",e.jsx("span",{className:"text-brand",children:"we build it right."})]}),e.jsx("p",{className:"mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg",children:"A proven 4-step process that turns your ideas into scalable, high-performing digital products."})]}),e.jsx("div",{className:"relative mx-auto mt-8 max-w-6xl",children:e.jsx("div",{className:"relative grid gap-3 md:grid-cols-4",children:b.map((r,i)=>{const a=i===t,v=i<t?r.color:"var(--line)";return e.jsxs("button",{type:"button",onClick:()=>n(i),className:"group relative flex min-w-0 items-center gap-3 rounded-2xl bg-white p-2 text-left transition-all duration-300 hover:-translate-y-0.5 md:flex-col md:items-center md:gap-3 md:bg-transparent md:p-0 md:text-center","aria-pressed":a,children:[i<b.length-1&&e.jsx("span",{className:"absolute left-[calc(50%+25px)] right-[calc(-50%+25px)] top-[25px] hidden h-[3px] rounded-full transition-colors duration-500 md:block",style:{backgroundColor:v},"aria-hidden":"true"}),e.jsx("span",{className:"relative z-10 flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl border-2 text-lg font-extrabold transition-all duration-300 group-hover:scale-105",style:{borderColor:r.color,backgroundColor:a?r.color:"#ffffff",color:a?"#ffffff":r.color,boxShadow:a?`0 14px 24px -15px ${r.glow}`:"none"},children:r.number}),e.jsxs("span",{className:"relative z-10 min-w-0 md:max-w-[190px]",children:[e.jsx("span",{className:"block text-lg font-extrabold leading-tight transition-colors duration-300",style:{color:a?r.color:"var(--ink)"},children:r.navTitle}),e.jsx("span",{className:"mt-0.5 block text-xs leading-tight text-muted md:text-sm",children:r.navSubtitle})]})]},r.number)})})}),e.jsx("div",{className:"mt-9 overflow-hidden rounded-[24px] border border-line/70 bg-white shadow-[0_22px_48px_-36px_rgba(20,35,60,.45)]",children:e.jsxs("div",{className:"grid min-h-[360px] gap-6 p-6 animate-[development-slide_.5s_ease-out] md:p-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"flex h-[50px] w-[50px] items-center justify-center rounded-xl text-white shadow-[0_14px_24px_-17px_rgba(23,105,213,.75)]",style:{backgroundColor:s.color},children:e.jsx(R,{size:24,strokeWidth:2.4})}),e.jsx("span",{className:"rounded-full px-5 py-2 text-sm font-extrabold tracking-wide",style:{backgroundColor:s.light,color:s.color},children:s.pill})]}),e.jsx("h3",{className:"mt-8 font-display text-3xl font-extrabold leading-tight text-ink md:text-[36px]",children:s.title}),e.jsx("p",{className:"mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg",children:s.description}),e.jsx("div",{className:"mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2",children:s.points.map(r=>e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white",style:{backgroundColor:s.color},children:e.jsx(O,{size:13,strokeWidth:3})}),e.jsx("span",{className:"text-sm font-semibold leading-snug text-ink md:text-base",children:r})]},r))})]}),e.jsx("div",{className:"relative flex min-h-[270px] items-center justify-center overflow-hidden rounded-[22px] bg-white lg:min-h-[350px]",children:e.jsx("img",{src:s.image,alt:`${s.title} illustration`,className:"h-full max-h-[350px] w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"})})]},s.number)})]}),e.jsx("style",{children:`
        @keyframes development-slide {
          from {
            opacity: 0;
            transform: translateX(16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `})]})}const j=[{name:"Xamarin",image:"/tech-stack/stack-01.svg"},{name:"Ember.js",image:"/tech-stack/stack-02.svg"},{name:"Meteor",image:"/tech-stack/stack-03.svg"},{name:"HTML5",image:"/tech-stack/stack-04.svg"},{name:"CSS3",image:"/tech-stack/stack-05.svg"},{name:"Git",image:"/tech-stack/stack-06.svg"},{name:"Ruby",image:"/tech-stack/stack-07.svg"},{name:"C++",image:"/tech-stack/stack-08.svg"}];function y({reverse:t=!1,speedClass:n}){const s=[...j,...j,...j];return e.jsx("div",{className:"group relative overflow-hidden py-3","aria-label":t?"Technology stack row moving left to right":"Technology stack row moving right to left",children:e.jsx("div",{className:`flex w-max items-center gap-5 will-change-transform group-hover:[animation-play-state:paused] ${n}`,children:s.map((r,i)=>e.jsxs("div",{className:"flex h-[132px] w-[170px] shrink-0 flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-1 md:h-[150px] md:w-[210px]",children:[e.jsx("img",{src:r.image,alt:r.name,className:"h-[72px] w-[96px] object-contain transition-transform duration-300 hover:scale-110 md:h-[86px] md:w-[116px]",loading:"lazy"}),e.jsx("span",{className:"text-center text-base font-semibold leading-none text-ink/80 md:text-lg",children:r.name})]},`${r.name}-${i}-${t?"reverse":"forward"}`))})})}function de(){return e.jsxs("section",{className:"relative overflow-hidden site-surface py-16 md:py-20",children:[e.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(23,105,213,.10),transparent_30%),radial-gradient(circle_at_82%_76%,rgba(12,159,194,.10),transparent_30%)]"}),e.jsx("div",{className:"relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12",children:e.jsxs("div",{className:"mx-auto max-w-4xl text-center",children:[e.jsx("p",{className:"eyebrow justify-center text-sm font-semibold text-brand tracking-widest before:w-14 after:h-px after:w-14 after:bg-current after:opacity-70",children:"Production-grade stack"}),e.jsx("h2",{className:"mt-4 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl md:text-[56px]",children:"Tools we build with"}),e.jsx("p",{className:"mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg",children:"Technology choices selected for stability, scale, and long-term maintainability."})]})}),e.jsxs("div",{className:"relative mt-10",children:[e.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[rgba(243,248,255,.98)] to-transparent md:w-40"}),e.jsx("div",{className:"pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[rgba(243,248,255,.98)] to-transparent md:w-40"}),e.jsx(y,{speedClass:"animate-[stack-marquee-left_34s_linear_infinite]"}),e.jsx(y,{reverse:!0,speedClass:"animate-[stack-marquee-right_38s_linear_infinite]"})]}),e.jsx("style",{children:`
        @keyframes stack-marquee-left {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-33.333%, 0, 0); }
        }

        @keyframes stack-marquee-right {
          from { transform: translate3d(-33.333%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }
      `})]})}function ve(){const[t,n]=c.useState(0);c.useMemo(()=>L.map(r=>{const i=P[r.icon]??B;return{title:r.name,node:e.jsxs(e.Fragment,{children:[e.jsx(i,{size:32,"aria-hidden":"true"}),e.jsx("span",{className:"text-lg font-semibold",children:r.name})]})}}),[]);const s={"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"What is Kalpanaaaa Software Solutions?",acceptedAnswer:{"@type":"Answer",text:"Kalpanaaaa Software Solutions Pvt. Ltd. is a Jaipur-based bespoke engineering partner delivering production-grade full-stack web, mobile, cloud, DevOps, QA, RAG and multi-agent AI systems for government, healthcare, finance, and education."}},{"@type":"Question",name:"How much does a custom software project cost?",acceptedAnswer:{"@type":"Answer",text:"Engagements start at INR 10,000 per month for our Dedicated Engineering Pod. Fixed-price milestone contracts are available for well-scoped v1 builds. Every project is custom-quoted against requirements and SLA."}},{"@type":"Question",name:"Do you build RAG and AI agent systems?",acceptedAnswer:{"@type":"Answer",text:"Yes. We engineer production RAG pipelines and multi-agent automations with guardrails, evals, and observability built in from day one."}}]};return e.jsxs("div",{className:"site-page min-h-screen",children:[e.jsx(H,{title:"Kalpanaaa Software Solutions — Bespoke Engineering Partner",description:"Bespoke engineering for IT automation, RAG systems, multi-agent workflows, and production software across government, healthcare, finance, and education.",canonical:"https://kalpanaaasoftwaresolutions.in/",jsonLd:s}),e.jsxs("section",{className:"relative overflow-hidden border-b border-line/70",children:[e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_74%_22%,rgba(81,155,255,.18),transparent_29%),radial-gradient(circle_at_13%_72%,rgba(23,105,213,.08),transparent_25%)]"}),e.jsxs("div",{className:"relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 grid lg:grid-cols-[minmax(0,1fr)_minmax(430px,.9fr)] gap-10 items-center",children:[e.jsxs("div",{children:[e.jsxs(u.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},className:"pill px-3.5 py-1.5",children:[e.jsx(U,{size:13}),e.jsx("span",{children:"Bespoke engineering partner"})]}),e.jsxs(u.h1,{initial:{opacity:0,y:22},animate:{opacity:1,y:0},transition:{delay:.08},className:"mt-7 font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.03] text-ink max-w-4xl pr-4 sm:pr-0",children:["Architecting digital ",e.jsx("span",{className:"gradient-text",children:"transformation."})]}),e.jsx(u.p,{initial:{opacity:0,y:22},animate:{opacity:1,y:0},transition:{delay:.16},className:"mt-6 text-lg md:text-xl text-muted max-w-3xl leading-relaxed",children:"Bespoke engineering for IT automation, RAG systems, multi-agent workflows, and production software across government, healthcare, finance, and education."}),e.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.24},className:"mt-9 flex flex-wrap gap-3",children:[e.jsxs(o,{to:"/contact",className:"button-primary px-7 py-4 text-sm font-bold uppercase tracking-widest",children:["Start a project ",e.jsx(f,{size:16})]}),e.jsx(o,{to:"/work",className:"button-secondary px-6 py-3.5 text-sm font-bold uppercase tracking-widest",children:"View case studies"})]})]}),e.jsx(Y,{className:"hero-scene",title:"Six Kalpanaaaa service disciplines connected to one engineering hub",labels:C.map(r=>r.tag)})]})]}),e.jsx(te,{}),e.jsx(se,{}),e.jsx(ae,{}),e.jsx(X,{}),e.jsx(ie,{}),e.jsx(le,{}),e.jsx(J,{}),e.jsx(de,{}),e.jsx("section",{className:"py-20 md:py-28",children:e.jsx("div",{className:"max-w-5xl mx-auto px-6 md:px-8 lg:px-12",children:e.jsxs("div",{className:"rounded-3xl border border-line bg-[radial-gradient(circle_at_88%_10%,rgba(77,145,243,.24),transparent_30%),linear-gradient(135deg,#eef6ff,#fff)] p-10 md:p-16 text-center",children:[e.jsx("p",{className:"eyebrow justify-center",children:"Start a conversation"}),e.jsx("h2",{className:"mt-4 font-display text-3xl md:text-5xl font-extrabold text-ink",children:"Let’s build something great."}),e.jsx("p",{className:"mt-4 text-muted max-w-2xl mx-auto",children:"Share your requirements and we will prepare a bespoke technical proposal tailored to your enterprise goals."}),e.jsxs("p",{className:"mt-6 text-sm text-muted",children:["Inquiries: ",e.jsx("a",{href:`mailto:${w.email}`,className:"text-brand font-semibold hover:underline",children:w.email})]}),e.jsxs(o,{to:"/contact",className:"button-primary mt-8 px-7 py-4 text-sm font-bold uppercase tracking-widest",children:["Submit proposal request ",e.jsx(f,{size:16})]})]})})})]})}export{ve as Home};
