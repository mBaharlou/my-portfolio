import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

function ProjectCard({ title, description, tags, demoUrl, codeUrl }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-[2rem] border border-slate-300/80 bg-white/75 shadow-card backdrop-blur-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-300/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(16,35,63,0.18))] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(16,35,63,0.6))]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,35,63,0.16),transparent_38%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_38%)]" />
        <div className="absolute inset-6 rounded-[1.5rem] border border-dashed border-slate-300/80 bg-white/30 dark:border-white/20 dark:bg-black/15" />
        <div className="absolute bottom-6 left-6 rounded-full border border-slate-300/80 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-600 dark:border-white/10 dark:bg-black/35 dark:text-silver/60">
          Project Preview
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-obsidian dark:text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-silver/70">{description}</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-300/80 bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-silver/60"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-4 py-3 text-sm font-medium text-white transition hover:bg-navy-soft dark:bg-white dark:text-obsidian dark:hover:bg-mist"
          >
            Live Demo
            <ArrowUpRight size={16} />
          </a>
          <a
            href={codeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/80 bg-white px-4 py-3 text-sm font-medium text-obsidian transition hover:bg-slate-100 dark:border-white/12 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            <Github size={16} />
            Source Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
