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

## 🏗️ Scalable MDX Architecture

The platform has been meticulously re-architected to separate **code from content**, ensuring infinite scalability as the resource library grows.
- **`next-mdx-remote` Engine**: All course content is written in highly maintainable `.mdx` files stored in the `/content` directory.
- **Server-Side Compilation**: Content is parsed and compiled instantly on the server, drastically reducing the JavaScript bundle size and ensuring blazing-fast load times.
- **Reusable Premium Components**: The MDX compiler automatically maps raw text and custom tags directly to our bespoke `LearningComponents` library (Insight Cards, Interactive Mindmaps, Triple Intersects), maintaining 100% visual fidelity without cluttering the UI codebase.

## 📁 Current Structure

```
PM_Resources/
├── app/                  # Next.js App Router (pages & global layouts)
│   ├── craft/            # PM Modules route (Parses MDX dynamically)
│   ├── globals.css       # Core design tokens and CSS variables
│   └── page.js           # Main landing page
├── content/              # The Content Engine
│   └── craft/            # Raw .mdx files defining the module curriculum
├── components/           # Modular React UI Components
│   ├── FlowchartModule/  # The core interactive learning engine wrapper
│   ├── learning/         # The library of premium components mapped to MDX
│   └── ...               # Additional UI elements (Navbar, Footer, Hero)
├── data/                 # Static content configuration
│   └── modules.js        # High-level data array for curriculum flow
└── public/               # Static assets
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

## 🚀 Deployment (Vercel)

This application is built as a standard Next.js project and is highly optimized for Edge deployment on Vercel.

**Steps for Vercel:**
1. Create an account on [Vercel](https://vercel.com/) and click **Add New → Project**.
2. Connect your GitHub account and select this repository.
3. Vercel will automatically detect that it is a Next.js project.
4. Leave the default build settings as they are.
5. Click **Deploy**.

Vercel will automatically pull the code, build the optimized production version, and host it! Every future push to the `main` branch on GitHub will automatically trigger a new deployment.

## 📬 Contact & Forms

The site features a functional "Get in Touch" form located in the Footer, powered securely by [FormSubmit](https://formsubmit.co/). It sends inquiries directly to the project maintainer without exposing email addresses to spam bots.

---
*Designed & Maintained by [Aditya Kuranjekar](https://github.com/adityakuranjekar)*
