import { motion } from 'framer-motion';
import clsx from '../utils/clsx';

function Cell({ value, index, isWinning, disabled, onSelect }) {
  return (
    <button
      type="button"
      aria-label={value ? `Cell ${index + 1}, ${value}` : `Play cell ${index + 1}`}
      disabled={disabled || Boolean(value)}
      onClick={() => onSelect(index)}
      className={clsx(
        'aspect-square rounded-2xl border text-4xl font-semibold shadow-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-navy/25 sm:text-5xl',
        'border-slate-300/80 bg-white/58 text-obsidian hover:border-slate-400 hover:bg-white',
        'dark:border-white/12 dark:bg-white/6 dark:text-white dark:hover:border-white/25 dark:hover:bg-white/10 dark:focus:ring-white/35',
        isWinning ? 'border-navy bg-navy/8 text-navy dark:border-white dark:bg-white/16 dark:text-white' : '',
      )}
    >
      {value ? (
        <motion.span
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 380, damping: 24 }}
          className="block"
        >
          {value}
        </motion.span>
      ) : null}
    </button>
  );
}

export default Cell;
