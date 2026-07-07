'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white/[0.02]">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow text-center"
      >
        Where I&apos;ve worked
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display font-bold text-3xl sm:text-5xl text-center mt-3"
      >
        Experience
      </motion.h2>

      <div className="mt-16 max-w-3xl mx-auto relative pl-10">
        <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-secondary" />

        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-10 top-1 w-9 h-9 rounded-full glass flex items-center justify-center border-accent/50">
              <Briefcase size={16} className="text-accent" />
            </span>
            <div className="glass glass-hover rounded-2xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display font-semibold text-lg">{exp.role}</h3>
                <span className="text-xs text-accent">{exp.period}</span>
              </div>
              <p className="text-sm text-muted mb-4">{exp.company}</p>
              <ul className="space-y-1.5">
                {exp.points.map((p) => (
                  <li key={p} className="text-sm text-muted flex gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
