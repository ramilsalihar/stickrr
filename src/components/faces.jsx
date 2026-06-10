// Stickrr CSS/SVG sticker faces.
// 12 hand-built expressions. Each Face is its own die-cut sticker
// (white ring + colored blob + ink features). Stand-in for the
// AI-generated sticker the real product would drop in — swap each
// <Face> for an <img> of real generated art, keeping the die-cut wrapper.

export const INK = "#14110F";

// expression order matches a real 12-mood pack
export const EXPRESSIONS = [
  { key: "laughing", label: "laughing" },
  { key: "crying", label: "crying" },
  { key: "facepalm", label: "facepalm" },
  { key: "celebrating", label: "celebrating" },
  { key: "sideeye", label: "side-eye" },
  { key: "hearteyes", label: "heart eyes" },
  { key: "shocked", label: "shocked" },
  { key: "smug", label: "smug" },
  { key: "sleepy", label: "sleepy" },
  { key: "angry", label: "angry" },
  { key: "thinking", label: "thinking" },
  { key: "kiss", label: "kiss" },
];

// rotating pop palette so a 12-grid feels like a real multicolor pack
export const POPS = [
  "#FFD23F", "#4DA6FF", "#2BD9A8", "#9B6DFF", "#FF8FD0", "#FF4D4D",
];

function Blush() {
  return (
    <g opacity="0.5">
      <ellipse cx="34" cy="70" rx="7" ry="4.5" fill="#FF7A7A" />
      <ellipse cx="86" cy="70" rx="7" ry="4.5" fill="#FF7A7A" />
    </g>
  );
}

// ---- per-expression feature sets -----------------------------
function Features({ k }) {
  const s = { stroke: INK, strokeWidth: 6, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" };
  switch (k) {
    case "laughing":
      return (
        <g>
          <path d="M30 54 Q44 42 58 54" {...s} />
          <path d="M62 54 Q76 42 90 54" {...s} />
          <path d="M40 74 Q60 104 80 74 Z" fill={INK} />
          <path d="M52 88 Q60 96 68 88 Q60 92 52 88 Z" fill="#FF7A7A" />
          <path d="M26 56 Q22 64 28 66 Q33 62 30 55" fill="#4DA6FF" />
          <path d="M94 56 Q98 64 92 66 Q87 62 90 55" fill="#4DA6FF" />
        </g>
      );
    case "crying":
      return (
        <g>
          <path d="M30 48 Q44 60 58 48" {...s} />
          <path d="M62 48 Q76 60 90 48" {...s} />
          <path d="M38 56 Q34 78 42 92 Q50 78 46 56 Z" fill="#4DA6FF" opacity="0.9" />
          <path d="M74 56 Q70 78 78 92 Q86 78 82 56 Z" fill="#4DA6FF" opacity="0.9" />
          <path d="M44 90 Q52 80 60 88 Q68 80 76 90" {...s} strokeWidth="5" />
        </g>
      );
    case "facepalm":
      return (
        <g>
          <path d="M34 54 L52 54" {...s} />
          <path d="M68 54 L86 54" {...s} />
          <path d="M48 80 L72 80" {...s} strokeWidth="5" />
          {/* hand over forehead */}
          <g transform="rotate(-8 60 40)">
            <rect x="22" y="20" width="76" height="30" rx="15" fill="#F2C49B" stroke={INK} strokeWidth="4" />
            <path d="M34 22 L34 8 M48 21 L48 4 M62 21 L62 4 M76 22 L78 8" stroke={INK} strokeWidth="4" strokeLinecap="round" />
          </g>
        </g>
      );
    case "celebrating":
      return (
        <g>
          <Star cx="44" cy="52" />
          <Star cx="76" cy="52" />
          <path d="M40 72 Q60 100 80 72 Z" fill={INK} />
          <path d="M52 86 Q60 93 68 86 Q60 90 52 86 Z" fill="#FF7A7A" />
          {/* confetti */}
          <rect x="16" y="24" width="8" height="8" rx="2" fill="#FF4D4D" transform="rotate(20 20 28)" />
          <rect x="96" y="30" width="8" height="8" rx="2" fill="#2BD9A8" transform="rotate(-25 100 34)" />
          <circle cx="22" cy="56" r="4" fill="#9B6DFF" />
          <circle cx="100" cy="60" r="4" fill="#FFD23F" />
          <rect x="86" y="14" width="7" height="7" rx="2" fill="#4DA6FF" transform="rotate(15 89 17)" />
        </g>
      );
    case "sideeye":
      return (
        <g>
          <ellipse cx="44" cy="52" rx="13" ry="11" fill="#fff" stroke={INK} strokeWidth="3.5" />
          <ellipse cx="76" cy="52" rx="13" ry="11" fill="#fff" stroke={INK} strokeWidth="3.5" />
          <circle cx="52" cy="52" r="6" fill={INK} />
          <circle cx="84" cy="52" r="6" fill={INK} />
          <path d="M40 84 Q56 88 78 80" {...s} strokeWidth="5" />
        </g>
      );
    case "hearteyes":
      return (
        <g>
          <Heart cx="44" cy="52" fill="#FF4D4D" stroke="#fff" strokeWidth={5} />
          <Heart cx="76" cy="52" fill="#FF4D4D" stroke="#fff" strokeWidth={5} />
          <path d="M40 76 Q60 98 80 76 Z" fill={INK} />
          <Blush />
        </g>
      );
    case "shocked":
      return (
        <g>
          <path d="M32 40 Q44 32 56 40" {...s} strokeWidth="5" />
          <path d="M64 40 Q76 32 88 40" {...s} strokeWidth="5" />
          <circle cx="44" cy="56" r="11" fill="#fff" stroke={INK} strokeWidth="4" />
          <circle cx="76" cy="56" r="11" fill="#fff" stroke={INK} strokeWidth="4" />
          <circle cx="44" cy="57" r="5" fill={INK} />
          <circle cx="76" cy="57" r="5" fill={INK} />
          <ellipse cx="60" cy="88" rx="10" ry="12" fill={INK} />
        </g>
      );
    case "smug":
      return (
        <g>
          <path d="M32 52 Q44 46 56 52" {...s} />
          <path d="M64 52 Q76 46 88 52" {...s} />
          <circle cx="46" cy="54" r="3.5" fill={INK} />
          <circle cx="74" cy="54" r="3.5" fill={INK} />
          <path d="M40 82 Q56 78 80 86" {...s} strokeWidth="5" />
        </g>
      );
    case "sleepy":
      return (
        <g>
          <path d="M32 52 Q44 60 56 52" {...s} />
          <path d="M64 52 Q76 60 88 52" {...s} />
          <ellipse cx="60" cy="84" rx="6" ry="8" fill={INK} />
          <text x="86" y="40" fontFamily="Baloo 2, sans-serif" fontWeight="800" fontSize="18" fill={INK}>z</text>
          <text x="96" y="28" fontFamily="Baloo 2, sans-serif" fontWeight="800" fontSize="13" fill={INK}>z</text>
        </g>
      );
    case "angry":
      return (
        <g>
          <path d="M30 44 L54 54" {...s} strokeWidth="7" />
          <path d="M90 44 L66 54" {...s} strokeWidth="7" />
          <circle cx="44" cy="62" r="4" fill={INK} />
          <circle cx="76" cy="62" r="4" fill={INK} />
          <path d="M42 88 Q60 78 78 88" {...s} strokeWidth="6" />
          <path d="M96 50 q8 -2 6 6 q6 -1 2 7" stroke="#FF4D4D" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>
      );
    case "thinking":
      return (
        <g>
          <path d="M30 42 Q44 36 56 42" {...s} strokeWidth="5" />
          <circle cx="44" cy="54" r="4" fill={INK} />
          <circle cx="76" cy="54" r="4" fill={INK} />
          <path d="M48 84 Q60 80 70 84" {...s} strokeWidth="5" />
          {/* hand on chin */}
          <g transform="rotate(8 64 96)">
            <rect x="50" y="92" width="34" height="20" rx="10" fill="#F2C49B" stroke={INK} strokeWidth="4" />
          </g>
          <circle cx="92" cy="42" r="3.5" fill={INK} />
          <circle cx="101" cy="32" r="2.6" fill={INK} />
          <circle cx="108" cy="24" r="1.8" fill={INK} />
        </g>
      );
    case "kiss":
      return (
        <g>
          <path d="M30 52 Q44 42 58 52" {...s} />
          <circle cx="76" cy="52" r="4.5" fill={INK} />
          <path d="M52 82 q8 -8 16 0 q-3 8 -8 9 q-5 -1 -8 -9 Z" fill="#FF4D4D" stroke={INK} strokeWidth="3" />
          <Heart cx="94" cy="40" fill="#FF4D4D" stroke="#fff" strokeWidth={4} scale={0.55} />
        </g>
      );
    default:
      return null;
  }
}

function Star({ cx: cxP, cy: cyP }) {
  const cx = Number(cxP), cy = Number(cyP);
  const pts = [];
  for (let i = 0; i < 5; i++) {
    const a = (Math.PI / 2.5) * i - Math.PI / 2;
    pts.push([cx + Math.cos(a) * 11, cy + Math.sin(a) * 11]);
    const a2 = a + Math.PI / 5;
    pts.push([cx + Math.cos(a2) * 4.6, cy + Math.sin(a2) * 4.6]);
  }
  return <polygon points={pts.map((p) => p.join(",")).join(" ")} fill={INK} />;
}

function Heart({ cx: cxP, cy: cyP, fill, scale = 1, stroke, strokeWidth = 0 }) {
  const cx = Number(cxP), cy = Number(cyP);
  return (
    <path
      transform={`translate(${cx} ${cy}) scale(${scale}) translate(${-cx} ${-cy})`}
      d={`M${cx} ${cy + 9} C ${cx - 14} ${cy - 3}, ${cx - 8} ${cy - 16}, ${cx} ${cy - 6} C ${cx + 8} ${cy - 16}, ${cx + 14} ${cy - 3}, ${cx} ${cy + 9} Z`}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
  );
}

// ---- Face: a single die-cut sticker --------------------------
export function Face({ expr = "laughing", color = "#FFD23F", size = 120, peel = true, style = {} }) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      style={{ filter: peel ? "drop-shadow(0 6px 6px rgba(20,17,15,0.22))" : "none", overflow: "visible", ...style }}
      role="img"
      aria-label={`${expr} sticker`}
    >
      <circle cx="60" cy="60" r="52" fill="#fff" />
      <circle cx="60" cy="60" r="46" fill={color} />
      <Features k={expr} />
    </svg>
  );
}

// ---- StickerCard: face + label, tiltable die-cut tile --------
export function StickerCard({ expr, color, label, tilt = 0, size = 120 }) {
  return (
    <div className="sticker-tile" style={{ "--tilt-deg": `${tilt}deg` }}>
      <Face expr={expr} color={color} size={size} />
      {label && <span className="sticker-tile__label">{label}</span>}
    </div>
  );
}

// ---- SelfieSticker: the "before" photo placeholder -----------
export function SelfieSticker({ size = 220, style = {} }) {
  return (
    <div className="selfie" style={style}>
      <svg viewBox="0 0 120 120" width={size} height={size} aria-label="your selfie placeholder">
        <defs>
          <clipPath id="selfieClip"><rect x="6" y="6" width="108" height="108" rx="18" /></clipPath>
        </defs>
        <rect x="0" y="0" width="120" height="120" rx="24" fill="#fff" />
        <g clipPath="url(#selfieClip)">
          <rect x="6" y="6" width="108" height="108" fill="#E9E1F5" />
          <circle cx="60" cy="48" r="24" fill="#C9BBE6" />
          <ellipse cx="60" cy="118" rx="40" ry="40" fill="#C9BBE6" />
        </g>
        <rect x="6" y="6" width="108" height="108" rx="18" fill="none" stroke="rgba(20,17,15,0.12)" strokeWidth="2" />
      </svg>
      <span className="selfie__tag">your selfie</span>
    </div>
  );
}
