const compareReadme = `
# Production Project vs MCPortfolio

This document compares a production-grade React project to the current state of this portfolio, and lists what a production project should include (design system, standards, performance, quality, and delivery).

## 1) Project setup and standards
Production expectations
- Clear repo structure (src, public, docs, scripts, config).
- Conventions: consistent naming, linting, formatting, and commit practices.
- Environment configuration with .env templates and secrets management.
- CI/CD for lint, test, build, and deploy.
- Documentation: architecture, setup, and runbooks.

Current project
- No documented conventions or scripts beyond basic Vite defaults.
- Hardcoded API keys in client code (see src/components/contactMeSection/ContactForm.jsx).
- No CI config in repo.

## 2) Design system and UI standards
Production expectations
- A defined design system (tokens for color, typography, spacing, radius, shadows).
- Consistent UI patterns with reusable components (buttons, cards, forms, dialogs).
- Accessible contrast and type scale.
- Responsive layout rules with clear breakpoints.

Current project
- Uses Tailwind, but many styles are ad-hoc and repeated.
- Fonts are referenced via classes (font-body, font-special) but not defined in tailwind.config.js.
- Sections lack consistent spacing rhythm and component standards.

## 3) Color standards
Production expectations
- Neutral scale plus 1-2 accent colors.
- Color tokens named by intent (bg, text, border, accent, danger).
- Avoid excessive palette usage that reduces cohesion.

Current project
- Many custom colors defined but used inconsistently.
- No semantic token mapping (e.g., text-primary, surface-1, accent).

## 4) Typography and headings
Production expectations
- One clear H1 on the page; sections are H2/H3.
- Scale: display, title, body, caption with defined line-height.
- Font families defined in Tailwind theme and used consistently.

Current project
- Some headings use large sizes but without a unified scale.
- Multiple components style headings independently.
- H1 and H2 usage is not controlled across sections.

## 5) Layout and spacing
Production expectations
- Standard container widths and section paddings.
- Layout utilities for consistent spacing and alignment.
- Visual grid or rhythm for better scanning.

Current project
- Each section defines its own spacing and max widths.
- Navbar and sections use different container widths.

## 6) Components and reusability (shadcn/ui example)
Production expectations
- Shared components: Button, Card, Badge, Input, Textarea, Dialog, Sheet, Tabs.
- Reusable section templates: hero, split layout, grid, timeline.
- Minimal custom CSS by composing primitives.

Current project
- Most UI is unique per section without shared primitives.
- React Tooltip and custom buttons are inconsistent with the rest of the UI.
- Redux used for simple menu toggle that could be local state.

## 7) Performance and asset handling
Production expectations
- Image optimization (WebP/AVIF, size matching, lazy loading).
- Minimal JS for animations and typed text.
- Reduce unused dependencies and dead code.

Current project
- Large images in public/images without explicit sizing or lazy loading.
- Framer Motion used across many sections; no reduced motion handling.
- Unused dependencies like formik.

## 8) Accessibility
Production expectations
- Labels for form fields and aria attributes for icon-only buttons.
- Keyboard navigation and focus states.
- External links with rel="noopener noreferrer".

Current project
- Missing labels in contact form.
- Hamburger button lacks aria-label.
- Some external links miss rel attributes.

## 9) Content and data management
Production expectations
- Centralized data (projects, skills) in data files.
- Content edited without changing UI components.

Current project
- Projects and skills are hardcoded in multiple components.
- Mobile vs desktop duplication for skills.

## 10) Security and privacy
Production expectations
- No secrets or keys in client code.
- Rate limits and spam prevention for forms.

Current project
- EmailJS key and IDs are in client-side code.

## 11) Testing and quality
Production expectations
- Unit tests for logic, integration tests for key flows.
- Lighthouse budget targets for performance.

Current project
- No testing setup or quality gates.

## 12) What a production project should include
- README with setup, scripts, architecture, and deployment.
- .env.example for config.
- Lint and format (ESLint, Prettier) configured and enforced.
- CI to run lint/test/build.
- Design system primitives and reusable components.
- Performance budget and asset pipeline.
- Accessibility baseline checks.
- Error handling and logging strategy.

## Summary
This portfolio is a solid start but lacks production-grade structure, accessibility, performance optimization, and a coherent design system. The biggest gaps are in consistency (typography, spacing, components), security (client keys), and operational readiness (CI, tests, and documentation).
`;

export default compareReadme;
