// Editorial motion tokens, restrained, executive tier
export const easeEditorial = "cubic-bezier(0.22, 1, 0.36, 1)";
export const dur = {
  fast: 200,
  base: 300,
  slow: 500,
  hero: 700,
};

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
