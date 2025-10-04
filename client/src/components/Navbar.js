// src/components/Navbar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <NavLink to="/" className="font-extrabold text-slate-900 tracking-tight">
            Hyeonjun
          </NavLink>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <ul className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <NavLink
                  to={l.href}
                  className={({ isActive }) =>
                    `font-medium transition ${
                      isActive ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
                    }`
                  }
                >
                  {l.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {open && (
          <ul className="md:hidden pb-3 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <NavLink
                  to={l.href}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 font-medium ${
                      isActive ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-100"
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {l.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
