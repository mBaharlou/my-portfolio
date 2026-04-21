import { motion } from 'framer-motion';

function SkillCard({ name }) {
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
