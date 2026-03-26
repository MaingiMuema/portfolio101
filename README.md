# ManlikeMaingi Portfolio

A personal portfolio and resume site for Mark Maingi built with Next.js 14, React 18, and Tailwind CSS. The experience opens with a fullscreen welcome animation, then transitions into a portfolio landing page with featured work, skills, contact actions, and a separate resume/about route.

## Overview

The current site includes:

- A cinematic welcome screen with timed text transitions, particle effects, and mouse-reactive motion
- A landing page with a typed role animation, profile image, skills summary, featured projects, and a contact popup
- A responsive sticky navbar with navigation to the resume page
- A dedicated `/resume` page with professional summary, skills, work history, education, certifications, and interests
- A footer section with social links
- Portfolio screenshots, profile media, and CV files served from `public/`

## Routes

| Route | Description |
| --- | --- |
| `/` | Main portfolio landing page |
| `/resume` | Resume and detailed about page |

## Tech Stack

- Next.js 14 App Router
- React 18
- Tailwind CSS
- Framer Motion
- React Icons
- React Type Animation
- `next/font` local Geist fonts
- Google Fonts `Roboto`

## Project Structure

```text
app/
  layout.tsx          Global metadata, fonts, and layout shell
  page.tsx            Home route
  resume/page.tsx     Resume route
  globals.css         Global Tailwind and base styles

components/
  LandingPage.jsx        Landing page composition
  Navbar.jsx             Sticky desktop/mobile navigation
  PortfolioGrid.jsx      Hero cards, skills, featured projects, contact popup
  About.jsx              Resume/about content
  ContactSection.jsx     Footer social links
  WelcomeAnimation.jsx   Intro animation logic
  WelcomeAnimation.css   Intro animation styling
  MouseAnimation.jsx     Custom cursor and trail effect

public/
  *.png / *.jpeg         Project thumbnails and profile image
  Mark Maingi CV.*       Resume files stored as static assets
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Where To Update Content

- Update hero copy, rotating role titles, featured project links, social icons, and the contact popup in `components/PortfolioGrid.jsx`
- Update resume/about content in `components/About.jsx`
- Update navigation items in `components/Navbar.jsx`
- Update the intro animation behavior in `components/WelcomeAnimation.jsx` and `components/WelcomeAnimation.css`
- Update the custom cursor trail in `components/MouseAnimation.jsx`
- Replace project thumbnails, profile image, or CV files in `public/`

## Notes

- The home page currently reveals the main content only after the intro animation completes
- Featured projects are defined in a hardcoded array inside `components/PortfolioGrid.jsx`
- The `/resume` route renders page content directly and does not currently link to the PDF or DOCX CV assets from the UI

## Deployment

This project can be deployed anywhere that supports Next.js. A standard production flow is:

```bash
npm run build
npm run start
```
