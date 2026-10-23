import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

function SkillCard({ name, featured = false }) {
  if (featured) {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        className="relative overflow-hidden rounded-3xl border border-amber-400/40 bg-gradient-to-br from-amber-100/80 via-white/80 to-navy/[0.08] p-5 shadow-card transition-colors duration-300 dark:border-amber-300/30 dark:from-amber-300/[0.14] dark:via-white/[0.04] dark:to-navy-soft/40"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-amber-300/30 blur-2xl dark:bg-amber-300/20"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute h-px w-24 rotate-[4deg] bg-gradient-to-r from-transparent via-amber-400/70 to-amber-500 opacity-0 motion-safe:animate-shooting-star dark:via-white/60 dark:to-white"
        >
          <span className="absolute -right-0.5 -top-[3px] h-[7px] w-[7px] rounded-full bg-amber-500 shadow-[0_0_10px_3px_rgba(251,191,36,0.7)] dark:bg-white dark:shadow-[0_0_10px_3px_rgba(255,255,255,0.7)]" />
        </span>
        <div className="relative flex items-center justify-between gap-3">
          <h4 className="text-base font-semibold text-obsidian dark:text-white">{name}</h4>
          <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-amber-500/30 bg-amber-400/15 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:text-amber-200">
            <Star size={12} className="fill-current" />
            Strongest skill
          </span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-3xl border border-slate-300/80 bg-white/80 p-5 transition-colors duration-300 dark:border-white/10 dark:bg-black/20"
    >
      <h4 className="text-base font-medium text-obsidian dark:text-white">{name}</h4>
    </motion.div>
  );
}

export default SkillCard;
