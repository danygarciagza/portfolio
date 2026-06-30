/* app.jsx — router, language, tweaks, mount. */
const { useState, useEffect } = React;
const { tx, TopNav, HomeWall, HomeBook, About, Category, ProjectDetail, Contact } = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "homeStyle": "wall",
  "titleFont": "Asimov Print C",
  "accent": "#e2583e",
  "paper": "#f3f2ef",
  "personality": 5
}/*EDITMODE-END*/;

const TITLE_FONTS = {
  "Asimov Print C": "'Asimov Print C', 'Bricolage Grotesque', system-ui, sans-serif",
  "PP Editorial New": "'PP Editorial New', Georgia, serif",
  "Acid Grotesk": "'Acid Grotesk', system-ui, sans-serif",
  "Pexel Grotesk": "'Pexel Grotesk', system-ui, sans-serif",
  "PP Mondwest": "'PP Mondwest', 'Courier New', monospace",
  "Bricolage": "'Bricolage Grotesque', system-ui, sans-serif",
};

/* ---- hash routing ---- */
function parseHash() {
  const h = (window.location.hash || "#/").replace(/^#\/?/, "");
  const parts = h.split("/").filter(Boolean);
  if (parts.length === 0) return { view: "home" };
  if (parts[0] === "about") return { view: "about" };
  if (parts[0] === "contact") return { view: "contact" };
  if (parts[0] === "work") {
    if (parts[2]) return { view: "project", cat: parts[1], slug: parts[2] };
    if (parts[1]) return { view: "category", cat: parts[1] };
    return { view: "work" };
  }
  return { view: "home" };
}
function buildHash(view, params = {}) {
  switch (view) {
    case "about": return "#/about";
    case "contact": return "#/contact";
    case "work": return "#/work";
    case "category": return `#/work/${params.cat}`;
    case "project": return `#/work/${params.cat}/${params.slug}`;
    default: return "#/";
  }
}

/* ---- Work index (the three categories) ---- */
function WorkIndex({ lang, go }) {
  const { CATEGORIES, PROJECTS } = window.PF;
  return (
    <div className="page-wrap view-enter">
      <div className="crumbs"><span>{window.T.nav[lang][2]}</span></div>
      <div className="cat-head">
        <div className="eyebrow">{lang === "es" ? "Portafolio" : "Portfolio"}</div>
        <h1>{lang === "es" ? "Proyectos" : "Work"}</h1>
        <p>{lang === "es"
          ? "Tres estantes. Elige uno para abrir los proyectos."
          : "Three shelves. Pick one to open the projects inside."}</p>
      </div>
      <div className="proj-grid">
        {CATEGORIES.map((c) => {
          const count = PROJECTS.filter((p) => p.category === c.id).length;
          return (
            <div key={c.id} className="proj-card" style={{ "--rot": "0deg" }} onClick={() => go("category", { cat: c.id })}>
              <div className="polaroid" style={{ paddingBottom: 12 }}>
                <div style={{ height: 150, background: c.color, display: "flex", alignItems: "flex-end", padding: 16 }}>
                  <span className="display" style={{ color: "var(--card)", fontWeight: 800, fontSize: 26, letterSpacing: "-.02em", textShadow: "0 1px 3px rgba(0,0,0,.25)" }}>{tx(c.spine, lang)}</span>
                </div>
                <div className="pol-cap">
                  <div className="t">{tx(c.name, lang)}</div>
                  <div className="s">{tx(c.blurb, lang)}</div>
                  <div className="meta"><span>{count} {lang === "es" ? "proyectos" : "projects"}</span></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = useState(parseHash());
  const [lang, setLang] = useState(() => localStorage.getItem("pf-lang2") || "en");
  const { CATEGORIES } = window.PF;

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => { localStorage.setItem("pf-lang2", lang); }, [lang]);

  // scroll to top on view change
  useEffect(() => { window.scrollTo(0, 0); }, [route.view, route.slug, route.cat]);

  // apply tweaks → CSS vars
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--accent", t.accent);
    r.style.setProperty("--paper", t.paper);
    r.style.setProperty("--font-display", TITLE_FONTS[t.titleFont] || TITLE_FONTS["Asimov Print C"]);
    const level = t.personality <= 3 ? "low" : t.personality >= 8 ? "high" : "mid";
    r.setAttribute("data-clutter", level);
  }, [t.accent, t.paper, t.personality, t.titleFont]);

  const go = (view, params = {}) => { window.location.hash = buildHash(view, params); };

  let content;
  if (route.view === "home") {
    content = t.homeStyle === "book"
      ? <HomeBook lang={lang} go={go} categories={CATEGORIES} />
      : <HomeWall lang={lang} go={go} categories={CATEGORIES} />;
  } else if (route.view === "about") {
    content = <About lang={lang} go={go} />;
  } else if (route.view === "work") {
    content = <WorkIndex lang={lang} go={go} />;
  } else if (route.view === "category") {
    content = <Category lang={lang} go={go} catId={route.cat} />;
  } else if (route.view === "project") {
    content = <ProjectDetail lang={lang} go={go} catId={route.cat} slug={route.slug} />;
  } else if (route.view === "contact") {
    content = <Contact lang={lang} go={go} />;
  }

  return (
    <React.Fragment>
      <TopNav route={route} lang={lang} setLang={setLang} go={go} />
      {content}

      <TweaksPanel>
        <TweakSection label={lang === "es" ? "Inicio" : "Home"} />
        <TweakRadio
          label={lang === "es" ? "Escena" : "Scene"}
          value={t.homeStyle}
          options={["wall", "book"]}
          onChange={(v) => setTweak("homeStyle", v)}
        />
        <TweakSection label={lang === "es" ? "Tipografía" : "Type"} />
        <TweakSelect
          label={lang === "es" ? "Fuente de títulos" : "Title font"}
          value={t.titleFont}
          options={["Asimov Print C", "PP Editorial New", "Acid Grotesk", "Pexel Grotesk", "PP Mondwest", "Bricolage"]}
          onChange={(v) => setTweak("titleFont", v)}
        />
        <TweakSection label={lang === "es" ? "Color y papel" : "Color & paper"} />
        <TweakColor
          label={lang === "es" ? "Acento" : "Accent"}
          value={t.accent}
          options={["#e2583e", "#2f5fd0", "#d59a2a", "#3f7d52", "#7d5aa6"]}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakColor
          label={lang === "es" ? "Papel" : "Paper"}
          value={t.paper}
          options={["#f3f2ef", "#ffffff", "#eef0ef", "#f1ece1"]}
          onChange={(v) => setTweak("paper", v)}
        />
        <TweakSection label={lang === "es" ? "Personalidad" : "Personality"} />
        <TweakSlider
          label={lang === "es" ? "Desorden" : "Clutter"}
          value={t.personality} min={1} max={10} step={1}
          onChange={(v) => setTweak("personality", v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
