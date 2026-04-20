import { Link } from 'react-router-dom';
import clsx from '../utils/clsx';

function ButtonLink({
  children,
  href,
  to,
  variant = 'primary',
  className,
  ...props
}) {
  const baseClass =
    'inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-300';
  const variants = {
    primary:
      'bg-navy text-white shadow-card hover:-translate-y-0.5 hover:bg-navy-soft focus:outline-none focus:ring-2 focus:ring-navy/30 dark:bg-white dark:text-obsidian dark:hover:bg-mist dark:focus:ring-white/50',
    secondary:
      'border border-slate-300/80 bg-white/70 text-obsidian hover:bg-white focus:outline-none focus:ring-2 focus:ring-navy/20 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:focus:ring-white/30',
    light:
      'border border-slate-300/80 bg-white text-obsidian hover:bg-slate-100 dark:border-white/10 dark:bg-white dark:text-obsidian dark:hover:bg-mist',
  };

  const classes = clsx(baseClass, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}

export default ButtonLink;
