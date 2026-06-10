import { UploadZone } from "../components/UploadZone.jsx";

export function FooterCTA({ magic }) {
  return (
    <section className="ds-section bg-coral edge-top footer-cta">
      <div className="ds-wrap">
        <p className="eyebrow">Okay but actually try it</p>
        <h2 style={{ fontSize: "var(--t-display)", marginBottom: "var(--s-5)" }}>Your chat is one selfie away.</h2>
        <UploadZone onPick={magic.start} label="Upload a selfie" />
        <div style={{ marginTop: "var(--s-4)" }}>
          <a className="tg-link" href="#" onClick={(e) => e.preventDefault()}>Try the Telegram bot instead →</a>
        </div>
      </div>
    </section>
  );
}
