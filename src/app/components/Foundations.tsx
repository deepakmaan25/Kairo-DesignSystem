import { motion } from "motion/react";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

const colorScales = {
  neutral: ["#ffffff", "#f4f4f3", "#ececf0", "#cbced4", "#6b6e7a", "#3f3f46", "#030213"],
  brand: ["#f5f4ff", "#eceaff", "#cfcbff", "#a59eff", "#6b62f0", "#4f46e5", "#312b9c"],
  success: ["#f0faf3", "#dcf2e2", "#a9e0b9", "#6dc585", "#16a34a", "#0e7c39", "#085523"],
  warning: ["#fdf6e8", "#fbe9c4", "#f3cd83", "#e0a951", "#c2740a", "#8e520a", "#5a3406"],
  feedback: ["#fef2f4", "#fcd9e0", "#f48fa3", "#e84068", "#d4183d", "#a01030", "#600820"],
};

const typeScale = [
  { name: "Display", size: 72, weight: 500, role: "hero / centerpiece" },
  { name: "Title", size: 32, weight: 500, role: "section" },
  { name: "Heading", size: 20, weight: 500, role: "subsection" },
  { name: "Body", size: 15, weight: 400, role: "default copy" },
  { name: "Caption", size: 12, weight: 400, role: "metadata" },
  { name: "Mono", size: 12, weight: 400, role: "tokens / code", mono: true },
];

const spacingScale = [4, 8, 12, 16, 24, 32, 48, 64, 96];

export function Foundations() {
  return (
    <section id="foundations" className="py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-8">
        <SectionHeader
          index="01"
          kicker="Foundations"
          title={
            <>
              The DNA.
              <br />
              <span className="text-muted-foreground italic font-normal">
                Decided once, used everywhere.
              </span>
            </>
          }
          description="Color, typography, spacing, and elevation. The four primitives every component refers back to."
        />

        <ColorSection />
        <div className="h-24" />
        <TypeSection />
        <div className="h-24" />
        <SpacingSection />
        <div className="h-24" />
        <ElevationSection />
      </div>
    </section>
  );
}

function ColorSection() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div>
      <div className="flex items-center justify-between mb-7">
        <div className="flex items-center gap-3">
          <span
            className="w-[3px] rounded-full"
            style={{ height: "18px", background: "var(--brand)" }}
          />
          <h3 style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "-0.015em" }}>Color</h3>
        </div>
        <span
          className="uppercase px-2.5 py-1 rounded-full"
          style={{
            fontSize: "10px",
            letterSpacing: "0.12em",
            color: "var(--muted-foreground)",
            border: "1px solid var(--border)",
            background: "var(--accent)",
          }}
        >
          Five scales · neutral, brand, feedback
        </span>
      </div>
      <div className="space-y-2.5">
        {Object.entries(colorScales).map(([name, scale]) => (
          <div key={name} className="grid grid-cols-[110px_1fr] gap-5 items-center">
            <span
              style={{
                fontSize: "10px",
                fontFamily: "ui-monospace, SFMono-Regular, monospace",
                letterSpacing: "0.06em",
                color: "var(--muted-foreground)",
              }}
            >
              color/{name}
            </span>
            <div className="flex gap-1.5 h-[52px]">
              {scale.map((c, i) => {
                const id = `${name}-${i}`;
                return (
                  <motion.div
                    key={i}
                    onMouseEnter={() => setHovered(id)}
                    onMouseLeave={() => setHovered(null)}
                    className="relative flex-1 cursor-pointer"
                    style={{
                      background: c,
                      borderRadius: "8px",
                      border: "1px solid rgba(0,0,0,0.06)",
                    }}
                    whileHover={{ y: -5, transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] } }}
                  >
                    {hovered === id && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-6 left-0 right-0 text-center"
                        style={{
                          fontSize: "9px",
                          color: "var(--muted-foreground)",
                          fontFamily: "ui-monospace, monospace",
                        }}
                      >
                        {c}
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TypeSection() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex items-center justify-between mb-7">
        <div className="flex items-center gap-3">
          <span
            className="w-[3px] rounded-full"
            style={{ height: "18px", background: "var(--brand)" }}
          />
          <h3 style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "-0.015em" }}>Typography</h3>
        </div>
        <span
          className="uppercase px-2.5 py-1 rounded-full"
          style={{
            fontSize: "10px",
            letterSpacing: "0.12em",
            color: "var(--muted-foreground)",
            border: "1px solid var(--border)",
            background: "var(--accent)",
          }}
        >
          Click to preview
        </span>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5 space-y-1">
          {typeScale.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              className={`w-full text-left px-3 py-2.5 rounded-md flex items-baseline justify-between transition-colors ${
                active === i ? "bg-accent" : "hover:bg-accent/50"
              }`}
            >
              <span style={{ fontSize: "13px", fontWeight: 500 }}>{t.name}</span>
              <span className="text-[11px] text-muted-foreground">
                {t.size}px · {t.role}
              </span>
            </button>
          ))}
        </div>
        <div
          className="col-span-12 md:col-span-7 rounded-xl p-10 min-h-[280px] flex items-center"
          style={{
            border: "1px solid var(--border)",
            background: "var(--surface-card)",
            boxShadow: "var(--shadow-raised)",
          }}
        >
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-3">
              {typeScale[active].name} · {typeScale[active].size}px / {typeScale[active].weight}
            </div>
            <div
              style={{
                fontSize: `${typeScale[active].size}px`,
                fontWeight: typeScale[active].weight,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                fontFamily: typeScale[active].mono
                  ? "ui-monospace, SFMono-Regular, monospace"
                  : "inherit",
              }}
            >
              The quick brown fox.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function SpacingSection() {
  const [scale, setScale] = useState(1);
  return (
    <div>
      <div className="flex items-center justify-between mb-7">
        <div className="flex items-center gap-3">
          <span
            className="w-[3px] rounded-full"
            style={{ height: "18px", background: "var(--brand)" }}
          />
          <h3 style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "-0.015em" }}>Spacing</h3>
        </div>
        <div className="flex items-center gap-3">
          <span
            className="uppercase px-2.5 py-1 rounded-full"
            style={{
              fontSize: "10px",
              letterSpacing: "0.12em",
              color: "var(--muted-foreground)",
              border: "1px solid var(--border)",
              background: "var(--accent)",
            }}
          >
            Compress · Expand
          </span>
          <input
            type="range"
            min={0.4}
            max={1.6}
            step={0.05}
            value={scale}
            onChange={(e) => setScale(parseFloat(e.target.value))}
            className="w-32 accent-foreground"
          />
        </div>
      </div>
      <div
        className="rounded-xl p-10 overflow-hidden"
        style={{
          border: "1px solid var(--border)",
          background: "var(--surface-card)",
          boxShadow: "var(--shadow-raised)",
        }}
      >
        <div className="flex items-end gap-2">
          {spacingScale.map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <motion.div
                animate={{ width: s * scale, height: s * scale }}
                className="bg-foreground rounded-sm"
                style={{ minWidth: 6 }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
              />
              <span className="text-[10px] text-muted-foreground tabular-nums">
                {Math.round(s * scale)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ElevationSection() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <span
            className="w-[3px] rounded-full"
            style={{ height: "18px", background: "var(--brand)" }}
          />
          <h3 style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "-0.015em" }}>Elevation</h3>
        </div>
        <span
          className="uppercase px-2.5 py-1 rounded-full"
          style={{
            fontSize: "10px",
            letterSpacing: "0.12em",
            color: "var(--muted-foreground)",
            border: "1px solid var(--border)",
            background: "var(--accent)",
          }}
        >
          System progression
        </span>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-5 gap-px rounded-2xl overflow-hidden"
        style={{
          background: "var(--border)",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow-raised)",
        }}
      >
        {/* Layer 0: Base */}
        <ElevationLevel
          step="00"
          name="Base"
          token="surface/background"
          desc="The lowest level. The foundational canvas."
        >
          <div className="w-full h-full bg-background border border-border/10 rounded-md flex items-center justify-center">
            <span className="text-[10px] text-muted-foreground">App Frame</span>
          </div>
        </ElevationLevel>

        {/* Layer 1: Raised */}
        <ElevationLevel
          step="01"
          name="Card"
          token="shadow/raised"
          desc="Contained content blocks. Subtle border definition."
        >
          <div className="w-4/5 h-2/3 bg-card border border-border/50 rounded-md shadow-sm flex flex-col p-2.5">
            <div className="w-1/2 h-2 rounded bg-muted/30 mb-2" />
            <div className="w-3/4 h-1.5 rounded bg-muted/20 mb-1" />
            <div className="w-2/3 h-1.5 rounded bg-muted/20" />
          </div>
        </ElevationLevel>

        {/* Layer 2: Floating */}
        <ElevationLevel
          step="02"
          name="Dropdown"
          token="shadow/floating"
          desc="Contextual menus. Separated from base content."
        >
          <div className="w-3/4 h-auto bg-card border border-border rounded-md p-1.5 flex flex-col gap-1" style={{ boxShadow: "var(--shadow-floating)" }}>
            <div className="w-full h-4 rounded bg-brand/10 flex items-center px-1">
               <div className="w-3/4 h-1.5 rounded bg-brand/40" />
            </div>
            <div className="w-full h-4 rounded bg-transparent flex items-center px-1">
               <div className="w-1/2 h-1.5 rounded bg-muted/30" />
            </div>
          </div>
        </ElevationLevel>

        {/* Layer 3: Overlay */}
        <ElevationLevel
          step="03"
          name="Modal"
          token="shadow/overlay"
          desc="Focused interaction. Requires attention."
        >
           <div className="w-full h-full relative flex items-center justify-center bg-foreground/5 rounded-md overflow-hidden">
             <div className="absolute inset-0 backdrop-blur-[1px]" />
             <div className="relative w-4/5 h-3/5 bg-card border border-border rounded-md flex flex-col p-2.5" style={{ boxShadow: "var(--shadow-overlay)" }}>
                <div className="w-1/2 h-2 rounded bg-foreground/80 mb-auto" />
                <div className="flex gap-1 justify-end">
                   <div className="w-6 h-3 rounded bg-muted/30" />
                   <div className="w-6 h-3 rounded bg-brand" />
                </div>
             </div>
           </div>
        </ElevationLevel>

        {/* Layer 4: Highest */}
        <ElevationLevel
          step="04"
          name="Sheet"
          token="shadow/sheet"
          desc="Edge-anchored overlay. Highest z-index."
        >
           <div className="w-full h-full relative bg-foreground/5 rounded-md overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-[55%] bg-card border-l border-border p-2" style={{ boxShadow: "-12px 0 32px -12px rgba(0,0,0,0.2)" }}>
                 <div className="w-1/2 h-2 rounded bg-foreground/80 mb-3" />
                 <div className="w-full h-1.5 rounded bg-muted/30 mb-1.5" />
                 <div className="w-4/5 h-1.5 rounded bg-muted/30 mb-1.5" />
                 <div className="w-full h-1.5 rounded bg-muted/30" />
              </div>
           </div>
        </ElevationLevel>
      </div>
    </div>
  );
}

function ElevationLevel({
  step,
  name,
  token,
  desc,
  children,
}: {
  step: string;
  name: string;
  token: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background flex flex-col h-[340px] p-5 transition-colors hover:bg-accent/10">
       <div className="flex-1 flex items-center justify-center bg-accent/30 rounded-lg p-4 border border-border/30 mb-5 overflow-hidden relative">
          {children}
       </div>
       <div className="mt-auto flex flex-col">
          <div className="flex items-baseline gap-2 mb-1.5">
            <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground">{step}</span>
            <span style={{ fontSize: "14px", fontWeight: 500 }}>{name}</span>
          </div>
          <div className="text-[11px] font-mono text-brand mb-2">{token}</div>
          <div className="text-[12px] text-muted-foreground leading-snug">{desc}</div>
       </div>
    </div>
  );
}
