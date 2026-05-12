# Himanshu Sharma Portfolio

A modern personal portfolio for presenting full-stack development, AI-oriented product engineering, professional experience, case-study projects, technical skills, publication work, certifications, and contact details.

The site is built as a single-page React application with Vite, Tailwind CSS, class-based dark mode, and subtle Framer Motion animations.

## Overview

This portfolio is positioned for startup, product engineering, frontend, full-stack, backend, AI-product, and R&D engineering opportunities.

It highlights:

- Full-stack product work across frontend, backend, APIs, and data.
- AI-assisted product workflows using modern web technologies.
- Case-study style project presentation for SkinDB, ZenHosp, and AeroHive GCS.
- Professional experience content centered around Sky AI.
- Recruiter-friendly resume, contact, GitHub, and LinkedIn access.
- SEO and social preview metadata for cleaner link sharing.

## Tech Stack

- React 19
- Vite 6
- Tailwind CSS 3
- Framer Motion
- JavaScript modules
- PostCSS and Autoprefixer

## Main Features

- Sticky responsive header with section navigation and resume CTA.
- Hero section with clear professional positioning and primary actions.
- About section focused on engineering problem solving and product ownership.
- Experience section powered by structured data.
- Skills section with visual badge groups.
- Project case studies with problem, features, challenges, architecture/workflow, impact, stack, links, and image fallbacks.
- Publication and certification cards.
- Contact section with clickable email, phone, GitHub, LinkedIn, location, and resume entry.
- Light/dark theme toggle with persisted preference.
- Smooth scrolling and scroll reveal animations.
- OpenGraph and Twitter card metadata.

## Project Structure

```text
.
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── PORTFOLIO_CONTENT_CHECKLIST.md
├── README.md
└── src
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── components
    │   ├── About.jsx
    │   ├── CertificationsCard.jsx
    │   ├── ContactItem.jsx
    │   ├── ContactSection.jsx
    │   ├── ExperienceSection.jsx
    │   ├── Footer.jsx
    │   ├── Header.jsx
    │   ├── Hero.jsx
    │   ├── MotionSection.jsx
    │   ├── ProjectCard.jsx
    │   ├── ProjectsSection.jsx
    │   ├── PublicationCard.jsx
    │   ├── SectionHeading.jsx
    │   ├── SkillGroup.jsx
    │   ├── SkillsGrid.jsx
    │   └── ThemeToggle.jsx
    ├── data
    │   ├── certifications.js
    │   ├── experience.js
    │   ├── profile.js
    │   ├── projects.js
    │   └── skills.js
    ├── hooks
    │   └── useTheme.js
    └── lib
        └── constants.js
```

## Page Sections

The main page is assembled in `src/App.jsx` in this order:

1. Header
2. Hero
3. About
4. Experience
5. Skills
6. Projects
7. Publication and Certifications
8. Contact
9. Footer

Navigation links are managed in `src/lib/constants.js`.

## Content Files

Most portfolio content is centralized in `src/data`:

- `src/data/profile.js` - name, role, hero copy, contact links, resume path, publication, and contact intro.
- `src/data/experience.js` - Sky AI experience entry, contributions, stack, and publishing note.
- `src/data/projects.js` - project case-study content, stack, image paths, status, and links.
- `src/data/skills.js` - grouped technical skills.
- `src/data/certifications.js` - certification list.

Update these files first when changing portfolio content.

## Asset Expectations

The app currently expects public assets at these paths:

- `public/resume/Himanshu-Sharma-Resume.pdf`
- `public/images/skindb-cover.png`
- `public/images/zenhosp-cover.png`
- `public/images/aerohive-cover.png`
- `public/images/portfolio-preview.png`

Project cards include fallback visuals if screenshots are missing, so the site still builds and renders without those image files.

See `PORTFOLIO_CONTENT_CHECKLIST.md` for the full list of remaining content and asset inputs needed before final publishing.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - start the Vite development server.
- `npm run build` - build the site for production.
- `npm run preview` - preview the production build locally.

## Styling And Theme

The portfolio uses Tailwind utility classes directly in React components.

Theme behavior:

- Dark mode is enabled through Tailwind's `class` strategy.
- `src/hooks/useTheme.js` reads and writes the selected theme to `localStorage`.
- If no stored preference exists, the app uses the system color scheme.
- `src/components/ThemeToggle.jsx` controls switching between light and dark mode.

Global CSS lives in `src/index.css` and currently includes Tailwind layers, smooth scrolling, a minimum body width, and a small text-balance utility.

## Animation

Animations are intentionally restrained:

- `src/components/MotionSection.jsx` wraps major sections with scroll reveal motion.
- `src/components/Hero.jsx` uses entrance animations for the hero content and engineering profile card.
- `src/components/ProjectCard.jsx` adds a subtle hover lift.

## SEO And Link Previews

SEO metadata is configured in `index.html`, including:

- Page title
- Meta description
- Keywords
- Author
- Theme color
- OpenGraph title, description, image, and site name
- Twitter card title, description, and image

Before deployment, add `public/images/portfolio-preview.png` so social previews have a real image.

## Deployment Notes

This is a static Vite site and can be deployed to platforms such as Vercel, Netlify, GitHub Pages, or Render static sites.

Typical production output is generated in:

```text
dist/
```

For most static hosts:

- Build command: `npm run build`
- Publish directory: `dist`

## Known Follow-Up Items

- Add the final resume PDF under `public/resume`.
- Add approved project screenshots and social preview image under `public/images`.
- Confirm exact Sky AI dates, official title, and public wording.
- Add project metrics, links, live demos, or GitHub repositories if available.
- Consider adding detailed case-study pages or technical writeups later.

## License

This is a personal portfolio project. Add a license file if you want to make reuse terms explicit.
