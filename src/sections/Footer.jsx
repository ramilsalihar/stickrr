import { Face } from "../components/faces.jsx";

export function Footer() {
  return (
    <footer className="footbar">
      <span className="brand-logo" style={{ fontSize: "1.25rem" }}>
        <span className="mark"><Face expr="laughing" color="var(--brand)" size={22} peel={false} /></span>
        Stickrr
      </span>
      <div className="footlinks">
        <a href="#" onClick={(e) => e.preventDefault()}>Telegram bot</a>
        <a href="#" onClick={(e) => e.preventDefault()}>Privacy</a>
        <a href="#" onClick={(e) => e.preventDefault()}>Terms</a>
        <a href="#" onClick={(e) => e.preventDefault()}>Contact</a>
      </div>
    </footer>
  );
}
