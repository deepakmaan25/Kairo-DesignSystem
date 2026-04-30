import { motion } from "motion/react";
import { useState } from "react";
import { Search, X, Mail, Lock, AlertTriangle, Filter, Plus, Inbox } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Scenes() {
  return (
    <section
      id="scenes"
      className="py-32 border-t border-border"
      style={{ background: "var(--surface-section)" }}
    >
      <div className="max-w-[1400px] mx-auto px-8">
        <SectionHeader
          index="05"
          kicker="Use-case scenes"
          title={
            <>
              The system <span className="italic font-normal" style={{ color: "var(--brand)" }}>in the wild.</span>
            </>
          }
          description="Six real compositions, built only from the components above."
        />

        <div className="grid grid-cols-12 gap-6">
          <SceneCard span="lg:col-span-7" label="Dashboard widget"><DashboardScene /></SceneCard>
          <SceneCard span="lg:col-span-5" label="Mobile app card"><MobileScene /></SceneCard>
          <SceneCard span="lg:col-span-7" label="Form validation"><FormScene /></SceneCard>
          <SceneCard span="lg:col-span-5" label="Settings"><SettingsScene /></SceneCard>
          <SceneCard span="lg:col-span-5" label="No results"><SearchScene /></SceneCard>
          <SceneCard span="lg:col-span-7" label="Notification stack"><NotifScene /></SceneCard>
          <SceneCard span="lg:col-span-7" label="Team profile"><ProfileScene /></SceneCard>
          <SceneCard span="lg:col-span-5" label="Empty + CTA"><EmptyScene /></SceneCard>
        </div>
      </div>
    </section>
  );
}

function SceneCard({
  span,
  label,
  children,
}: {
  span: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`col-span-12 ${span} bg-card border border-border rounded-lg overflow-hidden`}
      style={{ boxShadow: "var(--shadow-raised)" }}
    >
      <div className="px-5 py-3 border-b border-border flex items-center justify-between">
        <span className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{label}</span>
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--success)" }}
        />
      </div>
      <div className="p-6 min-h-[300px] flex items-center justify-center">{children}</div>
    </motion.div>
  );
}

function DashboardScene() {
  const data = [38, 52, 41, 64, 58, 72, 68, 80, 74, 88, 82, 95];
  return (
    <div className="w-full">
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <div className="text-[11px] text-muted-foreground tracking-wide">Active sessions</div>
          <div className="flex items-baseline gap-2 mt-1">
            <div style={{ fontSize: "28px", fontWeight: 500, letterSpacing: "-0.02em" }}>2,481</div>
            <span
              className="text-[11px] px-1.5 py-0.5 rounded"
              style={{ background: "var(--success-soft)", color: "var(--success)" }}
            >
              +12.4%
            </span>
          </div>
        </div>
        <div className="flex p-0.5 bg-accent rounded-md text-[11px]">
          {["7d", "30d", "90d"].map((r, i) => (
            <span
              key={r}
              className="px-2 py-0.5 rounded"
              style={i === 1 ? { background: "var(--card)", boxShadow: "var(--shadow-raised)" } : {}}
            >
              {r}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-end gap-1 h-24 mb-2">
        {data.map((v, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${v}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 rounded-t"
            style={{ background: i === data.length - 1 ? "var(--brand)" : "var(--brand-soft)" }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between text-[10px] text-muted-foreground">
        <span>Mon</span>
        <span>Wed</span>
        <span>Fri</span>
        <span>Sun</span>
      </div>
      <div className="border-t border-border mt-4 pt-3 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--brand)" }} />
            <span className="text-muted-foreground">Web</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--info)" }} />
            <span className="text-muted-foreground">Mobile</span>
          </span>
        </div>
        <span className="text-muted-foreground">Updated 2m ago</span>
      </div>
    </div>
  );
}

function MobileScene() {
  return (
    <div className="relative w-[180px]" style={{ filter: "drop-shadow(var(--shadow-overlay))" }}>
      <div
        className="rounded-[28px] border border-border bg-card p-3"
        style={{ boxShadow: "inset 0 0 0 4px var(--border)" }}
      >
        {/* Notch */}
        <div className="h-3 flex justify-center mb-2">
          <span className="w-12 h-1 rounded-full bg-foreground/40" />
        </div>
        <div className="px-1">
          <div className="flex items-center justify-between mb-3">
            <div className="text-[11px]">Today</div>
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-[9px]"
              style={{ background: "var(--brand)", color: "var(--brand-foreground)" }}
            >
              DM
            </span>
          </div>
          <div
            className="rounded-lg p-3 mb-2"
            style={{ background: "var(--brand-soft)", color: "var(--brand)" }}
          >
            <div className="text-[10px] mb-1 opacity-70">Streak</div>
            <div style={{ fontSize: "20px", fontWeight: 500, letterSpacing: "-0.02em" }}>12 days</div>
          </div>
          <div className="space-y-1.5">
            {[
              { t: "Morning workout", d: "30 min", done: true },
              { t: "Read", d: "20 min", done: true },
              { t: "Journal", d: "10 min", done: false },
            ].map((task) => (
              <div
                key={task.t}
                className="flex items-center gap-2 p-2 rounded-md border border-border"
              >
                <span
                  className="w-3.5 h-3.5 rounded flex items-center justify-center"
                  style={{
                    background: task.done ? "var(--brand)" : "transparent",
                    boxShadow: task.done ? "none" : "inset 0 0 0 1.5px var(--switch-background)",
                  }}
                >
                  {task.done && (
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4l1.7 1.7L6.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  )}
                </span>
                <div className="flex-1">
                  <div className="text-[10px]" style={{ textDecoration: task.done ? "line-through" : "none", opacity: task.done ? 0.5 : 1 }}>
                    {task.t}
                  </div>
                </div>
                <span className="text-[9px] text-muted-foreground">{task.d}</span>
              </div>
            ))}
          </div>
          <button
            className="w-full h-7 mt-2 rounded-md text-[10px]"
            style={{ background: "var(--brand)", color: "var(--brand-foreground)" }}
          >
            + Add task
          </button>
        </div>
      </div>
    </div>
  );
}

function FormScene() {
  const [email, setEmail] = useState("not-an-email");
  const [pw, setPw] = useState("123");
  const emailValid = /\S+@\S+\.\S+/.test(email);
  const pwValid = pw.length >= 8;

  return (
    <form className="w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
      <h4 style={{ fontSize: "20px", fontWeight: 500 }}>Sign in</h4>
      <p className="text-[12px] text-muted-foreground mt-1 mb-5">Use your work email.</p>

      <Field
        label="Email"
        icon={<Mail size={14} />}
        value={email}
        onChange={setEmail}
        error={!emailValid ? "Enter a valid email." : undefined}
      />
      <Field
        label="Password"
        icon={<Lock size={14} />}
        type="password"
        value={pw}
        onChange={setPw}
        error={!pwValid ? "At least 8 characters." : undefined}
      />
      <button
        disabled={!emailValid || !pwValid}
        className="mt-2 w-full h-10 rounded-md text-[13px] disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ background: "var(--brand)", color: "var(--brand-foreground)" }}
      >
        Continue
      </button>
    </form>
  );
}

function Field({
  label,
  icon,
  value,
  onChange,
  error,
  type = "text",
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (s: string) => void;
  error?: string;
  type?: string;
}) {
  return (
    <div className="mb-3">
      <label className="block text-[12px] mb-1">{label}</label>
      <div
        className="relative h-10 rounded-md flex items-center"
        style={{
          background: "var(--input-background)",
          boxShadow: error ? "inset 0 0 0 1px var(--destructive)" : undefined,
        }}
      >
        <span className="absolute left-3 text-muted-foreground">{icon}</span>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent outline-none pl-9 pr-3 text-[13px]"
        />
      </div>
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[11px] text-destructive mt-1 flex items-center gap-1"
        >
          <AlertTriangle size={11} />
          {error}
        </motion.div>
      )}
    </div>
  );
}

function SettingsScene() {
  const [a, setA] = useState(true);
  const [b, setB] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | "auto">("auto");
  return (
    <div className="w-full max-w-sm">
      <h4 style={{ fontSize: "16px", fontWeight: 500 }}>Preferences</h4>
      <p className="text-[12px] text-muted-foreground mb-4">Update how Kairo behaves.</p>
      <div className="space-y-3">
        <Row label="Reduced motion" desc="Honor system preference">
          <Sw v={a} set={setA} />
        </Row>
        <Row label="Send weekly digest" desc="Every Monday">
          <Sw v={b} set={setB} />
        </Row>
        <Row label="Theme" desc="Sync to system">
          <div className="flex p-0.5 bg-accent rounded-md">
            {(["light", "dark", "auto"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className="relative text-[11px] px-2 py-0.5 rounded capitalize"
              >
                {theme === t && (
                  <motion.span
                    layoutId="theme-pill"
                    className="absolute inset-0 bg-background rounded shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{t}</span>
              </button>
            ))}
          </div>
        </Row>
      </div>
    </div>
  );
}

function Row({ label, desc, children }: { label: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-border last:border-0">
      <div>
        <div className="text-[13px]">{label}</div>
        <div className="text-[11px] text-muted-foreground">{desc}</div>
      </div>
      {children}
    </div>
  );
}

function Sw({ v, set }: { v: boolean; set: (b: boolean) => void }) {
  return (
    <button
      onClick={() => set(!v)}
      className="w-9 h-5 rounded-full relative transition-colors"
      style={{ background: v ? "var(--brand)" : "var(--switch-background)" }}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className="absolute top-0.5 w-4 h-4 rounded-full bg-background"
        style={{ left: v ? "calc(100% - 18px)" : "2px" }}
      />
    </button>
  );
}

function SearchScene() {
  const [q, setQ] = useState("design tokens for typography");
  return (
    <div className="w-full max-w-sm">
      <div className="relative h-10 rounded-md flex items-center bg-input-background mb-2">
        <Search size={14} className="absolute left-3 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full bg-transparent outline-none pl-9 pr-9 text-[13px]"
        />
        {q && (
          <button
            onClick={() => setQ("")}
            className="absolute right-3 text-muted-foreground hover:text-foreground"
          >
            <X size={13} />
          </button>
        )}
      </div>
      <div className="flex items-center gap-1.5 mb-4">
        <Filter size={11} className="text-muted-foreground" />
        {["Components", "Tokens", "Patterns"].map((f, i) => (
          <span
            key={f}
            className={`text-[11px] px-2 py-0.5 rounded-full border ${
              i === 0 ? "border-foreground bg-foreground text-background" : "border-border"
            }`}
          >
            {f}
          </span>
        ))}
      </div>
      <div className="border border-dashed border-border rounded-lg p-8 text-center">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mx-auto mb-3">
          <Search size={16} className="text-muted-foreground" />
        </div>
        <div style={{ fontSize: "14px", fontWeight: 500 }}>No matches</div>
        <p className="text-[12px] text-muted-foreground mt-1">
          Nothing for "{q.slice(0, 22)}{q.length > 22 ? "…" : ""}". Try a broader term.
        </p>
        <button className="mt-3 text-[12px] underline text-muted-foreground" onClick={() => setQ("")}>
          Clear search
        </button>
      </div>
    </div>
  );
}

function NotifScene() {
  const items = [
    { tone: "info", t: "New version available", d: "v0.9.2 ships motion tokens." },
    { tone: "success", t: "Tokens published", d: "12 semantic tokens added to color/feedback." },
    { tone: "warning", t: "Component drift detected", d: "Button.lg differs from spec by 2px." },
  ] as const;
  const tones: Record<string, { bg: string; fg: string }> = {
    info: { bg: "var(--info-soft)", fg: "var(--info)" },
    success: { bg: "var(--success-soft)", fg: "var(--success)" },
    warning: { bg: "var(--warning-soft)", fg: "var(--warning)" },
  };
  return (
    <div className="w-full max-w-md space-y-2">
      {items.map((it, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="flex items-start gap-3 p-3 rounded-md"
          style={{ background: tones[it.tone].bg, color: tones[it.tone].fg }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current mt-2" />
          <div className="flex-1">
            <div style={{ fontSize: "13px", fontWeight: 500 }}>{it.t}</div>
            <div className="text-[12px] opacity-80">{it.d}</div>
          </div>
          <span className="text-[10px] opacity-60">2m</span>
        </motion.div>
      ))}
    </div>
  );
}

function ProfileScene() {
  const team = [
    { n: "Deepak Maan", r: "Design lead", c: "DM", color: "var(--brand)" },
    { n: "Aria Khan", r: "Systems engineer", c: "AK", color: "var(--info)" },
    { n: "Rio Vega", r: "Brand", c: "RV", color: "var(--destructive)" },
  ];
  return (
    <div className="w-full max-w-md">
      <div className="flex items-center gap-3 mb-5">
        <span
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{ background: "var(--brand)", color: "var(--brand-foreground)", fontSize: "18px" }}
        >
          DM
        </span>
        <div>
          <div style={{ fontSize: "15px", fontWeight: 500 }}>Deepak Maan</div>
          <div className="text-[12px] text-muted-foreground">Design lead · Kairo team</div>
          <div className="flex items-center gap-1.5 mt-1.5">
            <span
              className="text-[10px] px-1.5 py-0.5 rounded"
              style={{ background: "var(--brand-soft)", color: "var(--brand)" }}
            >
              Owner
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded border border-border">v0.9</span>
          </div>
        </div>
      </div>
      <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-2">
        Team
      </div>
      <div className="space-y-1">
        {team.map((p) => (
          <div key={p.n} className="flex items-center gap-3 py-2 px-2 rounded hover:bg-accent">
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center text-[11px]"
              style={{ background: p.color, color: "white" }}
            >
              {p.c}
            </span>
            <div className="flex-1">
              <div className="text-[13px]">{p.n}</div>
              <div className="text-[11px] text-muted-foreground">{p.r}</div>
            </div>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--success)" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function EmptyScene() {
  return (
    <div className="text-center w-full max-w-xs">
      <motion.div
        animate={{ rotate: [0, -6, 6, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="relative w-16 h-16 mx-auto mb-4"
      >
        <span className="absolute inset-0 rounded-2xl bg-accent flex items-center justify-center">
          <Inbox size={22} className="text-muted-foreground" />
        </span>
      </motion.div>
      <h4 style={{ fontSize: "16px", fontWeight: 500 }}>Inbox zero</h4>
      <p className="text-[12px] text-muted-foreground mt-1.5">
        You're all caught up. Kairo will let you know when something needs your eye.
      </p>
      <button className="inline-flex items-center gap-1.5 h-8 px-3 mt-4 rounded-md border border-border text-[12px]">
        <Plus size={12} />
        Compose
      </button>
    </div>
  );
}
