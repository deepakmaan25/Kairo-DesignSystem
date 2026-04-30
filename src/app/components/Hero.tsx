import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { ArrowDown, ArrowUpRight, Check, Mail, Wand2 } from "lucide-react";
import { useRef } from "react";

export function Hero({ onBuild }: { onBuild: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      style={{ position: "relative" }}
      className="min-h-[100vh] pt-32 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at 78% 18%, var(--brand-soft), transparent 55%), radial-gradient(circle at 18% 80%, var(--accent), transparent 60%)",
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative max-w-[1400px] mx-auto px-8">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--brand)" }} />
          <span className="text-[12px] tracking-[0.18em] text-muted-foreground uppercase">
            Atlas Design System · v0.9
          </span>
        </div>

        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-7">
            <h1
              style={{
                fontSize: "clamp(44px, 7.5vw, 104px)",
                fontWeight: 500,
                lineHeight: 0.98,
                letterSpacing: "-0.035em",
              }}
            >
              A system{" "}
              <span style={{ color: "var(--brand)" }} className="italic font-normal">
                that does
              </span>
              <br />
              the quiet work.
            </h1>
            <p
              className="text-muted-foreground max-w-md mt-6"
              style={{ fontSize: "15px", lineHeight: 1.6 }}
            >
              Tokens, components, and patterns built to make the everyday
              decisions disappear. Move your cursor across the cluster on the
              right.
            </p>
            <div className="flex items-center gap-2.5 mt-7 flex-wrap">
              <a
                href="#foundations"
                className="group inline-flex items-center gap-2 px-4 h-10 rounded-md hover:opacity-90 transition"
                style={{ fontSize: "13px", background: "var(--brand)", color: "var(--brand-foreground)" }}
              >
                Explore the system
                <ArrowDown size={14} className="group-hover:translate-y-0.5 transition" />
              </a>
              <a
                href="#lab"
                className="inline-flex items-center gap-2 px-4 h-10 rounded-md border border-border hover:bg-accent transition"
                style={{ fontSize: "13px" }}
              >
                See it in motion
                <ArrowUpRight size={14} />
              </a>
              <button
                onClick={onBuild}
                className="inline-flex items-center gap-2 px-4 h-10 rounded-md border transition group"
                style={{
                  fontSize: "13px",
                  borderColor: "var(--brand)",
                  color: "var(--brand)",
                  background: "var(--brand-soft)",
                }}
              >
                <Wand2 size={14} className="group-hover:rotate-12 transition" />
                Build with Atlas/DS
              </button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <TiltCluster />
          </div>
        </div>

        <div className="mt-16 flex items-end justify-between border-t border-border pt-6 flex-wrap gap-6">
          <div className="grid grid-cols-3 gap-12 text-[12px] text-muted-foreground">
            <Stat label="Tokens" value="142" />
            <Stat label="Components" value="38" />
            <Stat label="Patterns" value="24" />
          </div>
          <span className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            Scroll to explore
          </span>
        </div>
      </motion.div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div
        style={{ fontSize: "32px", fontWeight: 500, letterSpacing: "-0.02em" }}
        className="text-foreground"
      >
        {value}
      </div>
      <div className="text-[11px] tracking-[0.18em] uppercase mt-1">{label}</div>
    </div>
  );
}

/* ---------- 3D Tilt cluster ---------- */

function TiltCluster() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [10, -10]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-50, 50], [-10, 10]), { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 100);
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 100);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ perspective: 1200 }}
      className="relative h-[460px] w-full"
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="absolute inset-0"
      >
        {/* Center: notification card */}
        <Layer depth={60} pos={{ left: "50%", top: "50%" }} center>
          <div
            className="w-[300px] rounded-xl border border-border bg-card p-5"
            style={{ boxShadow: "var(--shadow-overlay)" }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[12px]"
                  style={{ background: "var(--brand)", color: "var(--brand-foreground)" }}
                >
                  DM
                </span>
                <div>
                  <div className="text-[12px]">New deploy</div>
                  <div className="text-[10px] text-muted-foreground">Just now</div>
                </div>
              </div>
              <span
                className="text-[10px] px-1.5 py-0.5 rounded-full"
                style={{ background: "var(--success-soft)", color: "var(--success)" }}
              >
                Live
              </span>
            </div>
            <div
              className="rounded-md p-2.5 flex items-start gap-2 text-[11px]"
              style={{ background: "var(--info-soft)", color: "var(--info)" }}
            >
              <Check size={12} className="mt-0.5 flex-shrink-0" />
              <span>Atlas v0.9 published successfully</span>
            </div>
          </div>
        </Layer>

        {/* Top-left: token swatches */}
        <Layer depth={40} pos={{ left: "-2%", top: "5%" }} rotate={-6}>
          <Card>
            <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground mb-1.5">
              color/feedback
            </div>
            <div className="flex gap-1 h-10 rounded overflow-hidden">
              <Swatch c="var(--brand)" />
              <Swatch c="var(--success)" />
              <Swatch c="var(--warning)" />
              <Swatch c="var(--destructive)" />
            </div>
          </Card>
        </Layer>

        {/* Top-right: input */}
        <Layer depth={30} pos={{ right: "-4%", top: "8%" }} rotate={5}>
          <Card>
            <div className="text-[9px] text-muted-foreground mb-1">Email</div>
            <div className="h-8 rounded-md bg-input-background pl-7 flex items-center text-[11px] text-muted-foreground relative">
              <Mail size={11} className="absolute left-2.5" />
              you@atlas.io
            </div>
          </Card>
        </Layer>

        {/* Bottom-left: badges */}
        <Layer depth={45} pos={{ left: "-6%", top: "62%" }} rotate={6}>
          <Card>
            <div className="flex flex-wrap gap-1">
              <span
                className="px-2 py-0.5 rounded-full text-[10px]"
                style={{ background: "var(--success-soft)", color: "var(--success)" }}
              >
                Shipped
              </span>
              <span
                className="px-2 py-0.5 rounded-full text-[10px]"
                style={{ background: "var(--brand-soft)", color: "var(--brand)" }}
              >
                v0.9
              </span>
            </div>
          </Card>
        </Layer>

        {/* Bottom-right: button + toggle */}
        <Layer depth={50} pos={{ right: "-2%", top: "65%" }} rotate={-4}>
          <Card>
            <button
              className="w-full h-8 rounded-md text-[11px] mb-1.5"
              style={{ background: "var(--brand)", color: "var(--brand-foreground)" }}
            >
              Continue
            </button>
            <div className="flex items-center justify-between text-[11px]">
              <span>Notify</span>
              <span
                className="w-7 h-4 rounded-full relative"
                style={{ background: "var(--brand)" }}
              >
                <span className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-background" />
              </span>
            </div>
          </Card>
        </Layer>

        {/* Floating avatars stack */}
        <Layer depth={70} pos={{ left: "8%", top: "40%" }} rotate={-3}>
          <div className="flex -space-x-2">
            {[
              { c: "AK", color: "var(--info)" },
              { c: "RV", color: "var(--destructive)" },
              { c: "SP", color: "var(--success)" },
            ].map((p, i) => (
              <span
                key={i}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] ring-2 ring-card text-white"
                style={{ background: p.color, boxShadow: "var(--shadow-floating)" }}
              >
                {p.c}
              </span>
            ))}
          </div>
        </Layer>
      </motion.div>

      {/* dashed connectors */}
      <svg
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ color: "var(--border)" }}
      >
        <motion.line
          x1="10%" y1="20%" x2="50%" y2="50%"
          stroke="currentColor" strokeDasharray="3 4" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        />
        <motion.line
          x1="92%" y1="22%" x2="50%" y2="50%"
          stroke="currentColor" strokeDasharray="3 4" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        />
        <motion.line
          x1="8%" y1="78%" x2="50%" y2="50%"
          stroke="currentColor" strokeDasharray="3 4" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        />
      </svg>
    </motion.div>
  );
}

function Layer({
  depth,
  pos,
  rotate = 0,
  center,
  children,
}: {
  depth: number;
  pos: { left?: string; right?: string; top?: string };
  rotate?: number;
  center?: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: depth * 0.004 }}
      whileHover={{ scale: 1.06 }}
      style={{
        position: "absolute",
        ...pos,
        transform: `${center ? "translate(-50%, -50%) " : ""}translateZ(${depth}px) rotate(${rotate}deg)`,
        transformStyle: "preserve-3d",
      }}
      className="cursor-pointer"
    >
      {children}
    </motion.div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="bg-card border border-border rounded-lg p-3 w-[160px]"
      style={{ boxShadow: "var(--shadow-floating)" }}
    >
      {children}
    </div>
  );
}

function Swatch({ c }: { c: string }) {
  return <div className="flex-1" style={{ background: c }} />;
}
