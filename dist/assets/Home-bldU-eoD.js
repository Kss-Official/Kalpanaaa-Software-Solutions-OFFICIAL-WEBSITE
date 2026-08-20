import{j as e,r as d,C as T,L as c,N as k,T as W,m as b,S as L}from"./index-CV2tn956.js";import{Q as _,C as O,M as R,S as q,U as M,T as P,L as $,a as A,H as I,R as U,A as B,b as Q,c as H,d as G,e as N,B as Y,f as V,g as K,E as X,h as J,i as z,j as Z,k as ee,l as te,m as se,n as ae}from"./lucide-react-D_Qugg7Y.js";import{S as ne}from"./SEO-CQ08ZJO1.js";import{S as D}from"./shield-check-rvT9Sa4B.js";import{S as re}from"./SectionHeading-BHahCbFe.js";import{A as u}from"./arrow-right-XT1rWkBD.js";import"./arrow-left-JsuX7nHB.js";import"./loader-circle-C3Jef8fY.js";import"./zap-C6FH3LB5.js";const ie=[{left:"50%",top:"21.7%"},{left:"20%",top:"34.2%"},{left:"80%",top:"34.2%"},{left:"20%",top:"65.8%"},{left:"80%",top:"65.8%"},{left:"50%",top:"78.3%"}],oe=e.jsx("img",{src:"./Kalpanaaa Logo.svg",alt:"Company logo",className:"vsc-logo-img"}),le=[{label:"UPTIME",value:"99.9%"},{label:"MODULES",value:"06"},{label:"REGIONS",value:"12"},{label:"MONITORED",value:"24/7"}];function de({title:t,labels:n,activeLabel:a,centerLabel:s="KSS",logo:i,logoSrc:r,stats:l=le,className:g=""}){n.length!==6&&console.warn(`ServiceConstellation expects exactly 6 labels, received ${n.length}.`);const w=a??n[0],y=i??(r?e.jsx("img",{src:r,alt:"Company logo",className:"vsc-logo-img"}):oe);return e.jsxs("div",{className:`vsc-panel ${g}`,children:[e.jsx("span",{className:"vsc-sr-only",children:t}),e.jsx("div",{className:"vsc-glow"}),e.jsx("div",{className:"vsc-scan"}),e.jsx("span",{className:"vsc-bracket vsc-tl"}),e.jsx("span",{className:"vsc-bracket vsc-tr"}),e.jsx("span",{className:"vsc-bracket vsc-bl"}),e.jsx("span",{className:"vsc-bracket vsc-br"}),e.jsx("span",{className:"vsc-particle",style:{left:"30%",top:"24%",animationDelay:".2s"}}),e.jsx("span",{className:"vsc-particle",style:{left:"70%",top:"24%",animationDelay:".9s"}}),e.jsx("span",{className:"vsc-particle",style:{left:"26%",top:"76%",animationDelay:"1.5s"}}),e.jsx("span",{className:"vsc-particle",style:{left:"74%",top:"76%",animationDelay:".6s"}}),e.jsx("span",{className:"vsc-particle",style:{left:"50%",top:"58%",animationDelay:"1.1s"}}),e.jsx("span",{className:"vsc-particle",style:{left:"14%",top:"50%",animationDelay:"1.8s"}}),e.jsx("span",{className:"vsc-particle",style:{left:"86%",top:"50%",animationDelay:".4s"}}),e.jsxs("div",{className:"vsc-stage",children:[e.jsxs("svg",{className:"vsc-connectors",viewBox:"0 0 600 600",preserveAspectRatio:"xMidYMid meet",children:[e.jsx("circle",{className:"vsc-ring",cx:"300",cy:"300",r:"195"}),e.jsx("circle",{className:"vsc-ring vsc-r2",cx:"300",cy:"300",r:"228"}),e.jsx("polygon",{className:"vsc-hexOuter",points:"300,175 415,240 415,360 300,425 185,360 185,240"}),e.jsx("polygon",{className:"vsc-hexInner",points:"300,210 378,255 378,345 300,390 222,345 222,255"}),e.jsx("path",{className:"vsc-link",id:"vsc-l1",d:"M300,210 L300,130"}),e.jsx("path",{className:"vsc-link",id:"vsc-l2",d:"M222,255 L120,205"}),e.jsx("path",{className:"vsc-link",id:"vsc-l3",d:"M378,255 L480,205"}),e.jsx("path",{className:"vsc-link",id:"vsc-l4",d:"M222,345 L120,395"}),e.jsx("path",{className:"vsc-link",id:"vsc-l5",d:"M378,345 L480,395"}),e.jsx("path",{className:"vsc-link",id:"vsc-l6",d:"M300,390 L300,470"}),["l1","l2","l3","l4","l5","l6"].map((o,x)=>e.jsx("circle",{className:"vsc-pulse",r:"3.2",children:e.jsx("animateMotion",{dur:`${3.2+x*.15}s`,repeatCount:"indefinite",begin:`${x*.3}s`,children:e.jsx("mpath",{href:`#vsc-${o}`})})},o))]}),e.jsxs("div",{className:"vsc-core",children:[e.jsx("span",{className:"vsc-mark",children:y}),s]}),n.slice(0,6).map((o,x)=>e.jsx("div",{className:`vsc-node ${o===w?"vsc-active":""}`,style:ie[x],children:o},o))]}),l.slice(0,4).map((o,x)=>e.jsxs("div",{className:`vsc-stat vsc-s${x+1}`,children:[e.jsx("span",{className:"vsc-ind"}),o.label," ",e.jsx("b",{children:o.value})]},o.label)),e.jsxs("div",{className:"vsc-panel-tag",children:[e.jsx("span",{className:"vsc-led"}),"SYSTEM ARCHITECTURE — LIVE"]}),e.jsx("style",{children:ce})]})}const ce=`
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
`,p=[{quote:"I wanted to redesign and revamp the website of my institution. I contacted the team and they understood our requirements and delivered exactly what we needed.",name:"Teaching Coordinator",company:"Leading Educational Institution in Bangalore"},{quote:"Nextwebi, without a doubt they have what it takes to make a great web application, not to mention the professionalism and quality of their work.",name:"Team Lead",company:"Renowned R & D Firm"},{quote:"The team was professional, responsive and technically strong throughout the entire development process. They delivered a reliable and modern solution for our business.",name:"Business Owner",company:"Growing Technology Company"}];function xe(){const[t,n]=d.useState(0);return d.useEffect(()=>{const a=setInterval(()=>{n(s=>s===p.length-1?0:s+1)},4e3);return()=>clearInterval(a)},[]),e.jsxs("section",{className:"relative overflow-hidden py-16 md:py-20",children:[e.jsx("div",{className:"absolute inset-0 bg-white"}),e.jsx("div",{className:`\r
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
          `,children:[e.jsxs("div",{className:"max-w-xl",children:[e.jsx("p",{className:"eyebrow mb-5 text-sm font-semibold text-brand tracking-widest before:w-14 after:h-px after:w-14 after:bg-current after:opacity-70",children:"Testimonials"}),e.jsxs("h2",{className:`
                font-display
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-[64px]
                font-extrabold
                leading-[1.08]
                tracking-tight
                text-ink
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
                `,style:{transform:`translateX(-${t*50}%)`},children:p.map((a,s)=>e.jsxs("div",{className:`\r
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
                      `,children:e.jsx(_,{size:36,strokeWidth:3,fill:"currentColor"})}),e.jsx("p",{className:`\r
                        mt-5\r
                        text-base\r
                        md:text-[17px]\r
                        leading-[1.55]\r
                        text-[#555]\r
                      `,children:a.quote}),e.jsx("button",{type:"button",className:`\r
                        mt-5\r
                        text-[#E44732]\r
                        text-sm\r
                        font-bold\r
                        hover:underline\r
                      `,children:"Read More"}),e.jsx("div",{className:"mt-7 border-t border-[#E2E2E2]"}),e.jsxs("div",{className:"mt-5",children:[e.jsx("h3",{className:`\r
                          text-base\r
                          font-bold\r
                          text-ink\r
                        `,children:a.name}),e.jsx("p",{className:`\r
                          mt-1\r
                          text-sm\r
                          leading-relaxed\r
                          text-muted\r
                        `,children:a.company})]})]},s))})}),e.jsx("div",{className:"md:hidden",children:e.jsxs("div",{className:`\r
                  min-h-[350px]\r
                  rounded-xl\r
                  bg-white\r
                  border\r
                  border-[#D9E2E8]\r
                  p-6\r
                  shadow-[0_8px_25px_rgba(0,0,0,0.08)]\r
                `,children:[e.jsx("div",{className:"text-[#E44732]",children:e.jsx(_,{size:34,strokeWidth:3,fill:"currentColor"})}),e.jsx("p",{className:`\r
                    mt-5\r
                    text-base\r
                    leading-[1.55]\r
                    text-[#555]\r
                  `,children:p[t].quote}),e.jsx("button",{type:"button",className:`\r
                    mt-5\r
                    text-[#E44732]\r
                    text-sm\r
                    font-bold\r
                    hover:underline\r
                  `,children:"Read More"}),e.jsx("div",{className:"mt-7 border-t border-[#E2E2E2]"}),e.jsxs("div",{className:"mt-5",children:[e.jsx("h3",{className:"text-base font-bold text-ink",children:p[t].name}),e.jsx("p",{className:"mt-1 text-sm text-muted",children:p[t].company})]})]})}),e.jsx("div",{className:`\r
                flex\r
                items-center\r
                justify-center\r
                gap-2\r
                mt-7\r
              `,children:p.map((a,s)=>e.jsx("button",{type:"button",onClick:()=>n(s),"aria-label":`Go to testimonial ${s+1}`,className:`
                    h-2.5
                    rounded-full
                    transition-all
                    duration-300
                    ${t===s?"w-10 bg-white":"w-2.5 bg-white/50"}
                  `},s))})]})]})})]})}const pe=[{question:"What services does Kalpanaaa Software Solutions provide?",answer:"We provide custom software development, website development, mobile solutions, UI/UX design, SEO, AI Automation, RAG Models, and digital solutions tailored to business needs."},{question:"Can you build a website or software according to my business requirements?",answer:"Yes. We build customized websites and software solutions based on your business requirements, goals, users, workflows, and technical needs."},{question:"How much does it cost to develop a website or software?",answer:"The cost depends on the project's scope, features, design requirements, technology stack, integrations, and overall complexity. Contact us with your requirements and we can discuss the project in detail."},{question:"How long does it take to develop a website or software application?",answer:"Development time depends on the size and complexity of the project. After understanding your requirements, we can provide a suitable development timeline."},{question:"Do you provide website maintenance and technical support?",answer:"Yes. We provide ongoing maintenance and technical support to help keep your website or software secure, reliable, updated, and performing properly."},{question:"Can you redesign or improve an existing website or application?",answer:"Yes. We can redesign existing websites and applications, improve their user experience, modernize the interface, optimize performance, and add new functionality."},{question:"Do you provide SEO and website performance optimization?",answer:"Yes. We provide SEO and performance optimization services to improve website visibility, speed, usability, and overall performance."},{question:"How can I get started with my project?",answer:"Simply contact us and share your project requirements, goals, and timeline. Our team will discuss your requirements and guide you through the next steps."}];function me(){const[t,n]=d.useState(0),a=s=>{n(i=>i===s?-1:s)};return e.jsx("section",{className:`\r
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
            `,children:[e.jsx(O,{size:17,strokeWidth:2}),e.jsx("span",{children:"Got Questions?"})]}),e.jsxs("h2",{className:`
              mt-7
              font-display
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-[64px]
              font-extrabold
              leading-[1.08]
              tracking-tight
              text-ink
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
          `,children:pe.map((s,i)=>{const r=t===i;return e.jsxs("div",{className:`
                  border-b
                  border-[#e3e5e8]
                  last:border-b-0
                  ${r?"pb-5":""}
                `,children:[e.jsxs("button",{type:"button",onClick:()=>a(i),"aria-expanded":r,className:`\r
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
                    `,children:s.question}),e.jsx("span",{className:`
                      flex
                      shrink-0
                      items-center
                      justify-center
                      transition-transform
                      duration-300
                      text-[#444]
                      ${r?"rotate-180":"rotate-0"}
                    `,children:e.jsx(T,{size:20,strokeWidth:2})})]}),e.jsx("div",{className:`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${r?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"}
                  `,children:e.jsx("div",{className:"overflow-hidden",children:e.jsx("p",{className:`\r
                        pr-8\r
                        pb-1\r
                        text-base\r
                        md:text-lg\r
                        leading-relaxed\r
                        text-[#555b65]\r
                      `,children:s.answer})})})]},s.question)})}),e.jsx("div",{className:"flex justify-center mt-10 md:mt-11",children:e.jsxs("div",{className:`\r
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
                `,children:e.jsx(R,{size:21,strokeWidth:2})}),e.jsxs("div",{children:[e.jsx("p",{className:`\r
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
              `}),e.jsxs(c,{to:"/contact",className:`\r
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
              `,children:[e.jsx(q,{size:17,strokeWidth:2}),"Contact Us"]})]})})]})})}const v="#0B55F4",S="#FF5A0A",ge=[{title:"Client First Approach",desc:"We prioritize your goals and put your success at the center of everything we do.",Icon:M},{title:"Result-Oriented Solutions",desc:"We focus on measurable outcomes that deliver real impact and business growth.",Icon:P},{title:"Quality & Reliability",desc:"We follow best practices to ensure high quality, secure and timely delivery every time.",Icon:D},{title:"Innovative Thinking",desc:"We embrace new ideas and technologies to build smart and future-ready solutions.",Icon:$},{title:"Expert Team",desc:"Our skilled professionals bring diverse expertise and are committed to your success.",Icon:A},{title:"Ongoing Support",desc:"We build long-term relationships and provide continuous support whenever you need us.",Icon:I}],E=[{value:"50+",label:"Projects Delivered",Icon:U},{value:"30+",label:"Happy Clients",Icon:A},{value:"5+",label:"Years Experience",Icon:B},{value:"24/7",label:"Support",Icon:Q}];function he({title:t,desc:n,Icon:a}){return e.jsxs("article",{className:"flex min-h-[184px] flex-col items-center justify-center rounded-[16px] border border-[#DDE8FF] bg-white px-4 py-5 text-center shadow-[0_12px_28px_rgba(15,23,42,0.04)]",children:[e.jsx("div",{className:"flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#EEF3FF]",children:e.jsx(a,{size:36,strokeWidth:2.1,style:{color:v}})}),e.jsx("h3",{className:"mt-4 text-[17px] font-extrabold leading-tight text-black",children:t}),e.jsx("div",{className:"mt-3 h-[3px] w-9 rounded-full",style:{backgroundColor:v}}),e.jsx("p",{className:"mt-3 max-w-[245px] text-[14px] font-medium leading-[1.55] text-[#12215D]",children:n})]})}function ue(){return e.jsx("section",{className:"relative overflow-hidden bg-[#F8FAFF] py-14 md:py-16 lg:py-20",children:e.jsxs("div",{className:"mx-auto max-w-[1510px] px-5 md:px-8 lg:px-10",children:[e.jsxs("div",{className:"mx-auto max-w-5xl text-center",children:[e.jsx("p",{className:"eyebrow justify-center text-sm font-semibold tracking-widest text-brand before:w-16 after:h-px after:w-16 after:bg-current after:opacity-70",children:"WHY CHOOSE US"}),e.jsxs("h2",{className:"mt-3 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[64px]",children:["Engineering solutions",e.jsx("br",{}),"built around ",e.jsx("span",{className:"text-brand",children:"your business."})]}),e.jsxs("p",{className:"mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg",children:["We combine technology, expertise and strategic thinking",e.jsx("br",{className:"hidden sm:block"}),"to build solutions that create real impact."]})]}),e.jsxs("div",{className:"mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.45fr_1fr]",children:[e.jsx("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",children:ge.map(t=>e.jsx(he,{...t},t.title))}),e.jsxs("article",{className:"relative flex min-h-[380px] overflow-hidden rounded-[16px] border border-[#DDE8FF] bg-[#F1F6FF] shadow-[0_12px_28px_rgba(15,23,42,0.04)]",children:[e.jsx("div",{className:"pointer-events-none absolute -right-6 -top-24 h-[360px] w-[230px] rotate-[32deg] rounded-[110px] bg-[#E4ECFF] opacity-70","aria-hidden":"true"}),e.jsx("div",{className:"pointer-events-none absolute right-14 top-8 grid grid-cols-4 gap-2 opacity-45","aria-hidden":"true",children:Array.from({length:24}).map((t,n)=>e.jsx("span",{className:"h-2 w-2 rounded-full bg-[#8EA8EE]"},n))}),e.jsx("div",{className:"pointer-events-none absolute right-24 top-32 h-14 w-14 rounded-full bg-[#DDE7FF]","aria-hidden":"true"}),e.jsxs("div",{className:"relative z-10 flex w-full flex-col px-8 pb-0 pt-8",children:[e.jsxs("div",{className:"max-w-[320px]",children:[e.jsxs("h3",{className:"font-display text-[26px] font-extrabold leading-tight text-black md:text-[28px]",children:["Your Vision.",e.jsx("br",{}),e.jsx("span",{style:{color:S},children:"Our Commitment."})]}),e.jsx("div",{className:"mt-3 h-[3px] w-12 rounded-full",style:{backgroundColor:S}}),e.jsx("p",{className:"mt-5 text-[14px] font-medium leading-[1.55] text-[#12215D]",children:"At Kalpanaaa Software Solutions, we don't just develop software, we build trusted partnerships that create value and drive long-term business growth."})]}),e.jsx("img",{src:"/At the office-pana 1.png",alt:"Team working together in an office",className:"pointer-events-none absolute bottom-0 right-[-10px] z-0 w-[88%] max-w-[610px] object-contain object-bottom"})]})]})]}),e.jsx("div",{className:"mt-6 grid grid-cols-1 overflow-hidden rounded-[16px] border border-[#E2EBFF] bg-[#F0F5FF] shadow-[0_10px_26px_rgba(11,85,244,0.05)] sm:grid-cols-2 lg:grid-cols-4",children:E.map((t,n)=>e.jsxs("div",{className:"flex min-h-[104px] items-center justify-center gap-5 px-5 py-5 lg:justify-center",children:[e.jsx("div",{className:"flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-[#E4ECFF]",children:e.jsx(t.Icon,{size:39,strokeWidth:2.1,style:{color:v}})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[38px] font-extrabold leading-none",style:{color:v},children:t.value}),e.jsx("p",{className:"mt-1 text-[16px] font-semibold leading-tight text-black",children:t.label})]}),n<E.length-1&&e.jsx("span",{className:"ml-auto hidden h-14 w-px bg-[#9DB6FF] lg:block","aria-hidden":"true"})]},t.label))})]})})}const be=[{title:"Website Development",description:"We build fast, responsive and SEO-friendly websites that help your business stand out online.",href:"/services/website-development",image:"/service-website.svg",Icon:H,className:"lg:row-span-2 lg:min-h-[565px]",imageClassName:"bottom-[-18px] left-2 right-0 mx-auto w-[106%] max-w-[430px]",contentClassName:"max-w-[330px]",descriptionClassName:"max-w-[310px]"},{title:"Mobile App Development",description:"We build fast, responsive and SEO-friendly websites that help your business stand out online.",href:"/services/mobile-app-development",image:"/service-mobile-app.svg",Icon:G,className:"lg:min-h-[272px]",imageClassName:"bottom-4 right-4 w-[31%] max-w-[132px]",contentClassName:"max-w-[230px]",descriptionClassName:"max-w-[190px]"},{title:"Custom Software Development",description:"We build fast, responsive and SEO-friendly websites that help your business stand out online.",href:"/services/custom-software-development",image:"/service-custom-software.svg",Icon:N,className:"lg:min-h-[272px]",imageClassName:"bottom-3 right-4 w-[36%] max-w-[154px]",contentClassName:"max-w-[245px]",descriptionClassName:"max-w-[195px]"},{title:"AI Chatbox & Automation",description:"We build fast, responsive and SEO-friendly websites that help your business stand out online.",href:"/services/ai-chatbot-automation",image:"/service-ai-chatbot.svg",Icon:Y,className:"lg:col-span-2 lg:min-h-[232px]",imageClassName:"bottom-[-2px] right-8 w-[31%] max-w-[280px]",contentClassName:"max-w-[480px]",descriptionClassName:"max-w-[370px]",titleClassName:"max-w-[620px]"},{title:"UI/UX Design",description:"We build fast, responsive and SEO-friendly websites that help your business stand out online.",href:"/services/ui-ux-design",image:"/service-ui-ux.svg",Icon:V,className:"lg:col-span-2 lg:min-h-[260px]",imageClassName:"bottom-3 right-8 w-[43%] max-w-[380px]",contentClassName:"max-w-[390px]",descriptionClassName:"max-w-[310px]"},{title:"Cloud & DevOps",description:"We build fast, responsive and SEO-friendly websites that help your business stand out online.",href:"/services/cloud-devops",image:"/service-cloud-devops.svg",Icon:K,className:"lg:row-span-2 lg:min-h-[545px]",imageClassName:"bottom-6 left-8 right-5 mx-auto w-[83%] max-w-[360px]",contentClassName:"max-w-[330px]",descriptionClassName:"max-w-[300px]"},{title:"cyberSecurity",description:"We build fast, responsive and SEO-friendly websites that help your business stand out online.",href:"/services/cybersecurity",image:"/service-cybersecurity.svg",Icon:D,className:"lg:min-h-[272px]",imageClassName:"bottom-4 right-4 w-[37%] max-w-[158px]",contentClassName:"max-w-[235px]",descriptionClassName:"max-w-[185px]"},{title:"software Maintenance & Support",description:"We build fast, responsive and SEO-friendly websites that help your business stand out online.",href:"/services/software-maintenance",image:"/service-maintenance.svg",Icon:I,className:"lg:min-h-[272px]",imageClassName:"bottom-5 right-5 w-[35%] max-w-[150px]",contentClassName:"max-w-[245px]",descriptionClassName:"max-w-[185px]"}];function fe({title:t,description:n,href:a,image:s,Icon:i,className:r,imageClassName:l,contentClassName:g="",descriptionClassName:w="",titleClassName:y=""}){return e.jsxs(c,{to:a,className:`group relative isolate overflow-hidden rounded-[10px] border border-[#E7EAF1] bg-white shadow-[0_14px_34px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C8D8FA] hover:shadow-[0_22px_48px_rgba(0,0,0,0.17)] ${r}`,children:[e.jsx("div",{className:"absolute inset-0 -z-10",style:{background:"linear-gradient(110deg, #ffffff 0%, #ffffff 50%, #f2f7ff 66%, #65A0FF 100%)"}}),e.jsx("img",{src:s,alt:`${t} illustration`,className:`pointer-events-none absolute z-0 object-contain transition-transform duration-500 group-hover:scale-[1.035] ${l}`}),e.jsxs("div",{className:`relative z-10 flex h-full min-h-[inherit] flex-col p-8 md:p-9 ${g}`,children:[e.jsx(i,{size:23,strokeWidth:2.25,className:"mb-7 text-brand"}),e.jsx("h3",{className:`font-display text-[29px] font-extrabold leading-[1] tracking-tight text-brand md:text-[32px] ${y}`,children:t}),e.jsx("p",{className:`mt-5 text-[18px] font-semibold leading-[1.14] text-[#344052] md:text-[19px] ${w}`,children:n}),e.jsxs("span",{className:"mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-brand transition-transform duration-300 group-hover:translate-x-1",children:["Learn more ",e.jsx(u,{size:14})]})]})]})}function ve(){return e.jsx("section",{className:"bg-[#EFEFEF] py-16 md:py-16",children:e.jsxs("div",{className:"mx-auto max-w-[1320px] px-6 md:px-8 lg:px-10",children:[e.jsxs("div",{className:"mb-12 flex flex-wrap items-end justify-between gap-6",children:[e.jsx(re,{eyebrow:"What we build",title:"Bespoke engineering capabilities",description:"Full-lifecycle software engineering across web, mobile, cloud, QA, RAG, and multi-agent systems."}),e.jsxs(c,{to:"/services",className:"inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand transition-all duration-300 hover:underline",children:["All services",e.jsx(u,{size:14})]})]}),e.jsx("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[252px]",children:be.map(t=>e.jsx(fe,{...t},t.title))})]})})}const we=[{title:"Learnova",category:"Education Platform",description:"A full-stack e-learning platform designed for students, instructors and administrators with dedicated dashboards and learning management capabilities.",image:"/Learnova.png",href:"/projects/learnova",tags:["React","Node.js","Express","Prisma","PostgreSQL"],position:"lg:absolute lg:left-[7%] lg:top-[30px] lg:w-[35%] lg:-rotate-[5deg] lg:z-10"},{title:"HireBridge",category:"Recruitment Platform",description:"A role-based job scraping and recruitment platform that connects students with job opportunities and provides hiring managers with recruitment tools.",image:"/Hirebridge.png",href:"/projects/hirebridge",tags:["React","Vite","Node.js","Express","Prisma","PostgreSQL"],position:"lg:absolute lg:left-1/2 lg:top-0 lg:w-[35%] lg:-translate-x-1/2 lg:z-30"},{title:"Bondly",category:"Travel Discovery",description:"A travel discovery platform that helps users discover, explore, post stories, chat with people and connect with travel destinations and experiences.",image:"/Bondly.png",href:"/projects/bondly",tags:["React","Node.js","Hono","PostgreSQL","Redis"],position:"lg:absolute lg:right-[7%] lg:top-[26px] lg:w-[35%] lg:rotate-[5deg] lg:z-20"}];function ye(){return e.jsxs("section",{className:"relative overflow-x-hidden overflow-y-visible site-surface py-14 md:py-16",children:[e.jsx("div",{className:"pointer-events-none absolute inset-x-0 top-[52%] h-64 bg-[radial-gradient(circle,rgba(23,105,213,.08),transparent_66%)]"}),e.jsxs("div",{className:"relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12",children:[e.jsxs("div",{className:"mx-auto max-w-4xl text-center",children:[e.jsx("p",{className:"eyebrow justify-center text-sm font-semibold text-brand tracking-widest before:w-14 after:h-px after:w-14 after:bg-current after:opacity-70",children:"Industries we serve"}),e.jsxs("h2",{className:"mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[64px]",children:["Projects That",e.jsx("br",{}),e.jsx("span",{className:"text-brand",children:"Make an Impact"})]}),e.jsxs("p",{className:"mx-auto mt-5 max-w-3xl text-base md:text-lg leading-relaxed text-ink",children:["We build digital solutions that drive growth, solve real problems",e.jsx("br",{className:"hidden md:block"}),"and create long-lasting impact for the businesses."]})]}),e.jsx("div",{className:"relative mt-9 grid grid-cols-1 gap-7 md:grid-cols-3 lg:block lg:h-[505px] lg:pb-8",children:we.map((t,n)=>e.jsxs(c,{to:t.href,className:`
                group relative block overflow-hidden rounded-[24px]
                border-2 border-[#74aefb] bg-white
                shadow-[0_20px_38px_-24px_rgba(23,105,213,.58)]
                transition-all duration-500 ease-out
                hover:-translate-y-3 hover:rotate-0 hover:scale-[1.025]
                hover:shadow-[0_30px_52px_-22px_rgba(23,105,213,.72)]
                focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-300
                ${t.position}
              `,style:{animation:`project-card-rise .7s ${n*120}ms ease-out both`},children:[e.jsx("div",{className:"absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[#8ec1ff] bg-white/90 text-brand shadow-[0_10px_22px_-14px_rgba(23,105,213,.7)] backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white",children:e.jsx(X,{size:17,strokeWidth:2.5})}),e.jsx("div",{className:"p-3.5 pb-0",children:e.jsxs("div",{className:"relative h-[200px] overflow-hidden rounded-[16px] bg-[#071021] shadow-[inset_0_0_0_1px_rgba(255,255,255,.15)] md:h-[190px] lg:h-[185px]",children:[e.jsx("img",{src:t.image,alt:`${t.title} project screenshot`,className:"h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"})]})}),e.jsxs("div",{className:"flex min-h-[270px] flex-col p-6 md:min-h-[300px] lg:min-h-[250px]",children:[e.jsx("p",{className:"text-xs font-extrabold uppercase tracking-wide text-brand",children:t.category}),e.jsx("h3",{className:"mt-4 font-display text-2xl font-extrabold leading-tight text-black md:text-[26px]",children:t.title}),e.jsx("p",{className:"mt-4 text-sm font-semibold leading-[1.45] text-black",children:t.description}),e.jsx("div",{className:"mt-5 flex flex-wrap gap-2",children:t.tags.slice(0,4).map(a=>e.jsx("span",{className:"rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand",children:a},a))}),e.jsxs("span",{className:"mt-auto inline-flex items-center justify-end gap-2 pt-5 text-sm font-extrabold text-brand transition-all duration-300 group-hover:gap-3",children:["View project",e.jsx(u,{size:16})]})]})]},t.title))})]}),e.jsx("style",{children:`
        @keyframes project-card-rise {
          from {
            opacity: 0;
            transform: translateY(28px) scale(.96);
          }
          to {
            opacity: 1;
          }
        }
      `})]})}const m="#FF4F0A",C="#0B55F4",je=[{id:1,name:"Gaurav Kr Tripathi",role:"Founder, MD & CTO",banner:"FOUNDER",image:"/Gaurav-2.png",icon:N,shortQuote:"Hi, I've been leading technology teams and building innovative solutions for years now..."},{id:2,name:"Akshit Ujjain",role:"Co-Founder & CEO",banner:"CO-FOUNDER",image:"/Akshit-2.png",icon:J,shortQuote:"Hi, we have been building, managing and growing innovative technology solutions together..."}],f=[{id:1,name:"Ananya Deshmukh",role:"Founder & Director",location:"Mumbai, India",image:"/Priya_Portraits.png",quote:"I must say, Kalpanaaa truly understands what its clients want. Their exceptional problem-solving skills, proactive methods and appealing front-end designs make them a trusted technology partner."},{id:2,name:"Rahul Verma",role:"Technology Director",location:"Bengaluru, India",image:"/Anmol_Portraits.png",quote:"The team consistently delivers thoughtful engineering solutions with strong attention to quality, scalability and user experience. Their approach made the entire development process smooth and reliable."},{id:3,name:"Sneha Iyer",role:"Founder & CEO",location:"Hyderabad, India",image:"/Priya_Portraits.png",quote:"Their ability to understand complex business requirements and turn them into reliable digital products has been exceptional. The team delivered a solution that exceeded our expectations."}];function Ne({name:t,role:n,banner:a,image:s,icon:i,shortQuote:r}){return e.jsxs("article",{className:"group flex h-full min-h-[438px] flex-col overflow-hidden rounded-[20px] border border-[#E9EDF5] bg-white shadow-[0_14px_34px_rgba(15,23,42,0.075)]",children:[e.jsxs("div",{className:"relative isolate h-[264px] overflow-hidden bg-white",children:[e.jsx("div",{className:"absolute left-0 top-0 z-0 flex h-full w-[70px] items-center justify-center",style:{background:"linear-gradient(180deg, #FF4B08 0%, #FF6500 100%)"},children:e.jsx("span",{className:"select-none font-display font-black leading-none",style:{writingMode:"vertical-rl",transform:"rotate(180deg)",fontSize:a.length>8?27:34,letterSpacing:"0",color:"transparent",WebkitTextStroke:"1.4px #ffffff"},children:a})}),e.jsx("img",{src:s,alt:t,className:"absolute left-0 right-0 top-0 z-10 mx-auto h-[264px] w-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.025]"})]}),e.jsxs("div",{className:"flex flex-1 flex-col px-5 pb-5 pt-5",children:[e.jsx("h3",{className:"font-display text-[23px] font-extrabold leading-tight text-black md:text-[25px]",children:t}),e.jsx("p",{className:"mt-2 text-[15px] font-bold leading-none text-[#65647F]",children:n}),e.jsxs("div",{className:"mt-4 flex min-h-[70px] items-center gap-3 rounded-[16px] border border-[#E8EBF2] bg-white px-3.5 py-3 shadow-[0_8px_18px_rgba(15,23,42,0.035)]",children:[e.jsx("span",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-full shadow-[0_8px_18px_rgba(255,79,10,0.22)]",style:{background:"linear-gradient(135deg, #FF4B08 0%, #FF6500 100%)"},children:e.jsx(i,{size:21,className:"text-white",strokeWidth:2.7})}),e.jsx("p",{className:"text-[14px] font-medium leading-[1.55] text-black",children:r})]})]})]})}function ke(){const[t,n]=d.useState(0),a=f[t],s=()=>{n(r=>r===0?f.length-1:r-1)},i=()=>{n(r=>r===f.length-1?0:r+1)};return e.jsx("section",{className:"relative overflow-hidden bg-[#F8FAFD] py-14 md:py-16",children:e.jsxs("div",{className:"mx-auto max-w-[1410px] px-5 md:px-8 lg:px-8",children:[e.jsxs("div",{className:"mx-auto max-w-4xl text-center",children:[e.jsx("div",{className:"mb-5 flex items-center justify-center gap-4",children:e.jsx("p",{className:"eyebrow justify-start text-sm font-semibold tracking-widest text-brand before:w-14 after:h-px after:w-14 after:bg-current after:opacity-70",children:"Leadership"})}),e.jsxs("h2",{className:"font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[64px]",children:["Meet the people behind ",e.jsx("span",{className:"text-brand",children:"our success"})]}),e.jsx("p",{className:"mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg",children:"Meet the experienced leaders who bring together technology, strategy and innovation to build meaningful digital solutions."})]}),e.jsxs("div",{className:"mt-9 grid grid-cols-1 items-stretch gap-6 md:mt-10 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.22fr]",children:[je.map(r=>e.jsx(Ne,{...r},r.id)),e.jsxs("article",{className:"relative isolate flex min-h-[438px] flex-col overflow-hidden rounded-[20px] border border-[#E9EDF5] bg-white px-7 pb-6 pt-7 shadow-[0_14px_34px_rgba(15,23,42,0.075)] md:col-span-2 md:px-8 lg:col-span-1",children:[e.jsx("div",{className:"pointer-events-none absolute -right-[1px] top-[18px] z-0 h-[240px] w-[128px] rounded-l-full opacity-70",style:{background:"linear-gradient(180deg, rgba(255,132,80,0.72) 0%, rgba(255,198,164,0.54) 54%, rgba(255,255,255,0.16) 100%)"},"aria-hidden":"true"}),e.jsx("div",{className:"pointer-events-none absolute -right-[86px] top-[168px] z-0 h-[118px] w-[340px] -rotate-[43deg] rounded-[100%] opacity-85",style:{background:"linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,238,229,0.8) 31%, rgba(255,197,166,0.72) 66%, rgba(255,255,255,0.28) 100%)"},"aria-hidden":"true"}),e.jsx("div",{className:"pointer-events-none absolute -right-[120px] top-[264px] z-0 h-[96px] w-[370px] -rotate-[35deg] rounded-[100%] opacity-95",style:{background:"linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,246,241,0.88) 35%, rgba(255,217,196,0.78) 67%, rgba(255,255,255,0.62) 100%)"},"aria-hidden":"true"}),e.jsx("span",{className:"relative -mt-1 font-display text-[74px] font-extrabold leading-none",style:{color:m},children:"“"}),e.jsx("div",{className:"relative mt-1 flex-1 border-l-2 pl-5",style:{borderColor:m},children:e.jsx("p",{className:"max-w-[500px] text-[14px] font-medium leading-[1.95] text-black md:text-[15px]",children:a.quote})}),e.jsx("div",{className:"relative mt-7 border-t border-[#DDE3EE] pt-6",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full bg-[#F1F3F5]",children:e.jsx("img",{src:a.image,alt:a.name,className:"h-full w-full object-cover"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-[16px] font-extrabold leading-tight text-black",children:a.name}),e.jsxs("p",{className:"mt-1 flex flex-wrap items-center gap-2 text-[12px] font-medium text-[#65647F]",children:[a.role,e.jsx("span",{className:"h-1 w-1 rounded-full",style:{backgroundColor:m},"aria-hidden":"true"}),a.location]})]})]}),e.jsxs("span",{className:"inline-flex min-h-[54px] items-center gap-3 rounded-[10px] border bg-white px-4 py-2 text-[13px] font-bold shadow-[0_8px_18px_rgba(255,79,10,0.08)]",style:{borderColor:m,color:m},children:[e.jsx("span",{className:"flex h-6 w-6 items-center justify-center rounded-full",style:{backgroundColor:m},children:e.jsx(z,{size:15,className:"text-white",strokeWidth:3})}),"Verified Client"]})]})})]})]}),e.jsxs("div",{className:"mt-6 flex items-center justify-between lg:pl-[43%]",children:[e.jsx("div",{className:"flex items-center gap-8",children:f.map((r,l)=>e.jsx("button",{type:"button",onClick:()=>n(l),"aria-label":`Go to customer review ${l+1}`,className:"h-2 rounded-full transition-all duration-300",style:{width:t===l?36:32,backgroundColor:t===l?C:"#CDD4DF"}},r.id))}),e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx("button",{type:"button",onClick:s,"aria-label":"Previous customer review",className:"flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#E5EAF2] bg-white text-black shadow-[0_10px_22px_rgba(15,23,42,0.08)] transition-all duration-200 hover:shadow-md",children:e.jsx(Z,{size:27,strokeWidth:3})}),e.jsx("button",{type:"button",onClick:i,"aria-label":"Next customer review",className:"flex h-[58px] w-[58px] items-center justify-center rounded-full text-white shadow-[0_14px_26px_rgba(11,85,244,0.32)] transition-all duration-200 hover:shadow-md",style:{backgroundColor:C},children:e.jsx(ee,{size:27,strokeWidth:3})})]})]})]})})}const h=[{number:"01",navTitle:"Discover",navSubtitle:"Understand the opportunity",pill:"STEP 01",title:"Discovery & Strategy",color:"#1769d5",light:"#edf5ff",glow:"rgba(23,105,213,.8)",description:"We dive deep into your business, users, market, and goals to define a clear strategy and product roadmap.",image:"/development-step-1.jpeg",points:["Business & requirement analysis","Technical planning & roadmap","User research & interviews","Competitor analysis"]},{number:"02",navTitle:"Design",navSubtitle:"Shape the experience",pill:"STEP 02",title:"UX/UI Design",color:"#6d3df4",light:"#f2efff",glow:"rgba(109,61,244,.68)",description:"We turn strategy into intuitive, engaging designs that deliver seamless user experiences and strong visual impact.",image:"/Deve-1.svg",points:["User flows & information architecture","Interactive prototypes","Wireframes & layouts","Usability testing","UI design & design system","Design for all devices"]},{number:"03",navTitle:"Develop",navSubtitle:"Build the solution",pill:"STEP 03",title:"Development & Testing",color:"#0c9fc2",light:"#eafaff",glow:"rgba(12,159,194,.68)",description:"We bring designs to life with clean, scalable code and rigorous testing to ensure performance, security, and reliability at every step.",image:"/Deve-2.svg",points:["Frontend development","Database design & optimization","Backend development","QA & testing","API integration","Performance & security"]},{number:"04",navTitle:"Launch",navSubtitle:"Take it to the world",pill:"STEP 04",title:"Deployment & Launch",color:"#ff6b18",light:"#fff3eb",glow:"rgba(255,107,24,.68)",description:"We ensure a smooth launch to production with rigorous checks, monitoring, and ongoing support for long-term success.",image:"/Deve-3.svg",points:["Production deployment","Monitoring & analytics","Final QA & validation","Bug fixes & optimizations","Security & performance checks","Ongoing support"]}],_e=5200;function Se(){const[t,n]=d.useState(0),a=h[t];return d.useEffect(()=>{const s=window.setInterval(()=>{n(i=>(i+1)%h.length)},_e);return()=>window.clearInterval(s)},[]),e.jsxs("section",{className:"bg-white py-12 md:py-14",children:[e.jsxs("div",{className:"mx-auto max-w-7xl px-6 md:px-8 lg:px-10",children:[e.jsxs("div",{className:"mx-auto max-w-5xl text-center",children:[e.jsx("p",{className:"eyebrow justify-center text-sm font-semibold text-brand tracking-widest before:w-14 after:h-px after:w-14 after:bg-current after:opacity-70",children:"OUR DEVELOPMENT PROCESS"}),e.jsxs("h2",{className:"mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[64px]",children:["From idea to impact,"," ",e.jsx("span",{className:"text-brand",children:"we build it right."})]}),e.jsx("p",{className:"mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg",children:"A proven 4-step process that turns your ideas into scalable, high-performing digital products."})]}),e.jsx("div",{className:"relative mx-auto mt-8 max-w-6xl",children:e.jsxs("div",{className:"relative grid gap-3 md:grid-cols-4",children:[e.jsx("span",{className:"absolute top-[25px] z-20 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-brand shadow-[0_0_0_7px_rgba(23,105,213,.14),0_10px_24px_-10px_rgba(23,105,213,.9)] transition-[left,background-color,box-shadow] duration-1000 ease-in-out md:block",style:{left:`${(t+.5)/h.length*100}%`,backgroundColor:a.color,boxShadow:`0 0 0 7px ${a.light}, 0 10px 24px -10px ${a.glow}`},"aria-hidden":"true"}),h.map((s,i)=>{const r=i===t,g=i<t?s.color:"var(--line)";return e.jsxs("button",{type:"button",onClick:()=>n(i),onFocus:()=>n(i),onMouseEnter:()=>n(i),className:"group relative flex min-w-0 items-center gap-3 rounded-2xl bg-white p-2 text-left transition-all duration-300 hover:-translate-y-0.5 md:flex-col md:items-center md:gap-3 md:bg-transparent md:p-0 md:text-center","aria-pressed":r,children:[i<h.length-1&&e.jsx("span",{className:"absolute left-[calc(50%+25px)] right-[calc(-50%+25px)] top-[25px] hidden h-[3px] rounded-full transition-colors duration-1000 ease-in-out md:block",style:{backgroundColor:g},"aria-hidden":"true"}),e.jsx("span",{className:"relative z-10 flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl border-2 text-lg font-extrabold transition-all duration-300 group-hover:scale-105",style:{borderColor:s.color,backgroundColor:r?s.color:"#ffffff",color:r?"#ffffff":s.color,boxShadow:r?`0 14px 24px -15px ${s.glow}, 0 0 0 8px ${s.light}`:"none"},children:s.number}),e.jsxs("span",{className:"relative z-10 min-w-0 md:max-w-[190px]",children:[e.jsx("span",{className:"block text-lg font-extrabold leading-tight transition-colors duration-300",style:{color:r?s.color:"var(--ink)"},children:s.navTitle}),e.jsx("span",{className:"mt-0.5 block text-xs leading-tight text-muted md:text-sm",children:s.navSubtitle})]})]},s.number)})]})}),e.jsx("div",{className:"mt-9 overflow-hidden rounded-[24px] border border-line/70 bg-white shadow-[0_22px_48px_-36px_rgba(20,35,60,.45)]",children:e.jsxs("div",{className:"grid min-h-[360px] gap-6 p-6 animate-[development-slide_.5s_ease-out] md:p-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"flex h-[50px] w-[50px] items-center justify-center rounded-xl text-white shadow-[0_14px_24px_-17px_rgba(23,105,213,.75)]",style:{backgroundColor:a.color},children:e.jsx(te,{size:24,strokeWidth:2.4})}),e.jsx("span",{className:"rounded-full px-5 py-2 text-sm font-extrabold tracking-wide",style:{backgroundColor:a.light,color:a.color},children:a.pill})]}),e.jsx("h3",{className:"mt-8 font-display text-3xl font-extrabold leading-tight text-ink md:text-[36px]",children:a.title}),e.jsx("p",{className:"mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg",children:a.description}),e.jsx("div",{className:"mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2",children:a.points.map(s=>e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white",style:{backgroundColor:a.color},children:e.jsx(z,{size:13,strokeWidth:3})}),e.jsx("span",{className:"text-sm font-semibold leading-snug text-ink md:text-base",children:s})]},s))})]}),e.jsx("div",{className:"relative flex min-h-[270px] items-center justify-center overflow-hidden rounded-[22px] bg-white lg:min-h-[350px]",children:e.jsx("img",{src:a.image,alt:`${a.title} illustration`,className:"h-full max-h-[350px] w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"})})]},a.number)})]}),e.jsx("style",{children:`
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
      `})]})}const j=[{name:"Redis",image:"/tech-stack/stack-01.svg"},{name:"Typescript",image:"/tech-stack/stack-02.svg"},{name:"React.js",image:"/tech-stack/stack-03.svg"},{name:"Next.js",image:"/tech-stack/stack-04.svg"},{name:"Node.js",image:"/tech-stack/stack-05.svg"},{name:"GraphQL",image:"/tech-stack/stack-06.svg"},{name:"Tailwind css",image:"/tech-stack/stack-07.svg"},{name:"PostgreSQL",image:"/tech-stack/stack-08.svg"}];function F({reverse:t=!1,speedClass:n}){const a=[...j,...j,...j];return e.jsx("div",{className:"group relative overflow-hidden py-3","aria-label":t?"Technology stack row moving left to right":"Technology stack row moving right to left",children:e.jsx("div",{className:`flex w-max items-center gap-5 will-change-transform group-hover:[animation-play-state:paused] ${n}`,children:a.map((s,i)=>e.jsxs("div",{className:"flex h-[132px] w-[170px] shrink-0 flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-1 md:h-[150px] md:w-[210px]",children:[e.jsx("img",{src:s.image,alt:s.name,className:"h-[72px] w-[96px] object-contain transition-transform duration-300 hover:scale-110 md:h-[86px] md:w-[116px]",loading:"lazy"}),e.jsx("span",{className:"text-center text-base font-semibold leading-none text-ink/80 md:text-lg",children:s.name})]},`${s.name}-${i}-${t?"reverse":"forward"}`))})})}function Ee(){return e.jsxs("section",{className:"relative overflow-hidden site-surface py-16 md:py-20",children:[e.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(23,105,213,.10),transparent_30%),radial-gradient(circle_at_82%_76%,rgba(12,159,194,.10),transparent_30%)]"}),e.jsx("div",{className:"relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12",children:e.jsxs("div",{className:"mx-auto max-w-4xl text-center",children:[e.jsx("p",{className:"eyebrow justify-center text-sm font-semibold text-brand tracking-widest before:w-14 after:h-px after:w-14 after:bg-current after:opacity-70",children:"Production-grade stack"}),e.jsx("h2",{className:"mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[64px]",children:"Tools we build with"}),e.jsx("p",{className:"mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg",children:"Technology choices selected for stability, scale, and long-term maintainability."})]})}),e.jsxs("div",{className:"relative mt-10",children:[e.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[rgba(243,248,255,.98)] to-transparent md:w-40"}),e.jsx("div",{className:"pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[rgba(243,248,255,.98)] to-transparent md:w-40"}),e.jsx(F,{speedClass:"animate-[stack-marquee-left_34s_linear_infinite]"}),e.jsx(F,{reverse:!0,speedClass:"animate-[stack-marquee-right_38s_linear_infinite]"})]}),e.jsx("style",{children:`
        @keyframes stack-marquee-left {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-33.333%, 0, 0); }
        }

        @keyframes stack-marquee-right {
          from { transform: translate3d(-33.333%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }
      `})]})}function Ce(){return e.jsx("section",{className:"pt-20 pb-8 md:pt-28 md:pb-10",children:e.jsx("div",{className:"max-w-5xl mx-auto px-6 md:px-8 lg:px-12",children:e.jsxs("div",{className:`
            rounded-3xl
            border
            border-line
            bg-[radial-gradient(circle_at_88%_10%,rgba(77,145,243,.24),transparent_30%),linear-gradient(135deg,#eef6ff,#fff)]
            p-10
            md:p-16
            text-center
          `,children:[e.jsx("p",{className:"eyebrow justify-center",children:"Start a conversation"}),e.jsx("h2",{className:"mt-4 font-display text-3xl md:text-5xl font-extrabold text-ink",children:"Let’s build something great."}),e.jsx("p",{className:"mt-4 text-muted max-w-2xl mx-auto",children:"Share your requirements and we will prepare a bespoke technical proposal tailored to your enterprise goals."}),e.jsxs("p",{className:"mt-6 text-sm text-muted",children:["Inquiries:"," ",e.jsx("a",{href:`mailto:${k.email}`,className:"text-brand font-semibold hover:underline",children:k.email})]}),e.jsxs(c,{to:"/contact",className:`
              button-primary
              mt-8
              px-7
              py-4
              text-sm
              font-bold
              uppercase
              tracking-widest
            `,children:["Submit proposal request",e.jsx(u,{size:16})]})]})})})}function Re(){const[t,n]=d.useState(0);d.useMemo(()=>W.map(s=>{const i=se[s.icon]??N;return{title:s.name,node:e.jsxs(e.Fragment,{children:[e.jsx(i,{size:32,"aria-hidden":"true"}),e.jsx("span",{className:"text-lg font-semibold",children:s.name})]})}}),[]);const a={"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"What is Kalpanaaaa Software Solutions?",acceptedAnswer:{"@type":"Answer",text:"Kalpanaaaa Software Solutions Pvt. Ltd. is a Jaipur-based bespoke engineering partner delivering production-grade full-stack web, mobile, cloud, DevOps, QA, RAG and multi-agent AI systems for government, healthcare, finance, and education."}},{"@type":"Question",name:"How much does a custom software project cost?",acceptedAnswer:{"@type":"Answer",text:"Engagements start at INR 10,000 per month for our Dedicated Engineering Pod. Fixed-price milestone contracts are available for well-scoped v1 builds. Every project is custom-quoted against requirements and SLA."}},{"@type":"Question",name:"Do you build RAG and AI agent systems?",acceptedAnswer:{"@type":"Answer",text:"Yes. We engineer production RAG pipelines and multi-agent automations with guardrails, evals, and observability built in from day one."}}]};return e.jsxs("div",{className:"site-page min-h-screen",children:[e.jsx(ne,{title:"Kalpanaaa Software Solutions — Bespoke Engineering Partner",description:"Bespoke engineering for IT automation, RAG systems, multi-agent workflows, and production software across government, healthcare, finance, and education.",canonical:"https://kalpanaaasoftwaresolutions.in/",jsonLd:a}),e.jsxs("section",{className:"relative overflow-hidden border-b border-line/70",children:[e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_74%_22%,rgba(81,155,255,.18),transparent_29%),radial-gradient(circle_at_13%_72%,rgba(23,105,213,.08),transparent_25%)]"}),e.jsxs("div",{className:"relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 grid lg:grid-cols-[minmax(0,1fr)_minmax(430px,.9fr)] gap-10 items-center",children:[e.jsxs("div",{children:[e.jsxs(b.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},className:"pill px-3.5 py-1.5",children:[e.jsx(ae,{size:13}),e.jsx("span",{children:"Bespoke engineering partner"})]}),e.jsxs(b.h1,{initial:{opacity:0,y:22},animate:{opacity:1,y:0},transition:{delay:.08},className:"mt-7 font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.03] text-ink max-w-4xl pr-4 sm:pr-0",children:["Architecting digital ",e.jsx("span",{className:"gradient-text",children:"transformation."})]}),e.jsx(b.p,{initial:{opacity:0,y:22},animate:{opacity:1,y:0},transition:{delay:.16},className:"mt-6 text-lg md:text-xl text-muted max-w-3xl leading-relaxed",children:"Bespoke engineering for IT automation, RAG systems, multi-agent workflows, and production software across government, healthcare, finance, and education."}),e.jsxs(b.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.24},className:"mt-9 flex flex-wrap gap-3",children:[e.jsxs(c,{to:"/contact",className:"button-primary px-7 py-4 text-sm font-bold uppercase tracking-widest",children:["Start a project ",e.jsx(u,{size:16})]}),e.jsx(c,{to:"/work",className:"button-secondary px-6 py-3.5 text-sm font-bold uppercase tracking-widest",children:"View case studies"})]})]}),e.jsx(de,{className:"hero-scene",title:"Six Kalpanaaaa service disciplines connected to one engineering hub",labels:L.map(s=>s.tag)})]})]}),e.jsx(ue,{}),e.jsx(ve,{}),e.jsx(ye,{}),e.jsx(xe,{}),e.jsx(ke,{}),e.jsx(Se,{}),e.jsx(me,{}),e.jsx(Ee,{}),e.jsx(Ce,{})]})}export{Re as Home};
