import { createFileRoute, Link } from "@tanstack/react-router";
import bloopImg from "@/assets/project-bloop.jpg";
import trocaderoImg from "@/assets/project-trocadero.jpg";
import pokedexImg from "@/assets/project-pokedex.jpg";
import appPhoneImg from "@/assets/project-appphone.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lyndazfolio — Lynda Benabdessadok, Junior Project manager" },
      { name: "description", content: "Personal portfolio: projects, skills and story of Lynda Benabdessadok, junior web developer from Paris." },
      { property: "og:title", content: "Lyndazfolio — Lynda Benabdessadok" },
      { property: "og:description", content: "Junior Project manager. Y2K nostalgia meets modern web." },
    ],
    links: [
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  component: Index,
});

const stars = [
  { top: "15%", left: "10%", size: "text-xl", d: "4s" },
  { top: "40%", left: "85%", size: "text-lg", d: "3.2s" },
  { top: "70%", left: "20%", size: "text-2xl", d: "5s" },
  { top: "85%", left: "75%", size: "text-sm", d: "2.5s" },
  { top: "10%", left: "60%", size: "text-lg", d: "4.5s" },
  { top: "55%", left: "45%", size: "text-xs", d: "3.8s" },
  { top: "25%", left: "35%", size: "text-sm", d: "6s" },
];

const projects = [
  {
    idx: "01",
    tag: "LATEST — MUSIC WEBAPP",
    title: "Bloop",
    body: "A browser-based music creation studio for beginners — compose, mix and create without installing anything. Professional studio feel, zero setup.",
    stack: ["Web Audio", "Modern JS", "Cloud-hosted"],
    href: "https://bloop-on.cloud/",
    img: bloopImg,
    reverse: false,
  },
  {
    idx: "02",
    tag: "LIVE_SITE",
    title: "Trocadero",
    body: "A guided vitrine of Paris's Trocadéro monument. Semantic HTML, SCSS architecture, responsive across devices.",
    stack: ["HTML5 / SCSS", "Vanilla Javascript", "Deployed on Vercel"],
    href: "https://trocadero-lynda-benabdessadok.vercel.app/",
    img: trocaderoImg,
    reverse: true,
  },
  {
    idx: "03",
    tag: "GAME_APP",
    title: "Pokedex",
    body: "A vanilla-JS Pokédex that talks to the PokéAPI. Focus on fetch-based state and clean list/detail interactions.",
    stack: ["Vanilla JS", "REST / fetch", "Responsive UI"],
    href: "https://js-a2-lynda-co.vercel.app/",
    img: pokedexImg,
    reverse: false,
  },
  {
    idx: "04",
    tag: "MOBILE_UI",
    title: "App‑phone",
    body: "A phone-first contacts interface — small screen constraints, touch targets, snappy interactions.",
    stack: ["HTML / CSS", "Mobile-first", "Vercel CI"],
    href: "https://app-phone-lynda-benabdessadok-lepw.vercel.app/",
    img: appPhoneImg,
    reverse: true,
  },
];


const stack = [
  { 
    title: "Frameworks", 
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Vue.js", icon: "💚" },
      { name: "Spring Boot", icon: "🍃" }
    ]
  },
  { 
    title: "Languages", 
    items: [
      { name: "TypeScript", icon: "🔷" },
      { name: "JavaScript", icon: "💛" },
      { name: "Python", icon: "🐍" }
    ]
  },
  { 
    title: "Styling", 
    items: [
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Bootstrap", icon: "⬜" },
      { name: "SCSS/SASS", icon: "🎯" }
    ]
  },
  { 
    title: "Design Tools", 
    items: [
      { name: "Figma", icon: "🎨" },
      { name: "Photoshop", icon: "📐" }
    ]
  },
  { 
    title: "Project Management", 
    items: [
      { name: "Notion", icon: "📝" },
      { name: "Jira", icon: "⚙️" },
      { name: "Gantt", icon: "📊" },
      { name: "Microsoft Suite", icon: "📋" }
    ]
  },
  { 
    title: "DevOps", 
    items: [
      { name: "Vercel", icon: "⚡" },
      { name: "GitHub Actions", icon: "🔧" }
    ]
  },
];

function Index() {
  return (
    <div className="starry-gradient min-h-screen font-body text-lavender-glow selection:bg-accent-pink selection:text-indigo-night">
      {/* Star Layer */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {stars.map((s, i) => (
          <div
            key={i}
            className={`star-particle absolute text-star-bright ${s.size}`}
            style={{ top: s.top, left: s.left, ["--d" as never]: s.d }}
          >
            +
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-border-dim px-6 py-4 backdrop-blur-md">
        <Link to="/" className="font-display text-2xl uppercase tracking-tighter">
          Lyndazfolio v2.0
        </Link>
        <div className="hidden gap-8 font-mono text-xs uppercase tracking-widest sm:flex">
          <a href="#about" className="transition-colors hover:text-accent-pink">About</a>
          <a href="#work" className="transition-colors hover:text-accent-pink">Work</a>
          <a href="#stack" className="transition-colors hover:text-accent-pink">Stack</a>
          <a href="#connect" className="transition-colors hover:text-accent-pink">Connect</a>

        </div>
      </nav>

      {/* Hero */}
      <header className="relative flex h-[85vh] flex-col items-center justify-center overflow-hidden px-6">
        <div
          className="text-center"
          style={{ animation: "heroSlide 1s var(--ease-out-expo) both" }}
        >
          <h1 className="font-display text-[15vw] uppercase leading-[0.8] tracking-tighter text-star-bright">
            Lynda Benabdessadok
          </h1>
          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="font-mono text-sm uppercase tracking-[0.3em] opacity-70">
              Junior product manager
            </p>
            <div className="h-px w-24 bg-accent-pink" />
            <p className="max-w-md text-balance opacity-90">
              Junior Project Manager passionate about management and the digital world.
            </p>
          </div>
        </div>
        <div className="absolute bottom-12 animate-bounce">
          <div className="font-mono text-[10px] uppercase tracking-widest opacity-40">
            Scroll to Explore
          </div>
        </div>
      </header>

      {/* About Me */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-xs text-accent-pink">[00] ABOUT_ME</div>
            <h2 className="mt-4 font-display text-6xl uppercase leading-none sm:text-7xl">
              About<br />me
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed opacity-90 lg:col-span-8">
            <p>
              I'm <strong>Lynda Benabdessadok</strong>, 23, freshly graduated from{" "}
              <strong>IIM Digital School Paris</strong>. Junior web developer passionate about
              Digital Product Management and meaningful user experiences.
            </p>
            <p>
              This portfolio started in 2022 as a pixel-art Y2K desktop — a small manifesto that
              "tech is for cool kids".
            </p>
            <p className="font-mono text-xs uppercase tracking-widest opacity-60">
              Based in Paris — open to product manager opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <main id="work" className="mx-auto max-w-7xl space-y-48 px-6 py-24">

        {projects.map((p) => (
          <section key={p.idx} className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className={`space-y-6 lg:sticky lg:top-32 lg:col-span-4 ${p.reverse ? "lg:order-2" : ""}`}>
              <div className="font-mono text-xs text-accent-pink">[{p.idx}] {p.tag}</div>
              <h2 className="font-display text-6xl uppercase leading-none sm:text-7xl">
                {p.title}
              </h2>
              <p className="text-sm leading-relaxed opacity-80">{p.body}</p>
              <ul className="space-y-2 font-mono text-[10px] uppercase tracking-tighter opacity-60">
                {p.stack.map((s) => <li key={s}>— {s}</li>)}
              </ul>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-block border border-border-dim px-6 py-3 font-display text-xl uppercase transition-all hover:bg-star-bright hover:text-indigo-night"
              >
                Visit Live <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
            <div className={`lg:col-span-8 ${p.reverse ? "lg:order-1" : ""}`}>
              <img
                src={p.img}
                alt={`${p.title} project screenshot`}
                width={1200}
                height={900}
                loading="lazy"
                className="w-full rounded-sm outline outline-1 -outline-offset-1 outline-star-bright/10"
              />
            </div>
          </section>
        ))}

        {/* Stack */}
        <section id="stack" className="border-t border-border-dim pt-24">
          <div className="flex flex-col items-start justify-between gap-12 md:flex-row">
            <div className="md:w-1/3">
              <h3 className="mb-6 font-display text-5xl uppercase">Tech Stack</h3>
              <p className="font-mono text-xs uppercase tracking-widest opacity-50">
                Frameworks, tools & skills
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 md:w-2/3">
              {stack.map((category) => (
                <div key={category.title} className="space-y-4">
                  <div className="font-display text-lg uppercase">{category.title}</div>
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((item) => (
                      <div key={item.name} className="flex flex-col items-center gap-2" title={item.name}>
                        <span className="text-3xl">{item.icon}</span>
                        <span className="font-mono text-[10px] opacity-60">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Certifications */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="border-t border-border-dim pt-12">
          <h3 className="mb-8 font-display text-4xl uppercase">Certifications</h3>
          <div className="flex items-center gap-4">
            <a href="https://directory.opquast.com/fr/certificat/BZGDEW/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
              <img 
                src="https://api.opquast.com/badge/BZGDEW.svg"
                alt="Lynda BENABDESSADOK - Certifié(e) Opquast"
                width="150"
                height="150"
              />
            </a>
            <div className="flex-1">
              <a href="https://directory.opquast.com/fr/certificat/BZGDEW/" target="_blank" rel="noreferrer" className="font-display text-2xl uppercase text-star-bright underline decoration-accent-pink underline-offset-4 hover:text-accent-pink">
                Opquast Certification
              </a>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest opacity-60">
                Quality Assurance Web Certification
              </p>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Connect footer */}
      <footer id="connect" className="border-t border-border-dim bg-indigo-night/30 px-6 py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center space-y-12 text-center">
          <div className="font-display text-[10vw] uppercase leading-none text-star-bright/20">
            Let's Build It
          </div>
          <div className="space-y-8">
            <p className="font-mono text-sm uppercase tracking-widest">
              Available for new opportunities
            </p>
            <a
              href="mailto:lyndab.pro@gmail.com"
              className="block font-display text-3xl lowercase text-star-bright underline decoration-accent-pink decoration-2 underline-offset-8 transition-colors hover:text-accent-pink sm:text-5xl"
            >
              lyndab.pro@gmail.com
            </a>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="mailto:lyndab.pro@gmail.com"
                className="bg-accent-pink px-8 py-4 font-display text-2xl uppercase text-indigo-night transition-transform hover:scale-105"
              >
                Email Me
              </a>
              <a
                href="https://github.com/Lyn1603/lyndazportfolio"
                target="_blank"
                rel="noreferrer"
                className="border border-star-bright px-8 py-4 font-display text-2xl uppercase text-star-bright transition-all hover:bg-star-bright hover:text-indigo-night"
              >
                GitHub
              </a>
              <a
                href="https://discord.gg/ku3YfnPW"
                target="_blank"
                rel="noreferrer"
                className="border border-border-dim px-8 py-4 font-display text-2xl uppercase transition-all hover:bg-star-bright hover:text-indigo-night"
              >
                Discord
              </a>
            </div>
          </div>

          <div className="flex w-full flex-col justify-between gap-4 pt-24 font-mono text-[10px] uppercase opacity-40 sm:flex-row">
            <span>© 2022–2026 Lynda Benabdessadok</span>
            <span>Paris, FR — IIM Digital School</span>
            <Link to="/about" className="underline">About Me</Link>
          </div>
        </div>
      </footer>

      {/* Scanlines */}
      <div className="scanline-overlay pointer-events-none fixed inset-0 opacity-20" />
    </div>
  );
}
