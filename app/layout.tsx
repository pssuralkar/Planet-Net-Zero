import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { SEOProvider } from '@/components/seo/seo-provider';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: {
    default: 'Planet Net Zero - Environmental Technology Solutions',
    template: '%s | Planet Net Zero'
  },
  description: 'Leading provider of environmental technology solutions including sulphur removal systems, biogas purification, flue gas desulfurization, and emission control systems.',
  keywords: ['environmental technology', 'emission control', 'biogas purification', 'sulphur removal', 'flue gas desulfurization', 'clean energy', 'sustainability'],
  authors: [{ name: 'Planet Net Zero' }],
  creator: 'Planet Net Zero',
  publisher: 'Planet Net Zero',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://planetnetzero.com',
    siteName: 'Planet Net Zero',
    title: 'Planet Net Zero - Environmental Technology Solutions',
    description: 'Leading provider of environmental technology solutions for a sustainable future.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Planet Net Zero - Environmental Technology Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planet Net Zero - Environmental Technology Solutions',
    description: 'Leading provider of environmental technology solutions for a sustainable future.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://planetnetzero.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#22c55e" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SEOProvider>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
          </SEOProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}