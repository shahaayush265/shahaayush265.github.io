export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  duration: string;
  score?: string;
  description: string;
  skillsOrFocus: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level?: string; iconColor?: string }[];
}

export interface Hobby {
  id: string;
  title: string;
  icon: string;
  badge: string;
  description: string;
  details: string;
}

export const PERSONAL_DATA = {
  name: "Aayush Shah",
  role: "Full Stack Developer & JEE 2027 Aspirant",
  headline: "Building high-performance software, modeling physical systems, and mastering deep problem-solving.",
  bio: "I am a self-taught full-stack developer and rigorous problem solver currently in Pune preparing for JEE 2027 at Bakliwal Tutorials. My passion bridges the gap between deep theoretical sciences—physics, mathematics, and numerical algorithms—and production-grade software craftsmanship. When I am not solving advanced mechanics or calculus problems, I architect cross-platform desktop applications in Rust and Tauri, develop domain-specific languages, and design responsive web experiences.",
  location: "Pune, India",
  email: "shahaaayush265@gmail.com",
  github: "https://github.com/shahaayush265",
  githubUsername: "shahaayush265",
  status: "Balancing JEE 2027 Prep & Open Source Engineering",

  stats: [
    { label: "CBSE 10th Score", value: "98.8%" },
    { label: "Target Examination", value: "JEE 2027" },
    { label: "Core Stack", value: "React • Python • C++" },
    { label: "Primary Focus", value: "Full Stack & Physics DSLs" }
  ],

  education: [
    {
      institution: "Bakliwal Tutorials",
      location: "Pune, Maharashtra",
      degree: "JEE Advanced 2027 Preparation",
      duration: "2024 - Present (Targeting 2027)",
      description: "Undergoing intensive advanced training in Physics (Newtonian Mechanics, Electrodynamics, Modern Physics), Advanced Mathematics (Calculus, Coordinate Geometry, Vectors & Probability), and Chemistry.",
      skillsOrFocus: ["Rigorous Analytical Thinking", "Mathematical Olympiad Problem Solving", "Physics Modeling"]
    },
    {
      institution: "Shantiniketan School",
      location: "Kolhapur, Maharashtra",
      degree: "Class 10 CBSE Board Examinations",
      duration: "Graduated with Distinction",
      score: "98.8%",
      description: "Achieved top academic honors with 98.8% in the All India Secondary School Examination (CBSE 10th Boards), developing a strong foundational curiosity for computer science and sciences.",
      skillsOrFocus: ["Academic Excellence", "STEM Foundations", "Competitive Academics"]
    }
  ] as EducationItem[],

  skillCategories: [
    {
      title: "Core Languages",
      icon: "Code2",
      skills: [
        { name: "C++", level: "Algorithms & Logic", iconColor: "text-blue-400" },
        { name: "Python", level: "Scripting & Automation", iconColor: "text-yellow-400" },
        { name: "TypeScript", level: "Type-Safe Systems", iconColor: "text-sky-400" },
        { name: "JavaScript", level: "Modern ESNext", iconColor: "text-amber-300" },
        { name: "SQL", level: "Queries & Modeling", iconColor: "text-emerald-400" }
      ]
    },
    {
      title: "Frontend & UI",
      icon: "Layout",
      skills: [
        { name: "React.js", level: "Component Systems & Hooks", iconColor: "text-cyan-400" },
        { name: "Angular", level: "Enterprise Architectures", iconColor: "text-red-400" },
        { name: "Tailwind CSS", level: "Design Tokens & Bento Grids", iconColor: "text-teal-400" },
        { name: "Framer Motion", level: "Interactive Animations", iconColor: "text-purple-400" },
        { name: "HTML5 Canvas / SVG", level: "Custom Diagram Rendering", iconColor: "text-orange-400" }
      ]
    },
    {
      title: "Backend, Data & Cloud",
      icon: "Server",
      skills: [
        { name: "Supabase", level: "Postgres, Auth & Realtime", iconColor: "text-emerald-400" },
        { name: "Node.js / Express", level: "REST APIs & Services", iconColor: "text-green-500" },
        { name: "PostgreSQL", level: "Relational Schemas", iconColor: "text-blue-500" },
        { name: "Tauri v2 / Rust", level: "Desktop Native Bridges", iconColor: "text-orange-500" }
      ]
    },
    {
      title: "Tools & Systems",
      icon: "Terminal",
      skills: [
        { name: "Git & GitHub", level: "Version Control & Pages", iconColor: "text-slate-200" },
        { name: "Linux / Shell", level: "Scripting & Environments", iconColor: "text-yellow-500" },
        { name: "Vite", level: "Build Tooling & Bundling", iconColor: "text-purple-400" },
        { name: "GitHub Actions", level: "Continuous Deployment", iconColor: "text-blue-400" }
      ]
    }
  ] as SkillCategory[],

  hobbies: [
    {
      id: "physics-math",
      title: "Physics & Logic Problems",
      icon: "Atom",
      badge: "Core Passion",
      description: "Fascinated by the elegance of Newtonian mechanics, electromagnetism, and calculus-based optimization.",
      details: "Inspired my projects like Pendula (simulated annealing harmonic oscillator fitting) and MechTeX (domain-specific physics diagram language)."
    },
    {
      id: "chess",
      title: "Chess & Strategy",
      icon: "Trophy",
      badge: "Tactician",
      description: "Passionate about calculating positional depth, tactical combinations, and endgame precision.",
      details: "Teaches patience, calm decision-making under time pressure, and the art of looking several moves ahead."
    },
    {
      id: "cubing",
      title: "Speedcubing & Puzzles",
      icon: "Box",
      badge: "Spatial Logic",
      description: "Former speedcuber fond of memorizing algorithmic permutations and spatial pattern matching.",
      details: "Sharpened spatial visualization and fast algorithmic execution under intense constraints."
    },
    {
      id: "fiction",
      title: "Fiction Reading",
      icon: "BookOpen",
      badge: "Imagination",
      description: "Avid reader of worldbuilding fiction, mystery, and gripping narratives.",
      details: "A great counterbalance to heavy STEM study, unlocking creative perspectives and fresh ideas."
    },
    {
      id: "karate",
      title: "Karate (Green Belt)",
      icon: "Shield",
      badge: "Discipline",
      description: "Earned a Green Belt in Karate, practicing kata form, physical conditioning, and mental composure.",
      details: "Instilled relentless discipline, respect, and endurance (temporarily on pause during high school / JEE preparation)."
    }
  ] as Hobby[]
};
