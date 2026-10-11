import type { Metadata } from 'next';
import { archivePosts, editorialPosts } from '@/data/blog';
import { BlogCollections } from '@/components/BlogCollections';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Blog | Stories and Perspectives from The Mosaic',
  description: 'Read essays and perspectives from The Mosaic community, covering culture, identity, literacy, debate, fairness, and youth voice.',
  alternates: { canonical: '/blog' },
  openGraph: { title: 'Blog | The Mosaic', description: 'Stories and perspectives from The Mosaic community.', url: '/blog', type: 'website' },
};

export default function BlogPage() {
  return <div className="page-shell plain-content">
    <h1>Blog</h1>
    <p className="intro">Stories, reflections, and conversations from The Mosaic community.</p>
    <BlogCollections editorialPosts={editorialPosts} archivePosts={archivePosts} />
    <section className="blog-submit" id="submit">
      <p className="eyebrow">Share your perspective</p><h2>Submit Your Writing</h2>
      <p>Every perspective adds something to the bigger picture. Share an original reflection, cultural experience, opinion, or creative piece through our submission form.</p>
      <p className="submission-note">Submissions are reviewed by The Mosaic team; publication is not guaranteed.</p>
      <a className="join-button" href={site.submissionUrl} target="_blank" rel="noreferrer">Open the submission form →</a>
    </section>
  </div>;
}
