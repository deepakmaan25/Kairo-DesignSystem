import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, Wand2, Search } from "lucide-react";

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
  onSearch,
}: {
  dark: boolean;
  setDark: (v: boolean) => void;
  onBuild: () => void;
  onSearch: () => void;
}) {
  const [mac, setMac] = useState(false);
  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setMac(/Mac|iPhone|iPad/i.test(navigator.platform || navigator.userAgent));
    }
  }, []);
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
          ? "backdrop-blur-xl border-b"
          : "bg-transparent"
      }`}
      style={scrolled ? {
        background: "color-mix(in srgb, var(--background) 80%, transparent)",
        borderBottomColor: "color-mix(in srgb, var(--border) 70%, transparent)",
      } : undefined}
    >
      <div className="max-w-[1400px] mx-auto px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative inline-block w-[22px] h-[22px]">
            <span
              className="absolute inset-0 rounded-[6px]"
              style={{ background: "var(--brand)" }}
            />
            <span
              className="absolute rounded-[3px]"
              style={{
                inset: "4px",
                background: "var(--background)",
                opacity: 0.92,
              }}
            />
            <span
              className="absolute rounded-[2px]"
              style={{ inset: "7px", background: "var(--brand)" }}
            />
          </span>
          <span
            style={{
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "var(--foreground)",
            }}
          >
            Kairo
          </span>
        </a>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-1 text-[13px]">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              aria-current={active === l.id ? "true" : undefined}
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
            type="button"
            onClick={onSearch}
            aria-label="Search Kairo (press / or Ctrl K)"
            className="hidden sm:inline-flex items-center gap-2 px-3 h-9 rounded-lg transition-colors duration-200 text-muted-foreground hover:text-foreground"
            style={{
              border: "1px solid var(--border)",
              background: "var(--surface-card)",
              boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
            }}
          >
            <Search size={13} aria-hidden="true" />
            <span style={{ fontSize: "13px" }}>Search…</span>
            <kbd
              aria-hidden="true"
              className="ml-1 inline-flex items-center justify-center min-w-[24px] h-[18px] px-1.5 rounded"
              style={{
                border: "1px solid var(--border)",
                background: "var(--background)",
                fontSize: "10px",
                letterSpacing: "0.02em",
              }}
            >
              {mac ? "⌘K" : "Ctrl K"}
            </kbd>
          </button>
          <button
            type="button"
            onClick={onBuild}
            aria-label="Open Kairo builder"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 h-9 rounded-lg transition-all duration-200 group"
            style={{
              fontSize: "13px",
              fontWeight: 500,
              background: "var(--brand)",
              color: "var(--brand-foreground)",
              boxShadow: "0 1px 3px color-mix(in srgb, var(--brand) 35%, transparent)",
            }}
          >
            <Wand2 size={13} className="group-hover:rotate-12 transition" />
            Build with Kairo
          </button>
          <button
            type="button"
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-md border border-border flex items-center justify-center hover:bg-accent transition-colors"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={dark}
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
