import { useReveal } from "../hooks/useReveal.js";

const PRICES = [
  { name: "Free", price: "$0", per: "", desc: "1 pack, watermarked. Keep it forever.", cta: "Start free", hot: false },
  { name: "Pack", price: "$2.99", per: "one-time", desc: "1 clean pack · all 12 moods · zero watermark.", cta: "Make my pack", hot: true, badge: "most popular" },
  { name: "Pro", price: "$4.99", per: "/mo", desc: "Unlimited packs + every art style + new drops.", cta: "Go Pro", hot: false },
];

export function Pricing() {
  const ref = useReveal();
  return (
    <section className="ds-section bg-cream edge-top" ref={ref}>
      <div className="ds-wrap">
        <div className="section-head reveal" style={{ marginBottom: "var(--s-8)", maxWidth: "30ch" }}>
          <p className="eyebrow">Now the boring part (it’s cheap)</p>
          <h2>Pick a plan. Or don’t — start free.</h2>
        </div>
        <div className="prices">
          {PRICES.map((p) => (
            <div key={p.name} className={"price-card reveal" + (p.hot ? " is-hot" : "")}>
              {p.badge && <span className="price-card__badge pill pill--brand">{p.badge}</span>}
              <span className="price-card__name">{p.name}</span>
              <span className="price-card__price">{p.price}{p.per && <small> {p.per}</small>}</span>
              <p className="price-card__desc">{p.desc}</p>
              <a className={"btn " + (p.hot ? "btn--ink" : "btn--ghost")} href="#" onClick={(e) => e.preventDefault()}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
