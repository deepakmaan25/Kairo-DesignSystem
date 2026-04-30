import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, Wand2 } from "lucide-react";

const links = [
  { id: "foundations", label: "Foundations" },
  { id: "tokens", label: "Tokens" },
  { id: "lab", label: "Component Lab" },
  { id: "motion", label: "Motion" },
  { id: "scenes", label: "Scenes" },
  { id: "edge", label: "Edge Cases" },
];

export function Nav({
  dark,
  setDark,
  onBuild,
}: {
  dark: boolean;
  setDark: (v: boolean) => void;
  onBuild: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("foundations");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top < 200 && r.bottom > 200) {
          setActive(l.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative inline-block w-6 h-6">
            <span className="absolute inset-0 rounded-md" style={{ background: "var(--brand)" }} />
            <span className="absolute inset-[5px] rounded-sm bg-background" />
          </span>
          <span style={{ fontSize: "15px", fontWeight: 500, letterSpacing: "-0.01em" }}>
            Kairo
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-1 text-[13px]">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="relative px-3 py-1.5 rounded-md transition-colors hover:text-foreground text-muted-foreground"
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-md"
                  style={{ background: "var(--brand-soft)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span
                className="relative"
                style={{ color: active === l.id ? "var(--brand)" : undefined }}
              >
                {l.label}
              </span>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={onBuild}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 h-9 rounded-md text-[12px] transition-colors group"
            style={{
              background: "var(--brand-soft)",
              color: "var(--brand)",
              border: "1px solid color-mix(in srgb, var(--brand) 25%, transparent)",
            }}
          >
            <Wand2 size={13} className="group-hover:rotate-12 transition" />
            Build with Kairo
          </button>
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-md border border-border flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={dark ? "moon" : "sun"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex"
              >
                {dark ? <Moon size={15} /> : <Sun size={15} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
