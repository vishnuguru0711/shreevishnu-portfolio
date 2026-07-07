'use client';

import { motion } from 'framer-motion';
import { Eye, Download } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="section-padding">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow text-center"
      >
        My full profile
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display font-bold text-3xl sm:text-5xl text-center mt-3"
      >
        Resume
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-14 max-w-4xl mx-auto glass rounded-2xl p-6"
      >
        <div className="aspect-[8.5/11] w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-white/10 bg-white/5">
          {/* Replace /resume/Shreevishnu_K_Resume.pdf with your actual resume file in /public/resume */}
          <iframe
            src="/resume/Shreevishnu_K_Resume.pdf"
            title="Shreevishnu K Resume"
            className="w-full h-full"
          />
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="/resume/Shreevishnu_K_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full glass glass-hover font-medium"
          >
            <Eye size={16} /> View Resume
          </a>
          <a
            href="/resume/Shreevishnu_K_Resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-glow-primary font-medium hover:scale-105 transition-transform"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
