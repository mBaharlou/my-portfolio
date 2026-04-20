import { motion } from 'framer-motion';

function PageShell({ eyebrow, title, description, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6 lg:px-8"
    >
      <div className="mb-14 max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-silver/60">{eyebrow}</p>
        <h1 className="font-display text-5xl font-semibold leading-tight text-obsidian dark:text-white sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-silver/75 sm:text-lg">
          {description}
        </p>
      </div>
      {children}
    </motion.section>
  );
}

export default PageShell;
