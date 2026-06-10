import { useEffect, useState } from "react";
import { Face, EXPRESSIONS, POPS } from "../components/faces.jsx";
import { useReveal } from "../hooks/useReveal.js";

const HANDLES = [
  "@mayhem_maya", "@notyourbabe", "@deadinside.gif", "@bigmoodonly", "@404_chill",
  "@sigh_collective", "@touch_grass", "@uwu_general", "@menace2chat", "@soft_launch",
  "@gremlin_hours", "@certified_yapper",
];
const TIMES = ["just now", "1 min ago", "2 min ago", "3 min ago", "5 min ago", "6 min ago", "8 min ago", "11 min ago"];

// deterministic-ish random pack data (built once)
function buildPacks(n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const faces = [];
    const start = (i * 5) % EXPRESSIONS.length;
    for (let j = 0; j < 3; j++) {
      const e = EXPRESSIONS[(start + j * 3) % EXPRESSIONS.length];
      faces.push({ expr: e.key, color: POPS[(i + j) % POPS.length] });
    }
    out.push({
      faces,
      handle: HANDLES[i % HANDLES.length],
      time: TIMES[i % TIMES.length],
      ava: POPS[(i * 2) % POPS.length],
      tilt: (i % 2 ? 1 : -1) * (1 + (i % 3)),
    });
  }
  return out;
}
const PACKS = buildPacks(12);

function LiveCounter() {
  const [n, setN] = useState(48217);
  useEffect(() => {
    const id = setInterval(() => setN((v) => v + 1 + Math.floor(Math.random() * 3)), 1400);
    return () => clearInterval(id);
  }, []);
  return <span className="counter">{n.toLocaleString()}</span>;
}

function PackTile({ pack }) {
  return (
    <div className="pack-tile" style={{ transform: `rotate(${pack.tilt}deg)` }}>
      <div className="pack-tile__faces">
        {pack.faces.map((f, i) => <Face key={i} expr={f.expr} color={f.color} size="100%" peel={false} style={{ width: "100%", height: "auto" }} />)}
      </div>
      <div className="pack-tile__meta">
        <span className="pack-tile__user">
          <span className="pack-tile__ava" style={{ background: pack.ava }} />
          {pack.handle}
        </span>
        <span className="pack-tile__time">{pack.time}</span>
      </div>
    </div>
  );
}

export function SocialProof() {
  const ref = useReveal();
  return (
    <section className="ds-section bg-cream edge-top" ref={ref}>
      <div className="ds-wrap">
        <div className="reveal" style={{ marginBottom: "var(--s-6)" }}>
          <p className="eyebrow">Made by people like you</p>
          <div className="counter-wrap">
            <LiveCounter />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--t-title)", lineHeight: 1.1 }}>
              packs made today<br />
              <span className="pill pill--live" style={{ marginTop: 8 }}><span className="live-dot" /> 5 made in the last minute</span>
            </span>
          </div>
        </div>
        <div className="wall">
          {PACKS.map((p, i) => <PackTile key={i} pack={p} />)}
        </div>
      </div>
    </section>
  );
}
