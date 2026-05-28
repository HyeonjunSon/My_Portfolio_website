// src/components/Footer.js
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-stack-md border-t border-white/5 bg-surface-container">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-stack-sm">
        <div className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
          Hyeonjun Son
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant">
          © {new Date().getFullYear()} Hyeonjun Son. Built with React &amp; Tailwind.
        </p>
        <div className="flex gap-stack-md">
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors opacity-80 hover:opacity-100"
            href="https://github.com/HyeonjunSon"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors opacity-80 hover:opacity-100"
            href="https://www.linkedin.com/in/hyeonjun-son/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
