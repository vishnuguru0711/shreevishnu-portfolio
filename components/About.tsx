'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { User } from 'lucide-react';
import { stats } from '@/lib/data';

function Counter({ value }: { value: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const stepTime = Math.max(Math.floor(duration / value), 30);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display font-bold text-4xl gradient-text">
      {count}+
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow text-center"
      >
        Get to know me
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display font-bold text-3xl sm:text-5xl text-center mt-3"
      >
        About Me
      </motion.h2>

      <div className="mt-16 grid lg:grid-cols-[320px_1fr] gap-12 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-glow-primary opacity-30 blur-2xl" />
            <div className="relative w-full h-full rounded-3xl glass flex items-center justify-center overflow-hidden">
              <User size={96} className="text-muted" strokeWidth={1} />
            </div>
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted leading-relaxed text-base sm:text-lg"
          >
            I&apos;m a Computer Science Engineering student graduating in 2026 with a strong
            interest in Software Engineering, Artificial Intelligence, Machine Learning, and Full
            Stack Development.
            <br />
            <br />
            I enjoy building intelligent applications that solve real-world problems. My
            experience includes AI-powered assistive technologies, document automation systems,
            recommendation engines, and predictive machine learning applications.
            <br />
            <br />
            I am currently seeking Software Engineer and AI/ML Engineer opportunities where I can
            contribute, learn, and grow.
          </motion.p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass glass-hover rounded-2xl p-5 text-center"
              >
                <Counter value={stat.value} />
                <p className="mt-2 text-xs sm:text-sm text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
