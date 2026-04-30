Design and build a premium interactive website for my design system, Atlas/DS. This is not a docs dashboard and not a left-sidebar component inventory. It should feel like a modern editorial product experience and a motion-rich interactive exhibition of the design system.

GOAL
The website must do three things:
1. showcase the design system beautifully,
2. explain foundations, tokens, components, states, scenes, and edge cases,
3. prove the system can actually build real products.

The current version already has:
- Hero
- Foundations
- Tokens
- Component Lab
- Motion
- Scenes
- Edge Cases

Now improve it significantly.

IMPORTANT IMPROVEMENTS
- Hero must become more interactive, alive, and spatial.
- Reduce reliance on oversized text alone.
- Add motion, depth, and subtle 3D behavior.
- Component previews must feel richer and more immersive.
- Elevation previews must not be plain white blocks.
- States and variants must be shown more effectively.
- Add a “Build with Atlas/DS” experience so people can see the design system create something real.

VISUAL DIRECTION
- Minimal, premium, modern, clean
- Typography-led but not text-heavy
- Elegant white/light surfaces with restrained purple brand accent
- Use motion for clarity and delight
- Avoid generic AI gradients, blob backgrounds, or boring SaaS templates
- Use asymmetry selectively
- Make the site feel crafted and portfolio-worthy

HERO REDESIGN
Create a stronger hero section:
- Headline should still be bold and editorial, but slightly smaller and better balanced
- Surround it with floating design-system artifacts that are actually interactive
- Include subtle parallax, hover tilt, depth shifts, and layered motion
- Use a central artifact cluster made of real system components: card, button, toggle, avatar, alert, token swatch, input
- On hover or scroll, cards should react with lift, slight rotation, token glow, or rearrangement
- Include one signature interaction moment in the hero
- Add CTA buttons:
  - Explore the system
  - See it in motion
  - Build with Atlas/DS

FOUNDATIONS IMPROVEMENTS
Make foundations feel alive:
- Color should show role, hierarchy, and token usage, not only swatches
- Typography should preview dynamically on interaction
- Spacing should visibly compress and expand
- Elevation should use realistic UI artifacts like floating dropdown, popover, card, modal, sheet
- Add soft motion and depth to all foundations demos

TOKEN SECTION
- Make primitive → semantic → component flow more visual and interactive
- Let users click a token chain and see it update a live component
- If possible, show light/dark remapping
- Explain why semantic tokens matter

COMPONENT LAB IMPROVEMENTS
Every component preview should feel like a small stage, not a centered object in a big empty box.
For each component:
- show variants
- show states
- show anatomy
- show ideal use case
- show edge-case behavior where relevant
- use richer layout, framing, color, and micro-motion

Specifically improve:
- Buttons: hover, focus, loading, icon-only, press feedback
- Inputs: focus, error, filled, helper text, disabled
- Alert: animated entry and dismissal
- Tooltip: reveal timing and placement clarity
- Avatar: image, initials, icon fallback, status
- Empty state: illustration, stronger composition, more atmosphere

MOTION SECTION
Current motion section is too flat. Improve it by:
- showing motion tokens through actual animated comparisons
- making press/reveal/spring/exit more visual
- use toggles, floating surfaces, reveal cards, tooltip rise, state transitions
- include reduced-motion note if possible

SCENES SECTION
Keep the existing use-case scenes but make them more polished and slightly more realistic:
- form validation
- settings/preferences
- no results
- notification stack
- maybe add one dashboard widget scene
- maybe add one app/mobile card scene

EDGE CASES SECTION
Keep it, but make the previews more expressive and clearly legible.
Show:
- long labels
- multiline body
- avatar fallback
- dense controls
- loading without layout shift
- skeletons
- disabled controls
- icon-only with full target
- keyboard focus
- maybe responsive collapse or truncation in small widths

BUILD WITH ATLAS/DS
Add a new CTA next to the dark/light mode toggle in the top bar or near it:
- label: Build with Atlas/DS

Clicking it should open either a modal, panel, or new section/page where the user can try building something using the design system.

This flow should ask 2–3 questions:
1. What do you want to create?
   - dashboard
   - website
   - app
2. What tone should it have?
   - calm
   - bold
   - technical
   - editorial
3. What density should it use?
   - spacious
   - balanced
   - compact

Then show preview concepts generated from the design system:
- one dashboard preview
- one website preview
- one app preview

If full generation is not possible, create a convincing concept-selection flow with live previews and a strong sense that Atlas/DS can produce these outputs.
The goal is to show the design system in action.

SYSTEM GAP DETECTION
If this builder flow needs components or patterns not currently in the design system, include them but label them clearly as:
- Candidate to add to Atlas/DS
- Missing pattern
- Missing motion token
- Missing onboarding/template pattern
- Missing generator/loading state
This is important because the website should help improve the design system itself.

EXPERIENCE QUALITY
- Make it feel memorable and polished
- Avoid boring documentation layout
- Avoid empty white cards with centered text
- Avoid repetitive section structures
- Add more motion and subtle 3D depth
- Keep accessibility and clarity intact
- Maintain system consistency across everything