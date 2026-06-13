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
    <div className="min-h-screen bg-background text-foreground font-[var(--font-sans)] antialiased selection:bg-accent/30">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-[var(--font-display)] text-lg tracking-tight">
            Rayson<span className="text-accent">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
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
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-6">
              Portfolio · 2026
            </p>
            <h1 className="font-[var(--font-display)] text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Rayson Jay
              <br />
              <span className="italic text-accent">Bayan.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Full-stack developer from Nueva Ecija crafting clean, dependable web
              and mobile applications — from learning platforms to healthcare tools.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:bg-primary/90 transition"
              >
                View selected work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm hover:bg-secondary transition"
              >
                Contact me
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-[2rem] rotate-3" />
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-primary/10">
                <img
                  src={rayson.url}
                  alt="Portrait of Rayson Jay F. Bayan"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-background border border-border rounded-full px-4 py-2 text-xs uppercase tracking-widest shadow-lg">
                Available for work
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="border-y border-border bg-secondary/40 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-wrap items-center justify-between gap-x-10 gap-y-3 text-sm text-muted-foreground">
          {["PHP", "MySQL", "Java", "JavaScript", "HTML & CSS", "REST APIs", "Android"].map(
            (s) => (
              <span key={s} className="font-[var(--font-display)] italic">
                {s}
              </span>
            ),
          )}
        </div>
      </div>

      {/* Work */}
      <section id="work" className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
                Selected work
              </p>
              <h2 className="font-[var(--font-display)] text-4xl md:text-5xl tracking-tight">
                Projects I'm proud of.
              </h2>
            </div>
            <p className="hidden md:block text-sm text-muted-foreground max-w-xs">
              A snapshot of recent applications I've designed, built, and shipped.
            </p>
          </div>

          <ul className="divide-y divide-border border-y border-border">
            {projects.map((p) => (
              <li
                key={p.n}
                className="group grid md:grid-cols-12 gap-6 py-10 transition-colors hover:bg-secondary/40 -mx-6 px-6 rounded-md"
              >
                <div className="md:col-span-1 text-sm text-muted-foreground font-mono">
                  {p.n}
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-[var(--font-display)] text-2xl md:text-3xl tracking-tight group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                    {p.kind}
                  </p>
                </div>
                <div className="md:col-span-6">
                  <p className="text-muted-foreground leading-relaxed">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-3 py-1 rounded-full border border-border bg-background"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-28 bg-secondary/30 border-y border-border">
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
              I'm Rayson — a developer based in Bongabon, Nueva Ecija. I enjoy turning
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
      <section id="contact" className="px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Contact
          </p>
          <h2 className="font-[var(--font-display)] text-5xl md:text-7xl tracking-tight leading-[1.05] max-w-4xl">
            Let's build something
            <br />
            <span className="italic text-accent">together.</span>
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-8 border-t border-border pt-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Email
              </p>
              <a
                href="mailto:raysonbayan15@gmail.com"
                className="text-lg hover:text-accent transition-colors break-all"
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
                className="text-lg hover:text-accent transition-colors"
              >
                0953 328 4028
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Based in
              </p>
              <p className="text-lg">Brgy. Pesa, Bongabon, Nueva Ecija</p>
            </div>
          </div>
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
