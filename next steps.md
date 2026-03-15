# SPA Security Next Steps

## Purpose

This document captures the current security review for this portfolio SPA and
the hardening steps that should be implemented next.

The project is a static React + Vite single page application. That means:

- All shipped client code is public.
- Anything exposed through `VITE_*` variables is public configuration, not a
  secret.
- The main risks are XSS, malicious third-party interactions, public form
  abuse, unsafe browser defaults, and dependency vulnerabilities.

This app does not currently have:

- authentication
- sessions
- a protected backend API
- payments
- private business logic

So the security surface is smaller than a SaaS application, but it still needs
hardening.

## What Was Checked

The review covered:

- dependency surface in `package.json`
- environment variable usage in `.env`
- HTML entrypoint and external resource loading
- DOM injection patterns like `innerHTML`
- client-side email submission flow
- external links and tab-opening behavior
- local storage and cookie usage
- deployment header configuration
- production response headers on the live Netlify site
- npm audit results for production dependencies

## Current Security Posture

### Things That Are Already Fine

- `.env` is ignored by git, and only `.env.example` is tracked.
- No `dangerouslySetInnerHTML` usage was found.
- No authentication tokens or cookies are stored client-side.
- `localStorage` is only used for theme state.
- External links now use `rel="noopener noreferrer"` on the active app surface.
- No source maps were present in `dist`.
- The live site sends `Strict-Transport-Security`.

### Repo-Specific Risks and Gaps

1. Missing browser security headers

The live site currently appears to send `Strict-Transport-Security`, but it
does not appear to send the other headers we want for a hardened SPA:

- `Content-Security-Policy`
- `Referrer-Policy`
- `Permissions-Policy`
- `X-Content-Type-Options`
- frame protection via `frame-ancestors 'none'` or `X-Frame-Options: DENY`

There is also no host-level header config in the repo right now.

2. Public contact form can be abused

`src/components/contactMeSection/ContactForm.jsx` submits directly to EmailJS
from the browser using:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

This is normal for EmailJS, but it means:

- those values are public by design
- the form can be targeted by bots
- there is no real server-side validation or rate limiting

3. DOM injection primitive in navigation effect

`src/components/Underline.jsx` uses `innerHTML` to inject SVG markup and also
injects a runtime `<style>` block.

This is not a confirmed exploit today because the inserted content is currently
developer-controlled, but it is still a weak pattern because:

- it increases XSS risk if the inputs ever become dynamic
- it makes stronger CSP rollout harder
- it is harder to reason about than declarative DOM creation

4. External link hygiene was a gap and has been corrected on the active app
surface

The previously identified issues in:

- `src/components/projectsSection/SingleProject.jsx`
- `src/components/contactMeSection/ContactSocial.jsx`

have been fixed.

5. Third-party font loading expands the trust boundary

Fonts are loaded from Google in:

- `index.html`
- `src/index.css`

This is not automatically insecure, but it affects:

- CSP design
- privacy posture
- dependency on third-party availability

6. Dependency vulnerabilities exist

`npm audit --omit=dev` reported the following issues with fixes available:

- `glob` high severity
- `minimatch` high severity
- `rollup` high severity
- `vite` moderate severity

These are mostly build/dev tooling concerns for this repo, but they still
should be patched.

## Core Security Practices For A SPA

### 1. Prevent XSS

This is the top client-side security concern.

Practice:

- never inject untrusted HTML
- avoid `innerHTML`
- avoid `dangerouslySetInnerHTML`
- keep data rendered as text by default
- validate any dynamic URLs before using them
- prefer declarative React rendering over manual DOM mutation

For this repo:

- good: no `dangerouslySetInnerHTML`
- needs work: `Underline.jsx` uses `innerHTML`

### 2. Use Strong Browser Security Headers

A static SPA should still be protected by response headers.

Important headers:

- `Content-Security-Policy`
- `Strict-Transport-Security`
- `Referrer-Policy`
- `Permissions-Policy`
- `X-Content-Type-Options: nosniff`
- `frame-ancestors 'none'` in CSP or `X-Frame-Options: DENY`

For this repo:

- good: HSTS exists on the live site
- missing: most of the rest

### 3. Treat Client Environment Variables As Public

Anything in `import.meta.env` and anything prefixed with `VITE_` is shipped to
the browser.

Practice:

- never put secrets there
- only put public keys or public config there
- move true secrets to serverless/backend infrastructure

For this repo:

- current EmailJS values are public config, not server secrets
- if a real backend is added later, private keys must not go into `VITE_*`

### 4. Protect Public Forms From Abuse

Any public contact form will be hit by bots eventually.

Practice:

- add a honeypot field
- add client-side validation and max lengths
- add provider-side origin restrictions
- add rate limiting if a backend exists
- add CAPTCHA or Cloudflare Turnstile
- avoid unlimited repeat submissions

For this repo:

- current form only prevents repeated clicks in the same session
- current form does not have bot or abuse controls

### 5. Keep External Links Safe

Practice:

- use `rel="noopener noreferrer"` with `target="_blank"`
- prefer `https://` links
- avoid user-generated arbitrary link targets

For this repo:

- active links are now using the expected safety attributes
- future new links should follow the same pattern

### 6. Control Third-Party Script and Asset Loading

Practice:

- minimize third-party dependencies
- self-host where practical
- explicitly allow third-party origins in CSP only when needed

For this repo:

- Google Fonts is currently a third-party dependency
- EmailJS is a third-party client integration

### 7. Maintain Dependency Hygiene

Practice:

- run `npm audit`
- update vulnerable packages
- keep Vite and Rollup current
- remove unused packages
- ideally add automated dependency update tooling

For this repo:

- production dependencies already improved after cleanup work
- toolchain packages still need vulnerability updates

### 8. Minimize Sensitive Client Storage

Practice:

- do not store secrets, tokens, or personal data in `localStorage`
- only store harmless preferences if needed

For this repo:

- only theme preference is stored
- this is fine

### 9. Secure Future Backend/Auth Work Properly

If the project later adds login, APIs, dashboards, or private data, then the
security model changes a lot.

At that point add:

- server-side authorization
- strict CORS
- HttpOnly secure cookies
- CSRF protection if cookies are used
- rate limiting
- server-side validation
- audit logging

Client-side route guards are not security. Real enforcement must happen on the
server.

## What Needs To Be Added Next

### High Priority

1. Add host-level security headers

Use Netlify header configuration and add:

- `Content-Security-Policy`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`
- `frame-ancestors 'none'`

2. Harden the contact form

Add:

- a honeypot field
- basic input length limits
- CAPTCHA or Turnstile
- provider-side origin restrictions in EmailJS
- optional serverless proxy if stronger control is needed

3. Remove `innerHTML` from `Underline.jsx`

Replace it with:

- declarative SVG rendering
- DOM node creation APIs if animation absolutely requires imperative control

4. Patch dependency vulnerabilities

Run the update path for the vulnerable packages and re-check audit output.

### Medium Priority

6. Self-host fonts or tighten CSP around Google Fonts

This reduces third-party dependency and simplifies CSP.

7. Add security review checks to the workflow

Examples:

- periodic `npm audit`
- CI lint and build checks
- dependency update automation

8. Review CSP compatibility with current runtime styles

`Underline.jsx` currently injects a runtime `<style>` block, which may push the
site toward a weaker CSP unless refactored.

## Suggested Implementation Order

1. Add Netlify security headers
2. Add contact form anti-abuse controls
3. Refactor `Underline.jsx` away from `innerHTML`
4. Update vulnerable packages
5. Revisit fonts and CSP tightening

## Repo-Specific Notes

- This portfolio is mostly static, so the most realistic threats are:
  - XSS introduced by future UI changes
  - bot spam through the contact form
  - missing browser-level protections
  - stale vulnerable dependencies
- This is not an auth-heavy app yet, so do not over-engineer enterprise
  controls that only matter once a backend exists.

## Exact Files Mentioned In This Review

- `src/components/Underline.jsx`
- `src/components/contactMeSection/ContactForm.jsx`
- `src/components/projectsSection/SingleProject.jsx`
- `src/components/contactMeSection/ContactSocial.jsx`
- `src/components/ui/ThemeToggle.jsx`
- `index.html`
- `src/index.css`
- `.env`
- `.env.example`

## Theme System Next Steps

Goal:

- implement a full token-based theme system
- make all colors dynamic
- remove hardcoded color usage from components
- allow future support for more than just light and dark

### Theme Rollout Plan

1. Build the token foundation in CSS variables

Status: completed

Implemented in:

- `src/index.css`

What this step does:

- defines semantic theme tokens in `:root`
- defines dark theme overrides in `html.dark` and `html[data-theme="dark"]`
- moves root page/text colors onto variables

What this step does not do yet:

- it does not replace hardcoded component colors
- it does not map Tailwind utilities to tokens
- it does not enable a full theme provider or a working toggle

2. Map Tailwind semantic utilities to theme tokens

Status: completed

Implemented in:

- `tailwind.config.js`

What this step does:

- exposes semantic utilities backed by CSS variables
- keeps existing palette classes working during migration
- enables classes like:

- `bg-page`
- `bg-surface`
- `text-primary`
- `text-muted`
- `border-default`
- `text-accent`

At the time this step was introduced, component classes had not yet been
migrated. That migration is now complete in the active app surface.

3. Add a real theme provider and persistence flow

Status: completed

Implemented in:

- `src/theme/ThemeProvider.jsx`
- `src/main.jsx`

What this step does:

- reads saved theme from local storage
- supports `light`, `dark`, and `system`
- writes `data-theme` on `<html>`
- exposes the current theme through context

4. Replace the current one-off toggle implementation

Status: completed

Implemented in:

- `src/components/ui/ThemeToggle.jsx`

What this step does:

- consumes theme context
- is no longer disabled
- does not own theme state by itself

5. Remove the hardcoded root dark mode default

Status: completed

Implemented in:

- `index.html`

What this step does:

- removes the hardcoded `dark` class on `<html>`
- applies the saved or system theme before React mounts

Instead, use an early boot script so the saved theme is applied before React
mounts and the page does not flash the wrong theme.

6. Migrate components from raw colors to semantic tokens

Status: completed for the active app surface

What was migrated:

- app shell and blogs shell
- navbar
- dock and theme toggle surface
- hero text, hero particles, hero image shell, and hero gradients
- section headings
- experience card
- project card
- contact card, tooltip, social icons, and form
- certificates block
- footer
- cursor effect
- shared underline effect colors

What this means:

- the visible app no longer depends on the old raw palette classes for theme
  colors
- semantic utilities now drive the active UI

Remaining small cleanup:

- future new components should continue using semantic utilities
- non-theme brand colors for technology badges/icons remain intentional, but
  they are now sourced from CSS variables too

Replace them with semantic utilities tied to the token system.

Priority areas:

- app shell
- navbar
- footer
- section headings
- cards
- buttons
- inputs
- overlays

7. Convert JS-driven visual systems to theme tokens

These components currently use direct color values or theme-specific logic and
must be token-aware:

- `src/components/heroSection/HeroMain.jsx`
- `src/components/ui/particles.jsx`
- `src/components/Underline.jsx`
- `src/components/cursorEffect.jsx`
- `src/components/dock.jsx`

Status: completed for the currently mounted visual systems

8. Audit and clean up all remaining hardcoded colors

Status: completed

What was completed:

- removed the remaining old palette references from the active repo
- moved brand / technology colors into CSS variables
- removed unused legacy `App.css`
- tokenized the inactive `KineticScroll` color defaults
- removed obsolete hardcoded palette values from `tailwind.config.js`

Current state:

- repo colors now resolve through theme or brand CSS variables
- remaining `rgb(...)` and `rgba(...)` patterns are variable-based runtime usage,
  not hardcoded color values

After migration, run a repo-wide scan and remove direct color usage from:

- JSX class strings
- inline styles
- JS props
- SVG fill or stroke values
- animation and glow colors

### Theme Success Criteria

The theme system is only complete when:

- all color values originate from theme tokens
- components use semantic color classes only
- switching theme changes the entire UI consistently
- visual systems like particles, cursor, and glow effects also follow theme
- no component depends on raw palette names like `white`, `black`, `cyan`, or
  `orange`
