// src/pages/Projects.js
import React, { useEffect, useState } from "react";

const BASE = process.env.PUBLIC_URL;

const projectData = [
  {
    title: "CaMoim",
    icon: "groups",
    badge: "Live · iOS & Android",
    description:
      "Cross-platform community app for Koreans across Canada school verification, group meetups, and a multi board feed. Real-time chat (1:1, group rooms, school lounges) with push notifications.",
    gallery: [6, 7, 8, 9, 10, 11, 12].map((n) => `${BASE}/images/image${n}.jpg`),
    stack: ["React Native", "Expo", "Node.js", "MongoDB", "Socket.io"],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/ca/app/%EC%BA%90%EB%AA%A8%EC%9E%84-%EC%BA%90%EB%82%98%EB%8B%A4-%ED%95%9C%EC%9D%B8-%EB%AA%A8%EC%9E%84/id6763469709",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.hyeonjun122.cahanin",
      },
    ],
  },
  {
    title: "PetDate",
    icon: "pets",
    description:
      "Full-stack pet matching: Tinder-style swipe matching with auto match creation, real-time 1:1 chat, image uploads, and protected routes.",
    image: `${BASE}/images/image5.jpg`,
    stack: ["Next.js", "TypeScript", "Socket.io", "MongoDB", "AWS S3"],
    links: [
      { label: "Live Site", icon: "language", href: "https://pet-app-frontend-fawn.vercel.app" },
      { label: "Frontend", icon: "code", href: "https://github.com/HyeonjunSon/petApp-frontend" },
      { label: "Backend", icon: "code", href: "https://github.com/HyeonjunSon/petApp-server" },
    ],
  },
  {
    title: "Board Website",
    icon: "forum",
    description:
      "Authentication, posts, and comments on clean REST patterns with guarded routes and basic moderation tools.",
    image: `${BASE}/images/image4.jpg`,
    stack: ["React", "Tailwind", "MongoDB", "Auth"],
    links: [
      { label: "Frontend", icon: "code", href: "https://github.com/HyeonjunSon/Board_project_front" },
      { label: "Backend", icon: "code", href: "https://github.com/HyeonjunSon/Board_project_back" },
    ],
  },
  {
    title: "Weekly To-Do List",
    icon: "checklist",
    description:
      "Weekly board with quick add and drag-and-drop between days. Click to toggle completion; lightweight planning UI.",
    image: `${BASE}/images/image1.jpg`,
    stack: ["HTML", "CSS", "Vanilla JS"],
    links: [
      { label: "Code", icon: "code", href: "https://github.com/HyeonjunSon/Side_projects/tree/main/To_do_list" },
    ],
  },
  {
    title: "Timer",
    icon: "timer",
    description:
      "Countdown with start/pause/resume/reset, named presets, sound toggle, and a history log. Warns in the last 10s.",
    image: `${BASE}/images/image2.jpg`,
    stack: ["HTML", "CSS", "Vanilla JS"],
    links: [
      { label: "Code", icon: "code", href: "https://github.com/HyeonjunSon/Side_projects/tree/main/Timer" },
    ],
  },
  {
    title: "Calculator",
    icon: "calculate",
    description:
      "Clean calculator with basic operations, history list, keyboard support, and one-click clipboard share.",
    image: `${BASE}/images/image3.jpg`,
    stack: ["HTML", "CSS", "Vanilla JS"],
    links: [
      { label: "Code", icon: "code", href: "https://github.com/HyeonjunSon/Side_projects/tree/main/Calculator" },
    ],
  },
];

function ImageCarousel({ images, alt }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = images.length;
  const go = (d) => setI((p) => (p + d + n) % n);

  useEffect(() => {
    if (paused || n <= 1) return;
    const t = setInterval(() => setI((p) => (p + 1) % n), 2000);
    return () => clearInterval(t);
  }, [paused, n]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[320px] md:h-[440px] flex items-center justify-center">
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`${alt} screenshot ${idx + 1}`}
            loading={idx === 0 ? "eager" : "lazy"}
            className={`absolute max-h-full w-auto object-contain rounded-xl shadow-2xl ring-1 ring-white/10 transition-opacity duration-700 ${
              idx === i ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        ))}
      </div>

      <button
        onClick={() => go(-1)}
        aria-label="Previous screenshot"
        className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 grid place-items-center rounded-full bg-surface/70 backdrop-blur border border-white/10 text-on-surface hover:border-secondary hover:text-secondary transition-colors"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next screenshot"
        className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 grid place-items-center rounded-full bg-surface/70 backdrop-blur border border-white/10 text-on-surface hover:border-secondary hover:text-secondary transition-colors"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((src, idx) => (
          <button
            key={src}
            onClick={() => setI(idx)}
            aria-label={`Go to screenshot ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? "w-5 bg-secondary" : "w-1.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projectData;

  return (
    <main className="relative min-h-screen pt-16 pb-stack-lg bg-grid-pattern">
      {/* Hero */}
      <header className="max-w-container-max mx-auto px-gutter mb-stack-md pt-12">
        <div className="max-w-3xl">
          <p className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-stack-sm">
            Curated Projects
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Selected work highlighting UI clarity, pragmatic state handling, and
            small details that improve day-to-day usability.
          </p>
        </div>
      </header>

      {/* Featured project */}
      <section className="max-w-container-max mx-auto px-gutter mb-gutter">
        <div className="glass-card group rounded-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-2/5 relative flex items-center justify-center p-6 md:p-8 bg-gradient-to-br from-surface-container-high to-surface-container-lowest">
            <ImageCarousel images={featured.gallery} alt={featured.title} />
            {featured.badge && (
              <span className="absolute top-4 left-4 inline-flex items-center gap-1 font-label-caps text-label-caps uppercase text-secondary bg-surface/70 backdrop-blur px-3 py-1 rounded-full border border-secondary/30">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                {featured.badge}
              </span>
            )}
          </div>
          <div className="md:w-3/5 p-stack-md md:p-stack-lg flex flex-col justify-center">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-2">
              Featured Project
            </span>
            <h2 className="font-headline-md text-headline-md md:text-display-lg-mobile text-on-surface mb-3">
              {featured.title}
            </h2>
            <p className="text-on-surface-variant font-body-md md:text-body-lg mb-6 max-w-xl">
              {featured.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {featured.stack.map((t) => (
                <span
                  key={t}
                  className="font-label-caps text-label-caps px-3 py-1 bg-secondary/10 text-secondary rounded-full border border-secondary/20"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {featured.links.map((l, idx) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    idx === 0
                      ? "flex items-center justify-center gap-1.5 px-6 py-3 bg-secondary text-on-secondary rounded-lg font-label-caps text-label-caps font-bold transition-all hover:shadow-[0_0_15px_rgba(93,230,255,0.4)]"
                      : "flex items-center gap-1.5 px-6 py-3 border border-outline-variant text-on-surface hover:border-secondary hover:text-secondary rounded-lg transition-colors font-label-caps text-label-caps"
                  }
                >
                  {l.icon && (
                    <span className="material-symbols-outlined text-base">{l.icon}</span>
                  )}
                  {l.label.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {rest.map((p) => (
            <div
              key={p.title}
              className="glass-card group flex flex-col rounded-xl overflow-hidden hover:-translate-y-1"
            >
              <div className="h-56 bg-surface-container overflow-hidden relative">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                      p.imageClass || "object-cover object-center"
                    }`}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface-container-high to-surface-container-lowest">
                    <span
                      className="material-symbols-outlined text-secondary/70 text-7xl transition-transform duration-700 group-hover:scale-110"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {p.icon}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-60" />
                {p.badge && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 font-label-caps text-label-caps uppercase text-secondary bg-surface/70 backdrop-blur px-3 py-1 rounded-full border border-secondary/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                    {p.badge}
                  </span>
                )}
              </div>

              <div className="p-stack-md flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {p.title}
                  </h3>
                  <span
                    className="material-symbols-outlined text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {p.icon}
                  </span>
                </div>

                <p className="text-on-surface-variant font-body-md mb-6 flex-grow">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="font-label-caps text-label-caps px-3 py-1 bg-secondary/10 text-secondary rounded-full border border-secondary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-stretch gap-2">
                  {p.links.map((l, idx) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex-1 basis-[110px] min-w-[110px] flex items-center justify-center gap-1.5 px-3 py-3 rounded-lg font-label-caps text-label-caps transition-all ${
                        idx === 0
                          ? "bg-secondary text-on-secondary font-bold hover:shadow-[0_0_15px_rgba(93,230,255,0.4)]"
                          : "border border-outline-variant text-on-surface hover:border-secondary hover:text-secondary"
                      }`}
                    >
                      {l.icon && (
                        <span className="material-symbols-outlined text-base">{l.icon}</span>
                      )}
                      {l.label.toUpperCase()}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-container-max mx-auto px-gutter mt-stack-lg">
        <div className="glass-card p-12 rounded-xl flex flex-col items-center text-center">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-sm">
            Want to see more?
          </h2>
          <p className="text-on-surface-variant mb-8 max-w-xl">
            Check out the rest of my work on GitHub, or reach out if you&rsquo;d
            like to collaborate.
          </p>
          <div className="flex flex-col sm:flex-row gap-stack-md">
            <a
              href="https://github.com/HyeonjunSon"
              target="_blank"
              rel="noreferrer"
              className="gradient-button px-8 py-3 font-label-caps text-label-caps uppercase rounded-lg hover:brightness-110 active:scale-95 transition-all"
            >
              View GitHub
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border border-secondary text-secondary font-label-caps text-label-caps uppercase rounded-lg hover:bg-secondary/10 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
