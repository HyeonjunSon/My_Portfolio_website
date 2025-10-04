// src/pages/Home.js
import React, { useEffect, useRef, useState } from "react";

const BASE = process.env.PUBLIC_URL;
const slides = [
  {
    src: `${BASE}/images/image1.jpg`,
    title: "Weekly To-Do List",
    sub: "Organize tasks by day and stay on track",
    href: "/projects",
  },
  {
    src: `${BASE}/images/image2.jpg`,
    title: "Timer",
    sub: "Countdown with presets & sound",
    href: "/projects",
  },
  {
    src: `${BASE}/images/image3.jpg`,
    title: "Calculator",
    sub: "Accurate ops • history • share",
    href: "/projects",
  },
  {
    src: `${BASE}/images/image4.jpg`,
    title: "Board Project",
    sub: "Auth • posts • comments • moderation",
    href: "/projects",
  },
  {
    src: `${BASE}/images/image5.jpg`,
    title: "Pet Matching",
    sub: "Profile matches • chat • photo uploads",
    href: "/projects",
  },
];

export default function Home() {
  const [i, setI] = useState(0);
  const [pause, setPause] = useState(false);
  const timer = useRef(null);
  const wrap = useRef(null);

  const go = (dir) => {
    setI((prev) =>
      dir === "next"
        ? (prev + 1) % slides.length
        : (prev - 1 + slides.length) % slides.length
    );
  };

  // autoplay
  useEffect(() => {
    if (pause) return;
    timer.current = setInterval(() => go("next"), 4000);
    return () => clearInterval(timer.current);
  }, [i, pause]);

  // keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go("next");
      if (e.key === "ArrowLeft") go("prev");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // swipe
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    let startX = 0,
      dx = 0;
    const s = (e) => {
      startX = e.touches[0].clientX;
      dx = 0;
      setPause(true);
    };
    const m = (e) => {
      dx = e.touches[0].clientX - startX;
    };
    const e_ = () => {
      if (Math.abs(dx) > 60) go(dx < 0 ? "next" : "prev");
      setPause(false);
    };
    el.addEventListener("touchstart", s, { passive: true });
    el.addEventListener("touchmove", m, { passive: true });
    el.addEventListener("touchend", e_);
    return () => {
      el.removeEventListener("touchstart", s);
      el.removeEventListener("touchmove", m);
      el.removeEventListener("touchend", e_);
    };
  }, []);

  return (
    <div>
      {/* Hero — compact, English copy */}
      <section className="mx-auto max-w-6xl px-4 mt-8">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-tr from-sky-50 via-white to-rose-50 shadow-[0_10px_35px_rgba(15,23,42,.08)]">
          <div className="p-7 md:p-10">
            <div className="flex flex-wrap gap-2 text-[11px] md:text-xs font-semibold text-slate-600">
              {[
                "React",
                "React Native",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Tailwind CSS",
                "HTML5",
                "MongoDB",
                "SQL",
              ].map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded-full bg-white/70 border border-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <h1 className="mt-3 text-[28px] md:text-[40px] font-extrabold leading-tight tracking-tight text-slate-900">
              Welcome to Hyeonjun’s Portfolio
            </h1>

            <p className="mt-2 max-w-2xl text-slate-600">
              Projects and case studies focused on performance, clarity, and
              dependable UI.
            </p>
          </div>
        </div>
      </section>

      {/* Project + Carousel */}
      <section className="mx-auto max-w-6xl px-4 mt-10 mb-24">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Project
        </h2>

        <div
          ref={wrap}
          className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,.08)]"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          {/* 뷰포트 고정 높이: 이미지가 잘리지 않도록 contain + 중앙정렬 */}
          <div className="relative w-full h-[380px] md:h-[520px] bg-slate-50">
            {slides.map((s, idx) => (
              <div
                key={s.src}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  idx === i ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={idx !== i}
              >
                {/* 중앙 정렬 래퍼 */}
                <div className="flex h-full w-full items-center justify-center">
                  <img
                    src={s.src}
                    alt={s.title}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) =>
                      (e.currentTarget.src = `${BASE}/images/image1.jpg`)
                    }
                  />
                </div>

                {/* 캡션: 작고 또렷하게, 레터박스 위에 배치 */}
                <div className="absolute left-3 md:left-4 bottom-3 md:bottom-4">
                  <div className="max-w-[360px] rounded-xl border border-black/10 bg-black/55 text-white backdrop-blur px-3.5 py-3 shadow-lg">
                    <h3 className="font-bold text-base md:text-lg leading-tight">
                      {s.title}
                    </h3>
                    {s.sub && (
                      <p className="text-xs md:text-sm/5 text-white/90 mt-0.5">
                        {s.sub}
                      </p>
                    )}
                    {s.href && (
                      <a
                        href={s.href}
                        className="inline-flex items-center gap-1 mt-2 text-sm font-semibold text-blue-200 hover:text-white underline-offset-4 hover:underline"
                      >
                        View Case Study <span aria-hidden>→</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 진행바 */}
          <div className="h-1 bg-slate-200">
            <div
              key={i}
              className="h-full bg-blue-500 animate-[progress_4s_linear_forwards]"
            />
          </div>

          {/* 도트 */}
          <div className="flex items-center justify-center gap-2 py-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  idx === i ? "bg-slate-900" : "bg-slate-400 hover:bg-slate-600"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* 좌/우 버튼 */}
          <button
            onClick={() => go("prev")}
            className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 h-10 w-10 md:h-11 md:w-11 rounded-full bg-white text-slate-800 shadow hover:shadow-md grid place-items-center"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            onClick={() => go("next")}
            className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 h-10 w-10 md:h-11 md:w-11 rounded-full bg-white text-slate-800 shadow hover:shadow-md grid place-items-center"
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </section>
    </div>
  );
}
