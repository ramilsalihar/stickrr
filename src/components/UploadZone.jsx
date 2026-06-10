import { useRef, useState } from "react";

export function UploadZone({ onPick, label = "Upload a selfie", note = true }) {
  const inputRef = useRef(null);
  const [drag, setDrag] = useState(false);
  function pick(file) { if (file) onPick(file); }
  return (
    <div className="uploader">
      <div
        className={"dropzone" + (drag ? " is-drag" : "")}
        onClick={() => inputRef.current && inputRef.current.click()}
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => { e.preventDefault(); setDrag(false); pick(e.dataTransfer.files && e.dataTransfer.files[0]); }}
        role="button" tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); inputRef.current.click(); } }}
      >
        <div className="dropzone__icon" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#14110F" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 16V4" /><path d="m6 10 6-6 6 6" /><path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
          </svg>
        </div>
        <span className="btn btn--primary">{label}</span>
        <span className="dropzone__hint"><b>Drag & drop</b> a selfie, or tap to browse</span>
        <input ref={inputRef} type="file" accept="image/*" hidden
               onChange={(e) => pick(e.target.files && e.target.files[0])} />
      </div>
      {note && <p className="no-form-note">No sign-up. No email. The magic happens first. ✦</p>}
    </div>
  );
}
