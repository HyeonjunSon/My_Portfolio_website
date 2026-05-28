// src/pages/Projects.js
import React from "react";

const BASE = process.env.PUBLIC_URL;

const projectData = [
  {
    title: "PetDate",
    icon: "pets",
    description:
      "Full-stack pet matching: profile cards, Cloudinary image uploads, and real-time chat with protected flows.",
    image: `${BASE}/images/image5.jpg`,
    stack: ["React", "TypeScript", "MongoDB", "Cloudinary"],
    links: [
      { label: "Frontend", href: "https://github.com/HyeonjunSon/petApp-frontend" },
      { label: "Backend", href: "https://github.com/HyeonjunSon/petApp-server" },
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
      { label: "Frontend", href: "https://github.com/HyeonjunSon/Board_project_front" },
      { label: "Backend", href: "https://github.com/HyeonjunSon/Board_project_back" },
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
      { label: "Code", href: "https://github.com/HyeonjunSon/Side_projects/tree/main/To_do_list" },
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
      { label: "Code", href: "https://github.com/HyeonjunSon/Side_projects/tree/main/Timer" },
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
      { label: "Code", href: "https://github.com/HyeonjunSon/Side_projects/tree/main/Calculator" },
    ],
  },
];

export default function Projects() {
  return (
    <main className="relative min-h-screen pt-16 pb-stack-lg bg-grid-pattern">
      {/* Hero */}
      <header className="max-w-container-max mx-auto px-gutter mb-stack-lg pt-12">
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

      {/* Grid */}
      <section className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {projectData.map((p) => (
            <div
              key={p.title}
              className="glass-card group flex flex-col rounded-xl overflow-hidden hover:-translate-y-1"
            >
              <div className="h-56 bg-surface-container overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-60" />
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

                <div className="flex items-center gap-3">
                  {p.links.map((l, idx) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className={
                        idx === 0
                          ? "flex-1 text-center py-3 bg-secondary text-on-secondary rounded-lg font-label-caps text-label-caps font-bold transition-all hover:shadow-[0_0_15px_rgba(93,230,255,0.4)]"
                          : "flex items-center gap-1 px-4 py-3 border border-outline-variant text-on-surface hover:border-secondary hover:text-secondary rounded-lg transition-colors font-label-caps text-label-caps"
                      }
                    >
                      {idx === 0 ? l.label.toUpperCase() : null}
                      {idx !== 0 && (
                        <>
                          <span className="material-symbols-outlined text-base">code</span>
                          {l.label}
                        </>
                      )}
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
