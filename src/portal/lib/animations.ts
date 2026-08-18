export const animations = {
  // Stagger utilities for lists
  stagger: {
    container: "animate-in fade-in duration-[var(--duration-normal)] ease-[var(--ease-decelerate)]",
    item: (index: number) => `animate-in fade-in slide-in-from-left-2 duration-[var(--duration-normal)] ease-[var(--ease-decelerate)] style-[animation-delay:${index * 40}ms] fill-mode-both`
  },
  
  // Bottom Sheet Physics
  bottomSheet: {
    overlay: "animate-in fade-in duration-[var(--duration-normal)]",
    content: "animate-in slide-in-from-bottom-full duration-[var(--duration-slow)] ease-[var(--ease-spring)]"
  },
  
  // Tap & Hover Interactions
  tap: "active:scale-[0.97] transition-transform duration-[var(--duration-instant)] ease-[var(--ease-smooth)]",
  hover: "hover:scale-[1.02] transition-transform duration-[var(--duration-fast)] ease-[var(--ease-spring)]",
  
  // Glows
  glowPrimary: "shadow-[var(--shadow-glow-blue)]",
  glowSuccess: "shadow-[var(--shadow-glow-emerald)]",
  
  // Page Entry
  pageEntry: "animate-in fade-in slide-in-from-bottom-4 duration-[var(--duration-slow)] ease-[var(--ease-decelerate)]"
};
