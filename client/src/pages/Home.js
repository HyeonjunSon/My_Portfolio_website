import React, { useEffect, useMemo, useRef, useState } from "react";
import "../App.css";

export default function Home() {
  const images = useMemo(
    () => [
      { src: "image1.jpg", title: "Today I Learned", subtitle: "Daily learning log with tags & search", href: "/projects/til" },
      { src: "image2.jpg", title: "CoQuest Mobile", subtitle: "React Native + GraphQL + Maps", href: "/projects/coquest" },
      { src: "image3.jpg", title: "Lotus Learning", subtitle: "Redux modules & API hardening", href: "/projects/lotus" },
      { src: "image4.jpg", title: "Animal Matching", subtitle: "Cloudinary photo upload + chat", href: "/projects/animal" },
      { src: "image5.jpg", title: "Board Project", subtitle: "Auth, comments, and moderation", href: "/projects/board" },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState("next"); // "next" | "prev"
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => go("next"), 4000);
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [isPaused, index]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go("next");
      if (e.key === "ArrowLeft") go("prev");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startX = 0, dx = 0;
    const onStart = (e) => { startX = e.touches[0].clientX; dx = 0; setIsPaused(true); };
    const onMove  = (e) => { dx = e.touches[0].clientX - startX; el.style.setProperty("--drag-x", `${dx}px`); };
    const onEnd   = () => { el.style.setProperty("--drag-x", `0px`); if (Math.abs(dx) > 60) go(dx < 0 ? "next" : "prev"); setIsPaused(false); };

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: true });
    el.addEventListener("touchend", onEnd);
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onEnd);
    };
  }, []);

  useEffect(() => {
    if (!progressRef.current) return;
    progressRef.current.style.animation = "none";
    void progressRef.current.offsetWidth;
    progressRef.current.style.animation = "carouselProgress 4s linear forwards";
  }, [index]);

  const go = (dir) => {
    setDirection(dir);
    setIndex((prev) => (dir === "next" ? (prev + 1) % images.length : (prev - 1 + images.length) % images.length));
  };

  return (
    <div className="main-content">
      <div className="home">
        <section className="hero">
          <div className="hero-inner">
            <p className="eyebrow">Software Developer • React • GraphQL • RN</p>
            <h1 className="hero-title">Welcome to Hyeonjun&apos;s Portfolio</h1>
            <p className="hero-sub">Projects, experiments, and case studies focused on performance, DX, and clean state management.</p>
            <a className="hero-cta" href="/projects">Explore Projects</a>
          </div>
          <div className="hero-bg" aria-hidden />
        </section>

        <h2 className="carousel-label">Project</h2>

        <div
          className={`carousel ${direction === "next" ? "dir-next" : "dir-prev"}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={containerRef}
        >
          <figure className="slide">
            <img src={images[index].src} alt={images[index].title || `Slide ${index + 1}`} className="slide-img" loading="lazy" />
            <figcaption className="slide-caption">
              <div className="glass">
                <h3>{images[index].title}</h3>
                {images[index].subtitle && <p>{images[index].subtitle}</p>}
                {images[index].href && <a className="slide-link" href={images[index].href}>View Case Study →</a>}
              </div>
            </figcaption>
          </figure>

          <button className="nav prev" onClick={() => go("prev")} aria-label="Previous slide">‹</button>
          <button className="nav next" onClick={() => go("next")} aria-label="Next slide">›</button>

          <div className="progress"><div className="bar" ref={progressRef} /></div>

          <ul className="dots" role="tablist" aria-label="Carousel Pagination">
            {images.map((_, i) => (
              <li key={i} role="presentation">
                <button
                  role="tab"
                  aria-selected={index === i}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`dot ${index === i ? "active" : ""}`}
                  onClick={() => { setDirection(i > index ? "next" : "prev"); setIndex(i); }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
