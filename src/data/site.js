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
  name: 'Mohammad Baharlou',
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
    text: 'I am Mohammad Baharlou, a developer who enjoys creating sleek digital experiences that feel refined, intuitive, and modern.',
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
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Redux' },
      { name: 'TypeScript' },
      { name: 'Next JS' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Design',
    icon: Palette,
    skills: [
      { name: 'UI Design' },
      { name: 'Figma' },
      { name: 'Modern Layout Systems' },
    ],
  },
  {
    title: 'Tools',
    icon: Layers3,
    skills: [
      { name: 'Git' },
      { name: 'Component Architecture' },
      { name: 'Responsive Systems' },
    ],
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: [
      { name: 'Flutter' },
      { name: 'Native' },
    ],
  },
  {
    title: 'Animation',
    icon: Sparkles,
    skills: [{ name: 'Framer Motion' }],
  },
];

export const featuredSkills = [
  'React',
  'Redux',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Next JS',
  'UI Design',
];

const projectPreviewImage = (accent) =>
  `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#f7f9fd" />
          <stop offset="1" stop-color="#dbe4f1" />
        </linearGradient>
        <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#ffffff" stop-opacity="0.92" />
          <stop offset="1" stop-color="${accent}" stop-opacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="1200" height="750" fill="url(#bg)" />
      <rect x="92" y="86" width="1016" height="578" rx="56" fill="url(#panel)" />
      <rect x="156" y="150" width="300" height="36" rx="18" fill="${accent}" opacity="0.85" />
      <rect x="156" y="232" width="888" height="286" rx="36" fill="#ffffff" opacity="0.72" />
      <rect x="204" y="280" width="268" height="190" rx="28" fill="${accent}" opacity="0.18" />
      <rect x="512" y="280" width="200" height="28" rx="14" fill="${accent}" opacity="0.42" />
      <rect x="512" y="338" width="392" height="24" rx="12" fill="#10233f" opacity="0.18" />
      <rect x="512" y="392" width="330" height="24" rx="12" fill="#10233f" opacity="0.14" />
      <rect x="156" y="558" width="232" height="36" rx="18" fill="#10233f" opacity="0.14" />
      <rect x="420" y="558" width="232" height="36" rx="18" fill="#10233f" opacity="0.1" />
    </svg>
  `)}`;

export const projectCards = [
  {
    title: 'Luxe Commerce',
    image: projectPreviewImage('#10233f'),
    sourceCodeLink: 'https://github.com/mBaharlou',
    liveSiteLink: 'https://example.com',
  },
  {
    title: 'Studio Portfolio',
    image: projectPreviewImage('#5b6f95'),
    sourceCodeLink: 'https://github.com/mBaharlou',
    liveSiteLink: 'https://example.com',
  },
  {
    title: 'Analytics Dashboard',
    image: projectPreviewImage('#2f4f6f'),
    sourceCodeLink: 'https://github.com/mBaharlou',
    liveSiteLink: 'https://example.com',
  },
  {
    title: 'Mobile App',
    image: projectPreviewImage('#64748b'),
    sourceCodeLink: 'https://github.com/mBaharlou',
    liveSiteLink: 'https://example.com',
  },
  {
    title: 'Brand Campaign',
    image: projectPreviewImage('#405979'),
    sourceCodeLink: 'https://github.com/mBaharlou',
    liveSiteLink: 'https://example.com',
  },
  {
    title: 'Knowledge Hub',
    image: projectPreviewImage('#72849f'),
    sourceCodeLink: 'https://github.com/mBaharlou',
    liveSiteLink: 'https://example.com',
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
