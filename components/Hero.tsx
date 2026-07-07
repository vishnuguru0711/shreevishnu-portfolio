'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, FolderKanban } from 'lucide-react';

const roles = ['Tech Enthusiast'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = deleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentRole.slice(0, text.length + 1));
        if (text.length + 1 === currentRole.length) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        setText(currentRole.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Floating gradient orbs */}
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[100px] animate-float"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-secondary/20 blur-[110px] animate-float"
        style={{ animationDelay: '2s' }}
      />
      <div
        aria-hidden
        className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-accent/10 blur-[90px] animate-float"
        style={{ animationDelay: '1s' }}
      />

      {/* Particle-like dots */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="eyebrow mb-6"
      >
        Welcome to my portfolio
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl text-center gradient-text"
      >
        SHREEVISHNU K
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-6 h-10 flex items-center"
      >
        <span className="font-display text-xl sm:text-2xl text-white/90">{text}</span>
        <span className="w-[2px] h-6 bg-accent ml-1 animate-blink" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-8 max-w-2xl text-center text-muted text-base sm:text-lg leading-relaxed"
      >
        Building intelligent software solutions using Artificial Intelligence, Machine Learning,
        Python, Java, Flask, TensorFlow, and modern web technologies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="group flex items-center gap-2 px-6 py-3 rounded-full bg-glow-primary text-white font-medium shadow-glow hover:scale-105 transition-transform"
        >
          <FolderKanban size={18} />
          View Projects
        </a>
        <a
          href="#resume"
          className="flex items-center gap-2 px-6 py-3 rounded-full glass glass-hover font-medium"
        >
          <Download size={18} />
          Download Resume
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-3 rounded-full glass glass-hover font-medium"
        >
          <Mail size={18} />
          Contact Me
        </a>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
}
