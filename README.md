# CRAFT: Product Management Learning Platform

CRAFT is a modern, premium learning operating system built for aspiring and current Product Managers. It abandons the traditional "textbook paragraph" format in favor of highly scannable, visually structured content inspired by Notion, Linear, and modern AI platforms.

## 🚀 Vision

The goal of CRAFT is to provide an interactive, aesthetically pleasing environment for continuous learning. It is structured to allow students to understand core PM and AI concepts in 30–60 seconds per module through:
- Expandable Mindmap Nodes
- Flowchart-style layouts
- Visual Insight Cards
- Direct Drive integrations

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: Pure CSS Modules with a strictly defined Apple/Linear-inspired token system
- **Design Paradigm**: Dark Mode / Monochrome Base / Saffron Accents / Glassmorphism
- **Icons**: Custom inline SVGs

## 📁 Current Structure

```
PM_Resources/
├── app/                  # Next.js App Router (pages & global layouts)
│   ├── globals.css       # Core design tokens and CSS variables
│   ├── layout.js         # Root layout structure
│   └── page.js           # Main landing page
├── components/           # Modular React UI Components
│   ├── Hero/             # Top-level introduction and branding
│   ├── FlowchartModule/  # The core interactive learning engine
│   ├── Navbar/           # Main navigation
│   ├── Footer/           # Branding and contact form
│   └── ...               # Additional UI elements
├── data/                 # Static content configuration
│   └── modules.js        # Data array powering the learning modules
└── public/               # Static assets (images, Swami Vivekananda hero image)
```

## 🧠 The Learning Engine (`FlowchartModule`)

The core of the CRAFT experience runs through the `FlowchartModule`.
- **Intelligent Expanding**: Uses a CSS Grid `grid-template-rows: 0fr -> 1fr` technique for buttery-smooth expand/collapse animations that naturally respond to content height.
- **Scroll Synchronization**: Automatically scrolls opened modules perfectly into view without jarring layout shifts.
- **Micro-interactions**: Subtle hover states, glowing borders, and animated mindmap toggles designed to feel premium and satisfying.

## 💻 Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment (Render/Vercel)

This application is built as a standard Next.js project and is highly optimized for Edge deployment.

**Steps for Render:**
1. Create a new Web Service on Render.
2. Connect this GitHub repository.
3. Build Command: `npm run build`
4. Start Command: `npm run start`
5. (Optional) Set environment variables if connecting to an external database in the future.

## 📬 Contact & Forms

The site features a functional "Get in Touch" form located in the Footer, powered securely by [FormSubmit](https://formsubmit.co/). It sends inquiries directly to the project maintainer without exposing email addresses to spam bots.

---
*Designed & Maintained by [Aditya Kuranjekar](https://github.com/adityakuranjekar)*
