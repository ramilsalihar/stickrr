import { Fragment, useEffect, useState } from "react";
import { Face } from "./components/faces.jsx";
import { Hero } from "./sections/Hero.jsx";
import { HowItWorks } from "./sections/HowItWorks.jsx";
import { StylePicker } from "./sections/StylePicker.jsx";
import { SocialProof } from "./sections/SocialProof.jsx";
import { Pricing } from "./sections/Pricing.jsx";
import { FooterCTA } from "./sections/FooterCTA.jsx";
import { Footer } from "./sections/Footer.jsx";

function TopBar() {
  return (
    <header className="topbar">
      <span className="brand-logo">
        <span className="mark"><Face expr="laughing" color="var(--brand)" size={26} peel={false} /></span>
        Stickrr
      </span>
      <a className="btn btn--ink" href="#" onClick={(e) => e.preventDefault()} style={{ padding: "0.6em 1em", fontSize: "var(--t-small)" }}>
        Try in Telegram
      </a>
    </header>
  );
}

export default function App() {
  // ---- magic moment state machine ----
  const [status, setStatus] = useState("idle"); // idle | cooking | done
  const [progress, setProgress] = useState(0);
  const [selfieURL, setSelfieURL] = useState(null);

  function start(file) {
    if (file && file.type && file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setSelfieURL((prev) => { if (prev) URL.revokeObjectURL(prev); return url; });
    }
    setStatus("cooking");
    setProgress(0);
  }

  useEffect(() => {
    if (status !== "cooking") return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(100);
      setStatus("done");
      return;
    }
    // progress is computed from elapsed time so a throttled interval still
    // completes in ~2.4s
    const DUR = 2400;
    const t0 = performance.now();
    const id = setInterval(() => {
      const p = Math.min(100, ((performance.now() - t0) / DUR) * 100);
      setProgress(p);
      if (p >= 100) { clearInterval(id); setTimeout(() => setStatus("done"), 250); }
    }, 40);
    return () => clearInterval(id);
  }, [status]);

  const magic = { status, progress, selfieURL, start };

  // failsafe: never leave reveal content permanently hidden (deep-links, captures)
  useEffect(() => {
    const id = setTimeout(() => {
      document.querySelectorAll(".reveal:not([data-in])").forEach((n) => n.setAttribute("data-in", ""));
    }, 1800);
    return () => clearTimeout(id);
  }, []);

  return (
    <Fragment>
      <TopBar />
      <main>
        <Hero magic={magic} />
        <HowItWorks />
        <StylePicker />
        <SocialProof />
        <Pricing />
        <FooterCTA magic={magic} />
      </main>
      <Footer />
    </Fragment>
  );
}
