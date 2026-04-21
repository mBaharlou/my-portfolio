import { AnimatePresence, motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { profile } from '../../data/site';
import ButtonLink from '../shared/ButtonLink';
import ThemeToggle from '../shared/ThemeToggle';
import NavItem from './NavItem';

function MobileMenu({ isOpen, links, onClose }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            className="fixed inset-x-0 bottom-0 top-16 hidden cursor-default bg-obsidian/12 backdrop-blur-[2px] dark:bg-black/28 max-lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            onClick={onClose}
          />

          <motion.div
            id="mobile-navigation"
            className="fixed inset-x-3 top-[4.5rem] overflow-hidden rounded-[1.35rem] border border-slate-300/80 bg-[#f7f9fd]/92 shadow-[0_22px_55px_rgba(8,17,31,0.16)] backdrop-blur-2xl dark:border-white/12 dark:bg-[#08111f]/90 dark:shadow-[0_22px_60px_rgba(0,0,0,0.38)] sm:inset-x-6 lg:hidden"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.985 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-3 pb-4 pt-3">
              <div className="flex items-center justify-between border-b border-slate-300/70 px-1 pb-3 dark:border-white/10">
                <span className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-silver/70">
                  Menu
                </span>
                <ThemeToggle />
              </div>

              <nav className="space-y-1 py-3" aria-label="Mobile navigation">
                {links.map((link) => (
                  <NavItem key={link.path} {...link} mobile onClick={onClose} />
                ))}
              </nav>

              <ButtonLink
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                className="mt-1 min-h-12 w-full justify-center"
                onClick={onClose}
              >
                <Github size={17} />
                Visit My GitHub
              </ButtonLink>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export default MobileMenu;
