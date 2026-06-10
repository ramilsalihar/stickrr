import { Face } from "../components/faces.jsx";
import { useReveal } from "../hooks/useReveal.js";

export function HowItWorks() {
  const ref = useReveal();
  const steps = [
    { n: 1, t: "Upload", s: "Drop one selfie", art: <Face expr="smug" color="var(--brand)" size={64} /> },
    { n: 2, t: "Pick a style", s: "Cartoon, anime, pixel…", art: <Face expr="hearteyes" color="#9B6DFF" size={64} /> },
    { n: 3, t: "Add to chat", s: "Telegram in one tap", art: <Face expr="celebrating" color="#2BD9A8" size={64} /> },
  ];
  return (
    <section className="ds-section bg-cream edge-top" ref={ref}>
      <div className="ds-wrap">
        <div className="section-head reveal" style={{ marginBottom: "var(--s-8)" }}>
          <p className="eyebrow">How it works</p>
          <h2>Three taps. That’s the whole thing.</h2>
        </div>
        <div className="steps">
          {steps.map((st, i) => (
            <div className="step reveal" key={st.n} style={{ "--tilt-deg": (i % 2 ? "1.5deg" : "-1.5deg") }}>
              <div className="step__num">{st.n}</div>
              <div>
                <div className="step__title">{st.t}</div>
                <div className="step__sub">{st.s}</div>
              </div>
              <div className="step__art">{st.art}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
