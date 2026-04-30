import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, ArrowRight, ArrowLeft, Check, Sparkles, LayoutDashboard, Globe, Smartphone } from "lucide-react";
import { GapBadge } from "./SectionHeader";

type Kind = "dashboard" | "website" | "app";
type Tone = "calm" | "bold" | "technical" | "editorial";
type Density = "spacious" | "balanced" | "compact";

const kinds: { id: Kind; label: string; desc: string; icon: typeof LayoutDashboard }[] = [
  { id: "dashboard", label: "Dashboard", desc: "Data-dense, charts, KPIs", icon: LayoutDashboard },
  { id: "website", label: "Website", desc: "Marketing, editorial, narrative", icon: Globe },
  { id: "app", label: "App", desc: "Task-driven, mobile-first", icon: Smartphone },
];

const tones: { id: Tone; label: string; desc: string }[] = [
  { id: "calm", label: "Calm", desc: "Soft, spacious, neutral" },
  { id: "bold", label: "Bold", desc: "Saturated, confident" },
  { id: "technical", label: "Technical", desc: "Mono, precise, monochrome" },
  { id: "editorial", label: "Editorial", desc: "Typographic, asymmetric" },
];

const densities: { id: Density; label: string; desc: string }[] = [
  { id: "spacious", label: "Spacious", desc: "Generous whitespace" },
  { id: "balanced", label: "Balanced", desc: "Default Kairo rhythm" },
  { id: "compact", label: "Compact", desc: "Pro tools, dense lists" },
];

export function Builder({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [kind, setKind] = useState<Kind>("dashboard");
  const [tone, setTone] = useState<Tone>("calm");
  const [density, setDensity] = useState<Density>("balanced");

  const reset = () => {
    setStep(0);
    setKind("dashboard");
    setTone("calm");
    setDensity("balanced");
  };

  const close = () => {
    onClose();
    setTimeout(reset, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={close}
        >
          <div
            className="absolute inset-0 backdrop-blur-md"
            style={{ background: "color-mix(in srgb, var(--foreground) 24%, transparent)" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[1100px] max-h-[90vh] overflow-hidden rounded-2xl bg-background border border-border flex flex-col"
            style={{
              boxShadow:
                "0 60px 120px -30px rgba(15, 18, 32, 0.45), 0 24px 48px rgba(15, 18, 32, 0.18)",
            }}
          >
            <div className="flex items-center justify-between px-6 h-14 border-b border-border">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-7 h-7 rounded-md flex items-center justify-center"
                  style={{ background: "var(--brand-soft)", color: "var(--brand)" }}
                >
                  <Sparkles size={14} />
                </span>
                <div className="flex items-baseline gap-2">
                  <span style={{ fontSize: "14px", fontWeight: 500 }}>Build with Kairo</span>
                  <span className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                    {step < 3 ? `Step ${step + 1} / 3` : "Preview"}
                  </span>
                </div>
              </div>
              <button
                onClick={close}
                className="w-8 h-8 rounded-md hover:bg-accent flex items-center justify-center"
                aria-label="Close"
              >
                <X size={15} />
              </button>
            </div>

            <div className="h-1 bg-border/40 relative">
              <motion.span
                className="absolute left-0 top-0 bottom-0"
                style={{ background: "var(--brand)" }}
                animate={{ width: `${((step + 1) / 4) * 100}%` }}
                transition={{ type: "spring", stiffness: 200, damping: 26 }}
              />
            </div>

            <div className="flex-1 overflow-auto">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <StepShell key="s0" title="What do you want to create?" subtitle="Pick a frame. Kairo adapts.">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {kinds.map((k) => {
                        const Icon = k.icon;
                        const active = kind === k.id;
                        return (
                          <button
                            key={k.id}
                            onClick={() => setKind(k.id)}
                            className="text-left rounded-lg border p-5 transition-all group"
                            style={{
                              borderColor: active ? "var(--brand)" : "var(--border)",
                              background: active ? "var(--brand-soft)" : "var(--card)",
                              boxShadow: active ? "var(--shadow-raised)" : "none",
                            }}
                          >
                            <div className="flex items-center justify-between mb-4">
                              <span
                                className="w-9 h-9 rounded-md flex items-center justify-center"
                                style={{
                                  background: active ? "var(--brand)" : "var(--accent)",
                                  color: active ? "var(--brand-foreground)" : "var(--foreground)",
                                }}
                              >
                                <Icon size={16} />
                              </span>
                              {active && <Check size={14} style={{ color: "var(--brand)" }} />}
                            </div>
                            <div style={{ fontSize: "15px", fontWeight: 500 }}>{k.label}</div>
                            <div className="text-[12px] text-muted-foreground mt-1">{k.desc}</div>
                          </button>
                        );
                      })}
                    </div>
                  </StepShell>
                )}

                {step === 1 && (
                  <StepShell key="s1" title="What tone should it carry?" subtitle="Tone reweights tokens, type, and surfaces.">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {tones.map((t) => (
                        <OptionCard
                          key={t.id}
                          active={tone === t.id}
                          onClick={() => setTone(t.id)}
                          label={t.label}
                          desc={t.desc}
                          preview={<TonePreview tone={t.id} />}
                        />
                      ))}
                    </div>
                  </StepShell>
                )}

                {step === 2 && (
                  <StepShell key="s2" title="How dense?" subtitle="Spacing scale shifts. Type and hit-targets follow.">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {densities.map((d) => (
                        <OptionCard
                          key={d.id}
                          active={density === d.id}
                          onClick={() => setDensity(d.id)}
                          label={d.label}
                          desc={d.desc}
                          preview={<DensityPreview density={d.id} />}
                        />
                      ))}
                    </div>
                  </StepShell>
                )}

                {step === 3 && (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-8 py-10"
                  >
                    <div className="flex items-baseline justify-between flex-wrap gap-3 mb-6">
                      <div>
                        <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-1">
                          Generated concept
                        </div>
                        <div style={{ fontSize: "26px", fontWeight: 500, letterSpacing: "-0.02em" }}>
                          A {tone} {kind}, {density} density.
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                        <Pill>{kind}</Pill>
                        <Pill>{tone}</Pill>
                        <Pill>{density}</Pill>
                      </div>
                    </div>

                    <div
                      className="rounded-xl border border-border p-6 md:p-8"
                      style={{ background: "var(--surface-section)" }}
                    >
                      {kind === "dashboard" && <DashboardPreview tone={tone} density={density} />}
                      {kind === "website" && <WebsitePreview tone={tone} density={density} />}
                      {kind === "app" && <AppPreview tone={tone} density={density} />}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <GapBadge>Candidate to add to design system · Generator pattern</GapBadge>
                      {kind === "dashboard" && (
                        <GapBadge>Missing system rule · KPI card variant</GapBadge>
                      )}
                      {kind === "website" && (
                        <GapBadge>Missing system rule · Marketing hero block</GapBadge>
                      )}
                      {kind === "app" && (
                        <GapBadge>Missing system rule · Onboarding template</GapBadge>
                      )}
                      <GapBadge>Missing system rule · Skeleton shimmer</GapBadge>
                    </div>
                    <p className="text-[12px] text-muted-foreground mt-3 max-w-xl">
                      The builder surfaces gaps the system should grow into. Each label is a
                      candidate ticket against Kairo itself.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between px-6 h-16 border-t border-border bg-background">
              <button
                onClick={() => (step === 0 ? close() : setStep(step - 1))}
                className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft size={14} />
                {step === 0 ? "Cancel" : "Back"}
              </button>
              <div className="flex items-center gap-2">
                {step === 3 && (
                  <button
                    onClick={reset}
                    className="px-3 h-9 rounded-md border border-border text-[13px] hover:bg-accent"
                  >
                    Start over
                  </button>
                )}
                {step < 3 ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    className="inline-flex items-center gap-1.5 px-4 h-9 rounded-md text-[13px] hover:opacity-90 transition"
                    style={{ background: "var(--brand)", color: "var(--brand-foreground)" }}
                  >
                    {step === 2 ? "Generate concept" : "Continue"}
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    onClick={close}
                    className="inline-flex items-center gap-1.5 px-4 h-9 rounded-md text-[13px] hover:opacity-90 transition"
                    style={{ background: "var(--brand)", color: "var(--brand-foreground)" }}
                  >
                    Done
                    <Check size={14} />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function StepShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="px-8 py-10"
    >
      <div className="mb-8 max-w-xl">
        <div style={{ fontSize: "24px", fontWeight: 500, letterSpacing: "-0.02em" }}>{title}</div>
        <div className="text-[13px] text-muted-foreground mt-1.5">{subtitle}</div>
      </div>
      {children}
    </motion.div>
  );
}

function OptionCard({
  active,
  onClick,
  label,
  desc,
  preview,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  desc: string;
  preview: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="text-left rounded-lg border p-4 transition-all"
      style={{
        borderColor: active ? "var(--brand)" : "var(--border)",
        background: active ? "var(--brand-soft)" : "var(--card)",
        boxShadow: active ? "var(--shadow-raised)" : "none",
      }}
    >
      <div className="h-16 rounded-md mb-3 overflow-hidden border border-border bg-background flex items-center justify-center p-2">
        {preview}
      </div>
      <div className="flex items-center justify-between">
        <span style={{ fontSize: "13px", fontWeight: 500 }}>{label}</span>
        {active && <Check size={12} style={{ color: "var(--brand)" }} />}
      </div>
      <div className="text-[11px] text-muted-foreground mt-0.5">{desc}</div>
    </button>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="px-2 py-0.5 rounded-full text-[10px] tracking-wider uppercase"
      style={{ background: "var(--brand-soft)", color: "var(--brand)" }}
    >
      {children}
    </span>
  );
}

/* ---------- Tone & density mini-previews ---------- */

function TonePreview({ tone }: { tone: Tone }) {
  if (tone === "calm")
    return (
      <div className="w-full flex gap-1 items-center">
        <span className="flex-1 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
        <span className="w-6 h-6 rounded-full" style={{ background: "var(--brand-soft)" }} />
        <span className="flex-1 h-1.5 rounded-full" style={{ background: "var(--border)" }} />
      </div>
    );
  if (tone === "bold")
    return (
      <div className="w-full flex gap-1 items-center">
        <span className="flex-1 h-2 rounded-sm" style={{ background: "var(--brand)" }} />
        <span className="w-7 h-7 rounded-md" style={{ background: "var(--destructive)" }} />
        <span className="flex-1 h-2 rounded-sm" style={{ background: "var(--warning)" }} />
      </div>
    );
  if (tone === "technical")
    return (
      <div className="w-full flex gap-0.5 items-center" style={{ fontFamily: "ui-monospace, monospace" }}>
        <span className="text-[10px] text-muted-foreground">{`{ }`}</span>
        <span className="flex-1 h-px bg-foreground/40 mx-1" />
        <span className="text-[10px] text-muted-foreground">01</span>
      </div>
    );
  return (
    <div className="w-full">
      <div style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1 }}>
        Aa <span className="italic font-normal text-muted-foreground">serif</span>
      </div>
    </div>
  );
}

function DensityPreview({ density }: { density: Density }) {
  const gap = density === "spacious" ? 6 : density === "balanced" ? 3 : 1.5;
  return (
    <div className="w-full" style={{ display: "flex", flexDirection: "column", gap }}>
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-1.5 rounded-full bg-foreground/30" style={{ width: `${100 - i * 12}%` }} />
      ))}
    </div>
  );
}

/* ---------- Generated concept previews ---------- */

function toneAccent(tone: Tone): string {
  if (tone === "bold") return "var(--destructive)";
  if (tone === "technical") return "var(--foreground)";
  if (tone === "editorial") return "var(--info)";
  return "var(--brand)";
}

function densityPad(density: Density) {
  return density === "spacious" ? "p-6" : density === "compact" ? "p-2.5" : "p-4";
}
function densityGap(density: Density) {
  return density === "spacious" ? "gap-5" : density === "compact" ? "gap-2" : "gap-3";
}

function DashboardPreview({ tone, density }: { tone: Tone; density: Density }) {
  const accent = toneAccent(tone);
  const pad = densityPad(density);
  const gap = densityGap(density);
  return (
    <div className={`grid grid-cols-12 ${gap}`}>
      <div className={`col-span-12 md:col-span-3 rounded-lg border border-border bg-card ${pad}`}>
        <div className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground">Active users</div>
        <div style={{ fontSize: "26px", fontWeight: 500, letterSpacing: "-0.02em" }} className="mt-1">12,408</div>
        <div className="text-[11px] mt-1" style={{ color: "var(--success)" }}>↑ 8.2% wow</div>
      </div>
      <div className={`col-span-12 md:col-span-3 rounded-lg border border-border bg-card ${pad}`}>
        <div className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground">MRR</div>
        <div style={{ fontSize: "26px", fontWeight: 500, letterSpacing: "-0.02em" }} className="mt-1">$48.2k</div>
        <div className="text-[11px] mt-1 text-muted-foreground">vs $44.9k last</div>
      </div>
      <div className={`col-span-12 md:col-span-6 rounded-lg border border-border bg-card ${pad}`}>
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-[12px]" style={{ fontWeight: 500 }}>Sessions</span>
          <span className="text-[10px] text-muted-foreground">last 14 days</span>
        </div>
        <div className="flex items-end gap-1 h-16">
          {[40, 55, 38, 70, 62, 80, 50, 68, 72, 90, 78, 95, 84, 100].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.04, type: "spring", stiffness: 180, damping: 22 }}
              className="flex-1 rounded-sm"
              style={{ background: i === 13 ? accent : "var(--accent)" }}
            />
          ))}
        </div>
      </div>
      <div className={`col-span-12 md:col-span-8 rounded-lg border border-border bg-card ${pad}`}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[12px]" style={{ fontWeight: 500 }}>Recent events</span>
          <span className="text-[10px] tracking-wider uppercase text-muted-foreground">live</span>
        </div>
        <div className={`flex flex-col ${density === "compact" ? "gap-1" : "gap-2"}`}>
          {[
            { who: "Aki K.", what: "Published Kairo v0.9", tag: "release", color: "var(--success)" },
            { who: "Riya V.", what: "Updated tokens/feedback", tag: "tokens", color: "var(--brand)" },
            { who: "Sam P.", what: "Opened PR #482", tag: "PR", color: "var(--info)" },
          ].map((r, i) => (
            <div key={i} className="flex items-center justify-between text-[12px] border-b border-border last:border-0 pb-1.5 last:pb-0">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full text-white text-[10px] flex items-center justify-center" style={{ background: r.color }}>
                  {r.who[0]}
                </span>
                <span className="text-muted-foreground">
                  <span className="text-foreground">{r.who}</span> · {r.what}
                </span>
              </div>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full" style={{ background: "var(--brand-soft)", color: "var(--brand)" }}>
                {r.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={`col-span-12 md:col-span-4 rounded-lg border border-border bg-card ${pad}`}>
        <div className="text-[12px] mb-2" style={{ fontWeight: 500 }}>Plan</div>
        <div className="text-[11px] text-muted-foreground mb-3">Ship 04 / 06 milestones</div>
        <div className="space-y-1.5">
          <Bar pct={100} accent={accent} label="Foundations" />
          <Bar pct={92} accent={accent} label="Tokens" />
          <Bar pct={64} accent={accent} label="Components" />
          <Bar pct={28} accent={accent} label="Patterns" />
        </div>
      </div>
    </div>
  );
}

function Bar({ pct, accent, label }: { pct: number; accent: string; label: string }) {
  return (
    <div>
      <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1">
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-1 rounded-full bg-accent overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: accent }}
        />
      </div>
    </div>
  );
}

function WebsitePreview({ tone, density }: { tone: Tone; density: Density }) {
  const accent = toneAccent(tone);
  const pad = densityPad(density);
  const headline = tone === "editorial" ? "italic" : "normal";
  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden">
      <div className="flex items-center justify-between px-4 h-10 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-sm" style={{ background: accent }} />
          <span className="text-[12px]" style={{ fontWeight: 500 }}>Northwind</span>
        </div>
        <div className="hidden md:flex items-center gap-3 text-[11px] text-muted-foreground">
          <span>Product</span>
          <span>Pricing</span>
          <span>Customers</span>
          <span>Docs</span>
        </div>
        <span className="text-[11px] px-2.5 py-1 rounded-md" style={{ background: accent, color: "var(--brand-foreground)" }}>
          Get started
        </span>
      </div>
      <div className={`grid grid-cols-12 gap-6 ${pad} md:p-10`}>
        <div className="col-span-12 md:col-span-7">
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">v3 · Spring</span>
          <div
            style={{
              fontSize: "clamp(28px, 4.5vw, 44px)",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              fontStyle: headline,
            }}
            className="mt-3"
          >
            Workflows that <span style={{ color: accent }}>just run.</span>
          </div>
          <p className="text-[13px] text-muted-foreground mt-3 max-w-sm leading-relaxed">
            Built on Kairo. Ship the boring stuff faster so the interesting stuff has room.
          </p>
          <div className="flex items-center gap-2 mt-5">
            <span className="px-3 h-8 rounded-md text-[12px] flex items-center" style={{ background: accent, color: "var(--brand-foreground)" }}>
              Start free
            </span>
            <span className="px-3 h-8 rounded-md border border-border text-[12px] flex items-center">
              Watch demo
            </span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="rounded-lg border border-border p-3 bg-background" style={{ boxShadow: "var(--shadow-floating)" }}>
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
              <span className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
              <span className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
            </div>
            <div className="space-y-1.5">
              {["onTokenChange", "buildPreview", "shipRelease"].map((s, i) => (
                <div key={s} className="flex items-center justify-between text-[11px] px-2 py-1.5 rounded" style={{ background: i === 1 ? "var(--brand-soft)" : "transparent" }}>
                  <span style={{ fontFamily: "ui-monospace, monospace" }}>{s}()</span>
                  <span className="text-[10px]" style={{ color: i === 1 ? accent : "var(--muted-foreground)" }}>
                    {i === 1 ? "running" : "idle"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppPreview({ tone, density }: { tone: Tone; density: Density }) {
  const accent = toneAccent(tone);
  const tight = density === "compact";
  return (
    <div className="flex justify-center">
      <div
        className="w-[280px] rounded-[28px] border border-border bg-card overflow-hidden relative"
        style={{ boxShadow: "var(--shadow-overlay)" }}
      >
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-foreground/90 z-10" />
        <div className="px-5 pt-10 pb-5">
          <div className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground">Today · Apr 30</div>
          <div style={{ fontSize: "22px", fontWeight: 500, letterSpacing: "-0.02em" }} className="mt-1">
            Good evening.
          </div>

          <div className="mt-4 rounded-xl p-4" style={{ background: "var(--brand-soft)" }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px]" style={{ color: accent }}>Goal</div>
                <div style={{ fontSize: "16px", fontWeight: 500, color: accent }}>Read 30 min</div>
              </div>
              <div className="relative w-12 h-12">
                <svg viewBox="0 0 36 36" className="w-12 h-12 -rotate-90">
                  <circle cx="18" cy="18" r="15" fill="none" stroke="var(--border)" strokeWidth="3" />
                  <motion.circle
                    cx="18" cy="18" r="15" fill="none"
                    stroke={accent} strokeWidth="3" strokeLinecap="round"
                    strokeDasharray={`${15 * 2 * Math.PI}`}
                    initial={{ strokeDashoffset: 15 * 2 * Math.PI }}
                    animate={{ strokeDashoffset: 15 * 2 * Math.PI * 0.4 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[10px]" style={{ color: accent, fontWeight: 500 }}>
                  60%
                </span>
              </div>
            </div>
          </div>

          <div className={`mt-4 ${tight ? "space-y-1" : "space-y-2"}`}>
            {[
              { t: "Standup notes", done: true },
              { t: "Token review", done: true },
              { t: "PR #482 reply", done: false },
              { t: "Draft v1.0 plan", done: false },
            ].map((task, i) => (
              <div key={i} className="flex items-center gap-2.5 text-[12px]">
                <span
                  className="w-4 h-4 rounded-md flex items-center justify-center"
                  style={{
                    background: task.done ? accent : "transparent",
                    border: task.done ? "none" : "1px solid var(--border)",
                  }}
                >
                  {task.done && <Check size={10} className="text-white" />}
                </span>
                <span className={task.done ? "text-muted-foreground line-through" : ""}>{task.t}</span>
              </div>
            ))}
          </div>

          <button
            className="w-full mt-5 h-9 rounded-md text-[12px]"
            style={{ background: accent, color: "var(--brand-foreground)" }}
          >
            + Add task
          </button>
        </div>
      </div>
    </div>
  );
}
