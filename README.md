# Lawctopus — Course Landing Page

A modern, responsive landing page for **Lawctopus** ("The Home of Legal Careers"), built as a take-home assessment for a company.

It's a single marketing web page that presents an online legal-careers course — explaining who it's for, what you'll learn, who teaches it, what it costs, and answering common questions — with a pop-up form to download the syllabus.

> ### 🔗 Live website
>
> **https://lawctopus-landing-nine.vercel.app/**

---

## What this project is

Think of it like a digital brochure for a course. When you open the link above, you scroll through one long page that tells the whole story of the course — from "here's why it's for you" at the top, all the way down to "here are answers to your questions" and "sign up now" at the bottom.

It's a **front-end only** project: there's no database or login. The one interactive piece is a **"Download Syllabus" button** that opens a small form. When a visitor fills it in, their details are emailed to the course team through a service called **Formspree** (so no server code was needed).

The page is fully **responsive** — it automatically rearranges itself to look good on phones, tablets, and desktops.

---

## What's on the page

The page is built from small, reusable building blocks ("sections"), shown in this order:

| Section                  | What it shows                                                         |
| ------------------------ | --------------------------------------------------------------------- |
| **Navigation bar**       | The Lawctopus logo and menu links that stick to the top as you scroll |
| **Hero**                 | The big headline, intro, and main call-to-action                      |
| **Social proof bar**     | A scrolling strip of recognisable names/brands for trust              |
| **Who it's for**         | The kinds of people the course is aimed at                            |
| **Outcomes**             | What you'll be able to do after finishing                             |
| **Curriculum**           | What the course covers, module by module                              |
| **Faculty**              | The instructors, with photos                                          |
| **Testimonials**         | Quotes from past students                                             |
| **Pricing**              | The price and what's included                                         |
| **Bonuses**              | Extra perks (AI tools, career support, networking)                    |
| **Guarantee**            | The 100% money-back guarantee and how to claim it                     |
| **FAQ**                  | Answers to common questions                                           |
| **Final call-to-action** | One last nudge to sign up                                             |
| **Footer**               | Logo, social links, and site links                                    |
| **Syllabus pop-up**      | A form (appears when you click "Download Syllabus")                   |

---

## Tech stack

| Tool               | Why it's used                                                       |
| ------------------ | ------------------------------------------------------------------- |
| **React 19**       | Builds the page out of reusable components                          |
| **Vite 8**         | Runs the dev server and bundles the site for production (very fast) |
| **Tailwind CSS 4** | Styling utilities                                                   |
| **Formspree**      | Receives the syllabus form submissions by email (no backend needed) |
| **lucide-react**   | Clean line icons                                                    |
| **Oxlint**         | Checks the code for common mistakes                                 |
| **Vercel**         | Hosts the live website and auto-deploys on every update             |

A nice detail: every colour in the site is defined in **one file** — [`src/theme.js`](src/theme.js). Change a value there and it updates everywhere across the site.

---

## Project structure

```
lawctopus-landing/
├── public/                  # Static files served as-is
├── src/
│   ├── assets/              # Images (logo, hero image, faculty photos)
│   ├── components/          # Each page section is its own file
│   │   ├── MainNav.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ...              # (one file per section listed above)
│   │   └── SyllabusModal.jsx
│   ├── theme.js             # Single source of truth for all colours
│   ├── index.css           # Global styles
│   ├── App.jsx             # Assembles all the sections in order
│   └── main.jsx            # App entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## Running it on your own computer

You only need this if you want to open the project locally (the live link above already works for everyone).

### Prerequisites

- **Node.js 20.19+ or 22.x** (this project is pinned to Node 22). Download from [nodejs.org](https://nodejs.org/).

### Steps

```bash
# 1. Install the project's dependencies (one-time)
npm install

# 2. Start the local development server
npm run dev
```

Then open the address it prints (usually **http://localhost:5173/**) in your browser.

### Other commands

```bash
npm run build     # Build the optimised production version (output goes to /dist)
npm run preview   # Preview that production build locally
npm run lint      # Check the code for issues
```

---

## How it's deployed

The site is hosted on **Vercel** and connected to this GitHub repository.

- Every time new code is pushed to the `main` branch, Vercel **automatically rebuilds and re-publishes** the live site.
- No environment variables or secrets are required.

---

## Notes for reviewers

- **Single-page application** — all navigation is in-page (smooth scroll to sections), so there's no routing library.
- **No backend** — the only external integration is Formspree for the syllabus form.
- **Component-driven** — each visual section is an isolated, self-contained component, making the page easy to read, reorder, or extend.
- **Centralised theming** — colours and brand tokens live in `src/theme.js` and are injected as CSS variables, so the whole look can be re-skinned from one place.
