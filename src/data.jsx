/* data.jsx — bilingual content for Daniela García's portfolio.
   Exposed on window.PF (data) and window.T (ui strings). */

const CATEGORIES = [
  {
    id: "product",
    color: "var(--tab-1)",
    name: { en: "Product design", es: "Diseño de producto" },
    spine: { en: "PRODUCT", es: "PRODUCTO" },
    blurb: {
      en: "Objects that solve something real and still make you smile — ergonomics, ritual and a bit of story.",
      es: "Objetos que resuelven algo real y aún te hacen sonreír: ergonomía, ritual y algo de historia.",
    },
  },
  {
    id: "graphic",
    color: "var(--tab-4)",
    name: { en: "Graphic & branding", es: "Gráfico y marca" },
    spine: { en: "BRAND", es: "MARCA" },
    blurb: {
      en: "Marks and identities — geometric play, warm type and logos I'm still fond of.",
      es: "Marcas e identidades: juego geométrico, tipografía cálida y logos que aún me gustan.",
    },
  },
  {
    id: "furniture",
    color: "var(--tab-2)",
    name: { en: "Furniture & space", es: "Mobiliario y espacio" },
    spine: { en: "SPACE", es: "ESPACIO" },
    blurb: {
      en: "Pieces and rooms — modular systems, furniture and a table that bends light.",
      es: "Piezas y espacios: sistemas modulares, mobiliario y una mesa que dobla la luz.",
    },
  },
];

/* Default sample .glb shown in the 3D viewer when a project model is not present.
   Per-project: add a `model` field with a .glb URL to override. */
/* Sample model shown until a project's real .glb is added. */
const DEFAULT_MODEL = "https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Models@master/2.0/WaterBottle/glTF-Binary/WaterBottle.glb";

/* Per-project .glb paths. Until the file exists, the viewer falls back to
   DEFAULT_MODEL automatically. */

const PROJECTS = [
  {
    slug: "duna", category: "product", year: "2024", has3d: true, rot: "-2deg", coverSrc: "uploads/duna-cover.jpg", coverAspect: "1410/1770",
    model: "models/duna.glb",
    title: "Duna",
    tag: { en: "Family of products", es: "Familia de productos" },
    oneLine: {
      en: "Ergonomic kitchenware for hands with limited mobility — arthritis-friendly, dune-soft forms.",
      es: "Vajilla ergonómica para manos que duelen: amable con la artritis, suave como una duna.",
    },
    materials: { en: "Ceramic · Concept + renders", es: "Cerámica · Concepto + renders" },
    chips: { en: ["Inclusive Design", "Ergonomics", "System Design"], es: ["Inclusive Design", "Ergonomics", "System Design"] },
    body: {
      en: "Inspired by the sand dunes of Coahuila, Duna is a family of three pieces for people living with arthritis or chronic joint pain. A two-handled cup, sized like a matcha chawan, is easy to lift without gripping. A tabletop lime squeezer replaces the painful one-handed squeeze used across Mexico with a lever-hinge: rest it down, lift the arm, place the lime, press down. A handled container completes the set. Every form softens a daily ritual that usually hurts.",
      es: "Inspirada en las dunas de Coahuila, Duna es una familia de tres piezas para personas con artritis o dolor articular crónico. Una taza de dos asas, con las dimensiones de un chawan de matcha, es fácil de levantar sin apretar. Un exprimidor de limón de mesa reemplaza el doloroso exprimidor de una mano usado en México con una bisagra de palanca: lo apoyas, levantas el brazo, colocas el limón y presionas hacia abajo. Un contenedor con asa completa el set. Cada forma suaviza un ritual diario que normalmente duele.",
    },
  },
  {
    slug: "coffee-ritual", category: "product", year: "2025", has3d: false, mainHeight: "500px", rot: "1.5deg",
    title: { en: "Ryūsui", es: "Ryūsui" },
    mainSrc: "uploads/coffee-ritual-main.webp",
    thumbSrcs: { 2: "uploads/coffee-ritual-thumb-2.webp" },
    tag: { en: "Pour-over set", es: "Set para café de filtro" },
    oneLine: {
      en: "A pour-over set drawn from Japanese zen gardens — stone, moss, raked sand.",
      es: "Un set de café de filtro inspirado en jardines zen: piedra, musgo y arena rastrillada.",
    },
    materials: { en: "Ceramic · Concept + renders", es: "Cerámica · Concepto + renders" },
    chips: { en: ["Tableware", "Product Development"], es: ["Tableware", "Product Development"] },
    body: {
      en: "Drip coffee is a small ritual of patience and repeated, spiral motions — the same rhythm as tending a zen garden. The set translates that directly: the dripper is the garden stone, the cup-stand wears an irregular green moss texture, and the cup itself carries the raked lines of sand. Three textures, one quiet morning.",
      es: "El café de filtro es un pequeño ritual de paciencia y movimientos repetidos en espiral, el mismo ritmo que cuidar un jardín zen. El set lo traduce directamente: el dripper es la piedra del jardín, el soporte lleva una textura irregular de musgo verde, y la taza guarda las líneas rastrilladas de la arena. Tres texturas, una mañana tranquila.",
    },
  },
  {
    slug: "sense-rituals", category: "product", year: "2025", has3d: true, thumbCount: 6, modelHeight: "360px", rot: "-1.2deg",
    model: "models/sense-rituals.glb",
    title: "Sense Rituals",
    tag: { en: "Family of products", es: "Familia de productos" },
    oneLine: {
      en: "Three objects for the senses — candle, incense, tea — that nest into one sculptural form.",
      es: "Tres objetos para los sentidos —vela, incienso, té— que se guardan en una sola forma.",
    },
    materials: { en: "Brass and Wood · Concept", es: "Latón · Madera" },
    chips: { en: ["System Design", "Modular", "Experimental"], es: ["System Design", "Modular", "Experimental"] },
    body: {
      en: "A set of three home objects built from spheres and half-domes: a candle holder (sight & touch), an incense holder (smell) and a tea canister (taste). Two of them store together to read as a single sculptural piece, so the family stays calm and consistent on a shelf — and reveals itself only when used. Brass and wood.",
      es: "Un set de tres objetos para el hogar construidos con esferas y medias cúpulas: un portavelas (vista y tacto), un portaincienso (olfato) y un bote para té (gusto). Dos de ellos se guardan juntos y se leen como una sola pieza escultórica, así la familia permanece tranquila y consistente en una repisa, y se revela sólo al usarse. Latón y madera.",
    },
  },
  {
    slug: "nido", category: "product", year: "2025", has3d: false, rot: "1deg",
    title: "Nido",
    tag: { en: "Family of products", es: "Familia de productos" },
    oneLine: {
      en: "Animal-shaped hygiene dispensers that make hand-washing fun for kids.",
      es: "Dispensadores con forma de animal que hacen divertido lavarse las manos.",
    },
    materials: { en: "Concept · Renders", es: "Concepto · Renders" },
    chips: { en: ["Lifestyle Accessories", "Concept Development"], es: ["Lifestyle Accessories", "Concept Development"] },
    body: {
      en: "Nido (\u201cnest\u201d) is a family of paper-towel, tissue and wet-wipe dispensers designed for an elementary-school classroom. Each one takes the shape of a friendly animal, turning a hygiene routine into something kids actually want to do. Rounded, safe edges and intuitive, obvious use — designed to motivate clean hands without a single instruction.",
      es: "Nido es una familia de dispensadores de toallas de papel, pañuelos y toallitas húmedas dise\u00f1ada para un sal\u00f3n de primaria. Cada uno toma la forma de un animal amigable, convirtiendo la higiene en algo que los ni\u00f1os quieren hacer. Bordes redondeados y seguros, uso intuitivo y evidente: dise\u00f1ada para motivar manos limpias sin una sola instrucci\u00f3n.",
    },
  },
  {
    slug: "prisma", category: "furniture", year: "2025", has3d: false, mainHeight: "440px", rot: "-1.5deg",
    title: "Prisma",
    tag: { en: "Side table", es: "Mesa auxiliar" },
    oneLine: {
      en: "A triangular side table whose colored glass throws a Pink Floyd rainbow.",
      es: "Una mesa auxiliar triangular cuyo cristal de color proyecta un arco\u00edris \u00e0 la Pink Floyd.",
    },
    materials: { en: "Colored glass · Steel · Render", es: "Cristal de color · Acero · Render" },
    chips: { en: ["Furniture Design", "Parametric"], es: ["Furniture Design", "Parametric"] },
    body: {
      en: "A triangular side table with colored glass panels set into its supports. When light passes through, the three primaries blend across the floor like a prism — a quiet nod to The Dark Side of the Moon. It isn't a real prism; it's three sheets of colored glass placed so their shadows overlap into a rainbow.",
      es: "Una mesa auxiliar triangular con paneles de cristal de color en sus soportes. Cuando la luz los atraviesa, los tres primarios se mezclan en el piso como un prisma: un gui\u00f1o a The Dark Side of the Moon. No es un prisma real; son tres l\u00e1minas de cristal de color colocadas para que sus sombras se superpongan en un arco\u00edris. Modelada y renderizada.",
    },
  },
  {
    slug: "concept-store", category: "furniture", year: "2025", has3d: false, galleryLayout: "main-grid", gridCount: 4, mainHeight: "380px", thumbAspect: "16/9", rot: "1.2deg",
    title: { en: "Symbiosis", es: "Symbiosis" },
    tag: { en: "Space + objects", es: "Espacio + objetos" },
    oneLine: {
      en: "A converging space — retail, performance, and coffee — with three families of modular objects designed for it.",
      es: "Un espacio de convergencia —retail, performance y café— con tres familias de objetos modulares diseñadas para él.",
    },
    materials: { en: "Spatial · Furniture", es: "Espacio · Mobiliario" },
    chips: { en: ["Spatial Design", "Commercial Furniture"], es: ["Spatial Design", "Commercial Furniture"] },
    body: {
      en: "Symbiosis is a concept store built on convergence — retail, a central performance stage, and a coffee bar sharing one open room. A circular skylight pours light onto a sunken stage that spirals down in a continuous ramp, ringed by a floor-length curtain that opens or closes to re-stage the space for each day's program. I designed three modular families for it, named for the biology that inspired the concept: a Modular Tile that arranges into near-endless patterns; Membrane, interlocking seats and tables that puzzle together into countless configurations; and Cell, display stands for showing work by local artists and makers.",
      es: "Symbiosis es una concept store construida sobre la idea de convergencia: retail, un escenario central para performances y una cafeter\u00eda conviviendo en una misma sala abierta. Un tragaluz circular deja caer la luz sobre un escenario hundido que desciende en una rampa continua en espiral, rodeado por una cortina de piso a techo que se abre o se cierra para re-montar el espacio seg\u00fan el uso de cada d\u00eda. Dise\u00f1\u00e9 tres familias modulares para \u00e9l, nombradas por la biolog\u00eda que inspir\u00f3 el concepto: un Azulejo Modular que se acomoda en patrones casi infinitos; Membrana, asientos y mesas que se entrelazan como un rompecabezas en incontables arreglos; y C\u00e9lula, estantes de exhibici\u00f3n para mostrar el trabajo de artistas y creadores locales.",
    },
  },
  {
    slug: "fronttec", category: "graphic", year: "2023", has3d: false, galleryLayout: "grid4", hideMaterials: true, rot: "-1deg",
    title: "FrontTec",
    tag: { en: "Logo & identity", es: "Logo e identidad" },
    oneLine: {
      en: "An isometric-cube logo for a university front-end dev team.",
      es: "Un logo de cubo isom\u00e9trico para un equipo universitario de desarrollo front-end.",
    },
    materials: { en: "Logo · Identity", es: "Logo · Identidad" },
    chips: { en: ["Visual Identity", "Brand Strategy"], es: ["Visual Identity", "Brand Strategy"] },
    body: {
      en: "A logo for FrontTec, a university front-end development team. It's an isometric cube: the left face is an F, the right face a T, and the top face holds the angle-bracket pair </> that the cube's geometry frames perfectly. Built on geometric play, with a confident purple. One of the marks I'm most proud of.",
      es: "Un logo para FrontTec, un equipo universitario de desarrollo front-end. Es un cubo isom\u00e9trico: la cara izquierda es una F, la derecha una T, y la cara superior sostiene el par </> que la geometr\u00eda del cubo enmarca a la perfecci\u00f3n. Construido sobre juego geom\u00e9trico, con un morado seguro. Una de las marcas de las que estoy m\u00e1s orgullosa.",
    },
  },
  {
    slug: "candle-co", category: "graphic", year: "2023", has3d: false, rot: "1.5deg",
    title: { en: "Lumi", es: "Lumi" },
    tag: { en: "Logo & logotype", es: "Logo y logotipo" },
    oneLine: {
      en: "Logo and logotype for a small candle business.",
      es: "Logo y logotipo para un peque\u00f1o negocio de velas.",
    },
    materials: { en: "Logo · Logotype", es: "Logo · Logotipo" },
    chips: { en: ["Packaging Design", "Visual Identity"], es: ["Packaging Design", "Visual Identity"] },
    body: {
      en: "A compact identity for a candle business I ran briefly. I still like the mark — warm, simple, and easy to stamp on kraft paper and wax seals.",
      es: "Una identidad compacta para un negocio de velas que tuve por un tiempo. Todav\u00eda me gusta la marca: c\u00e1lida, simple y f\u00e1cil de estampar en papel kraft y sellos de cera.",
    },
  },
];

const T = {
  nav:    { en: ["Home", "About", "Work", "Contact"], es: ["Inicio", "Sobre m\u00ed", "Proyectos", "Contacto"] },
  role:   { en: "Industrial designer", es: "Dise\u00f1adora industrial" },
  intro:  {
    en: "Industrial designer. I make objects with a story, a bit of humor, and a reason to exist.",
    es: "Dise\u00f1adora industrial. Hago objetos con una historia, algo de humor y una raz\u00f3n de ser.",
  },
  tagline: {
    en: "I craft objects, brands, and experiences that bridge tactile storytelling with human-centered logic. From strategic ergonomics to poetic rituals.\n\nWelcome to my studio workspace.",
    es: "Dise\u00f1o objetos, marcas y experiencias que unen la narrativa t\u00e1ctil con la l\u00f3gica centrada en las personas. De la ergonom\u00eda estrat\u00e9gica a los rituales po\u00e9ticos.\n\nBienvenida a mi espacio de estudio.",
  },
  sig:    { en: "— hi, I'm Dani", es: "— hola, soy Dani" },
  openTag:{ en: "open", es: "\u00e1breme" },
  aboutTag:{ en: "that's me", es: "esa soy yo" },
  contactTag:{ en: "say hi", es: "escr\u00edbeme" },
  tocLabel:{ en: "Contents", es: "Contenido" },
  projects:{ en: "Projects", es: "Proyectos" },
  // about
  idOrg:  { en: "DG \u2014 Object Studio", es: "DG \u2014 Estudio de Objetos" },
  idSub:  { en: "Identification card", es: "Tarjeta de identificaci\u00f3n" },
  idName: { en: "Name", es: "Nombre" },
  idSpec: { en: "Specialty", es: "Especialidad" },
  idSpecV:{ en: "Industrial design", es: "Dise\u00f1o industrial" },
  idBelief:{ en: "Believes in", es: "Cree en" },
  idBeliefV:{ en: "Objects with a story", es: "Objetos con historia" },
  idPlace:{ en: "Issued in", es: "Emitida en" },
  idPlaceV:{ en: "Mexico", es: "M\u00e9xico" },
  idValid:{ en: "Valid", es: "Vigencia" },
  stamp:  { en: "Certified object maker", es: "Hacedora de objetos certificada" },
  bio: {
    en: "I'm <b>Daniela Garc\u00eda</b>, an industrial designer from Mexico. I like objects that solve something real and still make you smile \u2014 ergonomics that care, forms that carry a story, and details borrowed from gardens, dunes and album covers. I work from concept and 3D modeling all the way through to real prototypes.",
    es: "Soy <b>Daniela Garc\u00eda</b>, dise\u00f1adora industrial mexicana. Me gustan los objetos que resuelven algo real y a\u00fan as\u00ed te hacen sonre\u00edr \u2014 ergonom\u00eda que cuida, formas que cuentan una historia y detalles tomados de jardines, dunas y portadas de discos. Trabajo desde el concepto y el modelado 3D hasta prototipos reales.",
  },
  // detail
  overview:{ en: "Overview", es: "Resumen" },
  year:   { en: "Year", es: "A\u00f1o" },
  type:   { en: "Type", es: "Tipo" },
  made:   { en: "Made with", es: "Materiales" },
  rotateHint:{ en: "hover to peek in 3D", es: "pasa el cursor para ver en 3D" },
  threeD: { en: "360\u00b0", es: "360\u00b0" },
  prev:   { en: "Previous", es: "Anterior" },
  next:   { en: "Next", es: "Siguiente" },
  backTo: { en: "Back to", es: "Volver a" },
  viewProject:{ en: "View project", es: "Ver proyecto" },
};

window.PF = { CATEGORIES, PROJECTS, DEFAULT_MODEL };
window.T = T;
