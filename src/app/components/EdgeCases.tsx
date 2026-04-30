import { motion } from "motion/react";
import { Loader2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const cases = [
  {
    title: "Long labels truncate gracefully",
    body: "Buttons stay one line. The full string lives in a tooltip.",
    component: (
      <button
        className="max-w-[200px] inline-flex items-center px-4 h-9 rounded-md text-[13px] truncate"
        style={{ background: "var(--brand)", color: "var(--brand-foreground)" }}
      >
        Provision a new development environment
      </button>
    ),
  },
  {
    title: "Multi-line body holds rhythm",
    body: "Body copy reads cleanly all the way through long passages.",
    component: (
      <p className="text-[13px] leading-relaxed text-muted-foreground max-w-xs">
        A design system is a quiet contract between teammates. It exists so the
        common decisions disappear, leaving room for the rare ones that matter.
        Kairo is never quite finished, and that is fine.
      </p>
    ),
  },
  {
    title: "Avatar fallback",
    body: "Initials when an image is missing. A neutral glyph if even initials are unavailable.",
    component: (
      <div className="flex -space-x-2">
        <span
          className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] ring-2 ring-card"
          style={{ background: "var(--brand)", color: "var(--brand-foreground)" }}
        >
          AK
        </span>
        <span className="w-9 h-9 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-[14px] ring-2 ring-card">
          ?
        </span>
      </div>
    ),
  },
  {
    title: "Dense controls stay touchable",
    body: "Visual size shrinks; touch targets stay generous.",
    component: (
      <div className="flex items-center gap-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <button
            key={i}
            className="w-7 h-7 rounded border border-border text-[10px] hover:bg-accent"
          >
            {i + 1}
          </button>
        ))}
      </div>
    ),
  },
  {
    title: "Loading without layout shift",
    body: "Progress shows in place; surrounding layout stays still.",
    component: (
      <button
        className="inline-flex items-center gap-2 px-4 h-9 rounded-md text-[13px] opacity-70 cursor-wait"
        style={{ background: "var(--brand)", color: "var(--brand-foreground)" }}
      >
        <Loader2 size={13} className="animate-spin" />
        Saving…
      </button>
    ),
  },
  {
    title: "Skeletons preserve structure",
    body: "Quiet placeholders that hold shape while content arrives.",
    component: (
      <div className="w-full max-w-xs space-y-2">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="h-3 rounded bg-accent w-3/4"
        />
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.4, delay: 0.15 }}
          className="h-3 rounded bg-accent w-full"
        />
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.4, delay: 0.3 }}
          className="h-3 rounded bg-accent w-1/2"
        />
      </div>
    ),
  },
  {
    title: "Disabled controls read clearly",
    body: "Reduced opacity, no shadow, cursor not-allowed.",
    component: (
      <div className="flex items-center gap-2">
        <button
          disabled
          className="px-4 h-9 rounded-md text-[13px] opacity-50 cursor-not-allowed"
          style={{ background: "var(--brand)", color: "var(--brand-foreground)" }}
        >
          Disabled
        </button>
        <input
          disabled
          placeholder="Disabled input"
          className="h-9 rounded-md bg-input-background px-3 text-[13px] opacity-50 cursor-not-allowed"
        />
      </div>
    ),
  },
  {
    title: "Icon-only with full target",
    body: "Same hit area as labeled buttons. Accessible name via aria-label.",
    component: (
      <button
        aria-label="Add"
        className="w-9 h-9 rounded-md border border-border hover:bg-accent flex items-center justify-center relative"
      >
        <span className="block w-3 h-px bg-foreground absolute" />
        <span className="block h-3 w-px bg-foreground absolute" />
      </button>
    ),
  },
  {
    title: "Focus ring on keyboard only",
    body: "Visible when a user tabs in. Hidden on mouse focus.",
    component: (
      <button
        className="px-4 h-9 rounded-md border border-border text-[13px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        style={{ ["--tw-ring-color" as string]: "var(--brand)" }}
      >
        Tab to focus
      </button>
    ),
  },
];

export function EdgeCases() {
  return (
    <section id="edge" className="py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-8">
        <SectionHeader
          index="06"
          kicker="Built for the unusual"
          title={
            <>
              When content gets <span className="italic font-normal" style={{ color: "var(--brand)" }}>weird.</span>
            </>
          }
          description="Real interfaces meet long names, missing images, dense rows, and slow networks. The system is tuned for those moments too."
        />

        <div className="grid grid-cols-12 gap-4">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="col-span-12 md:col-span-6 lg:col-span-4 border border-border rounded-lg p-5 bg-card"
              style={{ boxShadow: "var(--shadow-raised)" }}
            >
              <span className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 style={{ fontSize: "16px", fontWeight: 500 }} className="mt-2">
                {c.title}
              </h4>
              <p className="text-[12px] text-muted-foreground mt-1.5 mb-5 leading-relaxed">
                {c.body}
              </p>
              <div
                className="rounded-md p-5 min-h-[100px] flex items-center justify-center relative"
                style={{ background: "var(--surface-section)" }}
              >
                {c.component}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
