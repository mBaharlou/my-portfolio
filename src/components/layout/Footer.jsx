import { Github, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navLinks, profile } from '../../data/site';

function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-300/70 bg-white/45 transition-colors duration-300 dark:border-white/10 dark:bg-black/20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.9fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="font-display text-4xl font-semibold text-obsidian dark:text-white">Mohammad</p>
          <p className="max-w-md text-sm leading-7 text-slate-600 dark:text-silver/75">
            Frontend developer and UI-focused creator building refined digital experiences
            with modern motion and elegant visual balance.
          </p>
        </div>

        <div>
          <h2 className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-silver/55">Quick Links</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="rounded-full border border-slate-300/80 px-4 py-2 text-sm text-slate-600 transition hover:border-slate-400 hover:bg-slate-100 hover:text-obsidian dark:border-white/10 dark:text-silver dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-silver/55">Connect</h2>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 text-sm text-slate-600 transition hover:text-obsidian dark:text-silver dark:hover:text-white"
          >
            <Mail size={16} />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="flex items-center gap-3 text-sm text-slate-600 transition hover:text-obsidian dark:text-silver dark:hover:text-white"
          >
            <Phone size={16} />
            {profile.phone}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-slate-300/80 bg-white px-4 py-2 text-sm text-obsidian transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/12"
          >
            <Github size={16} />
            Visit My GitHub
          </a>
        </div>
      </div>
      <div className="border-t border-slate-300/70 px-4 py-5 text-center text-xs uppercase tracking-[0.25em] text-slate-500 dark:border-white/10 dark:text-silver/50">
        Copyright {new Date().getFullYear()} Mohammad. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
