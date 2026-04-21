import {
  Code2,
  Globe,
  Layers3,
  MonitorSmartphone,
  Palette,
  Smartphone,
  Sparkles,
  WandSparkles,
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'My Skills', path: '/skills' },
  { label: 'My Works', path: '/works' },
  { label: 'Are You Bored?', path: '/are-you-bored' },
  { label: 'Contact Me', path: '/contact' },
];

export const profile = {
  name: 'Mohammad',
  title: 'Frontend Developer & UI-Focused Creator',
  location: 'Eskişehir, Turkey',
  born: '13/02/2000',
  experience: '3 years',
  email: 'mmdbaharlou@gmail.com',
  phone: '+905526890687',
  github: 'https://github.com/mBaharlou',
  intro:
    'I build elegant interfaces with clean structure, thoughtful motion, and a strong focus on modern user experience.',
  summary:
    'My focus is on front and ui with React js.',
  heroNote:
    'this web is my all experience in years programing.',
};

export const stats = [
  { value: '3+', label: 'Years of Programming' },
  { value: '13 Feb 2000', label: 'Born' },
  { value: 'Eskişehir', label: 'Based In' },
  { value: '3', label: 'Languages Spoken' },
];

export const timeline = [
  {
    title: 'Who I Am',
    text: 'I am Mohammad, a developer who enjoys creating sleek digital experiences that feel refined, intuitive, and modern.',
  },
  {
    title: 'My Journey',
    text: 'Over the last 3 years, I have been developing my programming skills with a strong interest in frontend technologies, design systems, and interaction details.',
  },
  {
    title: 'Education',
    text: 'I study Public Relations and Advertising at Anadolu University in Eskişehir, which gives me a unique perspective on communication and presentation.',
  },
  {
    title: 'Where I Live',
    text: 'I live in Eskişehir, Turkey, where I continue studying and growing as a developer and creative thinker.',
  },
  {
    title: 'Languages I Speak',
    text: 'I speak English, Turkish, and Persian, which helps me connect across different audiences and communities.',
  },
];

export const skillGroups = [
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: [
      { name: 'HTML', level: 94 },
      { name: 'CSS', level: 91 },
      { name: 'JavaScript', level: 88 },
      { name: 'React', level: 89 },
      { name: 'Next JS', level: 80 },
      { name: 'TypeScript', level: 78 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    title: 'Design',
    icon: Palette,
    skills: [
      { name: 'UI Design', level: 86 },
      { name: 'Figma', level: 82 },
      { name: 'Modern Layout Systems', level: 87 },
    ],
  },
  {
    title: 'Tools',
    icon: Layers3,
    skills: [
      { name: 'Git', level: 84 },
      { name: 'Component Architecture', level: 88 },
      { name: 'Responsive Systems', level: 90 },
    ],
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: [
      { name: 'Flutter', level: 70 },
      { name: 'Native', level: 66 },
    ],
  },
  {
    title: 'Animation',
    icon: Sparkles,
    skills: [{ name: 'Framer Motion', level: 85 }],
  },
];

export const featuredSkills = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Next JS',
  'UI Design',
];

export const projectCards = [
  {
    title: 'Luxe Commerce Experience',
    description:
      'A premium storefront concept focused on cinematic product presentation, smooth filtering, and conversion-friendly interactions.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/mBaharlou',
  },
  {
    title: 'Studio Portfolio System',
    description:
      'A clean portfolio template designed for creative professionals with editorial typography and modular project sections.',
    tags: ['React Router', 'Responsive UI', 'Glassmorphism'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/mBaharlou',
  },
  {
    title: 'Analytics Dashboard Concept',
    description:
      'A modern dashboard interface with elegant charts, KPI cards, and a structured navigation experience for teams.',
    tags: ['JavaScript', 'Design System', 'UI Design'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/mBaharlou',
  },
  {
    title: 'Mobile App Showcase',
    description:
      'A polished landing page to highlight app features, onboarding flows, and user benefits with layered visual storytelling.',
    tags: ['Flutter', 'Motion', 'Frontend'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/mBaharlou',
  },
  {
    title: 'Brand Campaign Microsite',
    description:
      'An immersive one-page concept blending brand messaging, motion-driven storytelling, and sharp visual hierarchy.',
    tags: ['Creative Direction', 'Tailwind CSS', 'UX'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/mBaharlou',
  },
  {
    title: 'Personal Knowledge Hub',
    description:
      'A refined content-driven interface made for organizing notes, resources, and insights in a focused environment.',
    tags: ['TypeScript', 'UI Design', 'Productivity'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/mBaharlou',
  },
];

export const homeHighlights = [
  {
    icon: MonitorSmartphone,
    title: 'Responsive by Default',
    text: 'Every section is designed to feel polished across mobile, tablet, and desktop screens.',
  },
  {
    icon: WandSparkles,
    title: 'Motion with Purpose',
    text: 'Subtle reveals, elegant transitions, and layered interactions add sophistication without clutter.',
  },
  {
    icon: Globe,
    title: 'Built for Real Presence',
    text: 'The site is structured like a deploy-ready portfolio that can grow with your actual projects and story.',
  },
];

export const languages = ['English', 'Turkish', 'Persian'];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/mBaharlou' },
  { label: 'Email', href: 'mailto:mmdbaharlou@gmail.com' },
  { label: 'Phone', href: 'tel:+905526890687' },
];
