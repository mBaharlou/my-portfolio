import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const storageKey = 'portfolio-theme';

function applyTheme(nextTheme) {
  document.documentElement.dataset.theme = nextTheme;
  document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  localStorage.setItem(storageKey, nextTheme);
}

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof document === 'undefined') return 'dark';
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex h-11 w-[74px] items-center rounded-full border border-slate-300/70 bg-white/80 px-1.5 shadow-sm backdrop-blur-xl transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      <motion.span
        animate={{ x: isDark ? 30 : 0 }}
        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white shadow-md dark:bg-white dark:text-obsidian"
      >
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
      </motion.span>
    </button>
  );
}

export default ThemeToggle;
