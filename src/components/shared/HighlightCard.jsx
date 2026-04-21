import { motion } from 'framer-motion';

function HighlightCard({ icon: Icon, title, text }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="border-l border-slate-300/80 py-2 pl-6 transition-colors duration-300 dark:border-white/12"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-300/80 bg-white/55 text-navy transition-colors duration-300 dark:border-white/12 dark:bg-white/10 dark:text-white">
        <Icon size={20} />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-obsidian dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-silver/70">{text}</p>
    </motion.article>
  );
}

export default HighlightCard;
