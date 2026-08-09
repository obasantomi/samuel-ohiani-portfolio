# Task 001 — Foundation and Hero

## Objective

Establish the foundational visual system and build the initial hero section based on the project's design system.

Before making changes, read:

```text
docs/DESIGN_SYSTEM.md
```

The design system is the source of truth.

---

## 1. Global Background

Set the application's primary background to:

```text
#050505
```

The background should apply consistently across the application.

Do not use pure black (`#000000`) as the primary page background.

---

## 2. Global Layout

Establish the shared main application container with:

```text
mx-auto max-w-[1440px] pb-[100px]
```

This container should be implemented at the appropriate shared layout level rather than duplicated across individual pages.

Every major section should have:

```text
p-10
```

Respect responsive usability where necessary, but do not arbitrarily change the spacing system.

---

## 3. Hero Container

The hero content should be narrower than the global application container.

Use approximately:

```text
max-w-[1100px]
```

and center the composition appropriately.

The hero should NOT stretch across the entire 1440px application width.

The reference image demonstrates the intended relationship between the wide page and narrower content composition.

---

## 4. Hero Typography

Use:

```text
PP Editorial New
```

for the primary hero/display typography.

If the font is already available locally in the repository, load it correctly using Next.js local font support.

Do not substitute another font if the provided font is available.

Do not introduce another font dependency.

The typography should preserve the elegant editorial character of the reference.

---

## 5. Hero Copy

Use this exact text:

```text
Senior Fullstack Engineer with 3+ years of experience building products from idea to production.
```

Do not alter the wording.

Allow the container width to naturally determine line wrapping.

Do not manually insert `<br />` elements simply to imitate the screenshot.

---

## 6. Profile Image

Use:

```text
/images/samuel.JPG
```

which corresponds to:

```text
/public/images/samuel.JPG
```

Integrate the image naturally into the hero typography/composition, following the composition shown in the reference.

Do not turn the image into a separate profile card.

---

## 7. Profile Image Zoom

Implement the profile image interaction with Framer Motion.

### Closed State

The image remains in its normal position within the hero.

### Open State

When clicked:

- Animate the image smoothly from its original position.
- Move it to the center of the viewport.
- Increase its size.
- Add a backdrop behind it.
- Blur/dim the page content behind it.
- Keep the image as the primary visual focus.

### Close State

When the focused image is clicked:

- Animate it back to its original position.
- Restore the background.
- Remove the blur.
- Preserve spatial continuity.

The image should not abruptly disappear/reappear.

Use a smooth transition that feels premium and controlled.

Do not add an unnecessary modal panel or complicated lightbox UI.

---

## 8. Animation Constraints

Use Framer Motion.

Animations should be subtle and intentional.

Avoid:

- Excessive spring bounce
- Overshooting
- Random stagger animations
- Floating effects
- Constant motion
- Decorative particles
- Unnecessary page transitions

The image expansion should be the primary interaction animation at this stage.

---

## 9. Responsive Behaviour

The desktop composition should closely follow the supplied reference.

On smaller screens:

- Preserve the visual hierarchy.
- Prevent text overflow.
- Maintain readable typography.
- Maintain appropriate horizontal spacing.
- Ensure the image remains clickable.
- Ensure the expanded image fits within the viewport.
- Do not allow the zoomed image to extend beyond the visible viewport.

Do not destroy the editorial composition simply to make the layout technically responsive.

---

## 10. Scope

For this task, focus only on:

- Global background
- Shared main container
- Section padding
- Hero structure
- Hero typography
- Profile image
- Profile image zoom interaction

Do not build:

- Projects
- About section
- Experience section
- Contact section
- Footer
- Additional animations
- Theme switching
- Blog
- CMS
- Backend functionality

Those will be specified separately.

---

## 11. Implementation Rules

Before modifying files:

1. Inspect the existing Next.js project structure.
2. Reuse existing configuration where possible.
3. Do not introduce unnecessary dependencies.
4. Do not rewrite unrelated files.
5. Do not generate placeholder content.
6. Do not invent additional design elements.
7. Keep components clean and reusable.
8. Use TypeScript properly.
9. Use semantic HTML.
10. Follow the project's established design system.

---

## Acceptance Criteria

- [ ] Application background is `#050505`.
- [ ] Shared main container uses `max-w-[1440px]`.
- [ ] Shared main container is horizontally centered.
- [ ] Shared main container has `pb-[100px]`.
- [ ] Major sections use `p-10`.
- [ ] Hero uses an approximately `1100px` content width.
- [ ] Hero uses PP Editorial New.
- [ ] Hero contains the exact supplied copy.
- [ ] Profile image loads from `/images/samuel.JPG`.
- [ ] Profile image is integrated into the hero composition.
- [ ] Clicking the image expands it smoothly toward the viewport center.
- [ ] Background becomes blurred/dimmed during the focused state.
- [ ] Clicking the focused image returns it smoothly to its original position.
- [ ] Interaction works responsively.
- [ ] No unrelated sections or design systems are introduced.
