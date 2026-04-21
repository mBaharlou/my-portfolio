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
            ? 'flex items-center justify-between border-b border-slate-300/70 px-1 py-4 last:border-b-0 dark:border-white/10'
            : 'px-4 py-3',
          isActive
            ? 'font-semibold text-obsidian dark:text-white'
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
                'h-1.5 w-1.5 rounded-full',
                isActive ? 'bg-navy dark:bg-white' : 'bg-slate-300 dark:bg-white/20',
              )}
            />
          ) : null}
        </>
      )}
    </NavLink>
  );
}

export default NavItem;
