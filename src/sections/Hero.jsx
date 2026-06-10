import { UploadZone } from "../components/UploadZone.jsx";
import { MagicReveal } from "../components/MagicReveal.jsx";

const HEADLINE = {
  lines: ["Your face.", "12 moods.", "One sticker pack."],
  hl: 1,
  sub: ["Upload a selfie → get a Telegram sticker pack in ", "60 seconds."],
};

export function Hero({ magic }) {
  return (
    <section className="ds-section hero bg-coral">
      <div className="ds-wrap hero__grid">
        <div>
          <p className="eyebrow">AI sticker maker · Telegram · WhatsApp · Discord</p>
          <h1>
            {HEADLINE.lines.map((ln, i) => (
              <span key={i} style={{ display: "block" }}>
                {i === HEADLINE.hl ? <span className="hl">{ln}</span> : ln}
              </span>
            ))}
          </h1>
          <p className="hero__sub">{HEADLINE.sub[0]}<b>{HEADLINE.sub[1]}</b></p>
          <UploadZone onPick={magic.start} />
          <div className="hero__actions" style={{ marginTop: "var(--s-4)" }}>
            <a className="tg-link" href="#" onClick={(e) => e.preventDefault()}>or try the Telegram bot →</a>
          </div>
        </div>
        <MagicReveal status={magic.status} progress={magic.progress} selfieURL={magic.selfieURL} />
      </div>
    </section>
  );
}
