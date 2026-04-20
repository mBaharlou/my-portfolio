import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Mail, Phone } from 'lucide-react';
import { profile } from '../../data/site';

function ConnectStrip() {
  return (
    <section className="relative z-10 px-4 pb-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-slate-300/70 bg-white/70 px-6 py-8 shadow-glow backdrop-blur-xl transition-colors duration-300 lg:flex-row lg:items-center lg:justify-between dark:border-white/12 dark:bg-navy/35"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-silver/55">Let’s Connect</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-obsidian dark:text-white">Ready to build something polished?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-silver/85 sm:text-base">
            I’m open to collaboration, freelance opportunities, and conversations around
            frontend work, interface design, and premium digital experiences.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-2xl border border-slate-300/80 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 hover:text-obsidian dark:border-white/12 dark:bg-white/10 dark:text-white dark:hover:border-white/25 dark:hover:bg-white/14"
          >
            <Mail size={18} />
            Email
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="flex items-center gap-3 rounded-2xl border border-slate-300/80 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 hover:text-obsidian dark:border-white/12 dark:bg-white/10 dark:text-white dark:hover:border-white/25 dark:hover:bg-white/14"
          >
            <Phone size={18} />
            Phone
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-300/80 bg-navy px-4 py-3 text-sm text-white transition hover:-translate-y-0.5 hover:bg-navy-soft dark:border-white/12 dark:bg-white dark:text-obsidian dark:hover:bg-mist"
          >
            <Github size={18} />
            GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default ConnectStrip;
