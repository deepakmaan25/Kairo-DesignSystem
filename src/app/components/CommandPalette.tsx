import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Search,
  Layers,
  Palette,
  Boxes,
  Sparkles,
  Frame,
  AlertTriangle,
  ArrowRight,
  Sun,
  Moon,
  Wand2,
} from "lucide-react";

type Item = {
  id: string;
  label: string;
  hint: string;
  group: "Sections" | "Components" | "Tokens" | "Actions";
  icon: React.ComponentType<{ size?: number }>;
  action: () => void;
  keywords?: string;
};

export function CommandPalette({
  open,
  onClose,
  onToggleTheme,
  dark,
  onOpenBuilder,
}: {
  open: boolean;
  onClose: () => void;
  onToggleTheme: () => void;
  dark: boolean;
  onOpenBuilder: () => void;
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  const goto = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    onClose();
  };

  const items: Item[] = useMemo(
    () => [
      { id: "top", label: "Hero", hint: "Intro to Kairo", group: "Sections", icon: Sparkles, action: () => goto("top") },
      { id: "foundations", label: "Foundations", hint: "Color, type, spacing, elevation", group: "Sections", icon: Layers, action: () => goto("foundations") },
      { id: "tokens", label: "Token architecture", hint: "Primitive → semantic → component", group: "Sections", icon: Palette, action: () => goto("tokens") },
      { id: "lab", label: "Component Lab", hint: "States, variants, anatomy", group: "Sections", icon: Boxes, action: () => goto("lab") },
      { id: "motion", label: "Motion", hint: "Easing, duration, choreography", group: "Sections", icon: Sparkles, action: () => goto("motion") },
      { id: "scenes", label: "Scenes", hint: "Real use-case compositions", group: "Sections", icon: Frame, action: () => goto("scenes") },
      { id: "edge", label: "Edge cases", hint: "Gaps and missing rules", group: "Sections", icon: AlertTriangle, action: () => goto("edge") },

      { id: "c-button", label: "Button", hint: "Primary, secondary, ghost, destructive", group: "Components", icon: Boxes, action: () => goto("lab"), keywords: "cta action" },
      { id: "c-input", label: "Input", hint: "Default, focus, error, disabled", group: "Components", icon: Boxes, action: () => goto("lab"), keywords: "form field" },
      { id: "c-badge", label: "Badge", hint: "Status pills and tags", group: "Components", icon: Boxes, action: () => goto("lab") },
      { id: "c-card", label: "Card", hint: "Surfaces and elevation", group: "Components", icon: Boxes, action: () => goto("lab") },
      { id: "c-toast", label: "Toast", hint: "Transient feedback", group: "Components", icon: Boxes, action: () => goto("motion") },

      { id: "t-color", label: "Color tokens", hint: "Brand, semantic, neutral ramps", group: "Tokens", icon: Palette, action: () => goto("tokens") },
      { id: "t-type", label: "Type scale", hint: "Display, body, caption", group: "Tokens", icon: Palette, action: () => goto("foundations") },
      { id: "t-spacing", label: "Spacing scale", hint: "4pt base rhythm", group: "Tokens", icon: Palette, action: () => goto("foundations") },
      { id: "t-elevation", label: "Elevation", hint: "Surface depth and shadow", group: "Tokens", icon: Palette, action: () => goto("foundations") },

      { id: "a-build", label: "Open builder", hint: "Configure a starter with Kairo", group: "Actions", icon: Wand2, action: () => { onOpenBuilder(); onClose(); } },
      { id: "a-theme", label: dark ? "Switch to light mode" : "Switch to dark mode", hint: "Toggle theme", group: "Actions", icon: dark ? Sun : Moon, action: () => { onToggleTheme(); onClose(); } },
    ],
    [dark],
  );

  const q = query.trim().toLowerCase();
  const filtered = q
    ? items.filter((i) =>
        (i.label + " " + i.hint + " " + (i.keywords || "")).toLowerCase().includes(q),
      )
    : items;

  const groups = useMemo(() => {
    const g: Record<string, Item[]> = {};
    filtered.forEach((i) => {
      (g[i.group] = g[i.group] || []).push(i);
    });
    return g;
  }, [filtered]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      }
      if (e.key === "Enter") {
        e.preventDefault();
        filtered[active]?.action();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, active, onClose]);

  let runningIndex = -1;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[14vh] px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ y: -14, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -8, opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[620px] rounded-2xl overflow-hidden"
            style={{
              background: "var(--popover)",
              border: "1px solid color-mix(in srgb, var(--foreground) 9%, transparent)",
              boxShadow: "var(--shadow-overlay), 0 0 0 1px rgba(0,0,0,0.04)",
            }}
          >
            <div
              className="flex items-center gap-3 px-4 h-14"
              style={{ borderBottom: "1px solid color-mix(in srgb, var(--border) 80%, transparent)" }}
            >
              <Search size={16} className="text-muted-foreground" aria-hidden="true" />
              <label htmlFor="kairo-cmd-input" className="sr-only">
                Search Kairo
              </label>
              <input
                id="kairo-cmd-input"
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search components, tokens, sections…"
                className="flex-1 bg-transparent outline-none text-[14px] placeholder:text-muted-foreground"
              />
              <kbd className="hidden sm:inline-flex items-center text-[10px] px-1.5 h-5 rounded border border-border text-muted-foreground">
                Esc
              </kbd>
            </div>
            <div className="max-h-[52vh] overflow-y-auto py-2">
              {filtered.length === 0 && (
                <div className="px-4 py-10 text-center text-[13px] text-muted-foreground">
                  No matches. Try “button”, “color”, or “edge cases”.
                </div>
              )}
              {Object.entries(groups).map(([group, list]) => (
                <div key={group} className="py-1">
                  <div
                    className="px-4 pt-3 pb-1 uppercase"
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.18em",
                      color: "var(--muted-foreground)",
                      fontWeight: 600,
                    }}
                  >
                    {group}
                  </div>
                  <ul role="listbox" aria-label={group}>
                    {list.map((i) => {
                      runningIndex += 1;
                      const isActive = runningIndex === active;
                      const Icon = i.icon;
                      return (
                        <li key={i.id}>
                          <button
                            type="button"
                            onClick={i.action}
                            onMouseEnter={() => setActive(runningIndex)}
                            className="w-full text-left flex items-center gap-3 h-11 transition-all duration-150"
                            style={{
                              paddingLeft: isActive ? "14px" : "16px",
                              paddingRight: "16px",
                              background: isActive
                                ? "color-mix(in srgb, var(--brand) 8%, transparent)"
                                : "transparent",
                              color: isActive ? "var(--brand)" : undefined,
                              borderLeft: isActive
                                ? "2px solid var(--brand)"
                                : "2px solid transparent",
                            }}
                          >
                            <Icon size={15} />
                            <span className="flex-1 text-[13px]">{i.label}</span>
                            <span className="text-[11px] text-muted-foreground truncate max-w-[40%]">
                              {i.hint}
                            </span>
                            {isActive && <ArrowRight size={13} />}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
            <div
              className="flex items-center justify-between px-4 h-9"
              style={{
                borderTop: "1px solid color-mix(in srgb, var(--border) 80%, transparent)",
                fontSize: "10px",
                color: "var(--muted-foreground)",
              }}
            >
              <span className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Kbd>↑</Kbd>
                  <Kbd>↓</Kbd> navigate
                </span>
                <span className="flex items-center gap-1">
                  <Kbd>↵</Kbd> select
                </span>
              </span>
              <span>Kairo · search</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded border border-border bg-background text-[10px]">
      {children}
    </kbd>
  );
}
