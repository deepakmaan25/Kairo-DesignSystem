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
            <div className="flex items-center gap-2.5">
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                  color: "var(--brand)",
                }}
              >
                07
              </span>
              <span
                className="w-5 h-px flex-shrink-0"
                style={{ background: "color-mix(in srgb, var(--brand) 45%, transparent)" }}
              />
              <span
                className="uppercase"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                Principles
              </span>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-background/10 rounded-2xl overflow-hidden">
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
                <span
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    fontWeight: 600,
                    color: "var(--brand)",
                  }}
                  className="uppercase"
                >
                  {p.n}
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--brand)" }}
                />
              </div>
              <h3
                style={{ fontSize: "24px", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.15 }}
                className="mb-3"
              >
                {p.t}
              </h3>
              <p style={{ fontSize: "14px", lineHeight: 1.65 }} className="text-background/55 max-w-sm">{p.d}</p>
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
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <a
                href="mailto:dipumaan2002@gmail.com"
                className="inline-flex items-center gap-2.5 px-5 h-11 rounded-lg transition-opacity duration-200 hover:opacity-90"
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  background: "var(--brand)",
                  color: "var(--brand-foreground)",
                  boxShadow: "0 1px 3px color-mix(in srgb, var(--brand) 40%, transparent), 0 4px 12px color-mix(in srgb, var(--brand) 20%, transparent)",
                }}
              >
                <Mail size={14} />
                dipumaan2002@gmail.com
              </a>
              <a
                href="https://deepakmaan.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-5 h-11 rounded-lg transition-colors duration-200 hover:bg-background/10"
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "var(--background)",
                }}
              >
                Portfolio
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5">
            <div className="grid grid-cols-1 gap-px bg-background/10 rounded-2xl overflow-hidden">
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

        <footer
          aria-labelledby="footer-title"
          className="mt-24 pt-10 border-t border-background/15"
        >
          <h2 id="footer-title" className="sr-only">
            Site footer
          </h2>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <div className="flex items-center gap-2.5">
                <span className="relative inline-block w-[22px] h-[22px]">
                  <span
                    className="absolute inset-0 rounded-[6px]"
                    style={{ background: "var(--brand)" }}
                  />
                  <span
                    className="absolute rounded-[3px]"
                    style={{ inset: "4px", background: "var(--foreground)", opacity: 0.92 }}
                  />
                  <span
                    className="absolute rounded-[2px]"
                    style={{ inset: "7px", background: "var(--brand)" }}
                  />
                </span>
                <span style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "-0.02em" }}>Kairo</span>
                <span
                  className="px-1.5 h-[18px] inline-flex items-center rounded-full text-[10px] tracking-[0.08em]"
                  style={{ background: "var(--brand-soft)", color: "var(--brand)" }}
                >
                  v0.9 · beta
                </span>
              </div>
              <p className="text-[12px] text-background/55 leading-relaxed max-w-[280px] mt-4">
                An interactive showcase of Kairo — a design system for calm,
                editorial product surfaces.
              </p>
            </div>

            <FooterCol
              title="Explore"
              items={[
                { label: "Foundations", href: "#foundations" },
                { label: "Token architecture", href: "#tokens" },
                { label: "Component Lab", href: "#lab" },
                { label: "Motion", href: "#motion" },
                { label: "Scenes", href: "#scenes" },
                { label: "Edge cases", href: "#edge" },
              ]}
            />
            <FooterCol
              title="Resources"
              items={[
                { label: "Open builder", href: "#top" },
                { label: "Changelog", href: "#edge" },
                { label: "Accessibility statement", href: "#accessibility" },
                { label: "Search ( / )", href: "#top" },
              ]}
            />
            <FooterCol
              title="Contact"
              widthClass="col-span-12 md:col-span-4"
              items={[
                { label: "dipumaan2002@gmail.com", href: "mailto:dipumaan2002@gmail.com" },
                { label: "Portfolio", href: "https://deepakmaan.vercel.app", external: true },
                { label: "LinkedIn", href: "https://linkedin.com/in/deepakmaan", external: true },
                { label: "GitHub", href: "https://github.com/deepakmaan", external: true },
              ]}
            />
          </div>

          <div
            id="accessibility"
            className="mt-12 pt-6 border-t border-background/10 grid grid-cols-12 gap-4 items-start"
          >
            <p className="col-span-12 md:col-span-8 text-[11px] text-background/55 leading-relaxed max-w-[640px]">
              <strong className="text-background/80">Accessibility:</strong>{" "}
              Kairo aims to meet WCAG 2.2 AA. The showcase supports keyboard
              navigation, visible focus, reduced motion, and screen-reader
              landmarks. Found a barrier? Email{" "}
              <a
                href="mailto:dipumaan2002@gmail.com"
                className="underline hover:text-background"
              >
                dipumaan2002@gmail.com
              </a>
              .
            </p>
            <div className="col-span-12 md:col-span-4 flex md:justify-end gap-4 text-[11px] text-background/55">
              <span>
                <span className="block text-background/40 tracking-[0.18em] uppercase text-[10px] mb-1">
                  Version
                </span>
                v0.9.2
              </span>
              <span>
                <span className="block text-background/40 tracking-[0.18em] uppercase text-[10px] mb-1">
                  Updated
                </span>
                May 2026
              </span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-background/10 flex items-center justify-between flex-wrap gap-3">
            <div className="text-[11px] text-background/50">
              © 2026 Deepak Maan · Designed and built with Kairo.
            </div>
            <a
              href="#top"
              className="text-[11px] underline opacity-70 hover:opacity-100"
            >
              Back to top ↑
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}

function FooterCol({
  title,
  items,
  widthClass = "col-span-6 md:col-span-2",
}: {
  title: string;
  items: { label: string; href: string; external?: boolean }[];
  widthClass?: string;
}) {
  return (
    <nav aria-label={title} className={widthClass}>
      <div className="text-[10px] tracking-[0.2em] uppercase text-background/40 mb-3">
        {title}
      </div>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i.label}>
            <a
              href={i.href}
              target={i.external ? "_blank" : undefined}
              rel={i.external ? "noreferrer" : undefined}
              className="text-[12px] text-background/70 hover:text-background transition"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
