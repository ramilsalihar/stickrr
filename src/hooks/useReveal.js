import { useEffect, useRef } from "react";

// reveal-on-scroll: marks .reveal children with [data-in] when they enter view.
// Anything already in view reveals immediately so content never depends on
// IntersectionObserver timing.
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const nodes = Array.from(el.querySelectorAll(".reveal"));
    const reveal = (n) => n.setAttribute("data-in", "");
    const vh = window.innerHeight || 800;
    nodes.forEach((n) => { if (n.getBoundingClientRect().top < vh * 0.95) reveal(n); });
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); } });
    }, { threshold: 0, rootMargin: "0px 0px -8% 0px" });
    nodes.forEach((n) => { if (!n.hasAttribute("data-in")) io.observe(n); });
    return () => io.disconnect();
  }, []);
  return ref;
}
