import { Github, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks, profile } from '../../data/site';
import ButtonLink from '../shared/ButtonLink';
import ThemeToggle from '../shared/ThemeToggle';
import clsx from '../utils/clsx';
import MobileMenu from './MobileMenu';
import NavItem from './NavItem';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { pathname } = useLocation();
  const isGlassSolid = hasScrolled || isOpen;

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    let frameId;

    const updateGlassState = () => {
      frameId = undefined;
      setHasScrolled(window.scrollY > 20);
    };

    const onScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateGlassState);
    };

    updateGlassState();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <header
      className={clsx(
        'fixed left-0 top-0 z-50 w-full border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out',
        isGlassSolid
          ? 'border-slate-300/75 bg-[#eef3fb]/82 shadow-[0_12px_34px_rgba(8,17,31,0.07)] backdrop-blur-2xl dark:border-white/12 dark:bg-[#162033]/68 dark:shadow-[0_12px_36px_rgba(0,0,0,0.14)]'
          : 'border-slate-300/45 bg-[#f7f9fd]/46 shadow-none backdrop-blur-lg dark:border-white/10 dark:bg-[#172235]/42 dark:shadow-none',
        'lg:border-slate-300/60 lg:bg-[#f7f9fd]/82 lg:shadow-none lg:backdrop-blur-xl lg:dark:border-white/10 lg:dark:bg-obsidian/78',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:gap-5 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-300/80 bg-white/70 text-sm font-semibold text-navy shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-mist lg:h-10 lg:w-10 lg:bg-white/55 lg:text-base">
            M
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-semibold leading-none text-obsidian dark:text-white sm:text-xl lg:text-2xl">
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
          aria-controls="mobile-navigation"
          className={clsx(
            'inline-flex h-11 w-11 items-center justify-center rounded-full border text-obsidian shadow-sm backdrop-blur-xl transition active:scale-95 dark:text-white lg:hidden',
            isGlassSolid
              ? 'border-slate-300/80 bg-white/72 dark:border-white/15 dark:bg-white/12'
              : 'border-slate-300/65 bg-white/52 dark:border-white/12 dark:bg-white/8',
          )}
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
