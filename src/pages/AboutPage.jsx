import { motion } from 'framer-motion';
import PageShell from '../components/shared/PageShell';
import { languages, profile, timeline } from '../data/site';

function AboutPage() {
  return (
    <PageShell
      eyebrow="About Me"
      title="Mohammad Baharlou"
      description="This page presents Mohammad Baharlou’s background."
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-slate-300/80 bg-white/75 p-8 shadow-card backdrop-blur-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-silver/60">Profile Snapshot</p>
          <div className="mt-6 space-y-5 text-sm text-slate-600 dark:text-silver/75">
            <div className="flex items-center justify-between border-b border-slate-300/80 pb-4 dark:border-white/10">
              <span>Name</span>
              <strong className="text-obsidian dark:text-white">{profile.name}</strong>
            </div>
            <div className="flex items-center justify-between border-b border-slate-300/80 pb-4 dark:border-white/10">
              <span>Date of Birth</span>
              <strong className="text-obsidian dark:text-white">{profile.born}</strong>
            </div>
            <div className="flex items-center justify-between border-b border-slate-300/80 pb-4 dark:border-white/10">
              <span>Programming Experience</span>
              <strong className="text-obsidian dark:text-white">{profile.experience}</strong>
            </div>
            <div className="flex items-center justify-between border-b border-slate-300/80 pb-4 dark:border-white/10">
              <span>Location</span>
              <strong className="text-obsidian dark:text-white">{profile.location}</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>University</span>
              <strong className="text-right text-obsidian dark:text-white">Anadolu University</strong>
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          {timeline.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-[2rem] border border-slate-300/80 bg-white/75 p-7 shadow-card backdrop-blur-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/80 bg-slate-100 text-sm text-navy dark:border-white/10 dark:bg-white/10 dark:text-white">
                  {index + 1}
                </div>
                <h2 className="text-2xl font-semibold text-obsidian dark:text-white">{item.title}</h2>
              </div>
              <p className="text-sm leading-8 text-slate-600 dark:text-silver/75">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="mt-12 border-y border-slate-300/80 py-8 transition-colors duration-300 dark:border-white/10"
      >
        <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-silver/70">Languages I Speak</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {languages.map((language) => (
            <span
              key={language}
              className="rounded-full border border-slate-300/80 bg-white/55 px-5 py-3 text-sm font-medium text-obsidian transition-colors duration-300 dark:border-white/15 dark:bg-white/10 dark:text-white"
            >
              {language}
            </span>
          ))}
        </div>
      </motion.section>
    </PageShell>
  );
}

export default AboutPage;
