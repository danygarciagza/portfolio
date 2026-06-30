/* ui.jsx — shared components + helpers. Exports to window. */
const { useState, useEffect, useRef } = React;

/* pick a language string from an {en,es} object (or pass-through plain string) */
function tx(v, lang) {
  if (v == null) return "";
  if (typeof v === "object" && ("en" in v || "es" in v)) return v[lang] ?? v.en;
  return v;
}

/* ----- Top navigation bar ----- */
function TopNav({ route, lang, setLang, go }) {
  const T = window.T;
  const labels = T.nav[lang];
  const targets = ["home", "about", "work", "contact"];
  const isActive = (t) =>
  t === "home" && route.view === "home" ||
  t === "about" && route.view === "about" ||
  t === "work" && (route.view === "work" || route.view === "category" || route.view === "project") ||
  t === "contact" && route.view === "contact";

  return (
    <nav className="nav">
      <div className="nav-brand" onClick={() => go("home")}>
        <span className="mark">Daniela<b>.</b></span>
        <span className="role" style={{ fontFamily: "Hanken Grotesk" }}>{tx(T.role, lang)}</span>
      </div>
      <div className="nav-links">
        {targets.map((t, i) =>
        <span
          key={t}
          className={"nav-link" + (isActive(t) ? " active" : "")}
          onClick={() => go(t === "work" ? "work" : t)}>
          
            {labels[i]}
          </span>
        )}
        <div className="lang-toggle" role="group" aria-label="language">
          <button className={lang === "es" ? "on" : ""} onClick={() => setLang("es")}>ES</button>
          <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>
    </nav>);

}

/* ----- Rubber stamp seal ----- */
function Stamp({ text, style }) {
  return <div className="idstamp" style={style}>{text}</div>;
}

/* ----- Product viewer (e-commerce style gallery) ----- */
function ProductViewer({ project, lang }) {
  const T = window.T;
  return (
    <div className="viewer">
      <div className={"viewer-main" + (project.has3d ? " spin" : "")} style={{ position: "relative" }}>
        {project.has3d &&
        <span className="viewer-badge">{tx(T.threeD, lang)}</span>
        }
        <image-slot
          id={`pv-${project.slug}-main`}
          shape="rect"
          placeholder={project.has3d ? tx(T.rotateHint, lang) : "Drop a render"}>
        </image-slot>
      </div>
      {project.has3d && <div className="viewer-hint">{tx(T.rotateHint, lang)}</div>}
      <div className="thumbs">
        {[1, 2, 3].map((n) =>
        <image-slot
          key={n}
          id={`pv-${project.slug}-a${n}`}
          shape="rect"
          placeholder={`view ${n}`}>
        </image-slot>
        )}
      </div>
    </div>);

}

/* ----- Fun picture frame (CSS-drawn: painted star or checker border) ----- */
function FunFrame({ slotId, placeholder, variant = "stars", caption }) {
  const topN = Array.from({ length: 5 });
  const sideN = Array.from({ length: 5 });
  return (
    <div className={"fframe fframe--" + variant}>
      {variant === "stars" &&
      <React.Fragment>
          <div className="ff-stars ff-top">{topN.map((_, i) => <span key={i} className="ff-star" />)}</div>
          <div className="ff-stars ff-bottom">{topN.map((_, i) => <span key={i} className="ff-star" />)}</div>
          <div className="ff-stars ff-left">{sideN.map((_, i) => <span key={i} className="ff-star" />)}</div>
          <div className="ff-stars ff-right">{sideN.map((_, i) => <span key={i} className="ff-star" />)}</div>
        </React.Fragment>
      }
      <div className="ff-mat" style={{ backgroundColor: "rgb(157, 202, 197)" }}>
        <image-slot id={slotId} shape="rect" placeholder={placeholder}></image-slot>
        {caption && <div className="ff-cap" style={{ color: "rgb(62, 54, 49)" }}>{caption}</div>}
      </div>
    </div>);

}

Object.assign(window, { tx, TopNav, Stamp, ProductViewer, FunFrame });