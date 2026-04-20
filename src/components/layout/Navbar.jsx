import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks, profile } from '../../data/site';
import ButtonLink from '../shared/ButtonLink';
import ThemeToggle from '../shared/ThemeToggle';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="rounded-full border border-slate-300/70 bg-white/80 px-4 py-3 shadow-glow backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
        >
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white text-lg font-semibold text-navy shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-mist">
                M
              </div>
              <div>
                <p className="font-display text-2xl font-semibold leading-none text-obsidian dark:text-white">
                  Mohammad
                </p>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-silver/70">
                  Portfolio
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-2 lg:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm transition ${
                      isActive
                        ? 'bg-navy text-white shadow-card dark:bg-white dark:text-obsidian'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-obsidian dark:text-silver dark:hover:bg-white/10 dark:hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <ThemeToggle />
              <ButtonLink href={profile.github} target="_blank" rel="noreferrer" variant="light">
                Visit My GitHub
              </ButtonLink>
            </div>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white/80 text-obsidian transition hover:bg-white lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              onClick={() => setIsOpen((value) => !value)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden lg:hidden"
              >
                <div className="mt-4 space-y-2 border-t border-slate-300/70 pt-4 dark:border-white/10">
                  <div className="flex justify-end pb-2">
                    <ThemeToggle />
                  </div>
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-2xl px-4 py-3 text-sm transition ${
                          isActive
                            ? 'bg-navy text-white dark:bg-white dark:text-obsidian'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-obsidian dark:bg-white/5 dark:text-silver dark:hover:bg-white/10 dark:hover:text-white'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                  <ButtonLink
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    variant="light"
                    className="mt-2 w-full justify-center"
                  >
                    Visit My GitHub
                  </ButtonLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
  );
}

export default Navbar;
