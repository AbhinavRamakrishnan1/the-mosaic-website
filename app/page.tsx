import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blog';
import { focusAreas } from '@/data/focus';
import { countries } from '@/data/community';
import { AnimatedStats } from '@/components/AnimatedStats';
import { CommunityExplorer } from '@/components/CommunityExplorer';
import { JoinMosaicModal } from '@/components/JoinMosaicModal';
import { BuiltTimeline } from '@/components/BuiltTimeline';

export default function Home() {
  return <div className="home-shell">
    <section className="home-hero">
      <p className="eyebrow">A global student community</p>
      <h1>The Mosaic</h1>
      <p className="hero-tagline">Different stories. Shared purpose.</p>
      <Image className="mosaic-mark" src="/mosaic-mark.png" alt="Abstract mosaic emblem" width={150} height={150} priority />
      <p className="hero-mission">A space where students across borders share perspectives, publish stories, and connect through experiences.</p>
      <AnimatedStats />
      <JoinMosaicModal />
    </section>
    <section className="home-section built-section">
      <div className="section-heading-row"><div><p className="eyebrow">Evidence of progress</p><h2>What We&apos;ve Built</h2></div><Link href="/about">Read our story →</Link></div>
      <BuiltTimeline />
    </section>
    <section className="home-section">
      <h2>Our Focus</h2>
      <div className="focus-grid">{focusAreas.map(area => <article className="focus-item" key={area.title}><h3>{area.title}</h3><p>{area.description}</p></article>)}</div>
    </section>
    <section className="home-section featured-stories">
      <div className="section-heading-row"><div><p className="eyebrow">From the community</p><h2>Featured Stories</h2></div><Link href="/blog">View all writing →</Link></div>
      <div className="featured-story-list">{blogPosts.slice(0, 3).map(post => <article className="featured-story" key={post.slug}><p className="blog-meta">{post.category} · {post.readTime}</p><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><p className="story-author">By {post.author}</p></article>)}</div>
    </section>
    <section className="home-section community-section">
      <div className="section-heading-row"><div><p className="eyebrow">Across borders</p><h2>Our Community</h2></div><Link href="/members">Meet our members →</Link></div>
      <p className="community-intro">The Mosaic brings together students and perspectives from around the world. Select a country to explore the community we are building together.</p>
      <CommunityExplorer countries={countries} />
    </section>
    <section className="home-section participation-section">
      <p className="eyebrow">Take part</p><h2>Find your way in</h2><div className="participation-links"><a href="https://docs.google.com/forms/d/e/1FAIpQLScSBmS2nqLoalGSFGu5-gYaku11D2MHPzoY-8u0Dh3ZIYxVtA/viewform">Join The Mosaic →</a><Link href="/blog#submit">Submit writing →</Link><Link href="/contact">Collaborate with us →</Link></div>
    </section>
  </div>;
}
