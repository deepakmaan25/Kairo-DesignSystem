import { motion } from "motion/react";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Chain = {
  label: string;
  primitive: { name: string; value: string };
  semantic: { name: string; value: string };
  component: { name: string; value: string };
  fg?: string;
  preview: (color: string, fg: string) => React.ReactNode;
};

const chains: Chain[] = [
  {
    label: "Primary action",
    primitive: { name: "color.brand.600", value: "var(--brand)" },
    semantic: { name: "color.action.primary", value: "var(--brand)" },
    component: { name: "button.background.primary", value: "var(--brand)" },
    fg: "var(--brand-foreground)",
    preview: (color, fg) => (
      <button className="px-4 h-9 rounded-md text-[13px]" style={{ background: color, color: fg }}>
        Continue
      </button>
    ),
  },
  {
    label: "Success feedback",
    primitive: { name: "color.green.600", value: "var(--success)" },
    semantic: { name: "color.feedback.success", value: "var(--success)" },
    component: { name: "alert.background.success", value: "var(--success-soft)" },
    fg: "var(--success)",
    preview: (color, fg) => (
      <div className="px-3 h-9 rounded-md text-[13px] flex items-center gap-2" style={{ background: color, color: fg }}>
        ✓ Tokens published
      </div>
    ),
  },
  {
    label: "Destructive intent",
    primitive: { name: "color.red.600", value: "var(--destructive)" },
    semantic: { name: "color.feedback.error", value: "var(--destructive)" },
    component: { name: "alert.background.error", value: "var(--danger-soft)" },
    fg: "var(--destructive)",
    preview: (color, fg) => (
      <div className="px-3 h-9 rounded-md text-[13px] flex items-center gap-2" style={{ background: color, color: fg }}>
        ⚠ Something went wrong
      </div>
    ),
  },
  {
    label: "Surface / Card",
    primitive: { name: "color.neutral.0", value: "var(--card)" },
    semantic: { name: "color.surface.default", value: "var(--card)" },
    component: { name: "card.background", value: "var(--card)" },
    fg: "var(--foreground)",
    preview: (color) => (
      <div
        className="px-3 h-9 rounded-md border border-border text-[13px] flex items-center"
        style={{ background: color }}
      >
        Surface card
      </div>
    ),
  },
];

export function Tokens() {
  const [active, setActive] = useState(0);
  const c = chains[active];

  return (
    <section
      id="tokens"
      className="py-32 border-t border-border"
      style={{ background: "var(--surface-section)" }}
    >
      <div className="max-w-[1400px] mx-auto px-8">
        <SectionHeader
          index="02"
          kicker="Token Architecture"
          title={
            <>
              From <span className="italic font-normal" style={{ color: "var(--brand)" }}>raw value</span>
              <br />
              to component contract.
            </>
          }
          description="Every applied color flows through three layers. Pick a chain to see how a single value travels."
        />

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3 space-y-1">
            {chains.map((c, i) => (
              <button
                key={c.label}
                onClick={() => setActive(i)}
                className={`w-full text-left px-3 py-3 rounded-md flex items-center justify-between group transition-colors ${
                  active === i ? "bg-background border border-border" : "hover:bg-accent"
                }`}
              >
                <span style={{ fontSize: "13px", fontWeight: active === i ? 500 : 400 }}>
                  {c.label}
                </span>
                <ChevronRight
                  size={14}
                  className={`transition ${active === i ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-40"}`}
                />
              </button>
            ))}
          </div>

          <div className="col-span-12 md:col-span-9">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-3"
            >
              <TokenLayer
                step="01"
                level="Primitive"
                token={c.primitive.name}
                value={c.primitive.value}
                description="The raw value. No intent, just a number."
                swatch={c.primitive.value}
              />
              <TokenLayer
                step="02"
                level="Semantic"
                token={c.semantic.name}
                value={c.semantic.value}
                description="Intent. Stays consistent across themes."
                swatch={c.semantic.value}
                arrow
              />
              <TokenLayer
                step="03"
                level="Component"
                token={c.component.name}
                value={c.component.value}
                description="Where the value finally lands."
                swatch={c.component.value}
                arrow
              />
            </motion.div>

            <motion.div
              key={`prev-${active}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 border border-border rounded-lg bg-background p-8 flex items-center justify-between gap-6"
              style={{ boxShadow: "var(--shadow-raised)" }}
            >
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                  Live component
                </span>
                <span className="text-[12px] text-muted-foreground">
                  Bound to <span style={{ color: "var(--brand)" }}>{c.component.name}</span>. Pick another chain to see it remap.
                </span>
              </div>
              {c.preview(c.component.value, c.fg ?? "var(--foreground)")}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TokenLayer({
  step,
  level,
  token,
  value,
  description,
  swatch,
  arrow,
}: {
  step: string;
  level: string;
  token: string;
  value: string;
  description: string;
  swatch: string;
  arrow?: boolean;
}) {
  return (
    <div className="relative">
      {arrow && (
        <div className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background border border-border items-center justify-center z-10">
          <ChevronRight size={12} />
        </div>
      )}
      <div className="bg-background border border-border rounded-lg p-5 h-full">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            {step} · {level}
          </span>
          <span className="w-6 h-6 rounded border border-border" style={{ background: swatch }} />
        </div>
        <div
          style={{ fontFamily: "ui-monospace, SFMono-Regular, monospace", fontSize: "12px" }}
          className="break-all"
        >
          {token}
        </div>
        <div
          style={{ fontFamily: "ui-monospace, SFMono-Regular, monospace", fontSize: "11px" }}
          className="text-muted-foreground mt-1 break-all"
        >
          → {value}
        </div>
        <p className="text-[12px] text-muted-foreground mt-4 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
