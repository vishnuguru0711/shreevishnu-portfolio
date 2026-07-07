import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="eyebrow mb-4">Error 404</p>
      <h1 className="font-display font-extrabold text-6xl sm:text-8xl gradient-text">404</h1>
      <p className="mt-6 text-muted max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-full bg-glow-primary font-medium hover:scale-105 transition-transform"
      >
        Back to Home
      </Link>
    </section>
  );
}
