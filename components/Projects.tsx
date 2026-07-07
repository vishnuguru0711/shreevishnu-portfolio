'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, FileText } from 'lucide-react';
import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow text-center"
      >
        Selected work
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display font-bold text-3xl sm:text-5xl text-center mt-3"
      >
        Featured Projects
      </motion.h2>

      <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ rotateX: 2, rotateY: -2, y: -4 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="glass glass-hover rounded-2xl p-7 flex flex-col"
          >
            <div className="h-40 rounded-xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 border border-white/10 mb-6 flex items-center justify-center text-muted text-sm">
              Project preview
            </div>

            <h3 className="font-display font-semibold text-xl mb-3">{project.title}</h3>
            <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>

            {project.features.length > 0 && (
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-4">
                {project.features.map((f) => (
                  <li key={f} className="text-xs text-muted flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-accent/90"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-full glass glass-hover"
                >
                  <Github size={14} /> GitHub
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
