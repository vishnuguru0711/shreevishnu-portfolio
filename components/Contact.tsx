'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { contactInfo } from '@/lib/data';

const contactItems = [
  { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Phone, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
  { icon: Github, label: 'GitHub', value: 'github.com/vishnuguru0711', href: contactInfo.github },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shreevishnu-k-9a8a08374',
    href: contactInfo.linkedin,
  },
  { icon: MapPin, label: 'Location', value: contactInfo.location, href: undefined },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setStatus('');

    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      await emailjs.send(
        'service_jt47dnp',
        'template_u58vcd4',
        formData,
        'UrSj0W9vvPBLfsP21'
      );

      setStatus('✅ Message sent successfully!');
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus('❌ Failed to send message. Please try again.');
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="section-padding bg-white/[0.02]">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow text-center"
      >
        Let&apos;s connect
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display font-bold text-3xl sm:text-5xl text-center mt-3"
      >
        Contact
      </motion.h2>

      <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-7 space-y-5"
        >
          {contactItems.map((item) => {
            const Icon = item.icon;

            const content = (
              <div className="flex items-center gap-4 group">
                <span className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:scale-110 transition-all">
                  <Icon size={18} className="text-accent" />
                </span>

                <div>
                  <p className="text-xs text-muted">{item.label}</p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              </div>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-7 space-y-4"
        >
          <div>
            <label className="text-xs text-muted">Name</label>

            <input
              name="name"
              required
              type="text"
              placeholder="Your Name"
              className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm"
            />
          </div>

          <div>
            <label className="text-xs text-muted">Email</label>

            <input
              name="email"
              required
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm"
            />
          </div>

          <div>
            <label className="text-xs text-muted">Message</label>

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-glow-primary font-medium"
          >
            <Send size={16} />
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status && (
            <p className="text-center mt-4 text-sm">
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}