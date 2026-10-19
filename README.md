# Aayush Shah — Personal Portfolio & Engineering Showcase

A personal website and engineering portfolio for **Aayush Shah** ([@shahaayush265](https://github.com/shahaayush265)) — Self-taught Full Stack Developer & JEE 2027 Aspirant.

Built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, styled in a modern Linear/Vercel dark-mode Bento Grid aesthetic with interactive physics and logic widgets.

Hosted 100% free on **GitHub Pages** with automatic CI/CD deployment on push via **GitHub Actions**.

---

## 🚀 Live Website
🔗 **[https://shahaayush265.github.io](https://shahaayush265.github.io)**

---

## ✨ Key Highlights

- **Bento-Grid Architecture**: Clean, card-based layout inspired by modern developer ecosystems.
- **Interactive Physics Engine**: Real-time Damped Simple Harmonic Motion (SHM) kinematics canvas inspired by [Pendula](https://github.com/shahaayush265/pendula) and [MechTeX](https://github.com/shahaayush265/mechtex).
- **Interactive Chess Tactics Lab**: Mini playable Queen Sacrifice Smothered Mate sequence.
- **3D Algorithmic Rubik's Cube**: Cursor-tracking 3D CSS Rubik's cube highlighting spatial algorithms.
- **Extensible Projects Repository**: Dedicated, strictly typed data model (`src/data/projects.ts`) ready for Antigravity AI skills or manual updates.
- **Zero-Friction GitHub Pages Hosting**: Pushing to `main` builds and publishes the production bundle automatically.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [GitHub Pages](https://pages.github.com/) via official GitHub Actions (`actions/deploy-pages@v4`)

---

## 💻 Local Development

```bash
# 1. Clone repository
git clone https://github.com/shahaayush265/shahaayush265.github.io.git
cd shahaayush265.github.io

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build for production
npm run build
```

---

## 🤖 Adding New Projects (For You & AI Agents)

New projects can be added effortlessly by modifying `src/data/projects.ts`. The UI automatically renders them with filters, highlights, and icons.

```typescript
// Append a new object to PROJECTS in src/data/projects.ts:
{
  id: 'my-new-project',
  title: 'My Project Name',
  tagline: 'Short punchy tagline',
  description: 'Detailed explanation of what it does and why it was built.',
  category: 'Systems & Apps', // 'Systems & Apps' | 'Physics & Math' | 'Tools & Dev' | 'Web Apps'
  techStack: ['React', 'TypeScript', 'Tailwind CSS'],
  highlights: [
    'Key architecture highlight',
    'Performance achievement'
  ],
  githubUrl: 'https://github.com/shahaayush265/my-new-project',
  liveUrl: 'https://demo.example.com', // optional
  featured: true, // true to feature on top
  iconName: 'Play', // 'Play' | 'Atom' | 'Terminal' | 'Cpu' | 'Layers'
}
```

---

## 🌐 GitHub Pages Deployment Setup

1. In your GitHub repository: go to **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Push your changes to the `main` branch.
4. GitHub Actions will automatically execute `.github/workflows/deploy.yml` and publish your site!
