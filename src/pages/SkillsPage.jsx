import { motion } from "framer-motion";
import PageShell from "../components/shared/PageShell";
import SkillGroupCard from "../components/shared/SkillGroupCard";
import { skillGroups } from "../data/site";

function SkillsPage() {
  return (
    <PageShell
      eyebrow="My Skills"
      title="my skills are learned in +3 years learning by my self."
      description="down here you will see my skills in %"
    >
      <div className="grid gap-6 xl:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillGroupCard key={group.title} {...group} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mt-10 rounded-[2rem] border border-slate-300/80 bg-white/75 p-8 shadow-card backdrop-blur-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
      >
        <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-silver/60">
          Working Style
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-300/80 bg-white p-5 dark:border-white/10 dark:bg-black/20">
            <h3 className="text-lg font-semibold text-obsidian dark:text-white">
              Clean Structure
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-silver/70">
              I prefer reusable components, readable logic, and scalable project
              organization.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-300/80 bg-white p-5 dark:border-white/10 dark:bg-black/20">
            <h3 className="text-lg font-semibold text-obsidian dark:text-white">
              UI Sensitivity
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-silver/70">
              Visual rhythm, spacing, typography, and balance are key parts of
              how I build.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-300/80 bg-white p-5 dark:border-white/10 dark:bg-black/20">
            <h3 className="text-lg font-semibold text-obsidian dark:text-white">
              Modern Motion
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-silver/70">
              I use animation to guide attention and improve feel, not to
              overload the interface.
            </p>
          </div>
        </div>
      </motion.div>
    </PageShell>
  );
}

export default SkillsPage;
