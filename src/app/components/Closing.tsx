import { motion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";

const principles = [
  {
    n: "01",
    t: "Quiet by default",
    d: "Color and motion stay restrained. Loud only when correctness is on the line.",
  },
  {
    n: "02",
    t: "Tokens before pixels",
    d: "Every value flows from primitive to semantic to component. The system maintains itself.",
  },
  {
    n: "03",
    t: "Behavior over decoration",
    d: "Components are remembered for how they feel under the hand, not how they look at rest.",
  },
  {
    n: "04",
    t: "Built to bend",
    d: "Density, theme, motion, and content all shift without breaking the rhythm.",
  },
];

export function Closing() {
  return (
    <section className="py-32 border-t border-border bg-foreground text-background relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-background/50">
              <span>07</span>
              <span className="w-8 h-px bg-background/30" />
              <span>Principles</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              style={{
                fontSize: "clamp(36px, 6vw, 80px)",
                fontWeight: 500,
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              A system is a{" "}
              <span className="italic font-normal" style={{ color: "var(--brand)" }}>
                conversation
              </span>{" "}
              with the next person who opens the file.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-background/10 rounded-lg overflow-hidden">
          {principles.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-foreground p-8 md:p-10"
            >
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-[11px] tracking-[0.2em] uppercase text-background/40">
                  {p.n}
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--brand)" }}
                />
              </div>
              <h3
                style={{ fontSize: "26px", fontWeight: 500, letterSpacing: "-0.02em" }}
                className="mb-3"
              >
                {p.t}
              </h3>
              <p className="text-[14px] text-background/60 leading-relaxed max-w-sm">{p.d}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-28 grid grid-cols-12 gap-8 items-end"
        >
          <div className="col-span-12 md:col-span-7">
            <div className="text-[11px] tracking-[0.2em] uppercase text-background/50 mb-5">
              Liked what you see?
            </div>
            <h3
              style={{
                fontSize: "clamp(30px, 4.5vw, 56px)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Hire me to design or{" "}
              <span className="italic font-normal" style={{ color: "var(--brand)" }}>
                build with Kairo
              </span>
              .
            </h3>
            <p className="text-[14px] text-background/60 leading-relaxed max-w-md mt-5">
              I'm available for product design, design-system work, and
              interface engineering engagements. Reach out — short briefs welcome.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 mt-7">
              <a
                href="mailto:dipumaan2002@gmail.com"
                className="inline-flex items-center gap-2 px-4 h-10 rounded-md transition hover:opacity-90"
                style={{ fontSize: "13px", background: "var(--brand)", color: "var(--brand-foreground)" }}
              >
                <Mail size={14} />
                dipumaan2002@gmail.com
              </a>
              <a
                href="https://deepakmaan.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 h-10 rounded-md border border-background/20 text-background hover:bg-background/10 transition"
                style={{ fontSize: "13px" }}
              >
                Portfolio
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5">
            <div className="grid grid-cols-1 gap-px bg-background/10 rounded-lg overflow-hidden">
              {[
                { label: "LinkedIn", href: "https://linkedin.com/in/deepakmaan", handle: "/in/deepakmaan" },
                { label: "GitHub", href: "https://github.com/deepakmaan", handle: "@deepakmaan" },
                { label: "Dribbble", href: "https://dribbble.com/deepakmaan", handle: "@deepakmaan" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between px-5 h-14 bg-foreground hover:bg-background/[0.04] transition"
                >
                  <div>
                    <div style={{ fontSize: "13px" }}>{l.label}</div>
                    <div className="text-[11px] text-background/50 mt-0.5">{l.handle}</div>
                  </div>
                  <ArrowUpRight
                    size={15}
                    className="text-background/40 group-hover:text-background group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-20 pt-6 border-t border-background/15 flex items-end justify-between flex-wrap gap-4">
          <div>
            <div style={{ fontSize: "13px" }}>Kairo Design System</div>
            <div className="text-[11px] text-background/50 mt-1">
              Designed and built by Deepak Maan, 2026
            </div>
          </div>
          <a href="#top" className="text-[12px] underline opacity-70 hover:opacity-100">
            Back to top
          </a>
        </div>
      </div>
    </section>
  );
}
