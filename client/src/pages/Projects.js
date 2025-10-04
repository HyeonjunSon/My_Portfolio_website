// src/pages/Projects.js
import React from "react";

const BASE = process.env.PUBLIC_URL;

const projectData = [
  {
    title: "Weekly To-Do List",
    description:
      "Weekly board with quick add and drag-and-drop between days. Click to toggle completion; simple, lightweight UI for fast planning.",
    image: `${BASE}/images/image1.jpg`,
    githubLink:
      "https://github.com/HyeonjunSon/Side_Projects/tree/main/To_do_list",
    stack: ["HTML", "CSS", "Vanilla JS"],
  },
  {
    title: "Timer",
    description:
      "Countdown with start/pause/resume/reset, named presets (saved timers), sound toggle, and a history log. Warns visually in the last 10s.",
    image: `${BASE}/images/image2.jpg`,
    githubLink:
      "https://github.com/HyeonjunSon/Side_Projects/tree/main/Timer",
    stack: ["HTML", "CSS", "Vanilla JS"],
  },
  {
    title: "Calculator",
    description:
      "Clean calculator with basic ops, history list, keyboard support, and one-click clipboard share for results.",
    image: `${BASE}/images/image3.jpg`,
    githubLink:
      "https://github.com/HyeonjunSon/Side_Projects/tree/main/Calculator",
    stack: ["HTML", "CSS", "Vanilla JS"],
  },
  {
    title: "Board Website",
    description:
      "Authentication, posts, and comments using clean REST patterns and guarded routes. Includes basic moderation tools.",
    image: `${BASE}/images/image4.jpg`,
    githubLink: "https://github.com/HyeonjunSon/Board_project_front",
    stack: ["React", "Tailwind", "MongoDB", "REST", "Auth"],
  },
  {
    title: "PetDate Website",
    description:
      "Full-stack pet matching: profile cards, Cloudinary image uploads, and chat. Simple matching rules with protected flows.",
    image: `${BASE}/images/image5.jpg`,
    githubLink: "https://github.com/HyeonjunSon/Board_project_front",
    stack: ["React", "TypeScript", "Tailwind", "Cloudinary", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-4 mt-10">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Hyeonjun’s Projects
        </h1>
        <p className="text-slate-600 mt-2">
          Selected work highlighting UI clarity, pragmatic state handling, and
          small details that improve day-to-day usability.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((p, idx) => (
          <article
            key={idx}
            className="rounded-2xl border border-slate-200 overflow-hidden shadow-[0_10px_35px_rgba(15,23,42,.06)] hover:shadow-[0_14px_45px_rgba(15,23,42,.08)] transition"
          >
            <div className="aspect-[16/9] overflow-hidden bg-slate-50">
              {/* contain: 전체 스크린샷이 보이도록 */}
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{p.description}</p>

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

              <div className="mt-4">
                <button
                  onClick={() => window.open(p.githubLink, "_blank")}
                  className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800"
                >
                  GitHub →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
