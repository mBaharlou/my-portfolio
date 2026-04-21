import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ConnectStrip from '../shared/ConnectStrip';

function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7f9fd] text-obsidian transition-colors duration-300 dark:bg-obsidian dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-40 dark:opacity-80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(16,35,63,0.10),transparent_42%)] dark:bg-[radial-gradient(circle_at_top,rgba(207,214,228,0.12),transparent_42%)]" />
      <ScrollToTop />
      <Navbar />
      <main className="relative z-10 pt-20">
        <Outlet />
      </main>
      <ConnectStrip />
      <Footer />
    </div>
  );
}

export default MainLayout;
