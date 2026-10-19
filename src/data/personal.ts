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

export interface Achievement {
  id: string;
  title: string;
  metric: string;
  category: 'Olympiad & CP' | 'Academics' | 'STEM & Innovation' | 'Leadership' | 'Entrepreneurship' | 'Athletics' | 'Engineering';
  organization: string;
  year?: string;
  description: string;
  highlightBadge?: string;
  iconName: 'Trophy' | 'Award' | 'GraduationCap' | 'Shield' | 'Code' | 'Atom' | 'Sparkles' | 'BookOpen' | 'Mic' | 'Rocket';
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
  headline: "Writing code since age 12 (pre-AI era) • Full Stack Developer & JEE 2027 Aspirant.",
  bio: "I began coding at age 12—in the pre-AI era, when mastering software development meant reading raw technical documentation, deciphering compiler errors, and debugging cryptic stack traces from first principles. Today, I am a self-taught full-stack developer and competitive problem solver in Pune preparing for JEE 2027 at Bakliwal Tutorials. My work bridges low-level desktop systems in Rust & Tauri, physics domain-specific languages, penetration testing & vulnerability analysis, and high-performance web frontends.",
  location: "Pune, India",
  email: "shahaayush265@gmail.com",
  github: "https://github.com/shahaayush265",
  githubUsername: "shahaayush265",
  status: "Coding Since 12 • JEE 2027 Prep • Building Systems",

  stats: [
    { label: "Coding Origin", value: "Age 12 (Pre-AI)" },
    { label: "CBSE 10th Score", value: "98.8%" },
    { label: "Target Exam", value: "JEE 2027" },
    { label: "Olympiad Milestone", value: "Cleared ZCO (11th)" }
  ],

  education: [
    {
      institution: "Bakliwal Tutorials",
      location: "Pune, Maharashtra",
      degree: "JEE Advanced 2027 Preparation",
      duration: "2025 - Present (Targeting 2027)",
      description: "Undergoing intensive advanced training in Physics (Newtonian Mechanics, Electrodynamics, Modern Physics), Advanced Mathematics (Calculus, Coordinate Geometry, Vectors & Probability), and Chemistry.",
      skillsOrFocus: ["Rigorous Analytical Thinking", "Mathematical Problem Solving", "Physics Modeling"]
    },
    {
      institution: "Shantiniketan School",
      location: "Kolhapur, Maharashtra",
      degree: "Class 10 CBSE Board Examinations",
      duration: "Graduated with Distinction",
      score: "98.8%",
      description: "Achieved top academic honors with 98.8% in the All India Secondary School Examination (CBSE 10th Boards), developing a strong foundational curiosity for computer science and sciences.",
      skillsOrFocus: ["Academic Excellence", "STEM Foundations", "Competitive Academics"]
    },
    {
      institution: "Self-Directed Software Engineering",
      location: "First-Principles Craft",
      degree: "Coding Since Age 12 (Pre-AI Era)",
      duration: "2020 - Present",
      description: "Began programming at age 12 long before LLMs or AI assistants existed. Mastered software engineering fundamentals through raw documentation, manual compiler diagnostics, algorithmic problem solving, and building complete production applications from scratch.",
      skillsOrFocus: ["First-Principles Thinking", "Manual Debugging & Tracing", "Raw Documentation Mastery", "System Architecture"]
    }
  ] as EducationItem[],

  achievements: [
    {
      id: "zco-olympiad",
      title: "Cleared Zonal Computing Olympiad (ZCO)",
      metric: "Cleared (11th)",
      category: "Olympiad & CP",
      organization: "IARCS (Indian Association for Research in Computing Science)",
      highlightBadge: "7 Days Prep • 1st Attempt",
      description: "Cleared ZCO in Class 11 with just 7 days of preparation—learning C++ syntax, dynamic programming, and core algorithms from scratch with zero prior competitive programming experience.",
      iconName: "Code"
    },
    {
      id: "cbse-10th",
      title: "Class 10 CBSE Board Examinations",
      metric: "98.8%",
      category: "Academics",
      organization: "Shantiniketan School, Kolhapur",
      highlightBadge: "Top Academic Honors",
      description: "Secured an exceptional 98.8% in the Class 10 CBSE All India Secondary School Examination, demonstrating top academic rigor across Mathematics, Science, and languages.",
      iconName: "Award"
    },
    {
      id: "cbse-national-science",
      title: "CBSE National Science Exhibition",
      metric: "2x Representative",
      category: "STEM & Innovation",
      organization: "Shantiniketan School / CBSE National",
      highlightBadge: "National Level",
      description: "Twice selected to represent Shantiniketan School at the prestigious CBSE National Science Exhibition Competition, architecting and demonstrating applied scientific prototypes.",
      iconName: "Atom"
    },
    {
      id: "aura-best-startup",
      title: "1st Prize: Best Startup (Aura 2025)",
      metric: "1st Prize",
      category: "Entrepreneurship",
      organization: "Aura Cultural Fest • Shantiniketan School",
      highlightBadge: "Winner (2025)",
      description: "Awarded 1st prize for Best Startup in the 2025 edition of Aura, Shantiniketan School's premier inter-school cultural fest, formulating pitch deck, unit economics, and product design.",
      iconName: "Trophy"
    },
    {
      id: "atl-ambassador",
      title: "Atal Tinkering Lab (ATL) Ambassador",
      metric: "Class 9th",
      category: "Leadership",
      organization: "Atal Innovation Mission (AIM) • Shantiniketan School",
      highlightBadge: "STEM Ambassador",
      description: "Appointed as the Atal Tinkering Lab Ambassador in 9th grade, spearheading hands-on robotics/electronics experimentation and mentoring junior students in innovation workshops.",
      iconName: "Sparkles"
    },
    {
      id: "library-incharge",
      title: "School Library Incharge",
      metric: "Class 10th",
      category: "Leadership",
      organization: "Shantiniketan School, Kolhapur",
      highlightBadge: "Student Leadership",
      description: "Appointed as Library Incharge in 10th grade, managing circulation, curating scientific & literary collections, and fostering a strong reading culture across the school.",
      iconName: "BookOpen"
    },
    {
      id: "karate-green-belt",
      title: "Karate Green Belt Certification",
      metric: "Green Belt",
      category: "Athletics",
      organization: "Martial Arts Academy",
      highlightBadge: "Discipline & Form",
      description: "Achieved the Green Belt rank in Karate through rigorous testing of kata forms, physical conditioning, and mental composure under high pressure.",
      iconName: "Shield"
    },
    {
      id: "open-source-software",
      title: "Open Source Systems Engineering",
      metric: "5+ Systems Built",
      category: "Engineering",
      organization: "Independent Open Source",
      highlightBadge: "Systems Craft",
      description: "Architected and published cross-platform desktop applications (VLC Reborn in Tauri v2 & Rust), a domain-specific mechanics diagram markup language (MechTeX), SmarterAPI on npm, and simulated annealing physics visualizers (Pendula).",
      iconName: "Code"
    }
  ] as Achievement[],

  skillCategories: [
    {
      title: "Core Languages",
      icon: "Code2",
      skills: [
        { name: "C++", level: "Algorithms, ZCO & Systems", iconColor: "text-blue-400" },
        { name: "Python", level: "Scripting, Automation & AI", iconColor: "text-yellow-400" },
        { name: "TypeScript", level: "Type-Safe Systems", iconColor: "text-sky-400" },
        { name: "JavaScript", level: "Modern ESNext", iconColor: "text-amber-300" },
        { name: "SQL", level: "Queries & Relational Modeling", iconColor: "text-emerald-400" }
      ]
    },
    {
      title: "Cybersecurity & Systems",
      icon: "ShieldAlert",
      skills: [
        { name: "Penetration Testing", level: "Network Recon & Security", iconColor: "text-red-400" },
        { name: "Vulnerability Analysis", level: "Exploit Assessment", iconColor: "text-rose-400" },
        { name: "Kali Linux", level: "Security Distro & Shell", iconColor: "text-blue-400" },
        { name: "Metasploit (msf)", level: "Payloads & Framework", iconColor: "text-orange-400" },
        { name: "Tauri v2 / Rust", level: "Secure Native IPC Bridges", iconColor: "text-amber-400" }
      ]
    },
    {
      title: "Frontend & UI Engineering",
      icon: "Layout",
      skills: [
        { name: "React.js", level: "Component Systems & Hooks", iconColor: "text-cyan-400" },
        { name: "Angular", level: "Enterprise Architectures", iconColor: "text-red-400" },
        { name: "Tailwind CSS", level: "Responsive Tokens & Grids", iconColor: "text-teal-400" },
        { name: "Framer Motion", level: "Fluid Physics Animations", iconColor: "text-purple-400" },
        { name: "HTML5 Canvas / SVG", level: "Diagram & Visualizer Engines", iconColor: "text-orange-400" }
      ]
    },
    {
      title: "Backend, Cloud & Tools",
      icon: "Server",
      skills: [
        { name: "Supabase", level: "Postgres, Auth & Realtime", iconColor: "text-emerald-400" },
        { name: "Node.js / Express", level: "REST APIs & npm Packages", iconColor: "text-green-500" },
        { name: "PostgreSQL", level: "Relational Schemas", iconColor: "text-blue-500" },
        { name: "Git & GitHub Actions", level: "CI/CD & Version Control", iconColor: "text-slate-200" },
        { name: "Linux / Shell Scripting", level: "Environment Automation", iconColor: "text-yellow-400" }
      ]
    },
    {
      title: "Public Speaking & Leadership",
      icon: "Mic",
      skills: [
        { name: "Public Speaking & Elocution", level: "Inter-School Competitions", iconColor: "text-amber-400" },
        { name: "Debates & Discussions", level: "Persuasive Argumentation", iconColor: "text-cyan-400" },
        { name: "Theatrical Acts & Drama", level: "Stage Expression & Voice", iconColor: "text-purple-400" },
        { name: "STEM Mentorship", level: "Atal Tinkering Lab Ambassador", iconColor: "text-emerald-400" }
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
      description: "Passionate about calculating positional depth, tactical combinations, and endgame precision on the 8x8 board.",
      details: "Teaches patience, calm decision-making under time pressure, and the art of looking several moves ahead."
    },
    {
      id: "painting",
      title: "Acrylic Painting",
      icon: "Palette",
      badge: "Visual Arts",
      description: "Exploring color harmony, layered textures, and expressive composition on canvas with acrylic paints.",
      details: "A creative and meditative outlet providing balance to intense analytical and mathematical problem-solving."
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
      description: "Avid reader of fantasy and mythological fiction, captivated by grand worldbuilding and legendary epics.",
      details: "A great counterbalance to heavy STEM study, unlocking creative perspectives and legendary storytelling."
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
