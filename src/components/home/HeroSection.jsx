import { motion } from "framer-motion";
import { ArrowRight, Github, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profileImage from "../../assets/profile.jpeg";
import { profile, stats } from "../../data/site";

function HeroSection() {
  const navigate = useNavigate();
  const hoverTimeoutRef = useRef(null);
  const [isHoveringAvatar, setIsHoveringAvatar] = useState(false);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        window.clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleAvatarEnter = () => {
    setIsHoveringAvatar(true);

    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = window.setTimeout(() => {
      navigate("/about");
    }, 2000);
  };

  const handleAvatarLeave = () => {
    setIsHoveringAvatar(false);

    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-24 pt-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pt-20">
      <div className="flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-4 text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-silver/60"
        >
          front end developer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="max-w-4xl font-display text-5xl font-semibold leading-tight text-obsidian dark:text-white sm:text-6xl lg:text-7xl"
        >
          Hello I’m Mohammad, welcome to my portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-silver/75 sm:text-lg"
        >
          {profile.heroNote}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 dark:text-silver/60 sm:text-base"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            to="/works"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-white shadow-card transition hover:-translate-y-0.5 hover:bg-navy-soft dark:bg-white dark:text-obsidian dark:hover:bg-mist"
          >
            View My Works
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/80 bg-white/70 px-6 py-3 text-sm font-medium text-obsidian transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            <Mail size={16} />
            Contact Me
          </Link>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3 text-sm font-medium text-navy transition hover:border-navy/30 hover:bg-slate-100 dark:border-navy-soft/60 dark:bg-navy/50 dark:text-white dark:hover:border-silver/40 dark:hover:bg-navy-soft"
          >
            <Github size={16} />
            Visit My GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="min-w-0 rounded-3xl border border-slate-300/80 bg-white/75 px-5 py-4 shadow-card backdrop-blur-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
            >
              <p className="break-words text-[1.65rem] font-semibold leading-tight text-obsidian dark:text-white sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-2 break-words text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-silver/55">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.12 }}
        className="relative flex items-center justify-center"
      >
        <div className="absolute h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(16,35,63,0.18),transparent_60%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(207,214,228,0.3),transparent_60%)] sm:h-64 sm:w-64" />
        <div className="relative flex w-full max-w-sm items-center justify-center p-2 sm:p-4">
          <motion.div
            onHoverStart={handleAvatarEnter}
            onHoverEnd={handleAvatarLeave}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="group relative flex h-52 w-52 cursor-pointer items-center justify-center rounded-full shadow-[0_18px_45px_rgba(8,15,30,0.16)] dark:shadow-[0_18px_45px_rgba(0,0,0,0.34)] sm:h-60 sm:w-60"
          >
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0.45, scale: 0.96 }}
              animate={
                isHoveringAvatar
                  ? { opacity: 1, scale: 1.04 }
                  : { opacity: 0.45, scale: 0.96 }
              }
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="pointer-events-none absolute inset-[-6px] rounded-full border border-navy/20 dark:border-white/20"
            />
            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHoveringAvatar ? 1 : 0 }}
              transition={{
                duration: isHoveringAvatar ? 2 : 0.2,
                ease: "linear",
              }}
              className="pointer-events-none absolute inset-x-6 bottom-4 h-1 origin-left rounded-full bg-navy/60 dark:bg-white/60"
            />
            <img
              src={profileImage}
              alt="Portrait of Mohammad"
              className="h-full w-full rounded-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
