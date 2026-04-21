import { Github } from 'lucide-react';
import { profile } from '../../data/site';
import ButtonLink from '../shared/ButtonLink';
import ThemeToggle from '../shared/ThemeToggle';
import NavItem from './NavItem';

function MobileMenu({ isOpen, links, onClose }) {
  return (
    <>
      {isOpen ? (
        <div className="absolute inset-x-0 top-full border-b border-slate-300/70 bg-[#f7f9fd]/96 px-4 py-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-obsidian/94 sm:px-6 lg:hidden">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between border-b border-slate-300/70 pb-4 dark:border-white/10">
              <span className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-silver/65">
                Menu
              </span>
              <ThemeToggle />
            </div>

            <nav className="py-2" aria-label="Mobile navigation">
              {links.map((link) => (
                <NavItem key={link.path} {...link} mobile onClick={onClose} />
              ))}
            </nav>

            <ButtonLink
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="mt-3 w-full justify-center"
            >
              <Github size={17} />
              Visit My GitHub
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default MobileMenu;
