import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6 text-center text-sm text-muted">
      <p className="flex items-center justify-center gap-1.5">
        Made with <Heart size={14} className="text-secondary fill-secondary" /> using Next.js &amp;
        Tailwind CSS
      </p>
      <p className="mt-1">&copy; {new Date().getFullYear()} SHREEVISHNU K</p>
    </footer>
  );
}
