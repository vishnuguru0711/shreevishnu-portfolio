'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '@/lib/data';

export default function Education() {
  return (
    <section id="education" className="section-padding bg-white/[0.02]">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow text-center"
      >
        Academic background
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display font-bold text-3xl sm:text-5xl text-center mt-3"
      >
        Education
      </motion.h2>

      <div className="mt-16 max-w-3xl mx-auto relative pl-10">
        <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-secondary" />

        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative mb-8 last:mb-0"
          >
            <span className="absolute -left-10 top-1 w-9 h-9 rounded-full glass flex items-center justify-center">
              <GraduationCap size={16} className="text-accent" />
            </span>
            <div className="glass glass-hover rounded-2xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display font-semibold text-base">{edu.degree}</h3>
                {edu.period && <span className="text-xs text-accent">{edu.period}</span>}
              </div>
              {edu.institution && <p className="text-sm text-muted mt-1">{edu.institution}</p>}
              <p className="text-sm text-white/80 mt-2 font-medium">{edu.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
