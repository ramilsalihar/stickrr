import { Fragment, useState } from "react";
import { Face } from "../components/faces.jsx";
import { useReveal } from "../hooks/useReveal.js";

const STYLES = [
  { key: "cartoon", name: "Cartoon" },
  { key: "anime", name: "Anime" },
  { key: "sketch", name: "Sketch" },
  { key: "pixel", name: "Pixel" },
  { key: "meme", name: "Meme" },
];

// style fx are stylized stand-ins; real renders will differ
function StyledFace({ styleKey, expr, color, size }) {
  const fx = { cartoon: "", anime: "fx-anime", sketch: "fx-sketch", pixel: "fx-pixel", meme: "" }[styleKey] || "";
  const faceColor = styleKey === "sketch" ? "#EDEDED" : color;
  return (
    <div className="face-frame" style={{ position: "relative", lineHeight: 0 }}>
      <div className={fx}><Face expr={expr} color={faceColor} size={size} /></div>
      {styleKey === "pixel" && <div className="fx-pixel-grid" />}
      {styleKey === "meme" && (
        <Fragment>
          <div className="meme-text top">when</div>
          <div className="meme-text bottom">the stickers</div>
        </Fragment>
      )}
    </div>
  );
}

export function StylePicker() {
  const [active, setActive] = useState("cartoon");
  const ref = useReveal();
  return (
    <section className="ds-section bg-ink edge-top" ref={ref}>
      <div className="ds-wrap">
        <div className="section-head reveal" style={{ marginBottom: "var(--s-8)" }}>
          <p className="eyebrow">Pick your universe</p>
          <h2>Same face. Five whole personalities.</h2>
        </div>
        <div className="styles-row reveal" style={{ marginBottom: "var(--s-8)" }}>
          {STYLES.map((st, i) => (
            <div key={st.key}
                 className={"style-card" + (active === st.key ? " is-active" : "")}
                 style={{ "--tilt-deg": (i % 2 ? "2deg" : "-2deg") }}
                 onClick={() => setActive(st.key)}
                 role="button" tabIndex={0}
                 onKeyDown={(e) => { if (e.key === "Enter") setActive(st.key); }}>
              <StyledFace styleKey={st.key} expr="laughing" color="#FFD23F" size={88} />
              <span className="style-card__name">{st.name}</span>
            </div>
          ))}
        </div>
        <div className="preview-stage reveal">
          <StyledFace styleKey={active} expr="celebrating" color="var(--brand)" size={150} />
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--t-title)", textTransform: "capitalize" }}>{active} mode</p>
        </div>
      </div>
    </section>
  );
}
