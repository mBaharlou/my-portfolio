import { motion } from 'framer-motion';
import { Github, Mail, Phone } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import PageShell from '../components/shared/PageShell';
import { profile } from '../data/site';

function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact Me"
      title="A clean, modern space to start the conversation."
      description="This contact experience includes clear details, direct mail and phone links, and a polished frontend form with client-side validation and a simulated success state."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="space-y-6"
        >
          <div className="rounded-[2rem] border border-slate-300/80 bg-white/75 p-7 shadow-card backdrop-blur-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/5">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-silver/60">Direct Contact</p>
            <div className="mt-6 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 rounded-3xl border border-slate-300/80 bg-white p-4 text-slate-600 transition hover:bg-slate-100 hover:text-obsidian dark:border-white/10 dark:bg-black/20 dark:text-silver dark:hover:bg-white/10 dark:hover:text-white"
              >
                <Mail size={20} />
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400 dark:text-silver/45">Email</p>
                  <p className="mt-1 text-sm text-obsidian dark:text-white">{profile.email}</p>
                </div>
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-4 rounded-3xl border border-slate-300/80 bg-white p-4 text-slate-600 transition hover:bg-slate-100 hover:text-obsidian dark:border-white/10 dark:bg-black/20 dark:text-silver dark:hover:bg-white/10 dark:hover:text-white"
              >
                <Phone size={20} />
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400 dark:text-silver/45">Phone</p>
                  <p className="mt-1 text-sm text-obsidian dark:text-white">{profile.phone}</p>
                </div>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-3xl border border-slate-300/80 bg-white p-4 text-slate-600 transition hover:bg-slate-100 hover:text-obsidian dark:border-white/10 dark:bg-black/20 dark:text-silver dark:hover:bg-white/10 dark:hover:text-white"
              >
                <Github size={20} />
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400 dark:text-silver/45">GitHub</p>
                  <p className="mt-1 text-sm text-obsidian dark:text-white">github.com/mBaharlou</p>
                </div>
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-300/80 bg-gradient-to-br from-white to-slate-100 p-7 shadow-glow backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/10 dark:to-navy/25">
            <h2 className="font-display text-3xl font-semibold text-obsidian dark:text-white">Available for thoughtful digital work</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-silver/75">
              If you want a portfolio, landing page, or polished frontend interface with modern
              motion and careful visual detail, this is a great place to reach out.
            </p>
          </div>
        </motion.div>

        <ContactForm />
      </div>
    </PageShell>
  );
}

export default ContactPage;
