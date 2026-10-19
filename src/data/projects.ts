/**
 * PROJECTS DATA REPOSITORY
 * 
 * NOTE FOR AI AGENTS & ANTIGRAVITY SKILLS:
 * To add a new project, simply append an entry to the `PROJECTS` array below.
 * Each entry must conform to the `Project` interface.
 * Fields:
 * - id: unique slug (e.g. "my-project-name")
 * - title: short human-readable name
 * - tagline: one-line punchy summary
 * - description: 2-3 sentence overview of what it does and why it was built
 * - category: 'Systems & Apps' | 'Physics & Math' | 'Tools & Dev' | 'Web Apps' | 'All'
 * - techStack: list of string tags
 * - highlights: 2-3 bullet highlights
 * - githubUrl: full GitHub repository URL
 * - liveUrl?: optional live demo link
 * - stars?: stargazers count or badge
 * - featured: boolean (true = shown on top/hero bento grid)
 * - iconName: 'Flame' | 'Atom' | 'Terminal' | 'Cpu' | 'Play' | 'Code' | 'Globe' | 'Compass'
 */

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Systems & Apps' | 'Physics & Math' | 'Tools & Dev' | 'Web Apps';
  techStack: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  stars?: number;
  featured: boolean;
  iconName: 'Flame' | 'Atom' | 'Terminal' | 'Cpu' | 'Play' | 'Code' | 'Globe' | 'Layers';
  metrics?: { label: string; value: string }[];
}

export const PROJECTS: Project[] = [
  {
    id: 'vlcreborn',
    title: 'VLC Reborn',
    tagline: 'Modern, high-performance cross-platform media player',
    description: 'A ground-up modern media player crafted with Tauri v2 (Rust) and React 19. Engineered with a hardware-accelerated playback HUD, canvas-driven audio deck, native system window vibrancy, and multi-platform support across Linux, Windows, macOS, and Android.',
    category: 'Systems & Apps',
    techStack: ['Tauri v2', 'Rust', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    highlights: [
      'Multi-platform engine: WebKitGTK (Linux), WebView2 (Windows), WKWebView (macOS), Android WebView',
      'Canvas HUD, custom titlebar, graphic equalizer, and chapter scrubbing',
      'Engineered for libvlc bindings, HDR tone mapping, and P2P watch party support'
    ],
    githubUrl: 'https://github.com/shahaayush265/vlcreborn',
    featured: true,
    iconName: 'Play',
    metrics: [
      { label: 'Architecture', value: 'Rust + React 19' },
      { label: 'Platforms', value: '4 Operating Systems' }
    ]
  },
  {
    id: 'mechtex',
    title: 'MechTeX',
    tagline: 'Domain-specific LaTeX-like language for mechanics diagrams',
    description: 'A specialized markup language and interactive web editor designed for physics students and educators. Effortlessly write declarative code to specify blocks, pulleys, strings, force vectors, and inclined planes, rendering precise physics diagrams in real-time.',
    category: 'Physics & Math',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'SVG Renderer', 'DSL Parser'],
    highlights: [
      'Custom declarative domain-specific grammar for Newtonian mechanics',
      'Live in-browser preview and vector SVG rendering of complex pulley systems',
      'Web-based code editor tailored for physics educators and competitive JEE exam prep'
    ],
    githubUrl: 'https://github.com/shahaayush265/mechtex',
    liveUrl: 'https://shahaayush265.github.io/mechtex-live',
    featured: true,
    iconName: 'Atom',
    metrics: [
      { label: 'Domain', value: 'Newtonian Physics' },
      { label: 'Output', value: 'Vector Diagram DSL' }
    ]
  },
  {
    id: 'pendula',
    title: 'Pendula',
    tagline: 'Real-time physics visualizer with simulated annealing fitting',
    description: 'A real-time physics kinematics analyzer that tracks organic 2D cursor & graphics tablet stylus movement. Employs simulated annealing algorithms to fit noisy human trajectory data against the mathematical ideal of Damped Simple Harmonic Motion (SHM).',
    category: 'Physics & Math',
    techStack: ['HTML5 Canvas', 'Numerical Analysis', 'Simulated Annealing', 'JavaScript'],
    highlights: [
      'Simulated annealing optimization engine fitting live trajectory kinematics',
      'Real-time numerical estimation of damping coefficient, frequency, and phase shift',
      'Custom .motion experimental file format for saving and replaying physical experiments'
    ],
    githubUrl: 'https://github.com/shahaayush265/pendula',
    stars: 1,
    featured: true,
    iconName: 'Cpu',
    metrics: [
      { label: 'Algorithm', value: 'Simulated Annealing' },
      { label: 'Physics', value: 'Damped SHM Model' }
    ]
  },
  {
    id: 'replica-agnostic',
    title: 'Replica Agnostic',
    tagline: 'Agent-agnostic clean-room software reverse-engineering suite',
    description: 'An open-source clean-room software reconstruction framework and automation suite. Features zero-dependency standard-library Python tooling for edge-detection layout diffing (imgdiff), weighted feature parity scoring, customer review sentiment mining, and deployment preflight gates.',
    category: 'Tools & Dev',
    techStack: ['Python', 'Agent Automation', 'Computer Vision / Edge Diff', 'CLI Tooling'],
    highlights: [
      'Pure standard-library Python edge-map comparison engine ignoring arbitrary rebrands',
      'Automated preflight gates verifying tests, bugs, WCAG contrast, and copycat prevention',
      'Extended with unified dispatcher CLI and multi-agent coordination support'
    ],
    githubUrl: 'https://github.com/shahaayush265/replica-agnostic',
    featured: true,
    iconName: 'Terminal',
    metrics: [
      { label: 'Tools', value: '9 Python CLI Engines' },
      { label: 'Standard', value: 'Clean-room Protocol' }
    ]
  },
  {
    id: 'iftp',
    title: 'IFTP',
    tagline: 'Lightweight scriptable file transfer utility',
    description: 'A streamlined, terminal-based file exchange and transfer utility engineered for rapid host-to-host synchronization and automated workflow scripts.',
    category: 'Tools & Dev',
    techStack: ['PowerShell', 'Automation', 'CLI', 'Networking'],
    highlights: [
      'Fast, minimal setup terminal file sync',
      'Designed for automated developer script integration',
      'Lightweight and dependency-free execution'
    ],
    githubUrl: 'https://github.com/shahaayush265/iftp',
    featured: false,
    iconName: 'Layers'
  }
];

export const CATEGORIES = ['All', 'Systems & Apps', 'Physics & Math', 'Tools & Dev'] as const;
export type ProjectCategory = typeof CATEGORIES[number];

export function getAllProjects(): Project[] {
  return PROJECTS;
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter(p => p.featured);
}
