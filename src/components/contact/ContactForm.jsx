import { motion } from 'framer-motion';
import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  message: '',
};

function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) nextErrors.message = 'Please write a message.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      setStatus('');
      return;
    }

    setStatus('Your message has been prepared successfully.');
    setFormData(initialState);
    setErrors({});
  };

  const inputClassName =
    'w-full rounded-2xl border border-slate-300/80 bg-white px-4 py-3 text-sm text-obsidian outline-none transition placeholder:text-slate-400 focus:border-navy/20 focus:bg-white dark:border-white/10 dark:bg-black/20 dark:text-white dark:placeholder:text-silver/35 dark:focus:border-silver/30 dark:focus:bg-white/8';

  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-slate-300/80 bg-white/75 p-6 shadow-card backdrop-blur-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
      noValidate
    >
      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-600 dark:text-silver">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={inputClassName}
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="mt-2 text-sm text-red-300">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-600 dark:text-silver">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClassName}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="mt-2 text-sm text-red-300">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-600 dark:text-silver">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            className={`${inputClassName} resize-none`}
            placeholder="Tell me about your idea or project..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message ? (
            <p id="message-error" className="mt-2 text-sm text-red-300">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-navy-soft dark:bg-white dark:text-obsidian dark:hover:bg-mist"
        >
          Send Message
        </button>
        <a
          href="mailto:mmdbaharlou@gmail.com"
          className="text-sm text-slate-600 transition hover:text-obsidian dark:text-silver/70 dark:hover:text-white"
        >
          Prefer email? Send directly via mailto.
        </a>
      </div>

      {status ? (
        <p className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
          {status}
        </p>
      ) : null}
    </motion.form>
  );
}

export default ContactForm;
