import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  metadataBase: new URL('https://the-mosaic.vercel.app'),
  title: { default: 'The Mosaic — Different stories. Shared purpose.', template: '%s | The Mosaic' },
  description: 'The Mosaic brings people together through storytelling, cultural exchange, and meaningful community connections.',
  alternates: { canonical: 'https://the-mosaic.vercel.app/' },
  openGraph: {
    title: 'The Mosaic — Different stories. Shared purpose.',
    description: 'The Mosaic brings people together through storytelling, cultural exchange, and meaningful community connections.',
    url: 'https://the-mosaic.vercel.app/',
    siteName: 'The Mosaic',
    type: 'website',
    images: [{ url: '/og-the-mosaic.png', width: 1200, height: 630, alt: 'The Mosaic — Different stories. Shared purpose.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Mosaic — Different stories. Shared purpose.',
    description: 'The Mosaic brings people together through storytelling, cultural exchange, and meaningful community connections.',
    images: ['/og-the-mosaic.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
