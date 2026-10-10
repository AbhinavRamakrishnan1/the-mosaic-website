import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogContent, blogPosts } from '@/data/blog';
import { site } from '@/data/site';

export function generateStaticParams() { return blogPosts.map(post => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(item => item.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | The Mosaic`, description: post.excerpt, alternates: { canonical: `/blog/${post.slug}` }, openGraph: { title: `${post.title} | The Mosaic`, description: post.excerpt, url: `/blog/${post.slug}`, type: 'article', authors: [post.author] } };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postIndex = blogPosts.findIndex(item => item.slug === slug);
  const post = blogPosts[postIndex];
  if (!post) notFound();
  const paragraphs = blogContent[post.slug] ?? [];
  const previous = blogPosts[postIndex - 1];
  const next = blogPosts[postIndex + 1];

  return <article className="detail blog-detail">
    <p className="eyebrow">Editors&apos; Pick · {post.category} · {post.author}</p>
    <h1>{post.title}</h1>
    <p className="blog-meta">{post.date} · {post.readTime}</p>
    <p className="detail-lede">{post.excerpt}</p>
    <div className="essay-body">{paragraphs.map((paragraph, index) => <p key={`${post.slug}-${index}`}>{paragraph.replace(/\uFFFD/g, '’')}</p>)}</div>
    {post.pdfPage ? <p className="pdf-download"><a href={`/mosaic-editorials.pdf#page=${post.pdfPage}`}>Download the collected editorial PDF · page {post.pdfPage} →</a></p> : null}
    <nav className="story-navigation" aria-label="Story navigation"><div>{previous ? <Link href={`/blog/${previous.slug}`}>← {previous.title}</Link> : <Link href="/blog">← All writing</Link>}</div><div>{next ? <Link href={`/blog/${next.slug}`}>{next.title} →</Link> : <Link href="/blog">All writing →</Link>}</div></nav>
    <section className="article-submit"><p className="eyebrow">Have a perspective to share?</p><p>Submit your original writing to The Mosaic.</p><a href={site.submissionUrl} target="_blank" rel="noreferrer">Submit Your Writing →</a></section>
  </article>;
}
