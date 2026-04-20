import { motion } from 'framer-motion';

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <p className="mb-4 text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-silver/60">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold text-obsidian dark:text-white sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600 dark:text-silver/75 sm:text-lg">{description}</p>
      ) : null}
    </motion.div>
  );
}

export default SectionHeading;
