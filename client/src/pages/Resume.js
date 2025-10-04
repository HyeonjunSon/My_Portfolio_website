// src/pages/Resume.js
import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function Resume() {
  return (
    <section className="mx-auto max-w-6xl px-4 mt-10">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">My Resume</h1>

      <a
        href="/resume_hyeonjunSon.pdf"
        download
        className="inline-flex mt-4 items-center rounded-xl bg-green-600 px-5 py-2.5 text-white font-semibold shadow hover:bg-green-700 transition"
      >
        Download Resume
      </a>

      <div className="mt-6 border border-black/30 rounded-xl overflow-hidden w-full max-w-[800px] h-[650px]">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl="/resume_hyeonjunSon.pdf" />
        </Worker>
      </div>
    </section>
  );
}
