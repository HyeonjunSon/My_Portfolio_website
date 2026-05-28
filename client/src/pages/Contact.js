// src/pages/Contact.js
import React, { useState } from "react";

const EMAIL = "hson15@myseneca.ca";
const RESUME_URL = `${process.env.PUBLIC_URL}/resume_hyeonjunSon.pdf`;

const socials = [
  { label: "GitHub", icon: "terminal", href: "https://github.com/HyeonjunSon" },
  { label: "LinkedIn", icon: "work", href: "https://www.linkedin.com/in/hyeonjun-son/" },
  { label: "Email", icon: "alternate_email", href: `mailto:${EMAIL}` },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <main className="pt-16 pb-stack-lg max-w-container-max mx-auto px-gutter">
      {/* Hero */}
      <section className="my-stack-lg">
        <p className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-3">
          Contact
        </p>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-stack-sm text-on-surface">
          Let&rsquo;s <span className="text-secondary">Connect</span>.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Interested in collaborating, hiring me, or just want to talk shop? Drop
          a line and let&rsquo;s build something exceptional.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Form */}
        <div className="lg:col-span-7 glass-card p-stack-md md:p-stack-lg rounded-xl">
          <form className="space-y-stack-md" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-secondary block uppercase">
                  Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={update("name")}
                  className="w-full bg-surface-container-lowest border border-white/10 rounded-lg p-3 text-on-surface font-code-sm glow-input"
                  placeholder="Your name"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-secondary block uppercase">
                  Email
                </label>
                <input
                  required
                  value={form.email}
                  onChange={update("email")}
                  className="w-full bg-surface-container-lowest border border-white/10 rounded-lg p-3 text-on-surface font-code-sm glow-input"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-secondary block uppercase">
                Subject
              </label>
              <input
                value={form.subject}
                onChange={update("subject")}
                className="w-full bg-surface-container-lowest border border-white/10 rounded-lg p-3 text-on-surface font-code-sm glow-input"
                placeholder="Project inquiry"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-secondary block uppercase">
                Message
              </label>
              <textarea
                required
                value={form.message}
                onChange={update("message")}
                rows="6"
                className="w-full bg-surface-container-lowest border border-white/10 rounded-lg p-3 text-on-surface font-code-sm glow-input resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="gradient-button w-full md:w-auto px-8 py-4 rounded-lg font-label-caps text-label-caps uppercase shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 group"
            >
              {sent ? "Opening mail…" : "Send Message"}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                send
              </span>
            </button>
          </form>
        </div>

        {/* Info bento */}
        <div className="lg:col-span-5 space-y-stack-md">
          <div className="glass-card p-stack-md rounded-xl">
            <h3 className="font-label-caps text-label-caps text-secondary mb-stack-md uppercase">
              Digital Footprint
            </h3>
            <div className="space-y-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center justify-between group p-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">{s.icon}</span>
                    <span className="font-body-md text-on-surface">{s.label}</span>
                  </div>
                  <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-secondary">
                    arrow_outward
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card p-stack-md rounded-xl relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="font-label-caps text-label-caps text-secondary mb-stack-sm uppercase">
                Curriculum Vitae
              </h3>
              <p className="font-body-md text-on-surface-variant mb-stack-md">
                Download my full professional history and technical background.
              </p>
              <a
                href={RESUME_URL}
                download
                className="inline-flex items-center gap-2 font-label-caps text-label-caps text-on-surface bg-surface-container-high px-4 py-3 rounded-lg border border-white/10 hover:border-secondary transition-colors"
              >
                <span className="material-symbols-outlined">download</span>
                DOWNLOAD CV (PDF)
              </a>
            </div>
            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl text-white/5 rotate-12 group-hover:text-secondary/10 transition-colors">
              description
            </span>
          </div>

          <div className="glass-card p-stack-md rounded-xl">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-label-caps text-label-caps text-secondary uppercase mb-1">
                  Availability
                </p>
                <p className="font-code-sm text-code-sm text-on-surface">Open to work</p>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-secondary uppercase mb-1">
                  Based in
                </p>
                <p className="font-code-sm text-code-sm text-on-surface">Canada 🇨🇦</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
