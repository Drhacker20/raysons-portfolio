import { createFileRoute } from "@tanstack/react-router";
import rayson from "@/assets/rayson.jpg.asset.json";
import lfLogin from "@/assets/lostfound-login.png.asset.json";
import lfSignup from "@/assets/lostfound-signup.png.asset.json";
import lfHome from "@/assets/lostfound-home.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rayson Jay Bayan — Developer Portfolio" },
      { name: "description", content: "Full-stack developer from Nueva Ecija building web and mobile applications." },
      { property: "og:title", content: "Rayson Jay Bayan — Developer Portfolio" },
      { property: "og:description", content: "Full-stack developer from Nueva Ecija building web and mobile applications." },
      { property: "og:image", content: rayson.url },
      { name: "twitter:image", content: rayson.url },
    ],
  }),
  component: Index,
});

const projects = [
  {
    n: "01",
    title: "Lost and Found Mobile Application",
    blurb:
      "An Android app for reporting and tracking missing persons, with authentication, image uploads, push notifications, and a REST-backed database.",
    stack: ["Java", "PHP", "MySQL", "REST API"],
    kind: "Mobile · Android",
    images: [lfHome.url, lfLogin.url, lfSignup.url],
  },
  {
    n: "02",
    title: "Healthcare Web Application with AI Chatbot",
    blurb:
      "A healthcare management system with an integrated AI chatbot for patient assistance, plus patient record management and database operations.",
    stack: ["PHP", "MySQL", "AI Chatbot"],
    kind: "Web · Healthcare",
    images: [] as string[],
  },
  {
    n: "03",
    title: "Online Learning Platform — PTC Nueva Ecija",
    blurb:
      "A learning platform with Admin and User portals: course management, learning materials, randomized assessments, and digital certification.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    kind: "Web · LMS",
    images: [] as string[],
  },
];

const skills = [
  "PHP", "MySQL", "Java", "HTML/CSS", "JavaScript", "REST APIs",
  "Android Studio", "Database Management", "WordPress", "Data Entry",
  "Product Listing", "AI Chatbot Integration", "System Testing", "Problem Solving",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[var(--font-sans)] antialiased selection:bg-primary/30 relative overflow-x-hidden">
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/60">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-[var(--font-display)] text-lg tracking-tight flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />
            Rayson<span className="text-primary">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <a
            href="mailto:raysonbayan15@gmail.com"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm hover:bg-primary/90 transition"
          >
            Get in touch
            <span aria-hidden>→</span>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-40 pb-24 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 border border-border rounded-full px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Available for work · 2026
            </p>
            <h1 className="font-[var(--font-display)] text-6xl md:text-8xl leading-[0.95] tracking-tight">
              Rayson Jay
              <br />
              <span className="italic bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Bayan.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Full-stack developer & BSIT 4th-year student at Nueva Ecija University of
              Science and Technology. I build web and mobile applications — from learning
              platforms to healthcare tools.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition shadow-[0_0_30px_-8px_var(--color-primary)]"
              >
                View selected work →
              </a>
              <a
                href="https://github.com/Drhacker20"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm hover:bg-secondary transition"
              >
                GitHub ↗
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-muted-foreground">
              <span>BSIT · 4th Year</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>NEUST</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>Nueva Ecija, PH</span>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-[2.5rem] rotate-3 blur-2xl" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 to-accent/40 rounded-[2rem] rotate-2" />
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl">
                <img
                  src={rayson.url}
                  alt="Portrait of Rayson Jay F. Bayan"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="font-[var(--font-display)] italic text-base">Rayson Jay F. Bayan</span>
                  <span className="rounded-full bg-background/80 backdrop-blur px-2 py-1 border border-border">PH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="border-y border-border bg-secondary/40 overflow-hidden">
        <div className="flex animate-[scroll_40s_linear_infinite] gap-12 py-5 whitespace-nowrap text-2xl font-[var(--font-display)] italic text-muted-foreground">
          {[...Array(3)].flatMap((_, i) =>
            ["PHP", "MySQL", "Java", "JavaScript", "Android", "REST APIs", "AI Chatbot", "WordPress"].map((s) => (
              <span key={`${i}-${s}`} className="flex items-center gap-12">
                {s}
                <span className="text-primary">✦</span>
              </span>
            )),
          )}
        </div>
        <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </div>

      {/* Work */}
      <section id="work" className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
                Selected work
              </p>
              <h2 className="font-[var(--font-display)] text-4xl md:text-6xl tracking-tight">
                Projects I'm proud of.
              </h2>
            </div>
            <p className="hidden md:block text-sm text-muted-foreground max-w-xs">
              A snapshot of recent applications I've designed, built, and shipped.
            </p>
          </div>

          <ul className="space-y-6">
            {projects.map((p) => (
              <li
                key={p.n}
                className="group relative grid md:grid-cols-12 gap-6 p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:bg-card/70 transition-all"
              >
                <div className="md:col-span-1 text-sm text-muted-foreground font-mono">
                  {p.n}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-[var(--font-display)] text-2xl md:text-3xl tracking-tight group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                    {p.kind}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-3 py-1 rounded-full border border-border bg-background/60"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-7">
                  {p.images.length > 0 ? (
                    <div className="grid grid-cols-3 gap-3">
                      {p.images.map((src) => (
                        <div key={src} className="relative overflow-hidden rounded-xl border border-border bg-background aspect-[9/16]">
                          <img src={src} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="h-full min-h-[140px] rounded-xl border border-dashed border-border bg-background/40 flex items-center justify-center text-xs uppercase tracking-widest text-muted-foreground">
                      Screenshots coming soon
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-28 border-y border-border bg-secondary/20">
        <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">Toolkit</p>
            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl tracking-tight">
              Skills & <span className="italic text-primary">tools</span>.
            </h2>
            <p className="mt-6 text-muted-foreground">
              The stack I reach for when shipping web and mobile apps.
            </p>
          </div>
          <div className="md:col-span-8 flex flex-wrap gap-3 content-start">
            {skills.map((s, i) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full border border-border bg-card text-sm hover:border-primary/50 hover:text-primary transition-colors"
              >
                <span className="text-muted-foreground font-mono text-xs mr-2">{String(i + 1).padStart(2, "0")}</span>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-28">
        <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
              About
            </p>
            <h2 className="font-[var(--font-display)] text-4xl tracking-tight">
              A builder at heart.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm Rayson — a BSIT 4th-year student at Nueva Ecija University of
              Science and Technology, based in Bongabon, Nueva Ecija. I enjoy turning
              real-world problems into thoughtful applications, whether that's helping
              communities reunite with lost loved ones or making learning more accessible.
            </p>
            <p>
              My toolkit spans PHP, MySQL, Java, and modern JavaScript. I care about
              clarity, sturdy data models, and interfaces that feel calm to use.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-32 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Contact
          </p>
          <h2 className="font-[var(--font-display)] text-5xl md:text-7xl tracking-tight leading-[1.05] max-w-4xl">
            Let's build something
            <br />
            <span className="italic bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">together.</span>
          </h2>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-border pt-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Email
              </p>
              <a
                href="mailto:raysonbayan15@gmail.com"
                className="text-lg hover:text-primary transition-colors break-all"
              >
                raysonbayan15@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Phone
              </p>
              <a
                href="tel:+639533284028"
                className="text-lg hover:text-primary transition-colors"
              >
                0953 328 4028
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">GitHub</p>
              <a href="https://github.com/Drhacker20" target="_blank" rel="noreferrer" className="text-lg hover:text-primary transition-colors">
                @Drhacker20 ↗
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Facebook</p>
              <a href="https://www.facebook.com/rayson.frondozo" target="_blank" rel="noreferrer" className="text-lg hover:text-primary transition-colors">
                rayson.frondozo ↗
              </a>
            </div>
          </div>
          <p className="mt-10 text-sm text-muted-foreground">Brgy. Pesa, Bongabon, Nueva Ecija</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Rayson Jay F. Bayan.</p>
          <p className="font-[var(--font-display)] italic">Designed & built with care.</p>
        </div>
      </footer>
    </div>
  );
}
