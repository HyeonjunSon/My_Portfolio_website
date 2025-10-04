// src/pages/Contact.js
import React from "react";

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-4 mt-10">
      <div className="rounded-3xl border border-slate-200 shadow-[0_10px_35px_rgba(15,23,42,.08)] bg-white p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Get In Touch</h2>
        <p className="text-slate-600 mt-2">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="mt-6 space-y-2 text-slate-800">
          <p>
            <strong className="text-slate-700">Email:</strong>{" "}
            <a className="text-blue-700 hover:underline" href="mailto:hson15@myseneca.ca">hson15@myseneca.ca</a>
          </p>
          <p>
            <strong className="text-slate-700">GitHub:</strong>{" "}
            <a className="text-blue-700 hover:underline" href="https://github.com/HyeonjunSon" target="_blank" rel="noreferrer">HyeonjunSon</a>
          </p>
          <p>
            <strong className="text-slate-700">LinkedIn:</strong>{" "}
            <a className="text-blue-700 hover:underline" href="https://www.linkedin.com/in/hyeonjun-son/" target="_blank" rel="noreferrer">Hyeonjun Son</a>
          </p>
        </div>
      </div>
    </section>
  );
}
