import { motion } from 'framer-motion';

function SkillCard({ name, level }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-3xl border border-slate-300/80 bg-white/80 p-5 transition-colors duration-300 dark:border-white/10 dark:bg-black/20"
    >
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-base font-medium text-obsidian dark:text-white">{name}</h4>
        <span className="text-sm text-slate-500 dark:text-silver/60">{level}%</span>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-silver via-white to-[#9bb0d7]"
        />
      </div>
    </motion.div>
  );
}

export default SkillCard;
