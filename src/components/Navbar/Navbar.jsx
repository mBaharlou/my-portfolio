import { Github, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks, profile } from '../../data/site';
import ButtonLink from '../shared/ButtonLink';
import ThemeToggle from '../shared/ThemeToggle';
import MobileMenu from './MobileMenu';
import NavItem from './NavItem';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-300/60 bg-[#f7f9fd]/82 backdrop-blur-xl dark:border-white/10 dark:bg-obsidian/78">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300/80 bg-white/55 text-base font-semibold text-navy shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-mist">
            M
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-xl font-semibold leading-none text-obsidian dark:text-white sm:text-2xl">
              Mohammad
            </span>
            <span className="mt-1 block truncate text-[0.68rem] uppercase tracking-[0.26em] text-slate-500 dark:text-silver/68">
              Portfolio
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center divide-x divide-slate-300/75 rounded-none dark:divide-white/12 lg:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <NavItem key={link.path} {...link} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <ButtonLink href={profile.github} target="_blank" rel="noreferrer" variant="secondary">
            <Github size={17} />
            GitHub
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white/50 text-obsidian lg:hidden dark:border-white/15 dark:bg-white/10 dark:text-white"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <MobileMenu isOpen={isOpen} links={navLinks} onClose={() => setIsOpen(false)} />
    </header>
  );
}

export default Navbar;
