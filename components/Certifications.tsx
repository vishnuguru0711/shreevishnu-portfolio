'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '@/lib/data';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow text-center"
      >
        Verified learning
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display font-bold text-3xl sm:text-5xl text-center mt-3"
      >
        Certifications
      </motion.h2>

      <div className="mt-16 max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass glass-hover rounded-2xl p-6 flex items-start gap-4"
          >
            <span className="w-11 h-11 shrink-0 rounded-xl bg-glow-primary flex items-center justify-center">
              <Award size={20} />
            </span>
            <div className="flex-1">
              <h3 className="font-display font-semibold text-base">{cert.name}</h3>
              <p className="text-xs text-muted mt-1">
                {cert.issuer} · {cert.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
