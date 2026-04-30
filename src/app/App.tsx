import { useEffect, useState } from "react";
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

export default function App() {
  const [dark, setDark] = useState(false);
  const [builderOpen, setBuilderOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const openBuilder = () => setBuilderOpen(true);

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      <Nav dark={dark} setDark={setDark} onBuild={openBuilder} />
      <main>
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
    </div>
  );
}
