Refine and upgrade my existing design system showcase website into a more polished, accessible, discoverable, and premium interactive experience.

CONTEXT
This website is not a government service portal. It is an interactive design system showcase and exploration site built from my own design system. The purpose is to:
1. present the design system in a visually compelling way,
2. allow users to browse and understand foundations, tokens, components, states, and use cases,
3. test the strength and completeness of the design system in a real implementation,
4. expose missing patterns or edge cases that should be added back into the design system.

The current website already performs well technically, but an audit identified important issues to fix:
- some buttons do not have accessible names
- some form elements do not have associated labels
- some text/background combinations may have insufficient contrast
- heading levels are not fully sequential and semantic
- there is no visible search or findability mechanism
- CTA labels could be clearer
- footer/trust/documentation structure can be improved
- the page may be blocked from indexing
These issues must be solved properly without making the site boring, generic, or dashboard-like.

PRIMARY GOAL
Create a next-level version of the website that:
- preserves the clean, minimal, modern, interactive identity
- improves accessibility and semantics significantly
- makes exploration easier and more intentional
- feels more complete as a product, not just a visual showcase
- remains elegant, premium, and portfolio-worthy
- clearly demonstrates design system thinking, implementation quality, and interface craftsmanship

OVERALL DESIGN DIRECTION
Keep the experience editorial, immersive, and interactive.
Do NOT turn it into a docs dashboard with a left sidebar.
Do NOT make it look like a government portal.
Do NOT make it feel like a generic SaaS template or a standard component library page.
It should still feel like a design-led website, but now with stronger clarity, accessibility, and usability.

Aesthetic goals:
- modern, minimal, high-end
- strong typography and clear hierarchy
- generous whitespace
- neutral surfaces with controlled accent usage
- precise motion, not flashy animation overload
- layered, immersive, but still readable and usable
- more productized and trustworthy than before

MANDATORY IMPROVEMENTS

1. ACCESSIBILITY + SEMANTICS
Implement real accessibility improvements throughout the site:
- every button must have an accessible name
- every icon-only button must have aria-label text
- every form control and interactive playground input must have associated labels
- add a visible skip-to-content link
- ensure visible keyboard focus states on all interactive elements
- support keyboard navigation properly
- maintain proper semantic structure using header, nav, main, section, article, footer where appropriate
- ensure heading hierarchy is sequential and logical: one h1, then proper h2/h3 structure
- ensure interactive states are not communicated by color alone
- respect reduced motion preferences
- maintain minimum touch target sizes where relevant

2. CONTRAST + READABILITY
Improve readability without losing aesthetic quality:
- increase minimum text size where needed
- audit secondary and muted text usage
- fix any low-contrast foreground/background combinations
- ensure body text is comfortably readable
- ensure labels, helper text, captions, and secondary content still remain legible
- preserve the visual tone while meeting accessibility expectations
- use the design system’s semantic color logic wherever possible

3. SEARCH + DISCOVERABILITY
Add a refined search or discovery feature suitable for a design system exploration site:
- include a search trigger in the header or as a floating command palette entry point
- search should help users jump to components, tokens, sections, and use cases
- it should feel elegant and integrated, not like a clunky utility overlay
- optional: use a command palette style interaction
- search results should help users navigate quickly across the showcase

4. STRONGER INFORMATION ARCHITECTURE
Improve the structure of the content to make exploration more intuitive:
- refine section hierarchy
- ensure each section has a clear purpose and entry point
- make transitions between sections feel intentional
- add subtle navigation aids without turning it into a dashboard
- consider a floating section indicator, progress rail, or elegant jump links
- allow users to understand where they are within the site

5. CLEARER CTAs
Rewrite CTA labels to be clearer and more useful:
- avoid vague or abstract product language where clarity matters
- use labels such as Explore Components, View Tokens, See States, Open Playground, Test Variants, Browse Foundations, Inspect Behavior
- make CTAs visually prominent but still aligned with the restrained aesthetic
- each major section should have one obvious next action

6. FOOTER + TRUST LAYER
Upgrade the footer and bottom-of-page structure so the site feels more complete and intentional:
- include sitemap or quick links
- include contact or profile/project ownership details
- include accessibility statement link or note
- include version / release tag for the design system if appropriate
- include last updated date
- include a short note about what the site is for
- make the footer useful and elegant, not just decorative

7. SEO + SHAREABILITY
Improve public discoverability without compromising the design:
- make sure the page is indexable if this project is intended to be public
- ensure title and meta description are meaningful
- create clearer page and section naming
- improve semantic document structure for search and screen readers
- make the page feel portfolio-ready and shareable

NEXT-LEVEL IMPROVEMENTS
Do not stop after fixing the audit. Also elevate the website meaningfully.

A. CREATE A BETTER EXPLORATION LAYER
Make the website feel more like a premium design system product:
- add an inspect mode or reveal interactions for components
- allow sections to expose anatomy, variants, and states elegantly
- consider hover/tap interactions that reveal usage notes or token references
- integrate playground-like controls in a visually refined way
- keep interactivity discoverable and delightful

B. ADD REAL EDGE-CASE TESTING
Use the site to stress-test the design system, not just display it:
- show long labels
- show multiline content
- show loading states
- show disabled states
- show error states
- show empty states
- show truncation behavior
- show missing image/avatar fallback
- show mobile stacking behavior
- show dark mode switching if available
Wherever the design system lacks a formal rule for these, annotate them as:
“Potential design system gap”
or
“Needs formalization in system”

C. ENHANCE MICROINTERACTIONS
Use refined motion and behavior to increase quality:
- smooth enter/reveal transitions
- polished hover and pressed states
- component state transitions that feel premium
- tooltip, toggle, button, and input behavior should feel tactile and intentional
- motion should clarify behavior, not distract
- include reduced-motion fallback behavior

D. ADD A LIGHT PRODUCT LAYER
Make the site feel more complete as a real digital product:
- add a command palette or quick-jump
- add a theme toggle if not already present
- add a small onboarding hint or “how to explore” pattern
- add breadcrumbs, section markers, or a scroll progress indicator if elegant
- create a sense of flow and place across the page

SITE STRUCTURE TO IMPROVE
Rework the site into a stronger narrative exploration flow:
1. Hero / Intro
2. Foundations
3. Token architecture
4. Component exploration
5. Behaviors and states
6. Real use-case compositions
7. Edge cases and system gaps
8. Footer / trust / version / next steps

For each section:
- make the heading clear
- make the purpose obvious
- add one strong visual anchor
- include one obvious CTA or interaction
- ensure the section contributes to understanding the design system

TECHNICAL + CONTENT RULES
- use my design system as the visual source of truth
- do not hardcode random styles that break the system unless necessary
- if something is not in the design system, mention that it should be added back into the system
- preserve responsive behavior
- preserve performance quality
- keep the interface lightweight and elegant
- avoid visual clutter
- avoid repetitive card grids
- avoid over-centering everything
- avoid generic AI-looking gradients and blobs
- avoid turning the site into a utilitarian docs panel

CONTENT TONE
The writing should remain design-aware and refined, but slightly clearer and more approachable.
Do not replace everything with generic corporate copy.
Keep the language confident, clean, and smart.
Where action is needed, prefer clarity over abstraction.

FINAL OUTPUT EXPECTATION
Deliver a refined version of the website that:
- fixes the major audit issues properly
- improves accessibility and semantics significantly
- increases discoverability and structure
- feels more complete and intentional as a product
- better showcases my design system depth
- better communicates my design and implementation skill
- helps reveal what still needs to be added to the design system
- is strong enough to use in a portfolio and discuss in interviews