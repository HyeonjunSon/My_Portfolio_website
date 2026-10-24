// src/pages/Resume.js
import React from "react";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const RESUME_URL = `${process.env.PUBLIC_URL}/resume_hyeonjunSon.pdf`;

const stats = [
  { value: "2+", label: "Years experience" },
  { value: "500+", label: "CaMoim users" },
  { value: "60%", label: "Latency cut" },
  { value: "230+", label: "Tests written" },
];

const highlights = [
  {
    title: "CaMoim",
    points: [
      "Shipped solo to the App Store, Google Play, and the web",
      "Real-time chat with Socket.io, 153 tests plus Maestro E2E",
      "Next.js + TypeScript web client with an httpOnly-cookie BFF",
    ],
  },
  {
    title: "Offleash",
    points: [
      "MongoDB for operational data, PostgreSQL for analytics",
      "Stripe billing via idempotent, signature-verified webhooks",
    ],
  },
  {
    title: "AI Financial",
    points: [
      "40+ RTL/Vitest and JUnit/Mockito tests",
      "Resolved 8 production and development defects",
      "Co-authored a C4 architecture RFC",
    ],
  },
  {
    title: "Landseed",
    points: ["One of 14 developers on a codebase held above 90% coverage"],
  },
];

const coreStack = [
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Socket.io",
  "Spring Boot",
];

export default function Resume() {
  return (
    <main className="pt-16 pb-stack-lg max-w-container-max mx-auto px-gutter">
      <section className="my-stack-lg">
        <p className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-3">
          Curriculum Vitae
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
            My Resume
          </h1>
          <a
            href={RESUME_URL}
            download
            className="inline-flex items-center gap-2 gradient-button px-6 py-3 rounded-lg font-label-caps text-label-caps uppercase shadow-lg hover:brightness-110 transition-all w-fit"
          >
            <span className="material-symbols-outlined">download</span>
            Download Resume
          </a>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-gutter items-start">
        {/* Full page: the box keeps the letter-size ratio and the PDF fits its width */}
        <div className="glass-card rounded-xl overflow-hidden p-2">
          <div className="aspect-[8.5/11] w-full rounded-lg overflow-hidden bg-white">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer fileUrl={RESUME_URL} defaultScale={SpecialZoomLevel.PageWidth} />
            </Worker>
          </div>
        </div>

        <aside className="flex flex-col gap-gutter lg:sticky lg:top-24">
          <div className="grid grid-cols-2 gap-px rounded-xl overflow-hidden border border-outline-variant/40 bg-outline-variant/20">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-surface-container-lowest/70 px-4 py-5 flex flex-col items-center gap-1"
              >
                <span className="font-display-lg text-3xl font-bold text-secondary leading-none">
                  {s.value}
                </span>
                <span className="font-label-caps text-label-caps text-on-surface-variant text-center">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-xl p-6">
            <h2 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4">
              Highlights
            </h2>
            <div className="flex flex-col gap-5">
              {highlights.map((h) => (
                <div key={h.title}>
                  <h3 className="font-body-lg text-body-lg font-bold text-on-surface mb-1.5">
                    {h.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {h.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-on-surface-variant font-body-md text-sm">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-secondary" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-xl p-6">
            <h2 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4">
              Core Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {coreStack.map((t) => (
                <span
                  key={t}
                  className="font-label-caps text-label-caps px-3 py-1 bg-secondary/10 text-secondary rounded-full border border-secondary/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
