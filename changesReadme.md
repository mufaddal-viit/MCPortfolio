# MCPortfolio Review and Improvement Plan

## Scope reviewed
- App entry points and global styling: `src/main.jsx`, `src/index.css`, `src/App.jsx`, `src/App.css`, `index.html`, `tailwind.config.js`
- All sections and components under `src/components`
- Animation helpers under `src/framerMotion`
- Assets referenced from `public/images`
- Dependencies in `package.json`

## High-impact issues / bad things to fix first
- Text encoding corruption is visible to users in multiple places (examples include `src/components/aboutMeSection/AboutMeText.jsx`, `src/components/contactMeSection/ContactForm.jsx`, `src/components/contactMeSection/Tooltip.jsx`, `src/components/footer/FooterMain.jsx`). This reads as garbled text in the UI and should be corrected to clean ASCII content.
- `target="_blank"` links are missing `rel="noopener noreferrer"` in `src/components/projectsSection/SingleProject.jsx`. This is a security and performance issue.
- EmailJS keys are hardcoded in the client in `src/components/contactMeSection/ContactForm.jsx`. That makes the public key harvestable and allows abuse. Move IDs to environment variables and consider a serverless proxy if rate limiting is needed.
- `font-body` and `font-special` classes are used but not defined in `tailwind.config.js`, so the intended typography is not actually applied (examples: `src/App.jsx`, `src/components/navbar/NavbarBtn.jsx`, `src/components/navbar/NavbarLinks.jsx`, `src/components/navbar/NavbarLogo.jsx`).
- Invalid Tailwind class `top-30` in `src/components/heroSection/HeroGradient.jsx` results in the style not applying. Use `top-[30px]` or a valid scale value.
- `src/components/experienceSection/ExperienceTopMiddle.jsx` uses `src="images/experience-image.png"` without a leading slash, which can break on non-root routes or when a base path is used.
- The `viewport` meta tag in `index.html` is malformed (missing a comma). It should be `width=device-width, initial-scale=1.0, minimum-scale=1`.
- `src/App.css` is unused and still contains Vite starter styles that conflict with the current design intent.

## UI modernization with shadcn/ui (component mapping)
Install shadcn/ui and use its primitives to create a more modern, consistent system.

- Navbar
  - Use `NavigationMenu` for desktop links and `Sheet` for the mobile drawer.
  - Replace the custom CTA with `Button` + `ArrowUpRight` icon.
- Hero
  - Use `Badge` for the role, `Avatar` or `AspectRatio` for the portrait, and a `Button` group for "Hire me" and "View projects".
- About
  - Wrap content in a `Card` with a `Separator` and a compact list of highlights using `Badge`.
- Skills
  - Use `Tabs` (frontend, backend, tools) or `Accordion` for grouped skills, with `Badge` or `Toggle` for each skill.
- Experience
  - Build a timeline layout with `Card` + `Separator` + `Badge` for role and dates.
- Projects
  - Use `Card` + `AspectRatio` and a `Dialog` to show details or screenshots.
  - Add `HoverCard` for quick previews.
- Certificates
  - Use a `Carousel` or a `Card` grid with `AspectRatio`.
- Contact
  - Replace custom inputs with `Form`, `Label`, `Input`, `Textarea`, and `Button`.
  - Use `Toast` or `Alert` for success and error states.
  - Replace `react-tooltip` with shadcn `Tooltip` for consistency.

## Modern design direction (non-code guidance)
- Define a coherent type system with real font tokens in Tailwind (body, display, mono) and remove unused font imports.
- Increase visual hierarchy using consistent section headers, spacing, and max-width container utilities.
- Replace flat backgrounds with layered gradients or subtle noise patterns (kept lightweight).
- Use consistent card styles (radius, shadow, border) for Projects, Certificates, and Contact blocks.
- Reduce the number of ad-hoc colors by anchoring the palette to 2-3 core accents and a neutral scale.

## Performance improvements
- Optimize images in `public/images` (resize and convert to WebP/AVIF). Several files appear unused and can be removed to reduce payload.
- Add `loading="lazy"` and `decoding="async"` to non-hero images, and set explicit width/height to reduce layout shifts.
- Reduce repeated animation work by setting `viewport={{ once: true }}` in Framer Motion where possible, or use `useReducedMotion` to respect user settings.
- Consider replacing `react-typed` with a lightweight CSS animation or a static fallback to cut JS work on first paint.
- Remove Redux for menu state. Local component state is enough and will reduce bundle size and complexity.
- Remove unused dependencies like `formik` (currently unused) and `react-intersection-observer` (used only in an unused component).

## Accessibility and UX improvements
- Add `aria-label` to icon-only buttons like the hamburger menu (`src/components/navbar/NavbarToggler.jsx`).
- Replace button-wrapped links (examples in `src/components/aboutMeSection/AboutMeText.jsx`, `src/components/navbar/NavbarBtn.jsx`) with a single semantic element to avoid nested interactive elements.
- Provide labels for form fields and add `aria-live="polite"` for the success message in `src/components/contactMeSection/ContactForm.jsx`.
- Make contact info clickable (`mailto:` and `tel:`) in `src/components/contactMeSection/ContactInfo.jsx`.
- Ensure only one `h1` on the page. Use `h2`/`h3` for section headings.
- Provide alt text that describes the specific image (current alt text is generic in several places).

## Code hygiene and maintainability
- Centralize content data (projects, skills, experience) in a single data file and map over it. This avoids duplication between desktop and mobile views.
- Remove unused components and dead code (examples: `src/components/subHeroSection/SubHeroMain.jsx`, `src/components/HelperSection.jsx`, the commented `AllExperiences` block, and commented-out sections in `AboutMeMain`).
- Fix encoding issues and enforce UTF-8 across files to prevent garbled text.
- Use consistent naming and file structure for assets to keep `public/images` manageable.

## Suggested priority order
1. Fix visible text corruption, invalid classes, and broken meta tag.
2. Address security and accessibility issues (links with rel, labels, aria).
3. Remove unused dependencies and dead code.
4. Optimize images and animation behavior.
5. Introduce shadcn/ui components and unify the visual system.
6. Refactor data-driven sections for maintainability.
