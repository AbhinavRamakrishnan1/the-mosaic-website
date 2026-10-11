'use client';

import { useState } from 'react';
import type { BlogPost } from '@/data/blog';
import { BlogFilters } from '@/components/BlogFilters';
import { site } from '@/data/site';

export function BlogCollections({ editorialPosts, archivePosts }: { editorialPosts: BlogPost[]; archivePosts: BlogPost[] }) {
  const [active, setActive] = useState<'picks' | 'archive'>('picks');
  return <section className="blog-collections" aria-label="Blog collections">
    <div className="blog-tabs" role="tablist" aria-label="Choose a blog collection">
      <button id="picks-tab" className={active === 'picks' ? 'blog-tab active' : 'blog-tab'} type="button" role="tab" aria-selected={active === 'picks'} aria-controls="picks-panel" onClick={() => setActive('picks')}>Editors&apos; Picks</button>
      <button id="archive-tab" className={active === 'archive' ? 'blog-tab active' : 'blog-tab'} type="button" role="tab" aria-selected={active === 'archive'} aria-controls="archive-panel" onClick={() => setActive('archive')}>Submission Archive</button>
    </div>
    {active === 'picks' ? <div id="picks-panel" className="blog-tab-panel" role="tabpanel" aria-labelledby="picks-tab" tabIndex={0}>
      <div className="section-heading-row"><div><p className="eyebrow">Read and explore</p><h2>Editors&apos; Picks</h2></div><a href={site.submissionUrl} target="_blank" rel="noreferrer">Submit Your Writing →</a></div>
      <BlogFilters posts={editorialPosts} />
    </div> : <div id="archive-panel" className="blog-tab-panel" role="tabpanel" aria-labelledby="archive-tab" tabIndex={0}>
      <div className="section-heading-row"><div><p className="eyebrow">From the submission collection</p><h2>Submission Archive</h2></div></div>
      <p className="archive-intro">A growing collection of writing submitted to The Mosaic. These pieces remain available for readers to explore while our editorial selections highlight six featured essays.</p>
      <BlogFilters posts={archivePosts} />
    </div>}
  </section>;
}
