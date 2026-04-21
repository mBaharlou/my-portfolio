import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

function ProjectCard({ title, image, sourceCodeLink, liveSiteLink }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-[2rem] border border-slate-300/80 bg-white/75 p-3 shadow-card backdrop-blur-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
    >
      <div className="aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-slate-300/80 bg-slate-100 dark:border-white/10 dark:bg-black/20">
        <img
          src={image}
          alt={`${title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex items-center justify-between gap-4 px-2 py-4">
        <a
          href={sourceCodeLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-obsidian transition hover:text-navy dark:text-white dark:hover:text-mist"
        >
          <Github size={16} />
          Source Code
        </a>
        <a
          href={liveSiteLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-obsidian transition hover:text-navy dark:text-white dark:hover:text-mist"
        >
          Live Site
          <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
