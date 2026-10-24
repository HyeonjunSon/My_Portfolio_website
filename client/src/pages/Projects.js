// src/pages/Projects.js
import React, { useEffect, useState } from "react";

const BASE = process.env.PUBLIC_URL;

const projectData = [
  {
    title: "CaMoim",
    icon: "groups",
    badge: "Live · iOS, Android & Web",
    description:
      "Community app serving 500+ registered users across Canada: school verification, group meetups, and a multi-board feed, with real-time chat (1:1, group rooms, school lounges) and push notifications. Cut home-feed API latency 60% in benchmarks by removing sequential database round trips; covered by 153 Jest tests plus Maestro E2E in CI. A Next.js web client shares the same API.",
    gallery: [6, 7, 8, 9, 10, 11, 12].map((n) => `${BASE}/images/image${n}.jpg`),
    stack: ["React Native", "Expo", "Next.js", "Node.js", "MongoDB", "Socket.io"],
    links: [
      { label: "Website", icon: "language", href: "https://camoimapp.com" },
      {
        label: "App Store",
        href: "https://apps.apple.com/ca/app/%EC%BA%90%EB%AA%A8%EC%9E%84-%EC%BA%90%EB%82%98%EB%8B%A4-%ED%95%9C%EC%9D%B8-%EB%AA%A8%EC%9E%84/id6763469709",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.hyeonjun122.cahanin",
      },
      { label: "Code", icon: "code", href: "https://github.com/HyeonjunSon/camoim" },
    ],
  },
  {
    title: "Offleash",
    icon: "pets",
    description:
      "Neighbourhood dog-owner community: nearby dogs sorted by real distance (MongoDB geospatial), mutual-like matching, map-based walk planning, and real-time chat. Stripe subscriptions via idempotent, signature-verified webhooks; 39 API tests plus Playwright E2E.",
    image: `${BASE}/images/image5.jpg`,
    stack: ["Next.js", "TypeScript", "Express", "MongoDB", "PostgreSQL", "Stripe"],
    links: [
      { label: "Live Site", icon: "language", href: "https://pet-app-frontend-fawn.vercel.app" },
      { label: "Frontend", icon: "code", href: "https://github.com/HyeonjunSon/petApp-frontend" },
      { label: "Backend", icon: "code", href: "https://github.com/HyeonjunSon/petApp-server" },
    ],
  },
];

const learningProjects = [
  {
    title: "Board Website",
    icon: "forum",
    description: "Auth, posts, and comments on REST patterns with guarded routes.",
    stack: ["React", "MongoDB", "Auth"],
    links: [
      { label: "Frontend", href: "https://github.com/HyeonjunSon/Board_project_front" },
      { label: "Backend", href: "https://github.com/HyeonjunSon/Board_project_back" },
    ],
  },
  {
    title: "Weekly To-Do List",
    icon: "checklist",
    description: "Weekly board with quick add and drag-and-drop between days.",
    stack: ["HTML", "CSS", "Vanilla JS"],
    links: [
      { label: "Code", href: "https://github.com/HyeonjunSon/Side_projects/tree/main/To_do_list" },
    ],
  },
  {
    title: "Timer",
    icon: "timer",
    description: "Countdown with presets, sound toggle, and a history log.",
    stack: ["HTML", "CSS", "Vanilla JS"],
    links: [
      { label: "Code", href: "https://github.com/HyeonjunSon/Side_projects/tree/main/Timer" },
    ],
  },
  {
    title: "Calculator",
    icon: "calculate",
    description: "Calculator with history, keyboard support, and clipboard share.",
    stack: ["HTML", "CSS", "Vanilla JS"],
    links: [
      { label: "Code", href: "https://github.com/HyeonjunSon/Side_projects/tree/main/Calculator" },
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

function FeatureCard({ project: p, label, reverse }) {
  return (
    <div className={`glass-card group rounded-xl overflow-hidden flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
      <div className="md:w-2/5 relative flex items-center justify-center p-6 md:p-8 bg-gradient-to-br from-surface-container-high to-surface-container-lowest">
        {p.gallery ? (
          <ImageCarousel images={p.gallery} alt={p.title} />
        ) : (
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="max-h-[320px] md:max-h-[440px] w-auto object-contain rounded-xl shadow-2xl ring-1 ring-white/10 transition-transform duration-700 group-hover:scale-[1.02]"
          />
        )}
        {p.badge && (
          <span className="absolute top-4 left-4 inline-flex items-center gap-1 font-label-caps text-label-caps uppercase text-secondary bg-surface/70 backdrop-blur px-3 py-1 rounded-full border border-secondary/30">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            {p.badge}
          </span>
        )}
      </div>
      <div className="md:w-3/5 p-stack-md md:p-stack-lg flex flex-col justify-center">
        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-2">
          {label}
        </span>
        <h2 className="font-headline-md text-headline-md md:text-display-lg-mobile text-on-surface mb-3">
          {p.title}
        </h2>
        <p className="text-on-surface-variant font-body-md md:text-body-lg mb-6 max-w-xl">
          {p.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {p.stack.map((t) => (
            <span
              key={t}
              className="font-label-caps text-label-caps px-3 py-1 bg-secondary/10 text-secondary rounded-full border border-secondary/20"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {p.links.map((l, idx) => (
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
              {l.icon && <span className="material-symbols-outlined text-base">{l.icon}</span>}
              {l.label.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
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
            Shipped products with real users, measured performance work, and
            tests that run on every push.
          </p>
        </div>
      </header>

      {/* Main projects */}
      <section className="max-w-container-max mx-auto px-gutter flex flex-col gap-gutter">
        {projectData.map((p, n) => (
          <FeatureCard key={p.title} project={p} label={n === 0 ? "Featured Project" : "Full-Stack Project"} reverse={n % 2 === 1} />
        ))}
      </section>

      {/* Learning projects */}
      <section className="max-w-container-max mx-auto px-gutter mt-stack-lg">
        <p className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-2">
          Earlier Work
        </p>
        <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-sm">
          Learning Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {learningProjects.map((p) => (
            <div key={p.title} className="glass-card rounded-xl p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-secondary text-xl">{p.icon}</span>
                <h3 className="font-body-lg text-body-lg font-bold text-on-surface">{p.title}</h3>
              </div>
              <p className="text-on-surface-variant font-body-md text-sm mb-4 flex-grow">
                {p.description}
              </p>
              <p className="font-code-sm text-code-sm text-on-surface-variant/80 mb-4">
                {p.stack.join(" · ")}
              </p>
              <div className="flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-secondary font-label-caps text-label-caps hover:gap-2 transition-all"
                  >
                    <span className="material-symbols-outlined text-base">code</span>
                    {l.label.toUpperCase()}
                  </a>
                ))}
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
