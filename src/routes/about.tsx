import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lynda Benabdessadok" },
      { name: "description", content: "About Lynda Benabdessadok — 23yo junior web developer, IIM Digital School Paris graduate passionate about digital product management." },
      { property: "og:title", content: "About — Lynda Benabdessadok" },
      { property: "og:description", content: "23yo junior web developer, IIM Digital School Paris." },
    ],
  }),
  component: About,
});

const hobbies = ["Technology", "Tennis", "Music", "Series"];

function About() {
  return (
    <div className="starry-gradient min-h-screen font-body text-lavender-glow">
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-border-dim px-6 py-4 backdrop-blur-md">
        <Link to="/" className="font-display text-2xl uppercase tracking-tighter">Lyndazfolio v2.0</Link>
        <Link to="/" className="font-mono text-xs uppercase tracking-widest hover:text-accent-pink">← Back</Link>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-24">
        <div className="font-mono text-xs uppercase tracking-widest text-accent-pink">[00] Who</div>
        <h1 className="mt-4 font-display text-7xl uppercase leading-[0.9] sm:text-8xl">
          Hello dear<br />network.
        </h1>

        <div className="mt-16 space-y-6 text-lg leading-relaxed opacity-90">
          <p>
            I'm <strong>Lynda Benabdessadok</strong>, a Digital Project Manager
            passionate about innovation, digital transformation and user-centered
            experiences.
          </p>

          <p>
            Over the past few years, I've built a unique profile at the intersection of
            technology and project management, contributing to web applications, product
            initiatives and international digital projects.
          </p>

          <p>
            Today, my ambition goes beyond building products. I want to help shape
            meaningful digital experiences, connect people through technology, and
            contribute to projects that create lasting impact.
          </p>
        </div>

        <section className="mt-24 border-t border-border-dim pt-12">
          <h2 className="font-display text-4xl uppercase">Hobbies</h2>
          <ul className="mt-6 grid grid-cols-2 gap-4 font-mono text-sm uppercase tracking-widest opacity-80 sm:grid-cols-4">
            {hobbies.map((h) => (
              <li key={h} className="border border-border-dim p-4">— {h}</li>
            ))}
          </ul>
        </section>

        <section className="mt-24 border-t border-border-dim pt-12">
          <h2 className="font-display text-4xl uppercase">Certifications</h2>
          <div className="mt-6 flex items-center gap-6">
            <a href="https://directory.opquast.com/fr/certificat/BZGDEW/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
              <img 
                src="https://api.opquast.com/badge/BZGDEW.svg"
                alt="Lynda BENABDESSADOK - Certifié(e) Opquast"
                width="150"
                height="150"
              />
            </a>
            <div>
              <a href="https://directory.opquast.com/fr/certificat/BZGDEW/" target="_blank" rel="noreferrer" className="font-display text-xl uppercase text-star-bright underline decoration-accent-pink underline-offset-4 hover:text-accent-pink">
                Opquast Certification
              </a>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest opacity-60">
                Quality Assurance Web Certification
              </p>
            </div>
          </div>
        </section>

        <section className="mt-24 border-t border-border-dim pt-12">
          <h2 className="font-display text-4xl uppercase">Elsewhere</h2>
          <a
            href="mailto:lyndab.pro@gmail.com"
            className="mt-6 block font-display text-3xl lowercase text-star-bright underline decoration-accent-pink underline-offset-8 hover:text-accent-pink"
          >
            lyndab.pro@gmail.com
          </a>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="https://github.com/Lyn1603" target="_blank" rel="noreferrer" className="border border-star-bright px-6 py-3 font-display text-xl uppercase hover:bg-star-bright hover:text-indigo-night transition-all">GitHub</a>
          </div>
        </section>

      </main>
    </div>
  );
}
