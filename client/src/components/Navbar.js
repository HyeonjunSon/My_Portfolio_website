// src/components/Navbar.js
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `font-body-md font-medium transition-colors duration-300 ${
      isActive
        ? "text-secondary border-b-2 border-secondary pb-1"
        : "text-on-surface-variant hover:text-secondary"
    }`;

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-xl">
      <nav className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-16">
        <Link
          to="/"
          className="flex items-center gap-2 font-display-lg text-body-lg font-extrabold tracking-tighter text-on-surface"
        >
          <span className="material-symbols-outlined text-secondary">code</span>
          Hyeonjun&nbsp;Son
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-stack-md">
          {links.map((l) => (
            <NavLink key={l.href} to={l.href} className={linkClass} end={l.href === "/"}>
              {l.name}
            </NavLink>
          ))}
          <Link
            to="/resume"
            className="ml-2 gradient-button px-5 py-2 rounded-lg font-label-caps text-label-caps uppercase hover:brightness-110 active:scale-95 transition-all"
          >
            Resume
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-on-surface p-2 rounded-lg hover:bg-white/5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-surface/95 backdrop-blur-xl">
          <div className="px-gutter py-stack-sm space-y-1">
            {links.map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                end={l.href === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 font-body-md font-medium ${
                    isActive
                      ? "bg-secondary/10 text-secondary"
                      : "text-on-surface-variant hover:bg-white/5"
                  }`
                }
              >
                {l.name}
              </NavLink>
            ))}
            <Link
              to="/resume"
              onClick={() => setOpen(false)}
              className="block text-center gradient-button px-4 py-3 rounded-lg font-label-caps text-label-caps uppercase mt-2"
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
