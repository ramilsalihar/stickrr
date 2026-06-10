import { Face, SelfieSticker, EXPRESSIONS, POPS } from "./faces.jsx";

// uploaded photo or placeholder
function SelfiePhoto({ src, size = 132 }) {
  if (src) {
    return (
      <div className="selfie" style={{ width: size }}>
        <div style={{ width: size, height: size, borderRadius: 22, overflow: "hidden", border: "6px solid #fff", background: "#eee" }}>
          <img src={src} alt="your selfie" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <span className="selfie__tag">your selfie</span>
      </div>
    );
  }
  return <SelfieSticker size={size} />;
}

// before → after grid with cooking progress
export function MagicReveal({ status, progress, selfieURL }) {
  const cooking = status === "cooking";
  const done = status === "done";
  const visible = cooking ? Math.floor((progress / 100) * 12) : 12;

  return (
    <div className="magic tilt-r" style={{ "--tilt-deg": "1.5deg" }}>
      <div className="magic__row">
        <SelfiePhoto src={selfieURL} size={120} />
        <div>
          <div className="magic__arrow" style={{ marginBottom: 8 }}>
            <span className="pill pill--yellow">{done ? "ready! ✦" : cooking ? "cooking…" : "you get →"}</span>
          </div>
          <div className="magic__grid">
            {EXPRESSIONS.map((e, i) => {
              const show = i < visible;
              return (
                <div className="magic__cell" key={e.key}>
                  {show
                    ? <div className={cooking ? "pop-in" : ""}><Face expr={e.key} color={POPS[i % POPS.length]} size="100%" peel={false} style={{ width: "100%", height: "auto" }} /></div>
                    : <div className="ph" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {cooking && (
        <div>
          <div className="cook-bar"><div className="cook-bar__fill" style={{ width: progress + "%" }} /></div>
          <p className="cook-label">Turning you into stickers… {Math.round(progress)}%</p>
        </div>
      )}
      {done && (
        <div className="done-actions">
          <a className="btn btn--ink" href="#" onClick={(e) => e.preventDefault()}>Add to Telegram</a>
          <a className="btn btn--ghost" href="#" onClick={(e) => e.preventDefault()}>Download pack</a>
        </div>
      )}
      {status === "idle" && (
        <p className="cook-label" style={{ color: "var(--ink-soft)" }}>↑ that’s a demo. Upload yours to make it real.</p>
      )}
    </div>
  );
}
