import { NavLink } from 'react-router-dom';
import clsx from '../utils/clsx';

function NavItem({ label, path, onClick, mobile = false }) {
  return (
    <NavLink
      to={path}
      end={path === '/'}
      onClick={onClick}
      className={({ isActive }) =>
        clsx(
          'text-sm',
          mobile
            ? 'flex min-h-12 items-center justify-between rounded-2xl px-4 py-3 transition-colors'
            : 'px-4 py-3',
          isActive
            ? mobile
              ? 'bg-navy/10 font-semibold text-obsidian dark:bg-white/10 dark:text-white'
              : 'font-semibold text-obsidian dark:text-white'
            : mobile
              ? 'font-medium text-slate-700 hover:bg-slate-100/80 hover:text-obsidian dark:text-silver/75 dark:hover:bg-white/5 dark:hover:text-white'
              : 'font-medium text-slate-600 dark:text-silver/75',
        )
      }
    >
      {({ isActive }) => (
        <>
          <span>{label}</span>
          {mobile ? (
            <span
              className={clsx(
                'h-2 w-2 rounded-full',
                isActive ? 'bg-navy dark:bg-white' : 'bg-slate-400/90 dark:bg-white/20',
              )}
            />
          ) : null}
        </>
      )}
    </NavLink>
  );
}

export default NavItem;
