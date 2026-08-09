# Portfolio Design System

## Project Direction

This is a professional personal portfolio for a Senior Fullstack Engineer.

The visual identity should feel:

- Editorial
- Minimal
- Sophisticated
- Technical without being stereotypically "developer"
- Intentional
- Premium
- Human-designed
- Spacious

The project must NOT look like a generic AI-generated developer portfolio.

Avoid visual trends that are commonly associated with AI-generated portfolio designs, including:

- Excessive gradients
- Neon colors
- Excessive glassmorphism
- Floating cards everywhere
- Excessive rounded containers
- Generic terminal/code-window decorations
- Decorative code snippets without purpose
- Excessive animated particles
- Excessive glowing effects
- Overly complex backgrounds
- Grid backgrounds
- Noise textures
- Decorative effects without a clear purpose

The design should rely primarily on typography, spacing, hierarchy, composition, and subtle motion.

---

# Color System

## Primary Background

The global page background is:

```text
#050505
```

This is the primary background for the entire application.

Do not use pure `#000000` as the page background.

The distinction between `#050505` and black should remain intentional.

## Primary Text

Primary text should be a soft white rather than an aggressive pure white wherever appropriate.

Recommended primary text:

```text
#F5F5F5
```

## Secondary Text

Secondary/supporting text should use a subdued neutral:

```text
#A1A1A1
```

## Muted Text

For very subtle metadata and utility content:

```text
#737373
```

## Accent

The design should remain predominantly monochromatic.

Accent colors should only be introduced when they have a clear semantic or interactive purpose.

Do not introduce random gradients or decorative accent colors.

---

# Typography

## Primary Display Font

The hero/display typography should use:

```text
PP Editorial New
```

This is the primary editorial display typeface.

The font should feel elegant and slightly expressive while maintaining excellent readability.

Do not replace PP Editorial New with a generic serif if the font is available in the project.

If the font files are provided locally, load them using Next.js local font support and expose the font through a reusable CSS variable/class.

Do not download, substitute, or introduce another font without explicit instruction.

## Typography Character

Large headings should feel:

- Editorial
- Calm
- Sophisticated
- Lightweight
- Deliberately composed

Avoid:

- Heavy display fonts
- Overly geometric typography
- Generic tech fonts
- Excessive letter spacing
- Artificially bold headings

---

# Global Layout

Every major section must use:

```text
padding: 10
```

In Tailwind terms, use:

```text
p-10
```

unless there is a specific responsive requirement that necessitates an intentional adjustment.

Do not arbitrarily change the global section spacing from one section to another.

Responsive adaptations are allowed where necessary to preserve usability and composition.

---

# Main Application Container

The main container that holds the sections across pages and routes should follow:

```text
margin-left: auto
margin-right: auto
max-width: 1440px
padding-bottom: 100px
```

Tailwind equivalent:

```text
mx-auto max-w-[1440px] pb-[100px]
```

This container should be established at the shared application/layout level so that pages and routes consistently inherit the same structural constraint.

Do not recreate this container independently in every page unless there is a specific reason.

---

# Hero Layout

The hero should use a narrower content composition than the global 1440px application container.

Based on the provided visual reference, the hero's content composition should be approximately:

```text
max-width: 1100px
```

Use:

```text
max-w-[1100px]
```

with horizontal centering where appropriate.

The larger application container exists to provide breathing room for the overall site.

The narrower hero container creates the editorial composition seen in the reference.

Do not stretch the hero text across the full 1440px width.

---

# Background

The entire site should use:

```text
#050505
```

as its primary background.

The background should remain visually calm and flat.

Do not introduce:

- Gradients
- Noise textures
- Animated backgrounds
- Grid backgrounds
- Glowing blobs
- Particle systems

unless explicitly requested later.

---

# Hero Profile Image

The profile image is located at:

```text
/public/images/samuel.JPG
```

It should be rendered using:

```text
/images/samuel.JPG
```

The image should be integrated naturally into the hero typography/composition rather than treated as a separate large profile card.

---

# Profile Image Interaction

The profile image is interactive.

## Default State

The profile image should appear naturally within the hero content.

It should communicate that it can be interacted with without using an intrusive UI element.

## On Click

When the profile image is clicked:

1. The image should smoothly animate from its original position into the center of the viewport.
2. The image should increase in size during the transition.
3. The rest of the page should become visually subdued.
4. The background behind the image should become blurred/dimmed.
5. The viewer should be able to focus entirely on the image.
6. The transition must feel smooth and intentional.

The effect should resemble a lightweight image lightbox rather than a page navigation.

## Focused State

The focused image should be positioned approximately at the center of the viewport.

The background should use a blurred/dimmed backdrop.

The focused image should remain visually prominent.

Do not create an unnecessarily large modal UI around it.

The image itself should be the focus.

## Closing

Clicking the focused image should animate it back to its original location.

The transition must preserve spatial continuity between the original image position and the expanded position.

The image should not simply disappear and reappear.

---

# Animation Philosophy

Use Framer Motion for intentional interaction and transition animations.

Animation should support:

- Hierarchy
- Spatial continuity
- Interaction feedback
- Focus
- Navigation

Animation should NOT exist simply because animation is possible.

Avoid:

- Excessive entrance animations
- Random floating elements
- Constant motion
- Large spring overshoots
- Bouncy UI
- Excessive stagger effects
- Every element animating independently

Animations should feel subtle and premium.

---

# Hero Copy

The hero should contain the following copy exactly:

> Senior Fullstack Engineer with 3+ years of experience building products from idea to production.

Do not rewrite, shorten, embellish, or AI-improve this copy.

The text should follow the editorial composition and approximate text width shown in the provided reference.

The line wrapping should be controlled through the hero's content width rather than manually inserting line breaks.

---

# Reference Composition

The provided visual reference should be treated as a visual direction reference, not something to reproduce pixel-for-pixel.

Important characteristics to preserve:

- Large amount of negative space
- Narrow editorial text block
- Dark background
- Small utility elements
- Refined typography
- Profile image integrated into the heading
- Minimal CTA treatment
- Strong visual hierarchy
- Calm composition

Do not copy unrelated elements from the reference.

The portfolio belongs to a Fullstack Engineer, so the final visual identity must be original to this project.

---

# Engineering Principles

The implementation should prioritize:

- Reusable components
- Clear component boundaries
- Semantic HTML
- Responsive behavior
- Accessibility
- Type safety
- Maintainability
- Minimal unnecessary dependencies

Do not create duplicated styling logic when a shared component or design token can handle it.

Do not modify unrelated components while implementing a requested feature.

Do not introduce a new visual language without updating this document first.

---

# AI / Copilot Rules

This document is the source of truth for the project's visual system.

When implementing a feature:

1. Read this document first.
2. Follow the established design language.
3. Preserve existing design decisions.
4. Do not invent additional UI patterns unless required.
5. Do not "improve" unrelated areas.
6. Do not replace explicit requirements with personal design assumptions.
7. Reuse existing components where possible.
8. Keep animations purposeful.
9. Avoid generic AI-generated portfolio aesthetics.
10. When a requirement conflicts with this document, the newer explicit project requirement takes precedence and this document should subsequently be updated.

The goal is not to produce the most visually complicated portfolio.

The goal is to produce a portfolio that feels deliberately designed by a professional engineer with a strong visual identity.
