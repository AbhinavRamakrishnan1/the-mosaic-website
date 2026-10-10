import type { Metadata } from 'next';
import { PageHeading } from '@/components/PageHeading';
import { focusAreas } from '@/data/focus';
import { BuiltTimeline } from '@/components/BuiltTimeline';

export const metadata: Metadata = {
  title: 'Our Focus | The Mosaic',
  description: 'Explore The Mosaic’s focus on cultural exchange, educational opportunity, community engagement, and youth leadership.',
  alternates: { canonical: '/focus' },
  openGraph: { title: 'Our Focus | The Mosaic', description: 'The four areas guiding The Mosaic’s community work.', url: '/focus', type: 'website' },
};

export default function FocusPage() { return <div className="page-shell focus-page"><PageHeading title="Our Focus" /><p className="intro">We bring people together through cultural exchange, educational opportunity, community engagement, and youth leadership.</p><section className="built-section"><p className="eyebrow">Evidence of progress</p><h2>What We&apos;ve Built</h2><BuiltTimeline /></section><section className="focus-list">{focusAreas.map(area => <article className="focus-detail" key={area.title}><h2>{area.title}</h2><div className="focus-detail-grid"><div><p className="focus-label">Our goal</p><p>{area.description}</p></div><div><p className="focus-label">What we&apos;ve done</p><p>{area.built}</p></div><div><p className="focus-label">What&apos;s next</p><p>{area.next}</p></div></div></article>)}</section></div>; }
