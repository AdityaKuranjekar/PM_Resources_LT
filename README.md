<div align="center">

<br/>

```
██████╗ ███╗   ███╗    ██████╗ ███████╗███████╗ ██████╗ ██╗   ██╗██████╗  ██████╗███████╗███████╗
██╔══██╗████╗ ████║    ██╔══██╗██╔════╝██╔════╝██╔═══██╗██║   ██║██╔══██╗██╔════╝██╔════╝██╔════╝
██████╔╝██╔████╔██║    ██████╔╝█████╗  ███████╗██║   ██║██║   ██║██████╔╝██║     █████╗  ███████╗
██╔═══╝ ██║╚██╔╝██║    ██╔══██╗██╔══╝  ╚════██║██║   ██║██║   ██║██╔══██╗██║     ██╔══╝  ╚════██║
██║     ██║ ╚═╝ ██║    ██║  ██║███████╗███████║╚██████╔╝╚██████╔╝██║  ██║╚██████╗███████╗███████║
╚═╝     ╚═╝     ╚═╝    ╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚══════╝╚══════╝
```

### **Expert Resources in Product Management**
*Curated modules, interview prep, case studies, frameworks, and more — by a PM for future PMs.*

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![MDX](https://img.shields.io/badge/MDX-Powered-F9AC00?style=for-the-badge&logo=mdx&logoColor=black)](https://mdxjs.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![CSS Modules](https://img.shields.io/badge/CSS-Modules-blue?style=for-the-badge&logo=css3&logoColor=white)](https://github.com/css-modules/css-modules)

<br/>

</div>

---

## ❝ What Is This?

This is a **curated, opinionated repository of Product Management resources** — not a course, not a bootcamp, not a textbook.

Think of it as a **personal PM knowledge base made public** — structured like a product, designed like a premium tool, and built to scale like an operating system.

It contains:

| Resource | Description |
|---|---|
| 📚 **PM Modules** | Deep-dive visual notes on core PM concepts |
| 🤖 **AI for PM** | Applied AI, frameworks, and intersection points |
| 🎯 **Interview Prep** | Role-specific questions with structured answers |
| 📂 **Case Studies** | Real product teardowns and decision analysis |
| ✍️ **Blogs** | Original product writing and thought pieces |
| 🔗 **Drive Resources** | Curated external documents, decks, and templates |

---

## 🎨 Design Philosophy

> *"Designed to be scanned in 30 seconds, understood in 3 minutes."*

The UI is heavily inspired by **Linear**, **Notion**, and **Stripe Docs** — intentionally calm, monochromatic, and premium.

- No cluttered dashboards. No flashy gradients.
- Everything is **intentional, editorial, and intellectually sharp.**
- Mobile-responsive, dark mode by default, smooth micro-animations throughout.

---

## 🏗️ Scalable Architecture

The platform runs on a **content-code decoupled architecture** powered by MDX, allowing content to scale infinitely without touching the UI layer.

```
PM_Resources/
│
├── app/                        # Next.js App Router
│   ├── craft/                  # PM Modules page (dynamic MDX rendering)
│   ├── deep-ai/                # Deep AI section
│   ├── craft-ai/               # Craft + AI hybrid content
│   ├── layout.js               # Root layout
│   └── globals.css             # Design token system
│
├── content/                    # ── The Content Engine ──
│   └── craft/
│       ├── module-1.mdx        # Module 1 content (MDX)
│       ├── module-2.mdx        # Module 2 content
│       └── ...                 # Infinite scalable content
│
├── components/
│   ├── FlowchartModule/        # Interactive accordion engine
│   ├── learning/               # Reusable MDX-mapped UI components
│   │   └── LearningComponents.js
│   ├── Navbar/
│   ├── Footer/
│   └── Hero/
│
├── data/
│   └── modules.js              # Curriculum manifest (titles, order, IDs)
│
├── lib/
│   └── content.js              # Server-side MDX file reader utility
│
└── public/                     # Static assets
```

### How MDX Scaling Works

```
Write in MDX                 Parsed on Server              Renders in UI
─────────────               ──────────────────             ──────────────
module-2.mdx          →     lib/content.js         →      <FlowchartModule />
<MindmapNode />             next-mdx-remote               Same premium UI
<Insight type="..." />      maps tags to                  Zero bundle bloat
<FlowStep />                LearningComponents.js          instantly
```

> **Adding a new module is as simple as:** adding an entry in `modules.js` + creating a new `.mdx` file. No React code changes needed.

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | Server Components, routing, SSR |
| **Content Engine** | `next-mdx-remote` v6 | MDX parsing with server-side rendering |
| **Styling** | CSS Modules | Scoped, zero-runtime, tree-shaken styles |
| **Icons** | Custom Inline SVGs | No icon library bloat |
| **Forms** | FormSubmit | Zero-backend contact form integration |
| **Hosting** | Vercel (Edge Network) | Auto-deploy on push, global CDN |
| **Language** | JavaScript (JSX) | React 18 compatible |

---

## 💻 Local Development

```bash
# 1. Clone the repository
git clone https://github.com/adityakuranjekar/PM_Resources.git
cd PM_Resources

# 2. Install all dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open in browser
http://localhost:3000
```

---

## 🚀 Deployment

Hosted on **Vercel** with zero-config deployments.

Every push to the `main` branch automatically triggers a new deployment on Vercel's global edge network. No manual steps required.

```bash
git add .
git commit -m "feat: your descriptive commit message"
git push origin main
# → Vercel auto-deploys within ~60 seconds
```

---

## 📬 Contact & Community

The site features a secure **"Get in Touch"** form in the footer, powered by [FormSubmit](https://formsubmit.co/) — no backend required, no email exposed.

---

## 👤 About the Author

<div align="center">

**Aditya Kuranjekar**

*PM Coordinator, Finance Club · Technical PM Intern @ Inditronix AI Labs · Product Brand Management Intern @ Skillify Me*

[![Portfolio](https://img.shields.io/badge/Portfolio-adityakuranjekar.github.io-FF8C00?style=flat-square&logo=google-chrome&logoColor=white)](https://adityakuranjekar.github.io/)
[![GitHub](https://img.shields.io/badge/GitHub-adityakuranjekar-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/adityakuranjekar)
[![Instagram](https://img.shields.io/badge/Instagram-_aditya.k._12-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://www.instagram.com/_aditya.k._12/)

</div>

---

<div align="center">

*Built with intention. Designed for clarity. Scaled for the future.*

**© 2026 Aditya Kuranjekar**

</div>
