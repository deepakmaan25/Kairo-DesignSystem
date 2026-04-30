import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  Check,
  X,
  Info,
  AlertTriangle,
  CheckCircle2,
  Mail,
  Search,
  Eye,
  EyeOff,
  Inbox,
  Plus,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const components = [
  "Button",
  "Input",
  "Checkbox",
  "Radio",
  "Switch",
  "Badge",
  "Avatar",
  "Tooltip",
  "Alert",
  "Empty State",
];

export function ComponentLab() {
  const [active, setActive] = useState("Button");

  return (
    <section id="lab" className="py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-8">
        <SectionHeader
          index="03"
          kicker="Component Lab"
          title={
            <>
              Ten primitives,
              <br />
              <span className="italic font-normal" style={{ color: "var(--brand)" }}>
                everything else.
              </span>
            </>
          }
          description="Browse each component with its variants and states. Tweak the controls to see how it behaves."
        />

        <div className="sticky top-16 z-30 -mx-2 mb-8 backdrop-blur-xl bg-background/80 border-y border-border">
          <div className="overflow-x-auto px-2">
            <div className="flex gap-1 py-2 min-w-max">
              {components.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className="relative px-4 py-2 rounded-md text-[13px] whitespace-nowrap transition-colors"
                >
                  {active === c && (
                    <motion.span
                      layoutId="lab-pill"
                      className="absolute inset-0 rounded-md"
                      style={{ background: "var(--brand-soft)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span
                    className="relative"
                    style={{
                      color: active === c ? "var(--brand)" : undefined,
                    }}
                  >
                    <span className={active !== c ? "text-muted-foreground hover:text-foreground" : ""}>
                      {c}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {active === "Button" && <ButtonLab />}
            {active === "Input" && <InputLab />}
            {active === "Checkbox" && <CheckboxLab />}
            {active === "Radio" && <RadioLab />}
            {active === "Switch" && <SwitchLab />}
            {active === "Badge" && <BadgeLab />}
            {active === "Avatar" && <AvatarLab />}
            {active === "Tooltip" && <TooltipLab />}
            {active === "Alert" && <AlertLab />}
            {active === "Empty State" && <EmptyStateLab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ---------- shared layout ---------- */

function LabFrame({
  title,
  purpose,
  use,
  avoid,
  controls,
  preview,
  notes,
}: {
  title: string;
  purpose: string;
  use: string;
  avoid: string;
  controls: React.ReactNode;
  preview: React.ReactNode;
  notes?: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-4 space-y-6">
        <div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
            Component
          </div>
          <h3 style={{ fontSize: "32px", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            {title}
          </h3>
          <p className="text-[14px] text-muted-foreground mt-3 leading-relaxed">{purpose}</p>
        </div>

        <div className="space-y-3">
          <Note tone="ok" label="Use when" body={use} />
          <Note tone="warn" label="Avoid when" body={avoid} />
        </div>

        <div className="border-t border-border pt-5">
          <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Controls
          </div>
          <div className="space-y-3">{controls}</div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-8">
        <div
          className="border border-border rounded-lg bg-card relative overflow-hidden min-h-[420px]"
          style={{ boxShadow: "var(--shadow-floating)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.5] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              maskImage: "radial-gradient(circle at center, black, transparent 80%)",
            }}
          />
          <div className="relative p-12 flex items-center justify-center min-h-[420px]">
            {preview}
          </div>
        </div>
        {notes && <div className="mt-4">{notes}</div>}
      </div>
    </div>
  );
}

function Note({ tone, label, body }: { tone: "ok" | "warn"; label: string; body: string }) {
  return (
    <div className="border border-border rounded-md p-3">
      <div className="flex items-center gap-2 mb-1">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: tone === "ok" ? "#16a34a" : "var(--destructive)" }}
        />
        <span className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{label}</span>
      </div>
      <p className="text-[13px] leading-relaxed">{body}</p>
    </div>
  );
}

function Toggle({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!value)}
      className="w-full flex items-center justify-between text-[13px] py-1"
    >
      <span className="text-muted-foreground">{label}</span>
      <span
        className={`w-9 h-5 rounded-full relative transition-colors ${
          value ? "bg-foreground" : "bg-switch-background"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 500, damping: 32 }}
          className="absolute top-0.5 w-4 h-4 rounded-full bg-background"
          style={{ left: value ? "calc(100% - 18px)" : "2px" }}
        />
      </span>
    </button>
  );
}

function Segmented<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div>
      <div className="text-[11px] text-muted-foreground mb-1.5">{label}</div>
      <div className="flex p-0.5 bg-accent rounded-md">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className="relative flex-1 text-[12px] px-2 py-1 rounded capitalize"
          >
            {value === o && (
              <motion.span
                layoutId={`seg-${label}`}
                className="absolute inset-0 bg-background rounded shadow-sm"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative">{o}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- Button ---------- */

function ButtonLab() {
  const [variant, setVariant] = useState<"primary" | "secondary" | "ghost" | "destructive">("primary");
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [icon, setIcon] = useState(true);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const sizes = { sm: "h-8 px-3 text-[12px]", md: "h-10 px-4 text-[13px]", lg: "h-12 px-5 text-[14px]" };
  const styles: Record<string, React.CSSProperties> = {
    primary: { background: "var(--brand)", color: "var(--brand-foreground)" },
    secondary: { background: "var(--secondary)", color: "var(--secondary-foreground)" },
    ghost: { background: "transparent" },
    destructive: { background: "var(--destructive)", color: "var(--destructive-foreground)" },
  };

  return (
    <LabFrame
      title="Button"
      purpose="The moment the user commits. Keep them rare, keep them clear."
      use="A primary, single action in a flow."
      avoid="Page navigation. Use a link instead."
      controls={
        <>
          <Segmented
            label="Variant"
            options={["primary", "secondary", "ghost", "destructive"] as const}
            value={variant}
            onChange={setVariant}
          />
          <Segmented label="Size" options={["sm", "md", "lg"] as const} value={size} onChange={setSize} />
          <Toggle label="Icon" value={icon} onChange={setIcon} />
          <Toggle label="Loading" value={loading} onChange={setLoading} />
          <Toggle label="Disabled" value={disabled} onChange={setDisabled} />
        </>
      }
      preview={
        <div className="w-full flex flex-col gap-10">
           {/* Interactive preview */}
           <div className="flex flex-col items-center gap-4 py-4 border-b border-border/40">
             <div className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground w-full text-center">Interactive Builder</div>
             <motion.button
               whileTap={{ scale: 0.97 }}
               disabled={disabled || loading}
               style={styles[variant]}
               className={`inline-flex items-center gap-2 rounded-md transition hover:opacity-90 ${sizes[size]} ${
                 variant === "ghost" ? "hover:bg-accent" : ""
               } ${disabled || loading ? "opacity-50 cursor-not-allowed" : ""}`}
             >
               {loading && (
                 <motion.span
                   animate={{ rotate: 360 }}
                   transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
                   className="w-3.5 h-3.5 rounded-full border-2 border-current border-r-transparent"
                 />
               )}
               {!loading && icon && <Check size={14} />}
               Save changes
             </motion.button>
           </div>
           
           {/* State grid */}
           <div className="grid grid-cols-2 gap-x-8 gap-y-6 px-4">
              <div className="flex flex-col gap-2">
                 <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Primary & Secondary</span>
                 <div className="flex items-center gap-2">
                    <button className="h-8 px-3 text-[12px] rounded bg-brand text-brand-foreground hover:opacity-90">Confirm</button>
                    <button className="h-8 px-3 text-[12px] rounded bg-secondary text-secondary-foreground hover:opacity-90">Cancel</button>
                 </div>
              </div>
              <div className="flex flex-col gap-2">
                 <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Destructive Action</span>
                 <div className="flex items-center gap-2">
                    <button className="h-8 px-3 text-[12px] rounded bg-destructive text-destructive-foreground hover:opacity-90 flex items-center gap-1.5"><AlertTriangle size={12} /> Delete Project</button>
                 </div>
              </div>
              <div className="flex flex-col gap-2">
                 <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Loading State</span>
                 <div className="flex items-center gap-2">
                    <button className="h-8 px-3 text-[12px] rounded bg-brand text-brand-foreground opacity-70 cursor-wait flex items-center gap-2">
                       <span className="w-3 h-3 rounded-full border-2 border-current border-r-transparent animate-spin" /> Processing
                    </button>
                 </div>
              </div>
              <div className="flex flex-col gap-2">
                 <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Disabled State</span>
                 <div className="flex items-center gap-2">
                    <button className="h-8 px-3 text-[12px] rounded bg-brand text-brand-foreground opacity-40 cursor-not-allowed">Submit</button>
                    <button className="h-8 px-3 text-[12px] rounded border border-border text-muted-foreground opacity-50 cursor-not-allowed">Back</button>
                 </div>
              </div>
           </div>
        </div>
      }
    />
  );
}

/* ---------- Input ---------- */

function InputLab() {
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [helper, setHelper] = useState(true);
  const [error, setError] = useState(false);
  const [icon, setIcon] = useState(true);
  const [reveal, setReveal] = useState(false);
  const [val, setVal] = useState("");

  const sizes = { sm: "h-8 text-[12px]", md: "h-10 text-[13px]", lg: "h-12 text-[14px]" };

  return (
    <LabFrame
      title="Input Field"
      purpose="Captures a single piece of structured input. Label, helper, and error work as a unit."
      use="Capturing text, email, or a password."
      avoid="Multi-line content or list selection."
      controls={
        <>
          <Segmented label="Size" options={["sm", "md", "lg"] as const} value={size} onChange={setSize} />
          <Toggle label="Leading icon" value={icon} onChange={setIcon} />
          <Toggle label="Helper text" value={helper} onChange={setHelper} />
          <Toggle label="Error state" value={error} onChange={setError} />
        </>
      }
      preview={
        <div className="w-full flex flex-col gap-10 max-w-lg">
           <div className="flex flex-col items-center gap-4 py-4 border-b border-border/40">
             <div className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground w-full text-center">Interactive Builder</div>
             <div className="w-full max-w-sm">
               <label className="block text-[13px] mb-1.5 font-medium">Email address</label>
               <div
                 className={`relative flex items-center rounded-md transition-all border border-border/40 focus-within:border-brand focus-within:ring-1 focus-within:ring-brand/20 bg-background ${sizes[size]}`}
                 style={{
                   borderColor: error ? "var(--destructive)" : undefined,
                   boxShadow: error ? "0 0 0 1px var(--destructive)" : undefined,
                 }}
               >
                 {icon && <Mail size={14} className="absolute left-3 text-muted-foreground" />}
                 <input
                   value={val}
                   onChange={(e) => setVal(e.target.value)}
                   placeholder="you@kairo.io"
                   type={reveal ? "text" : "email"}
                   className={`w-full bg-transparent outline-none ${icon ? "pl-9" : "pl-3"} pr-10`}
                   style={{ height: "100%" }}
                 />
                 <button
                   type="button"
                   onClick={() => setReveal(!reveal)}
                   className="absolute right-2.5 text-muted-foreground hover:text-foreground"
                 >
                   {reveal ? <EyeOff size={14} /> : <Eye size={14} />}
                 </button>
               </div>
               {helper && (
                 <motion.div
                   initial={{ opacity: 0, y: -4 }}
                   animate={{ opacity: 1, y: 0 }}
                   className={`text-[12px] mt-1.5 ${error ? "text-destructive" : "text-muted-foreground"}`}
                 >
                   {error ? "Please enter a valid email." : "We'll never share your address."}
                 </motion.div>
               )}
             </div>
           </div>
           
           <div className="grid grid-cols-2 gap-x-8 gap-y-6 px-4">
              <div className="flex flex-col gap-2">
                 <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Default</span>
                 <div className="h-9 px-3 border border-border/40 rounded bg-background flex items-center text-[12px] text-muted-foreground">
                    Placeholder...
                 </div>
              </div>
              <div className="flex flex-col gap-2">
                 <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Focused</span>
                 <div className="h-9 px-3 border border-brand ring-1 ring-brand/20 rounded bg-background flex items-center text-[12px] text-foreground">
                    Typing...<span className="w-px h-4 bg-brand ml-0.5 animate-pulse" />
                 </div>
              </div>
              <div className="flex flex-col gap-2">
                 <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Error</span>
                 <div className="h-9 px-3 border border-destructive shadow-[0_0_0_1px_var(--destructive)] rounded bg-danger-soft/10 flex items-center text-[12px] text-foreground">
                    invalid-email
                 </div>
                 <span className="text-[10px] text-destructive flex items-center gap-1 mt-1"><AlertTriangle size={10} /> Check format</span>
              </div>
              <div className="flex flex-col gap-2">
                 <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Disabled</span>
                 <div className="h-9 px-3 border border-border/40 rounded bg-accent/30 flex items-center text-[12px] text-muted-foreground opacity-60">
                    Not editable
                 </div>
              </div>
           </div>
        </div>
      }
    />
  );
}

/* ---------- Checkbox ---------- */

function CheckboxLab() {
  const [items, setItems] = useState([
    { id: 1, label: "Use semantic color tokens", checked: true },
    { id: 2, label: "Document anti-patterns", checked: true },
    { id: 3, label: "Add motion easing tokens", checked: false },
    { id: 4, label: "Define focus ring rule", checked: false },
  ]);

  return (
    <LabFrame
      title="Checkbox"
      purpose="An independent binary choice. Multiple may be true at once."
      use="Selecting one or more from a list."
      avoid="Exclusive choices (use Radio). On/off settings (use Switch)."
      controls={
        <div className="text-[12px] text-muted-foreground leading-relaxed">
          Tap any row to toggle.
        </div>
      }
      preview={
        <div className="space-y-2 w-full max-w-sm">
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() =>
                setItems((s) => s.map((x) => (x.id === it.id ? { ...x, checked: !x.checked } : x)))
              }
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-accent text-left"
            >
              <span
                className="w-[18px] h-[18px] rounded-[5px] flex items-center justify-center transition-colors"
                style={{
                  background: it.checked ? "var(--brand)" : "var(--background)",
                  boxShadow: it.checked
                    ? "none"
                    : "inset 0 0 0 1.5px var(--switch-background)",
                }}
              >
                <AnimatePresence>
                  {it.checked && (
                    <motion.span
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 28 }}
                    >
                      <Check size={12} style={{ color: "var(--brand-foreground)" }} strokeWidth={3} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
              <span className="text-[13px]">{it.label}</span>
            </button>
          ))}
        </div>
      }
    />
  );
}

/* ---------- Radio ---------- */

function RadioLab() {
  const [value, setValue] = useState("comfortable");
  const opts = [
    { v: "compact", t: "Compact", d: "Higher density, less breathing room" },
    { v: "comfortable", t: "Comfortable", d: "Balanced. The default." },
    { v: "spacious", t: "Spacious", d: "Editorial. More whitespace." },
  ];
  return (
    <LabFrame
      title="Radio"
      purpose="Exactly one option from a small set. Visible and comparable."
      use="2 to 5 mutually exclusive options."
      avoid="Two options (use Switch). Many options (use Select)."
      controls={
        <div className="text-[12px] text-muted-foreground leading-relaxed">
          Tap a row to select.
        </div>
      }
      preview={
        <div className="w-full max-w-md space-y-2">
          {opts.map((o) => (
            <button
              key={o.v}
              onClick={() => setValue(o.v)}
              className="w-full flex items-start gap-3 p-4 rounded-md border text-left transition-colors"
              style={{
                borderColor: value === o.v ? "var(--brand)" : "var(--border)",
                background: value === o.v ? "var(--brand-soft)" : "transparent",
              }}
            >
              <span
                className="w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center mt-0.5"
                style={{ borderColor: value === o.v ? "var(--brand)" : "var(--switch-background)" }}
              >
                {value === o.v && (
                  <motion.span
                    layoutId="radio-dot"
                    className="w-2 h-2 rounded-full"
                    style={{ background: "var(--brand)" }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </span>
              <span>
                <span className="block text-[13px]">{o.t}</span>
                <span className="block text-[12px] text-muted-foreground mt-0.5">{o.d}</span>
              </span>
            </button>
          ))}
        </div>
      }
    />
  );
}

/* ---------- Switch ---------- */

function SwitchLab() {
  const [a, setA] = useState(true);
  const [b, setB] = useState(false);
  const [c, setC] = useState(true);
  return (
    <LabFrame
      title="Switch"
      purpose="A persistent toggle. Takes effect immediately."
      use="Turning a setting on or off."
      avoid="Inside a form that submits later (use Checkbox)."
      controls={
        <div className="text-[12px] text-muted-foreground leading-relaxed">
          A soft spring gives immediate feedback.
        </div>
      }
      preview={
        <div className="w-full max-w-md space-y-1">
          {[
            { label: "Email notifications", desc: "Get product updates", v: a, set: setA },
            { label: "Auto-save drafts", desc: "Save every 30 seconds", v: b, set: setB },
            { label: "Reduce motion", desc: "Honor system preference", v: c, set: setC },
          ].map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between py-3 px-4 rounded-md hover:bg-accent/40"
            >
              <div>
                <div className="text-[13px]">{row.label}</div>
                <div className="text-[12px] text-muted-foreground">{row.desc}</div>
              </div>
              <button
                onClick={() => row.set(!row.v)}
                className="w-11 h-[22px] rounded-full relative transition-colors"
                style={{ background: row.v ? "var(--brand)" : "var(--switch-background)" }}
              >
                <motion.span
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 32 }}
                  className="absolute top-0.5 w-[18px] h-[18px] rounded-full bg-background shadow-sm"
                  style={{ left: row.v ? "calc(100% - 20px)" : "2px" }}
                />
              </button>
            </div>
          ))}
        </div>
      }
    />
  );
}

/* ---------- Badge ---------- */

function BadgeLab() {
  const variants: { v: string; style: React.CSSProperties }[] = [
    { v: "neutral", style: { background: "var(--accent)", color: "var(--foreground)" } },
    { v: "brand", style: { background: "var(--brand-soft)", color: "var(--brand)" } },
    { v: "success", style: { background: "var(--success-soft)", color: "var(--success)" } },
    { v: "warning", style: { background: "var(--warning-soft)", color: "var(--warning)" } },
    { v: "info", style: { background: "var(--info-soft)", color: "var(--info)" } },
    { v: "danger", style: { background: "var(--danger-soft)", color: "var(--destructive)" } },
  ];
  return (
    <LabFrame
      title="Badge & Tag"
      purpose="A small label that qualifies the thing next to it."
      use="Status, counts, or short metadata."
      avoid="Long text or calls to action."
      controls={
        <div className="text-[12px] text-muted-foreground leading-relaxed">
          Six tones cover the system's status vocabulary.
        </div>
      }
      preview={
        <div className="flex flex-wrap items-center gap-2 max-w-md justify-center">
          {variants.map((v) => (
            <span
              key={v.v}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] capitalize"
              style={v.style}
            >
              <span className="w-1 h-1 rounded-full bg-current" />
              {v.v}
            </span>
          ))}
        </div>
      }
    />
  );
}

/* ---------- Avatar ---------- */

function AvatarLab() {
  const people = [
    { n: "Deepak Maan", c: "DM", color: "var(--brand)" },
    { n: "Aria Khan", c: "AK", color: "var(--info)" },
    { n: "Rio Vega", c: "RV", color: "var(--destructive)" },
    { n: "Sun Park", c: "SP", color: "var(--success)" },
    { n: "Unknown", c: "?", color: "var(--muted)" },
  ];
  return (
    <LabFrame
      title="Avatar"
      purpose="A person, identifiable at a glance. Image first, initials when missing."
      use="Presence, ownership, comments, mentions."
      avoid="Decoration. Avatars stand for real people."
      controls={
        <div className="text-[12px] text-muted-foreground leading-relaxed">
          Stack uses a 2px ring that matches the surface. Last item shows the
          fallback when an image is missing.
        </div>
      }
      preview={
        <div className="flex flex-col items-center gap-8">
          <div className="flex -space-x-3">
            {people.map((p, i) => (
              <motion.span
                key={i}
                whileHover={{ y: -4, zIndex: 10 }}
                className="w-12 h-12 rounded-full flex items-center justify-center text-[13px] ring-2 ring-card"
                style={{ background: p.color, color: i === 4 ? "var(--muted-foreground)" : "white" }}
              >
                {p.c}
              </motion.span>
            ))}
          </div>
          <div className="flex items-end gap-3">
            {[24, 32, 40, 56, 72].map((s) => (
              <span
                key={s}
                className="rounded-full flex items-center justify-center"
                style={{ width: s, height: s, fontSize: s / 3, background: "var(--brand)", color: "var(--brand-foreground)" }}
              >
                DM
              </span>
            ))}
          </div>
        </div>
      }
    />
  );
}

/* ---------- Tooltip ---------- */

function TooltipLab() {
  const [open, setOpen] = useState<string | null>("save");
  const items = [
    { id: "save", label: "Save", icon: <Check size={14} />, tip: "Save (⌘S)" },
    { id: "search", label: "Search", icon: <Search size={14} />, tip: "Search this page" },
    { id: "info", label: "Info", icon: <Info size={14} />, tip: "View details" },
    { id: "add", label: "Add", icon: <Plus size={14} />, tip: "Add new item" },
  ];
  return (
    <LabFrame
      title="Tooltip"
      purpose="A hover hint. Confirms, never carries critical content."
      use="Icon-only buttons, abbreviations, shortcuts."
      avoid="Anything required to use the UI."
      controls={
        <div className="text-[12px] text-muted-foreground leading-relaxed">
          Hover an icon to reveal.
        </div>
      }
      preview={
        <div className="flex items-center gap-2">
          {items.map((it) => (
            <div key={it.id} className="relative">
              <button
                onMouseEnter={() => setOpen(it.id)}
                onMouseLeave={() => setOpen(null)}
                className="w-10 h-10 rounded-md border border-border hover:bg-accent flex items-center justify-center"
              >
                {it.icon}
              </button>
              <AnimatePresence>
                {open === it.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-foreground text-background text-[11px] whitespace-nowrap"
                  >
                    {it.tip}
                    <span
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-foreground"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      }
    />
  );
}

/* ---------- Alert ---------- */

function AlertLab() {
  const [tone, setTone] = useState<"info" | "success" | "warning" | "error">("info");
  const [closable, setClosable] = useState(true);
  const [visible, setVisible] = useState(true);
  const tones = {
    info: { bg: "var(--info-soft)", fg: "var(--info)", icon: <Info size={16} />, title: "Heads up", desc: "Tokens updated. Components using them will pick up the new values." },
    success: {
      bg: "var(--success-soft)",
      fg: "var(--success)",
      icon: <CheckCircle2 size={16} />,
      title: "Saved successfully",
      desc: "Your changes have been safely stored to the main branch."
    },
    warning: {
      bg: "var(--warning-soft)",
      fg: "var(--warning)",
      icon: <AlertTriangle size={16} />,
      title: "Review before continuing",
      desc: "Changing this setting may break components currently in use."
    },
    error: {
      bg: "var(--danger-soft)",
      fg: "var(--destructive)",
      icon: <AlertTriangle size={16} />,
      title: "Something went wrong",
      desc: "We couldn't connect to the server. Please try again later."
    },
  };
  const t = tones[tone];

  return (
    <LabFrame
      title="Alert"
      purpose="A system message. Calm by default, louder only when correctness is at stake."
      use="Confirming, warning, or recovering."
      avoid="Onboarding tips and marketing."
      controls={
        <>
          <Segmented label="Tone" options={["info", "success", "warning", "error"] as const} value={tone} onChange={(v) => { setTone(v); setVisible(true); }} />
          <Toggle label="Dismissible" value={closable} onChange={setClosable} />
          <button
            onClick={() => setVisible(true)}
            className="w-full h-9 rounded-md border border-border text-[12px] hover:bg-accent"
          >
            Replay alert
          </button>
        </>
      }
      preview={
        <div className="w-full flex flex-col gap-10 max-w-lg">
           <div className="flex flex-col items-center gap-4 py-4 border-b border-border/40 min-h-[140px] justify-center">
             <div className="w-full">
               <AnimatePresence>
                 {visible && (
                   <motion.div
                     initial={{ opacity: 0, y: -8, scale: 0.98 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
                     transition={{ type: "spring", stiffness: 380, damping: 30 }}
                     className="flex items-start gap-3 p-4 rounded-lg"
                     style={{ background: t.bg, color: t.fg }}
                   >
                     <span className="mt-0.5">{t.icon}</span>
                     <div className="flex-1">
                       <div style={{ fontSize: "13px", fontWeight: 500 }}>{t.title}</div>
                       <div className="text-[12px] mt-1 opacity-80">
                         {t.desc}
                       </div>
                     </div>
                     {closable && (
                       <button
                         onClick={() => setVisible(false)}
                         className="opacity-60 hover:opacity-100 hover:bg-black/5 active:bg-black/10 p-1 rounded transition-colors"
                       >
                         <X size={14} />
                       </button>
                     )}
                   </motion.div>
                 )}
               </AnimatePresence>
               {!visible && (
                  <div className="text-center py-4">
                     <span className="text-[12px] text-muted-foreground italic">Alert dismissed.</span>
                  </div>
               )}
             </div>
           </div>
           
           <div className="grid grid-cols-1 gap-4 px-4">
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Tone Vocabulary</span>
              {Object.entries(tones).map(([key, val]) => (
                 <div key={key} className="flex items-center gap-3 p-3 rounded-md" style={{ background: val.bg, color: val.fg }}>
                    {val.icon}
                    <span className="text-[13px] font-medium capitalize">{key}</span>
                 </div>
              ))}
           </div>
        </div>
      }
    />
  );
}

/* ---------- Empty State ---------- */

function EmptyStateLab() {
  return (
    <LabFrame
      title="Empty State"
      purpose="The first impression of a feature before it has data."
      use="No results, new accounts, error recoveries."
      avoid="Vague filler text. Always pair it with a next step."
      controls={
        <div className="text-[12px] text-muted-foreground leading-relaxed">
          Illustration is built from system primitives so it adapts to any theme.
        </div>
      }
      preview={
        <div className="text-center max-w-sm">
          <div className="relative w-20 h-20 mx-auto mb-5">
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute inset-0 rounded-2xl flex items-center justify-center"
              style={{ background: "var(--brand-soft)" }}
            >
              <Inbox size={28} style={{ color: "var(--brand)" }} />
            </motion.span>
            <span
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full"
              style={{ background: "var(--brand)" }}
            />
          </div>
          <h4 style={{ fontSize: "18px", fontWeight: 500 }}>No projects yet</h4>
          <p className="text-[13px] text-muted-foreground mt-2">
            Start one and Kairo will track its tokens automatically.
          </p>
          <button
            className="inline-flex items-center gap-1.5 h-9 px-4 mt-5 rounded-md text-[13px]"
            style={{ background: "var(--brand)", color: "var(--brand-foreground)" }}
          >
            <Plus size={14} />
            New project
          </button>
        </div>
      }
    />
  );
}
