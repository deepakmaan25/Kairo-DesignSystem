Create a visually refined, modern, interactive website that showcases and explores my design system. This is not a dashboard, docs portal, or sidebar-heavy component inventory. It should feel like an editorial product experience / immersive brand showcase for a design system — clean, minimal, premium, and genuinely fun to explore.

PRIMARY GOAL
Build a live website that uses my design system itself as the source of truth, so the website becomes both:
1. a showcase of the design system, and
2. a stress test of how complete and scalable the system really is.

The website should help someone understand:
- what the design system is,
- how it looks and feels,
- what tokens and foundations it uses,
- what components exist,
- how each component behaves across variants and states,
- where components should be used,
- what edge cases exist,
- and what may still be missing from the system.

OVERALL EXPERIENCE
The experience should feel more like a creative product story than a documentation dashboard.
Avoid a boring left-sidebar layout.
Avoid a typical SaaS docs feel.
Avoid generic 3-column feature sections and AI-looking gradient templates.

Aesthetic direction:
- clean, minimal, modern, high-end
- editorial + product design feel
- strong typography, elegant spacing, restrained color usage
- interaction-rich but still calm and precise
- motion should feel intentional, fluid, and premium
- one or two memorable moments per section, not chaos everywhere
- should feel interesting on first visit and useful on repeated visits

VISUAL LANGUAGE
Use the design system I created as the visual source:
- colors must come from the design system tokens
- typography must come from the system styles
- spacing, radius, elevation, and icon language should reflect the system
- components shown on the site should use my actual design system styling and behaviors

If any visual or interaction element is needed but does not exist in my design system, still include it if necessary, but clearly mark it as:
“Not yet defined in design system — candidate to add”
or
“Temporary website-only pattern — should be formalized into the system”

SITE STRUCTURE
Create a homepage-led storytelling experience with interactive sections. Suggested flow:

1. HERO / INTRO
- dramatic but restrained intro
- a strong title introducing the design system
- short subtext explaining its purpose and philosophy
- one visual centerpiece made from system elements, such as floating layered cards, token particles, animated component fragments, or a motion-based composition using the design system’s primitives
- CTA like “Explore the system” or “See components in motion”

2. FOUNDATIONS SECTION
- color system
- typography system
- spacing and grid
- elevation
- icon language
- motion principles if available
This should not be static swatch rows only.
Make this section interactive:
- hover reveals token names
- typography specimen changes size or role
- spacing scale can animate expansion/compression
- elevation can be shown through layered cards
- icon sizes / alignment examples can be interactively demonstrated

3. TOKEN ARCHITECTURE SECTION
- visually explain primitive → semantic → component mapping
- make the token flow intuitive, almost like a living diagram
- allow users to inspect example chains such as:
  color.blue.500 → color.action.primary → button.background.primary
- include light/dark mode semantic switching if supported
- show why semantic tokens matter for scalability

4. COMPONENT EXPLORATION SECTION
- this is the core of the site
- components should be shown in an exploratory, playful, premium way
- use cards, layered panels, horizontal scenes, scroll-triggered chapters, or modular stages
- for each component show:
  - name
  - purpose
  - anatomy
  - variants
  - states
  - property toggles
  - ideal use case
  - anti-pattern or misuse warning if useful

Components to feature:
- Alert
- Button
- Input Field
- Checkbox
- Radio Button
- Toggle / Switch
- Badge & Tag
- Avatar
- Tooltip
- Empty State Card

For each component, include interactive controls where possible:
- variant switch
- state switch
- size switch
- boolean toggles like icon on/off, helper text on/off, subtitle on/off, etc.
But make the controls feel integrated into the design, not like a developer playground UI.

5. BEHAVIOR / MOTION SECTION
- show how interactions feel, not just how they look
- demonstrate hover, focus, pressed, loading, disabled, and transition behaviors
- show microinteractions such as button press, toggle movement, tooltip reveal, input focus, alert dismissal
- if the design system lacks motion tokens or interaction rules, mark those as missing system definitions that should be added

6. USE CASE SCENES
Build a few realistic, composed mini-scenes using only the design system:
- form validation scene
- settings/preferences scene
- filter/search no-results scene
- notification / alert scene
- profile card / team member scene
- empty state with CTA scene
These should prove that the system works in combination, not just as isolated components.

7. EDGE CASE / STRESS TEST SECTION
This is important.
Explicitly test and show:
- long text labels
- multiline body copy
- missing avatar image fallback
- dense UI with multiple controls
- error + helper text
- disabled controls
- icon-only buttons
- loading states
- truncation behavior
- no data / no results / error empty states
- dark mode if supported
- mobile responsiveness
If any issue appears, annotate it visually as:
“Potential design system gap”
or
“Needs a new token / pattern / rule”

8. RESPONSIVE + THEME SECTION
- show how the system adapts across desktop and mobile
- if dark mode exists, demonstrate seamless switching
- if only light mode exists, mention dark mode as a future extension path

9. CLOSING SECTION
- summarize the philosophy of the system in a minimal way
- include a section like:
  “What this website revealed”
- list what the system already handles well
- list what should be added next

INTERACTION STYLE
Use motion intentionally:
- scroll-driven reveals without making the site feel gimmicky
- layered transitions
- opacity / mask / clip-path based reveals
- subtle hover elevation only on clickable elements
- smooth transitions between states
- one or two signature interaction moments that feel memorable
- no noisy parallax everywhere
- no random floating blobs
- no overuse of glow or gradients
- no animation that reduces readability

DESIGN QUALITY RULES
- avoid dashboard feel
- avoid left sidebar docs layout
- avoid repetitive feature cards
- avoid centered-everything SaaS template look
- avoid generic AI design aesthetics
- use asymmetry selectively
- use whitespace confidently
- make typography do most of the work
- keep surfaces mostly neutral and use accent color with restraint
- create rhythm through composition, not decoration

ACCESSIBILITY + CLARITY
- interactions should remain understandable
- text must remain readable
- keyboard and focus states should be visible
- motion should respect reduced-motion principles
- don’t sacrifice clarity for spectacle

ANNOTATION / GAP DETECTION
Whenever the website needs something not clearly defined by the current design system, surface it clearly in the output.
Examples:
- “Missing motion token”
- “No defined skeleton/loading pattern”
- “No responsive token for this spacing behavior”
- “No documented focus ring token”
- “Composite pattern not yet formalized”
This is important because the website should help evolve the design system, not just present it.

OUTPUT GOAL
The final result should feel like a beautifully designed interactive exhibition of the design system:
- memorable first impression
- educational while exploring
- useful for testing system completeness
- visually strong enough to include in a portfolio
- clearly built using the design system itself