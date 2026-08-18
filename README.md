# SolidGround Infrastructure & Construction

A high-performance, responsive web application for **SolidGround Infrastructure & Construction**, built with pure vanilla HTML5, CSS3, and modern JavaScript.

## Design System Specifications

### Exact Color Tokens
- `--color-dark`: `#0D0D0D` (Near-black background)
- `--color-dark-2`: `#1A1A1A` (Cards and alternating sections)
- `--color-dark-3`: `#232323` (Card borders & dividers)
- `--color-orange`: `#E8610A` (Primary brand accent)
- `--color-orange-hover`: `#FF7A1F` (Hover states)
- `--color-white`: `#FFFFFF` (Primary text)
- `--color-grey`: `#A0A0A0` (Body & secondary text)
- `--color-grey-light`: `#CCCCCC` (Lighter secondary text)
- `--color-border`: `#2A2A2A` (Hairline structural borders)

### Typography
- **Display & Headings**: `Barlow Condensed` (600, 700, 800) – bold, uppercase, tight letter spacing.
- **Body Text**: `Inter` (400, 500, 600) – clean, readable.

### Layout & Component Rules
- 0px border-radius on action buttons (sharp industrial rectangular styling).
- 4px max border-radius on cards.
- Alternating dark sections (`#0D0D0D` and `#1A1A1A`).
- Reusable `.eyebrow` class with orange uppercase styling.
- Reusable `.section-title` class with clamp scaling.
- Buttons with automated arrow transition `→`.

## Project Structure
```
/
├── index.html            # Main Homepage with Hero, Stats, Capabilities, Estimator, and Projects
├── projects.html         # Portfolio grid with filter controls and modal inspector
├── capabilities.html     # Detailed engineering and EPC services
├── fleet.html            # Equipment fleet, machinery specs, and site technology
├── request-a-bid.html    # RFQ and Tender submission portal
├── css/
│   ├── variables.css     # CSS custom property tokens
│   ├── base.css          # CSS reset, Google Fonts, base typography, and button primitives
│   ├── layout.css        # Responsive container, grid systems, alternating section backgrounds, navigation, footer
│   ├── components.css    # Cards, badges, stats boxes, forms, filter bars, modals
│   └── animations.css    # Keyframe animations, preloader, ticker
├── js/
│   ├── main.js           # Interactive features (Stats counter, filters, modal, dynamic estimator)
│   ├── loader.js         # Preloader fadeout
│   └── nav.js            # Sticky header, active link tracking, mobile navigation drawer
├── assets/
│   ├── images/           # High-resolution project and fleet photography
│   └── icons/            # SVG outline icons
└── README.md
```

## Running the Project
Open any `.html` file in your browser or run a lightweight local static server:
```bash
npx serve .
```
