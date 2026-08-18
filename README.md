# SolidGround — Heavy Infrastructure & Civil Construction

[![Live Demo](https://img.shields.io/badge/demo-online-orange.svg?style=flat-square)](https://umerkhan6967.github.io/construction-site/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717.svg?style=flat-square&logo=github)](https://github.com/umerkhan6967/construction-site)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

A high-performance, dark + safety orange responsive web application for **SolidGround Infrastructure & Construction**, a heavy civil engineering firm specializing in bridges, transportation corridors, commercial superstructures, and industrial megaprojects.

Built with **vanilla HTML5, CSS3, and modern JavaScript (ES6+)** with zero framework dependencies.

---

## 🌐 Live Deployment & Repository

- **Live Website**: [https://umerkhan6967.github.io/construction-site/](https://umerkhan6967.github.io/construction-site/)
- **GitHub Repository**: [https://github.com/umerkhan6967/construction-site](https://github.com/umerkhan6967/construction-site)

---

## 🛠️ Tech Stack

- **Markup**: Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) with ARIA accessibility labels.
- **Styling**: Vanilla CSS3 design system using Custom Properties (CSS Variables), clamp typography scaling, and fluid grid systems.
- **Interactivity**: Pure Vanilla JavaScript (ES6 Modules, IntersectionObserver API, requestAnimationFrame counters, accessible modal focus trapping).
- **Typography**: Google Fonts — *Barlow Condensed* (Display headings) & *Inter* (Body copy).
- **Icons**: Handcrafted Tabler outline vector SVGs.
- **Performance**: Zero external build dependencies, sub-second First Contentful Paint (FCP), smooth 60fps animations.

---

## 📁 Folder Structure

```
construction-site/
├── index.html                  # Homepage (Hero, Services, Stats, Projects, Testimonials, CTA Form)
├── projects.html               # Projects Portfolio (Filterable grid, Milestone timeline modal)
├── capabilities.html           # Capabilities & Safety (Interactive tabs, Safety strip, Cert tooltips)
├── fleet.html                  # Machinery Fleet (Filterable equipment catalogue, Spec table modal)
├── request-a-bid.html          # Request a Bid (Two-column layout, FAQ accordion, Validated RFP form)
│
├── css/
│   ├── variables.css           # CSS custom property design tokens (Colors, Typography, Spacing)
│   ├── base.css                # CSS reset, typography clamps, button primitives
│   ├── layout.css              # 1280px container, fluid grid system, sticky header, mobile drawer, footer
│   ├── components.css          # Cards, badges, stats strip, accordion, custom select, modal controllers
│   └── animations.css          # Scroll reveals, staggered delays, sequential hero animation, reduced-motion
│
├── js/
│   ├── main.js                 # Global controllers (window.SGModal, window.SGFilter, IntersectionObserver, Stats)
│   ├── loader.js               # Page initialization and loader transition
│   ├── nav.js                  # Sticky header scroll effects & mobile drawer toggle
│   ├── projects.js             # Project dataset & milestone stepper modal logic
│   ├── capabilities.js         # Tab switching and safety counter animations
│   ├── fleet.js                # Equipment catalogue dataset & spec table modal logic
│   └── form.js                 # Request a Bid interactive validation & FAQ accordion controller
│
├── assets/
│   ├── icons/
│   │   └── favicon.svg         # Geometric faceted diamond favicon
│   └── images/                 # High-resolution civil engineering & machinery photography
│       ├── hero-construction.jpg
│       ├── project-bridge.jpg
│       ├── project-industrial.jpg
│       ├── project-arena.jpg
│       ├── project-highrise.jpg
│       ├── project-highway.jpg
│       ├── project-tunnel.jpg
│       ├── fleet-excavator.jpg
│       ├── fleet-crane.jpg
│       ├── fleet-bulldozer.jpg
│       ├── fleet-mixer.jpg
│       └── fleet-dumptruck.jpg
│
└── README.md
```

---

## 📄 Pages Overview

### 1. Homepage (`index.html`)
- **Page Hero**: High-impact construction photography with dark gradient overlay, sequential headline entrance animation (*"WE BUILD / WHAT MATTERS"*), and dual CTA buttons.
- **Services Grid**: 6-column responsive grid showcasing Heavy Construction, Infrastructure, Earthwork, Concrete Work, Steel Structures, and Project Management.
- **Animated Stats Strip**: Full-width safety orange strip with count-up counters (25+ Years, 650+ Projects, 1200+ Professionals, 100% Safety Commitment).
- **Recent Projects**: Curated 3-column project cards with category badges and detail routing.
- **Client Testimonials**: Two-column layout with authentic quote marks and client avatar credentials.
- **Contact / CTA Split**: Two-column contact section with direct RFP enquiry form.

### 2. Projects Portfolio (`projects.html`)
- **Category Filter Bar**: Sticky sub-navigation filtering projects by *All*, *Roads & Highways*, *Bridges*, *Commercial*, and *Industrial*.
- **9 Landmark Project Cards**: High-res photography, location metadata, and orange hover borders.
- **Interactive Milestone Modal**: Accessible modal dialog displaying project overview, structural metadata, and a multi-stage timeline stepper (*Groundbreaking → Foundation → Superstructure → Handover*).

### 3. Capabilities & Safety (`capabilities.html`)
- **Capabilities Tabs**: 5 interactive tabs (*Site Preparation*, *Structural Engineering*, *Heavy Lifting*, *Quality Assurance*, *Safety Management*) with smooth crossfade content switching.
- **Safety Metrics Strip**: Animated badge counters highlighting *OSHA Platinum Record*, *3.2M Safe Man-Hours*, *Zero Lost-Time Incidents*, and *100% Certified Field Supervisors*.
- **Accreditations & Certifications**: 6 industry certification cards (ISO 9001, ISO 45001, OSHA Platinum, AISC, ACI, LEED Gold) with pure CSS hover tooltips.

### 4. Machinery Fleet Catalogue (`fleet.html`)
- **Heavy Machinery Filter Bar**: Category filters for *All*, *Excavators*, *Cranes*, *Bulldozers*, and *Concrete Mixers*.
- **11 Equipment Fleet Units**: Rich data cards with operational horsepower, tonnage capacity, and model year.
- **Machinery Spec Table Modal**: Two-column technical specification breakdown table for heavy civil procurement.

### 5. Request a Bid & Tender Portal (`request-a-bid.html`)
- **Two-Column Layout**: Left column with value propositions, Lahore headquarters contact details, and an interactive 3-question FAQ accordion.
- **Validated RFP Form**: 2x2 contact info grid, custom project type / budget / timeline dropdowns, custom file attachment uploader, and consent checkbox.
- **Interactive Validation**: Real-time inline error messaging in orange-red (`#FF4D4D`) with full-column confirmation screen on submit.

---

## 🎨 Design System & Color Palette

| Token | Hex | Usage |
| :--- | :--- | :--- |
| `--color-dark` | `#0D0D0D` | Primary deep black background |
| `--color-dark-2` | `#1A1A1A` | Secondary dark background & card surfaces |
| `--color-dark-3` | `#232323` | Subtle card borders, input backgrounds, and panels |
| `--color-orange` | `#E8610A` | Primary construction safety orange accent |
| `--color-orange-hover` | `#FF7A1F` | Interactive hover accent |
| `--color-white` | `#FFFFFF` | Primary headings & high-contrast text |
| `--color-grey-light` | `#CCCCCC` | Secondary body text & descriptions |
| `--color-grey` | `#888888` | Muted labels, captions, and placeholders |
| `--color-border` | `#2A2A2A` | Structural hairline dividers |

---

## 🚀 How to Run Locally

Because this project is built with vanilla HTML/CSS/JS, no compilation or bundler is required.

### Method 1: Direct Browser Launch
Simply double-click `index.html` in your file explorer or open it directly in Google Chrome, Safari, Firefox, or Microsoft Edge.

### Method 2: Local HTTP Server (Recommended)
Using Python:
```bash
python -m http.server 3000
```
Or using Node.js / npx:
```bash
npx serve .
```
Then navigate to `http://localhost:3000` in your web browser.

---

## 📱 Responsive Breakpoints Tested

- **320px (Small Mobile)**: Single column layouts, fluid typography clamps (`clamp(32px, 7vw, 76px)`), zero horizontal scroll.
- **375px (Standard Mobile)**: 16px fluid gutters and full-width touch targets.
- **768px (Tablet)**: 2-column grids for services, stats, projects, and fleet; slide-out navigation drawer.
- **1024px (Laptop)**: 3-column grids, 4-column footer, full horizontal navbar.
- **1440px (Desktop)**: Centered `1280px` max-width container with `80px 0` section padding.

---

## 👨‍💻 Author & Credits

- **Built by**: [Umer Khan](https://github.com/umerkhan6967)
- **Portfolio**: [https://github.com/umerkhan6967](https://github.com/umerkhan6967)
- **Repository**: [https://github.com/umerkhan6967/construction-site](https://github.com/umerkhan6967/construction-site)

Copyright © 2026 SolidGround Infrastructure & Construction. All Rights Reserved.
