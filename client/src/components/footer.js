// src/components/Footer.js
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Hyeonjun Son</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-slate-800" href="https://github.com/HyeonjunSon" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-slate-800" href="https://www.linkedin.com/in/hyeonjun-son/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
