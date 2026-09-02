# Nikhil Anande Portfolio Upgrade

This package is a resume-aligned replacement for the current portfolio component. It keeps the existing stack - React, Tailwind CSS, and Framer Motion - and does not require an icon package.

## Included files

- `src/App.jsx` - upgraded portfolio UI and interactions
- `src/portfolioData.js` - all portfolio content in one editable data file
- `src/portfolio.css` - deterministic background, animation, scrollbar, and reduced-motion styles
- `public/Nikhil_Anande_Resume_September_2026.pdf` - downloadable resume
- `SEO_HEAD_SNIPPET.html` - static metadata to add to `index.html`

## Install

1. Back up the current project.
2. Copy `App.jsx`, `portfolioData.js`, and `portfolio.css` into the existing `src` folder.
3. Copy the PDF into the existing `public` folder.
4. Confirm that Framer Motion is installed:

   ```bash
   npm install framer-motion
   ```

5. Keep the project's existing Tailwind setup. No additional React package is required.
6. Start the project and verify all sections:

   ```bash
   npm run dev
   ```

   For Create React App, use `npm start` instead.

## Resume-based corrections applied

- Uses `7.6+ years` instead of the current `8+ years` claim.
- Corrects B.E. dates to `2013 - 2017`.
- Uses exact month-level dates for professional roles.
- Replaces the generic project grid with the four strongest resume projects:
  - Identra Pro
  - AI Factory Task Recorder
  - OCR-Based AI Purchase & Invoice Dashboard
  - HRMS & Payroll + Enterprise LMS
- Adds PostgreSQL, SQL Server, Express.js, TypeScript, Docker, GitHub Actions, CI/CD, AWS S3, DigitalOcean, Microsoft Planner, payment platforms, Gemini, speech-to-text, and AI-assisted engineering.
- Removes percentage impact claims that are not present in the supplied resume.
- Adds the earlier PHP training and web-development internship.

## UX and engineering improvements

- Content is separated from presentation in `portfolioData.js`.
- Theme selection persists in `localStorage` and initially respects the system preference.
- Navigation includes section tracking and a mobile menu.
- The project dialog closes with Escape or backdrop click and receives keyboard focus.
- Reduced-motion preferences are respected.
- Random render-time particles are replaced by deterministic CSS visuals.
- A skip link, semantic sections, descriptive labels, visible focus states, and improved contrast are included.
- Page title, meta description, and Person structured data are set at runtime.
- The resume download is wired to the PDF in `public`.

## Recommended repository follow-up

Add real screenshots, architecture diagrams, repositories, or live demos only for work you are authorized to show. The supplied resume does not contain public project links, so the upgrade intentionally avoids inventing them.

For stronger search and link previews, copy the relevant tags from `SEO_HEAD_SNIPPET.html` into the static `<head>` in `index.html`. Runtime metadata helps, but static metadata is more reliable for crawlers and social sharing.

The phone number is displayed in the contact section. Remove it from `portfolioData.js` and the contact card if you prefer to reduce spam exposure on a public website.
