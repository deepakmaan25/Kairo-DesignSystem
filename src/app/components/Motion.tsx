import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

const principles = [
  { name: "press", curve: "cubic-bezier(0.4, 0, 0.2, 1)", duration: "120ms" },
  { name: "reveal", curve: "cubic-bezier(0.22, 1, 0.36, 1)", duration: "350ms" },
  { name: "spring", curve: "spring(380, 32)", duration: "physical" },
  { name: "exit", curve: "cubic-bezier(0.4, 0, 1, 1)", duration: "180ms" },
  { name: "directional", curve: "cubic-bezier(0.32, 0.72, 0, 1)", duration: "400ms" },
];

export function MotionSection() {
  const [pressed, setPressed] = useState(false);
  const [revealed, setRevealed] = useState(true);
  const [tooltip, setTooltip] = useState(false);
  const [sheet, setSheet] = useState(false);
  const [tab, setTab] = useState(0);

  return (
    <section id="motion" className="py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-8">
        <SectionHeader
          index="04"
          kicker="Behavior & Motion"
          title={
            <>
              How it <span className="italic font-normal" style={{ color: "var(--brand)" }}>feels.</span>
            </>
          }
          description="Motion is the system's voice. Confident on commit, soft on reveal, quiet on exit."
        />

        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 lg:col-span-5">
            <div className="space-y-3 mb-6">
              {principles.map((p) => (
                <div
                  key={p.name}
                  className="border border-border rounded-md p-4 flex items-center justify-between transition-colors hover:bg-accent/20"
                >
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 500 }} className="capitalize">
                      motion/{p.name}
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{p.curve}</div>
                  </div>
                  <span className="text-[11px] text-muted-foreground tabular-nums">{p.duration}</span>
                </div>
              ))}
            </div>
            
            <div className="border border-brand/20 bg-brand/5 rounded-md p-4 flex gap-3 relative">
               <div className="absolute -top-3 right-4 bg-background px-2 py-0.5 border border-border rounded text-[9px] uppercase tracking-widest text-muted-foreground shadow-sm">
                  Candidate to add to design system
               </div>
               <span className="w-1.5 h-1.5 rounded-full mt-1.5" style={{ background: "var(--brand)" }} />
               <div>
                  <div className="text-[12px] font-medium" style={{ color: "var(--brand)" }}>Reduced Motion</div>
                  <div className="text-[12px] text-muted-foreground mt-1">
                     The system respects `prefers-reduced-motion`. When active, springs are flattened and durations are set to `0ms`, falling back to simple opacities.
                  </div>
               </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-4">
            <Demo
              title="Press & Hover"
              description="Subtle scaling on interaction."
              preview={
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  onMouseDown={() => setPressed(true)}
                  onMouseUp={() => setPressed(false)}
                  onMouseLeave={() => setPressed(false)}
                  className="px-5 h-10 rounded-md text-[13px] shadow-sm"
                  style={{ background: "var(--brand)", color: "var(--brand-foreground)" }}
                >
                  Press me
                </motion.button>
              }
            />
            
            <Demo
              title="Directional Overlay"
              description="Sheets slide in, maintaining spatial logic."
              preview={
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden border border-border/50 rounded-md bg-accent/20">
                  <button
                    onClick={() => setSheet(true)}
                    className="text-[12px] underline"
                  >
                    Open sheet
                  </button>
                  <AnimatePresence>
                    {sheet && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-background/50 backdrop-blur-[2px]"
                        onClick={() => setSheet(false)}
                      >
                         <motion.div
                           initial={{ x: "100%" }}
                           animate={{ x: 0 }}
                           exit={{ x: "100%" }}
                           transition={{ type: "spring", damping: 26, stiffness: 260 }}
                           className="absolute right-0 top-0 bottom-0 w-2/3 bg-card border-l border-border p-4 shadow-lg flex flex-col"
                           onClick={e => e.stopPropagation()}
                         >
                            <div className="w-1/2 h-3 rounded bg-foreground/20 mb-4" />
                            <div className="w-full h-2 rounded bg-muted/20 mb-2" />
                            <div className="w-3/4 h-2 rounded bg-muted/20" />
                            <button onClick={() => setSheet(false)} className="mt-auto text-[10px] text-center border border-border py-1 rounded">Close</button>
                         </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              }
            />

            <Demo
              title="Tab Switch"
              description="A physical spring follows focus."
              preview={
                <div className="flex bg-accent/50 p-1 rounded-lg relative">
                  {["One", "Two", "Three"].map((t, i) => (
                    <button
                      key={t}
                      onClick={() => setTab(i)}
                      className="relative px-4 py-1.5 text-[12px] z-10 transition-colors"
                      style={{ color: tab === i ? "var(--foreground)" : "var(--muted-foreground)" }}
                    >
                      {t}
                      {tab === i && (
                        <motion.div
                          layoutId="active-tab"
                          className="absolute inset-0 bg-background rounded-md shadow-sm -z-10"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              }
            />

            <Demo
              title="Tooltip Reveal"
              description="A short delay, then a quiet rise."
              preview={
                <div className="relative">
                  <button
                    onMouseEnter={() => setTooltip(true)}
                    onMouseLeave={() => setTooltip(false)}
                    className="px-3 h-9 rounded-md border border-border text-[12px] transition-colors hover:bg-accent"
                  >
                    Hover me
                  </button>
                  <AnimatePresence>
                    {tooltip && (
                      <motion.span
                        initial={{ opacity: 0, y: 6, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-foreground text-background text-[11px] whitespace-nowrap shadow-md"
                      >
                        Token: motion/tooltip
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              }
            />
          </div>
        </div>

        <div className="border border-border rounded-xl p-8 bg-card flex flex-col md:flex-row gap-8 items-center">
           <div className="flex-1">
             <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-2">Comparison</div>
             <h4 style={{ fontSize: "20px", fontWeight: 500 }} className="mb-2">Abrupt vs. System Motion</h4>
             <p className="text-[13px] text-muted-foreground leading-relaxed">
               Without motion, interface state changes feel broken and jarring. The user's eye has to re-parse the screen. With Kairo's motion tokens, changes are continuous.
             </p>
           </div>
           <div className="w-full md:w-[400px] flex gap-4 justify-end">
              <AbruptVsSmooth />
           </div>
        </div>

      </div>
    </section>
  );
}

function AbruptVsSmooth() {
   const [open, setOpen] = useState(false);
   
   return (
      <div className="flex gap-4 w-full">
         <div className="flex-1 border border-border rounded-lg p-4 bg-background flex flex-col items-center justify-center min-h-[160px] gap-4">
            <div className="text-[10px] text-muted-foreground">Abrupt</div>
            <button onClick={() => setOpen(!open)} className="px-3 py-1.5 bg-accent rounded text-[12px]">Toggle</button>
            <div className="h-10 w-full flex items-center justify-center">
               {open ? <div className="w-full h-full bg-brand/20 border border-brand rounded text-[10px] flex items-center justify-center text-brand">Content</div> : null}
            </div>
         </div>
         
         <div className="flex-1 border border-border rounded-lg p-4 bg-background flex flex-col items-center justify-center min-h-[160px] gap-4">
            <div className="text-[10px] text-brand font-medium">System Motion</div>
            <button onClick={() => setOpen(!open)} className="px-3 py-1.5 bg-brand text-brand-foreground rounded text-[12px] hover:opacity-90 active:scale-95 transition-all">Toggle</button>
            <div className="h-10 w-full flex items-center justify-center relative">
               <AnimatePresence mode="wait">
                  {open ? (
                     <motion.div 
                        initial={{ opacity: 0, height: 0, scale: 0.9 }} 
                        animate={{ opacity: 1, height: "100%", scale: 1 }} 
                        exit={{ opacity: 0, height: 0, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="w-full bg-brand/20 border border-brand rounded flex items-center justify-center overflow-hidden"
                     >
                        <span className="text-[10px] text-brand">Content</span>
                     </motion.div>
                  ) : null}
               </AnimatePresence>
            </div>
         </div>
      </div>
   );
}

function Demo({
  title,
  description,
  preview,
}: {
  title: string;
  description: string;
  preview: React.ReactNode;
}) {
  return (
    <div className="border border-border rounded-md p-5 min-h-[160px] flex flex-col">
      <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-1">
        {title}
      </div>
      <p className="text-[12px] text-muted-foreground mb-4">{description}</p>
      <div className="flex-1 flex items-center justify-center">{preview}</div>
    </div>
  );
}

function SpringToggle() {
  const [v, setV] = useState(false);
  return (
    <button
      onClick={() => setV(!v)}
      className="w-12 h-6 rounded-full relative transition-colors"
      style={{ background: v ? "var(--brand)" : "var(--switch-background)" }}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
        className="absolute top-0.5 w-5 h-5 rounded-full bg-background"
        style={{ left: v ? "calc(100% - 22px)" : "2px" }}
      />
    </button>
  );
}
