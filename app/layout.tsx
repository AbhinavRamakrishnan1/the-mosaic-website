import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  metadataBase: new URL('https://the-mosaic.vercel.app'),
  title: { default: 'The Mosaic — Different stories. Shared purpose.', template: '%s | The Mosaic' },
  description: 'The Mosaic brings people together through storytelling, cultural exchange, and meaningful community connections.',
  robots: { index: true, follow: true },
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

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://the-mosaic.vercel.app/#organization',
  name: 'The Mosaic',
  url: 'https://the-mosaic.vercel.app/',
  logo: 'https://the-mosaic.vercel.app/mosaic-mark.png',
  description: 'A student-led international community focused on storytelling, cultural exchange, education, community engagement, and youth leadership.',
  sameAs: ['https://www.linkedin.com/company/the-mosaic-initiative/'],
  founder: { '@id': 'https://the-mosaic.vercel.app/#abhinav-ramakrishnan' },
};

const founderSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://the-mosaic.vercel.app/#abhinav-ramakrishnan',
  name: 'Abhinav Ramakrishnan',
  jobTitle: 'Founder & President',
  description: 'Abhinav Ramakrishnan is the founder of The Mosaic and a student at Monroe Township High School in New Jersey.',
  worksFor: { '@id': 'https://the-mosaic.vercel.app/#organization' },
  image: 'https://the-mosaic.vercel.app/abhinav-ramakrishnan.png',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader /><main>{children}</main><SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, founderSchema]) }} /></body></html>;
}
