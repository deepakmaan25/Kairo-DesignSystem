import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Foundations } from "./components/Foundations";
import { Tokens } from "./components/Tokens";
import { ComponentLab } from "./components/ComponentLab";
import { MotionSection } from "./components/Motion";
import { Scenes } from "./components/Scenes";
import { EdgeCases } from "./components/EdgeCases";
import { Closing } from "./components/Closing";
import { Builder } from "./components/Builder";
import { CommandPalette } from "./components/CommandPalette";

export default function App() {
  const [dark, setDark] = useState(false);
  const [builderOpen, setBuilderOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 22, mass: 0.3 });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      } else if (e.key === "/" && !paletteOpen) {
        const t = e.target as HTMLElement | null;
        if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
        e.preventDefault();
        setPaletteOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paletteOpen]);

  const openBuilder = () => setBuilderOpen(true);
  const openPalette = () => setPaletteOpen(true);

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:px-3 focus:h-9 focus:inline-flex focus:items-center focus:rounded-md focus:border focus:border-border focus:bg-popover focus:text-foreground focus:text-[12px]"
      >
        Skip to content
      </a>

      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress, transformOrigin: "0% 50%", background: "var(--brand)" }}
        className="fixed top-0 left-0 right-0 h-[2px] z-[60]"
      />

      <Nav dark={dark} setDark={setDark} onBuild={openBuilder} onSearch={openPalette} />
      <main id="main" tabIndex={-1}>
        <Hero onBuild={openBuilder} />
        <Foundations />
        <Tokens />
        <ComponentLab />
        <MotionSection />
        <Scenes />
        <EdgeCases />
        <Closing />
      </main>
      <Builder open={builderOpen} onClose={() => setBuilderOpen(false)} />
      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onToggleTheme={() => setDark(!dark)}
        dark={dark}
        onOpenBuilder={openBuilder}
      />
    </div>
  );
}
