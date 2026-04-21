import { Link } from "react-router-dom";
import HeroSection from "../components/home/HeroSection";
import HighlightCard from "../components/shared/HighlightCard";
import ProjectCard from "../components/shared/ProjectCard";
import SectionHeading from "../components/shared/SectionHeading";
import SkillCard from "../components/shared/SkillCard";
import {
  featuredSkills,
  homeHighlights,
  profile,
  projectCards,
} from "../data/site";

function HomePage() {
  return (
    <div className="pb-10">
      <HeroSection />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Intro"
          title="now you will see what i know and learned."
          description="This homepage introduces who I am, the kind of work I enjoy, and the visual style I bring into modern frontend experiences."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {homeHighlights.map((item) => (
            <HighlightCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:px-8">
        <div className="border-y border-slate-300/80 py-8 transition-colors duration-300 dark:border-white/10">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-silver/60">
            About Me
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-obsidian dark:text-white">
            Short intro and background
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-silver/75">
            {profile.intro}
          </p>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-silver/70">
            {profile.summary}
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex rounded-full border border-slate-300/80 bg-white px-5 py-3 text-sm text-obsidian transition hover:bg-slate-100 dark:border-white/12 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Read More About Me
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {featuredSkills.map((skill) => (
            <SkillCard key={skill} name={skill} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title=" projects "
          description="these are is my favorite jobs i did."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projectCards.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/works"
            className="inline-flex rounded-full bg-navy px-6 py-3 text-sm font-medium text-white transition hover:bg-navy-soft dark:bg-white dark:text-obsidian dark:hover:bg-mist"
          >
            Explore All Works
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-y border-slate-300/80 px-4 py-16 transition-colors duration-300 dark:border-white/10 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Call To Action"
            title="Let’s create something"
            description="Whether you need a polished personal website, a strong landing page, or a frontend interface with refined motion, I’d love to connect."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex justify-center rounded-full bg-navy px-6 py-3 text-sm font-medium text-white transition hover:bg-navy-soft dark:bg-white dark:text-obsidian dark:hover:bg-mist"
            >
              Contact Me
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center rounded-full border border-slate-300/80 bg-white px-6 py-3 text-sm font-medium text-obsidian transition hover:bg-slate-100 dark:border-white/12 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Visit My GitHub
            </a>
          </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-[2rem] border border-slate-300/80 bg-white/75 p-8 shadow-card backdrop-blur-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-silver/60">
              Final Message
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-obsidian dark:text-white">
              Looking for a clean and premium web?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-silver/75">
              just connect with us
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex justify-center rounded-full bg-navy px-6 py-3 text-sm font-medium text-white transition hover:bg-navy-soft dark:bg-white dark:text-obsidian dark:hover:bg-mist"
          >
            Send a Message
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
