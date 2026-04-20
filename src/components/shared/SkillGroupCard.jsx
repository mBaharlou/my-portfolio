import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

function SkillGroupCard({ title, icon: Icon, skills }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="rounded-[2rem] border border-slate-300/80 bg-white/75 p-6 shadow-card backdrop-blur-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
    >
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-300/80 bg-slate-100 text-navy dark:border-white/10 dark:bg-white/10 dark:text-white">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-obsidian dark:text-white">{title}</h3>
          <p className="text-sm text-slate-500 dark:text-silver/60">Curated strengths and working tools</p>
        </div>
      </div>
      <div className="grid gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </motion.section>
  );
}

export default SkillGroupCard;
