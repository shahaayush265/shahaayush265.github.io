---
name: portfolio-manage
description: >-
  Manage and update Aayush Shah's portfolio website (shahaayush265.github.io).
  Use this skill to add or update projects, major achievements, education & journey milestones,
  skills & disciplines, or hobbies & passions, compile, and deploy to GitHub Pages.
---

# Portfolio Manager Skill (`portfolio-manage`)

This skill equips Antigravity to manage and update any section of Aayush Shah's live personal portfolio website at `shahaayush265.github.io`.

## Repository Root
`/home/aayush/projects/shahaayush265.github.io`

---

## 1. Adding or Updating Projects

All projects are strictly typed in `src/data/projects.ts`.

### Schema:
```typescript
export interface Project {
  id: string;              // unique kebab-case slug (e.g., 'quantum-sim')
  title: string;           // Display title
  tagline: string;         // 1-sentence punchy summary
  description: string;     // 2-3 sentence technical overview
  category: ProjectCategory; // 'All' | 'Systems & Desktop' | 'Compilers & DSLs' | 'Physics & Math' | 'Financial & APIs' | 'AI & Tools'
  tags: string[];          // ['Rust', 'Tauri v2', 'TypeScript', ...]
  iconName: 'Play' | 'Atom' | 'Cpu' | 'Terminal' | 'Layers';
  repoUrl?: string;        // Full GitHub URL
  demoUrl?: string;        // Live web demo URL
  releaseUrl?: string;     // GitHub Releases binary download URL
  featured?: boolean;      // Displays prominent badge if true
  stats?: { label: string; value: string }; // e.g. { label: 'Releases', value: 'v1.0.0' }
}
```

### Steps to Add a Project:
1. Open `src/data/projects.ts`.
2. Append or insert the new `Project` object into the `PROJECTS` array.
3. If introducing a new category, add it to `CATEGORIES` array and update the `ProjectCategory` union type.
4. Run `npm run build` to verify clean compilation.

---

## 2. Adding or Updating Major Achievements

All achievements are stored in `src/data/personal.ts` under `PERSONAL_DATA.achievements`.

### Schema:
```typescript
export interface Achievement {
  id: string;             // unique slug (e.g. 'zco-2025')
  title: string;          // e.g. 'Cleared Zonal Computing Olympiad (ZCO)'
  metric: string;         // e.g. 'Qualified' or '98.8%' or '1st Prize'
  category: 'Olympiad & CP' | 'Academics' | 'STEM & Innovation' | 'Leadership' | 'Entrepreneurship' | 'Athletics' | 'Engineering';
  organization: string;   // e.g. 'IARCS / NPTEL' or 'CBSE'
  year?: string;          // e.g. 'Class 11' or '2025'
  description: string;    // Clear context of the feat
  highlightBadge?: string;// e.g. '7 Days Prep'
  iconName: 'Trophy' | 'Award' | 'GraduationCap' | 'Shield' | 'Code' | 'Atom' | 'Sparkles' | 'BookOpen' | 'Mic' | 'Rocket';
}
```

### Steps to Add an Achievement:
1. Open `src/data/personal.ts`.
2. Add the item to `PERSONAL_DATA.achievements`.
3. If an icon is needed, make sure it is imported and rendered in `src/components/Achievements.tsx`.

---

## 3. Adding or Updating Education & Journey Timeline

Milestones are configured in `src/components/Timeline.tsx` and mirrored in `PERSONAL_DATA.education`.

### Structure:
```typescript
{
  period: "2025 - Present",
  target: "JEE 2027",
  institution: "Bakliwal Tutorials",
  location: "Pune, Maharashtra",
  degree: "JEE Advanced 2027 Intensive Preparation",
  accent: "cyan",
  badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
  icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
  description: "Detailed description...",
  tags: ["Advanced Newtonian Physics", "Calculus & Optimization"]
}
```

### Steps to Update Timeline:
1. Open `src/components/Timeline.tsx`.
2. Add or update items in the `milestones` array.
3. Update `PERSONAL_DATA.education` in `src/data/personal.ts` if relevant.

---

## 4. Adding or Updating Skills & Disciplines

Skills are declared in `src/data/personal.ts` under `PERSONAL_DATA.skillCategories`.

### Schema:
```typescript
export interface SkillCategory {
  title: string;        // e.g. 'Cybersecurity & Pentesting'
  icon: string;         // 'Terminal' | 'Code2' | 'Database' | 'Cpu' | 'Shield' | 'Sparkles'
  skills: { name: string; level?: string; iconColor?: string }[];
}
```

### Steps to Add Skills:
1. Open `src/data/personal.ts`.
2. Add to existing category or create a new `SkillCategory`.
3. If a new icon is used, ensure it is handled in `src/components/Skills.tsx`.

---

## 5. Adding or Updating Hobbies & Passions

Hobbies are declared in `src/data/personal.ts` under `PERSONAL_DATA.hobbies`.

### Schema:
```typescript
export interface Hobby {
  id: string;          // e.g. 'acrylic-painting'
  title: string;       // e.g. 'Acrylic Painting & Fine Arts'
  icon: string;        // 'Palette' | 'BookOpen' | 'Dumbbell' | 'Gamepad2'
  badge: string;       // e.g. 'Creative Flow'
  description: string; // Summary
  details: string;     // In-depth detail
}
```

### Steps to Add Hobbies:
1. Open `src/data/personal.ts`.
2. Add the hobby item to `PERSONAL_DATA.hobbies`.
3. If a custom interactive component is needed (like Chess or Physics Visualizer), mount it in `src/components/Hobbies.tsx`.

---

## 6. Verification and Deployment Protocol

Whenever changes are made:
```bash
# 1. Verify build
npm run build

# 2. Commit changes
git add .
git commit -m "feat(portfolio): update [section] with [details]"

# 3. Deploy live via GitHub Pages
git push origin main
```
The GitHub Actions workflow (`deploy.yml`) will build and publish automatically to `https://shahaayush265.github.io`.
