// src/pages/Home.js
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const BASE = process.env.PUBLIC_URL;

const skillGroups = [
  { icon: "monitor", label: "Frontend", items: ["React", "React Native", "Next.js", "TypeScript", "Tailwind CSS"] },
  { icon: "dns", label: "Backend", items: ["Node.js", "Express", "Spring Boot", "REST", "GraphQL", "Socket.io"] },
  { icon: "code", label: "Languages & Data", items: ["JavaScript", "Java", "Python", "C / C++", "MongoDB", "MySQL"] },
  { icon: "cloud", label: "Cloud & Tools", items: ["AWS S3", "Docker", "Vercel", "Git", "Jest", "Vitest"] },
];

function useTypingEffect(ref) {
  useEffect(() => {
    const phrases = [
      "Full-Stack Developer",
      "React · Next.js · React Native",
      "Node.js · Spring Boot",
      "App Store Published Dev",
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;
    const el = ref.current;
    if (!el) return;

    const tick = () => {
      const current = phrases[phraseIndex];
      el.textContent = isDeleting
        ? current.substring(0, charIndex - 1)
        : current.substring(0, charIndex + 1);
      charIndex += isDeleting ? -1 : 1;

      if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        timeout = setTimeout(tick, 1800);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        timeout = setTimeout(tick, 400);
      } else {
        timeout = setTimeout(tick, isDeleting ? 45 : 90);
      }
    };
    tick();
    return () => clearTimeout(timeout);
  }, [ref]);
}

function useParticles(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let raf;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const count = Math.min(90, Math.floor((canvas.width * canvas.height) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        sx: Math.random() * 0.5 - 0.25,
        sy: Math.random() * 0.5 - 0.25,
        o: Math.random() * 0.5 + 0.1,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.sx;
        p.y += p.sy;
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;
        ctx.fillStyle = `rgba(93, 230, 255, ${p.o})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [canvasRef]);
}

export default function Home() {
  const typingRef = useRef(null);
  const canvasRef = useRef(null);
  useTypingEffect(typingRef);
  useParticles(canvasRef);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center justify-center hero-gradient overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden
        />
        <div className="relative z-10 max-w-container-max mx-auto px-gutter text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-secondary/10 border border-secondary/20 font-label-caps text-secondary text-label-caps">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            Hyeonjun Son · Available for Opportunities
          </div>

          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 tracking-tight text-on-surface">
            Building Digital <span className="text-secondary">Experiences</span>
          </h1>

          <div className="h-10 md:h-12 mb-10">
            <p
              ref={typingRef}
              className="font-code-sm text-on-surface-variant text-body-lg md:text-headline-md typing-cursor"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              to="/projects"
              className="group relative px-8 py-4 gradient-button rounded-xl font-label-caps text-label-caps uppercase shadow-lg shadow-secondary/20 hover:shadow-secondary/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 glass-card rounded-xl font-label-caps text-label-caps uppercase text-on-surface hover:border-secondary transition-all"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Focus Areas — Bento */}
      <section className="py-stack-lg bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="mb-stack-md">
            <p className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-2">
              What I Do
            </p>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Selected Focus Areas
            </h2>
            <p className="text-on-surface-variant font-body-md mt-2">
              Merging engineering precision with a clear, dependable UI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Architecture */}
            <div className="md:col-span-8 glass-card p-8 rounded-xl flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span
                    className="material-symbols-outlined text-secondary text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    terminal
                  </span>
                  <div className="flex gap-2 flex-wrap justify-end">
                    {["React", "TypeScript", "Node.js"].map((t) => (
                      <span
                        key={t}
                        className="font-label-caps text-label-caps bg-surface-variant px-3 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">
                  Full-Stack Engineering
                </h3>
                <p className="text-on-surface-variant font-body-md max-w-lg">
                  Building responsive React frontends backed by clean REST APIs —
                  with a focus on performance, readable code, and a dependable
                  user experience.
                </p>
              </div>
              <div className="mt-8 overflow-hidden rounded-lg bg-surface-container-lowest p-4 border border-white/5">
                <pre className="font-code-sm text-code-sm text-secondary opacity-70 group-hover:opacity-100 transition-opacity overflow-x-auto">
                  <code>{`const buildUI = (data) =>
  data.map((item) => ({
    ...item,
    clarity: 'maximum',
    performance: 'optimized',
  }));`}</code>
                </pre>
              </div>
            </div>

            {/* Featured project */}
            <div className="md:col-span-4 glass-card rounded-xl overflow-hidden flex flex-col group">
              <div className="h-40 overflow-hidden bg-surface-container relative">
                <img
                  src={`${BASE}/images/image5.jpg`}
                  alt="PetDate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-70" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="font-label-caps text-label-caps text-secondary mb-1">
                  FEATURED PROJECT
                </span>
                <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">
                  PetDate
                </h3>
                <p className="text-on-surface-variant font-body-md flex-1">
                  Full-stack pet matching with image uploads and real-time chat.
                </p>
                <Link
                  to="/projects"
                  className="flex items-center gap-2 mt-4 text-secondary font-label-caps text-label-caps hover:gap-3 transition-all"
                >
                  EXPLORE WORK
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* UX card */}
            <div className="md:col-span-4 glass-card p-8 rounded-xl flex flex-col justify-between">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">
                auto_awesome
              </span>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">
                  UI / UX Detail
                </h3>
                <p className="text-on-surface-variant font-body-md">
                  Crafting intuitive interfaces with the small details that make
                  apps pleasant to use every day.
                </p>
              </div>
            </div>

            {/* Always learning */}
            <div className="md:col-span-8 glass-card p-8 rounded-xl flex flex-col md:flex-row items-start md:items-center gap-6">
              <span
                className="material-symbols-outlined text-secondary text-5xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                rocket_launch
              </span>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">
                  Always Shipping & Learning
                </h3>
                <p className="text-on-surface-variant font-body-md">
                  From side projects to full-stack apps, I keep building — turning
                  ideas into working products and sharpening my craft along the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-stack-lg">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="mb-stack-md">
            <p className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-2">
              Toolbox
            </p>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Skills &amp; Tools
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {skillGroups.map((g) => (
              <div key={g.label} className="glass-card p-6 rounded-xl">
                <span className="material-symbols-outlined text-secondary mb-3">
                  {g.icon}
                </span>
                <h3 className="font-headline-md text-on-surface text-body-lg font-bold">
                  {g.label}
                </h3>
                <ul className="mt-3 space-y-1.5 font-code-sm text-code-sm text-on-surface-variant">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-secondary" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-stack-lg">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="glass-card p-stack-lg rounded-xl border border-secondary/20 text-center">
            <h2 className="font-display-lg text-headline-md md:text-display-lg mb-6 text-on-surface">
              Let&rsquo;s build something together
            </h2>
            <p className="text-on-surface-variant text-body-lg max-w-2xl mx-auto mb-10">
              I&rsquo;m open to internships, junior roles, and collaborative
              projects. Let&rsquo;s connect and create something great.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="gradient-button px-10 py-4 rounded-xl font-label-caps text-label-caps uppercase hover:brightness-110 transition-all shadow-lg shadow-secondary/20"
              >
                Get in Touch
              </Link>
              <a
                href="https://github.com/HyeonjunSon"
                target="_blank"
                rel="noreferrer"
                className="px-10 py-4 glass-card rounded-xl font-label-caps text-label-caps uppercase text-on-surface hover:border-secondary transition-all"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
