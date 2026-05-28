// src/pages/Resume.js
import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const RESUME_URL = `${process.env.PUBLIC_URL}/resume_hyeonjunSon.pdf`;

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

      <div className="glass-card rounded-xl overflow-hidden w-full max-w-[820px] h-[700px] p-2">
        <div className="h-full w-full rounded-lg overflow-hidden bg-white">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl={RESUME_URL} />
          </Worker>
        </div>
      </div>
    </main>
  );
}
