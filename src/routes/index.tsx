import { createFileRoute } from "@tanstack/react-router";
import rayson from "@/assets/rayson.jpg.asset.json";
import lfLogin from "@/assets/lostfound-login.png.asset.json";
import lfSignup from "@/assets/lostfound-signup.png.asset.json";
import lfHome from "@/assets/lostfound-home.png.asset.json";
import lf8 from "@/assets/lf-8.png.asset.json";
import lf10 from "@/assets/lf-10.png.asset.json";
import lf11 from "@/assets/lf-11.png.asset.json";
import lf12 from "@/assets/lf-12.png.asset.json";
import lf14 from "@/assets/lf-14.png.asset.json";
import lf15 from "@/assets/lf-15.png.asset.json";
import lf16 from "@/assets/lf-16.png.asset.json";
import lf17 from "@/assets/lf-17.png.asset.json";
import lf18 from "@/assets/lf-18.png.asset.json";
import lf19 from "@/assets/lf-19.png.asset.json";
import lf20 from "@/assets/lf-20.png.asset.json";
import lf21 from "@/assets/lf-21.png.asset.json";
import lf22 from "@/assets/lf-22.png.asset.json";
import lf23 from "@/assets/lf-23.png.asset.json";
import lf24 from "@/assets/lf-24.png.asset.json";
import lf26 from "@/assets/lf-26.png.asset.json";
import hc1 from "@/assets/hc-194701.png.asset.json";
import hc2 from "@/assets/hc-194721.png.asset.json";
import hc3 from "@/assets/hc-194739.png.asset.json";
import hc4 from "@/assets/hc-194749.png.asset.json";
import hc5 from "@/assets/hc-194837.png.asset.json";
import hc6 from "@/assets/hc-194853.png.asset.json";
import hc7 from "@/assets/hc-194908.png.asset.json";
import hc8 from "@/assets/hc-194926.png.asset.json";
import hc9 from "@/assets/hc-194935.png.asset.json";
import hc10 from "@/assets/hc-200352.png.asset.json";
import { useEffect, useRef, useState } from "react";
import { assetUrl } from "@/lib/asset-url";

const ADMIN_VIDEO =
  "https://arqipwcykpaffutxglss.supabase.co/storage/v1/object/public/Portfolio/Screen%20Recording%202026-06-14%20201223.mp4";
const STAFF_VIDEO =
  "https://arqipwcykpaffutxglss.supabase.co/storage/v1/object/public/Portfolio/Screen%20Recording%202026-06-14%20201812.mp4";

type MediaItem = {
  src: string;
  kind: "image" | "video";
  label?: string;
  highlight?: boolean;
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rayson Jay Bayan — Developer Portfolio" },
      { name: "description", content: "Full-stack developer from Nueva Ecija building web and mobile applications." },
      { property: "og:title", content: "Rayson Jay Bayan — Developer Portfolio" },
      { property: "og:description", content: "Full-stack developer from Nueva Ecija building web and mobile applications." },
      { property: "og:image", content: assetUrl(rayson.url) },
      { name: "twitter:image", content: assetUrl(rayson.url) },
    ],
  }),
  component: Index,
});

const projects: {
  n: string;
  title: string;
  blurb: string;
  stack: string[];
  kind: string;
  images: MediaItem[];
  orientation: "portrait" | "landscape";
}[] = [
  {
    n: "01",
    title: "Healthcare Web Application with AI Chatbot",
    blurb:
      "A healthcare management system with an integrated AI chatbot for patient assistance, plus patient record management and database operations.",
    stack: ["PHP", "MySQL", "AI Chatbot"],
    kind: "Web · Healthcare",
    images: [
      { src: ADMIN_VIDEO, kind: "video", label: "Admin Panel · Walkthrough", highlight: true },
      { src: STAFF_VIDEO, kind: "video", label: "Staff View · Walkthrough" },
      { src: assetUrl(hc1.url), kind: "image", label: "Client View" },
      { src: assetUrl(hc2.url), kind: "image", label: "Client View" },
      { src: assetUrl(hc3.url), kind: "image", label: "Client View" },
      { src: assetUrl(hc4.url), kind: "image", label: "Client View" },
      { src: assetUrl(hc5.url), kind: "image", label: "Client View" },
      { src: assetUrl(hc6.url), kind: "image", label: "Client View" },
      { src: assetUrl(hc7.url), kind: "image", label: "Client View" },
      { src: assetUrl(hc8.url), kind: "image", label: "Client View" },
      { src: assetUrl(hc9.url), kind: "image", label: "Client View" },
      { src: assetUrl(hc10.url), kind: "image", label: "Client View" },
    ],
    orientation: "landscape",
  },
  {
    n: "02",
    title: "Online Learning Platform — PTC Nueva Ecija",
    blurb:
      "A learning platform with Admin and User portals: course management, learning materials, randomized assessments, and digital certification.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    kind: "Web · LMS",
    images: [],
    orientation: "landscape",
  },
  {
    n: "03",
    title: "Lost and Found Mobile Application",
    blurb:
      "An Android app for reporting and tracking missing persons, with authentication, image uploads, push notifications, and a REST-backed database.",
    stack: ["Java", "PHP", "MySQL", "REST API"],
    kind: "Mobile · Android",
    images: [
      { src: assetUrl(lfHome.url), kind: "image" },
      { src: assetUrl(lfLogin.url), kind: "image" },
      { src: assetUrl(lfSignup.url), kind: "image" },
      { src: assetUrl(lf8.url), kind: "image" },
      { src: assetUrl(lf10.url), kind: "image" },
      { src: assetUrl(lf11.url), kind: "image" },
      { src: assetUrl(lf12.url), kind: "image" },
      { src: assetUrl(lf14.url), kind: "image" },
      { src: assetUrl(lf15.url), kind: "image" },
      { src: assetUrl(lf16.url), kind: "image" },
      { src: assetUrl(lf17.url), kind: "image" },
      { src: assetUrl(lf18.url), kind: "image" },
      { src: assetUrl(lf19.url), kind: "image" },
      { src: assetUrl(lf20.url), kind: "image" },
      { src: assetUrl(lf21.url), kind: "image" },
      { src: assetUrl(lf22.url), kind: "image" },
      { src: assetUrl(lf23.url), kind: "image" },
      { src: assetUrl(lf24.url), kind: "image" },
      { src: assetUrl(lf26.url), kind: "image" },
    ],
    orientation: "portrait",
  },
];

const skills = [
  "PHP", "MySQL", "Java", "HTML/CSS", "JavaScript", "REST APIs",
  "Android Studio", "Database Management", "WordPress", "Data Entry",
  "Product Listing", "AI Chatbot Integration", "System Testing", "Problem Solving",
];

function ProjectCarousel({ images, title, orientation = "landscape" }: { images: MediaItem[]; title: string; orientation?: "portrait" | "landscape" }) {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const hasVideo = images.some((m) => m.kind === "video");
  useEffect(() => {
    if (hasVideo) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), 3500);
    return () => clearInterval(id);
  }, [images.length, hasVideo]);
  const heightClass = orientation === "portrait" ? "h-[360px] sm:h-[420px]" : "h-[280px] sm:h-[340px]";
  return (
    <div className="relative">
      <div ref={trackRef} className="overflow-hidden rounded-xl border border-border bg-background">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {images.map((item, i) => (
            <div
              key={`${item.src}-${i}`}
              className={`min-w-full flex items-center justify-center bg-background ${heightClass} p-4 relative ${
                item.highlight ? "ring-2 ring-primary/70 ring-inset" : ""
              }`}
            >
              {item.highlight && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-primary-foreground bg-primary rounded-full px-2.5 py-1 font-bold shadow-[0_0_24px_-4px_var(--color-primary)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground animate-pulse" />
                    {item.label || "Featured"}
                  </div>
                </>
              )}
              {item.kind === "video" && !item.highlight && (
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] bg-foreground text-background rounded-full px-2.5 py-1 font-semibold backdrop-blur-sm">
                  ▶ Video
                </div>
              )}
              {item.kind === "video" ? (
                <video
                  src={item.src}
                  controls
                  className="max-h-full max-w-full object-contain rounded-lg"
                  preload="metadata"
                  playsInline
                  aria-label={`${title} — ${item.label ?? "video"}`}
                />
              ) : (
                <img
                  src={item.src}
                  alt={`${title}${item.label ? ` — ${item.label}` : ""} ${i + 1}`}
                  className="max-h-full max-w-full object-contain rounded-lg"
                  loading="lazy"
                />
              )}
              {item.label && !item.highlight && (
                <div className="absolute bottom-3 right-3 z-10 text-[10px] uppercase tracking-[0.25em] bg-background/80 text-foreground backdrop-blur-sm border border-border rounded-full px-2.5 py-1">
                  {item.label}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {images.map((item, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}: ${item.label ?? `${item.kind} ${i + 1}`}`}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
            className="h-8 w-8 rounded-full border border-border bg-card/60 hover:bg-card text-sm"
            aria-label="Previous"
          >‹</button>
          <button
            onClick={() => setIdx((i) => (i + 1) % images.length)}
            className="h-8 w-8 rounded-full border border-border bg-card/60 hover:bg-card text-sm"
            aria-label="Next"
          >›</button>
        </div>
      </div>
    </div>
  );
}

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
                  src={assetUrl(rayson.url)}
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
                    <ProjectCarousel images={p.images} title={p.title} orientation={p.orientation} />
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
              I'm Rayson — an Information Technology student passionate about web and
              mobile application development. I have experience building web-based
              systems, Android applications, and database-driven solutions through
              freelance, academic, and capstone projects. My skills include PHP, MySQL,
              Java, REST APIs, database management, and system development.
            </p>
            <p>
              Through these projects, I have developed strong problem-solving, testing,
              troubleshooting, data organization, and product listing skills. I am eager
              to learn new technologies, improve my expertise, and create reliable
              digital solutions that deliver value to users and organizations.
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
