// src/pages/Projects.js
import React from "react";

const BASE = process.env.PUBLIC_URL;

const projectData = [
  {
    title: "Weekly To-Do List",
    description:
      "Weekly board with quick add and drag-and-drop between days. Click to toggle completion; lightweight UI for fast planning.",
    image: `${BASE}/images/image1.jpg`,
    stack: ["HTML", "CSS", "Vanilla JS"],
    links: [
      {
        label: "Code",
        href: "https://github.com/HyeonjunSon/Side_projects/tree/main/To_do_list",
      },
    ],
  },
  {
    title: "Timer",
    description:
      "Countdown with start/pause/resume/reset, named presets, sound toggle, and a history log. Warns visually in the last 10 seconds.",
    image: `${BASE}/images/image2.jpg`,
    stack: ["HTML", "CSS", "Vanilla JS"],
    links: [
      {
        label: "Code",
        href: "https://github.com/HyeonjunSon/Side_projects/tree/main/Timer",
      },
    ],
  },
  {
    title: "Calculator",
    description:
      "Clean calculator with basic operations, history list, keyboard support, and one-click clipboard share for results.",
    image: `${BASE}/images/image3.jpg`,
    stack: ["HTML", "CSS", "Vanilla JS"],
    links: [
      {
        label: "Code",
        href: "https://github.com/HyeonjunSon/Side_projects/tree/main/Calculator",
      },
    ],
  },
  {
    title: "Board Website",
    description:
      "Authentication, posts, and comments built on clean REST patterns with guarded routes and basic moderation tools.",
    image: `${BASE}/images/image4.jpg`,
    stack: ["React", "Tailwind", "MongoDB", "REST", "Auth"],
    links: [
      { label: "Frontend", href: "https://github.com/HyeonjunSon/Board_project_front" },
      { label: "Backend", href: "https://github.com/HyeonjunSon/Board_project_back" },
    ],
  },
  {
    title: "PetDate",
    description:
      "Full-stack pet matching: profile cards, Cloudinary image uploads, and real-time chat with protected flows.",
    image: `${BASE}/images/image5.jpg`,
    stack: ["React", "TypeScript", "Tailwind", "Cloudinary", "MongoDB"],
    links: [
      { label: "Frontend", href: "https://github.com/HyeonjunSon/petApp-frontend" },
      { label: "Backend", href: "https://github.com/HyeonjunSon/petApp-server" },
    ],
  },
];

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-4 mt-10">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Hyeonjun&rsquo;s Projects
        </h1>
        <p className="text-slate-600 mt-2 max-w-2xl">
          Selected work highlighting UI clarity, pragmatic state handling, and
          small details that improve day-to-day usability.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-2xl border border-slate-200 overflow-hidden shadow-[0_10px_35px_rgba(15,23,42,.06)] hover:shadow-[0_14px_45px_rgba(15,23,42,.1)] hover:-translate-y-1 transition duration-300"
          >
            <div className="aspect-[16/9] overflow-hidden bg-slate-50">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
              <p className="text-sm text-slate-600 mt-1 flex-1">{p.description}</p>

              {p.stack && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-slate-100 border border-slate-200 text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800 transition"
                  >
                    {l.label} <span aria-hidden>→</span>
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
