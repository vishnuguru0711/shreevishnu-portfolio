import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import CursorGlow from '@/components/CursorGlow';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const siteUrl = 'https://shreevishnuk.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Shreevishnu K | Software Engineer & AI/ML Enthusiast',
    template: '%s | Shreevishnu K',
  },
  description:
    'Portfolio of Shreevishnu K, a Computer Science Engineering student and aspiring Software & AI/ML Engineer building intelligent software solutions with Python, Java, Flask, and TensorFlow.',
  keywords: [
    'Shreevishnu K',
    'Software Engineer',
    'AI Engineer',
    'Machine Learning',
    'Full Stack Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Shreevishnu K' }],
  openGraph: {
    title: 'Shreevishnu K | Software Engineer & AI/ML Enthusiast',
    description:
      'Building intelligent software solutions using AI, Machine Learning, Python, Java, Flask, TensorFlow, and modern web technologies.',
    url: siteUrl,
    siteName: 'Shreevishnu K Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreevishnu K | Software Engineer & AI/ML Enthusiast',
    description:
      'Building intelligent software solutions using AI, Machine Learning, Python, Java, Flask, TensorFlow, and modern web technologies.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body bg-background text-white antialiased">
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
