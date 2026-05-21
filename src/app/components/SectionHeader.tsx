import { motion } from "motion/react";
import { ReactNode } from "react";

export function SectionHeader({
  index,
  kicker,
  title,
  description,
  children,
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-12 gap-8 mb-16"
    >
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
            {index}
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
              color: "var(--muted-foreground)",
            }}
          >
            {kicker}
          </span>
        </div>
      </div>
      <div className="col-span-12 md:col-span-9">
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
          className="max-w-3xl"
        >
          {title}
        </h2>
        {description && (
          <p
            className="mt-5 text-muted-foreground max-w-xl"
            style={{ fontSize: "15px", lineHeight: 1.6 }}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </motion.div>
  );
}

export function GapBadge({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] tracking-wider uppercase"
      style={{
        background: "color-mix(in srgb, var(--destructive) 12%, transparent)",
        color: "var(--destructive)",
        border: "1px dashed color-mix(in srgb, var(--destructive) 35%, transparent)",
      }}
    >
      <span className="w-1 h-1 rounded-full bg-current" />
      {children}
    </span>
  );
}
