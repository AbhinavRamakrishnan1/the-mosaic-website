import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogContent, blogPosts } from '@/data/blog';

export function generateStaticParams() { return blogPosts.map(post => ({ slug: post.slug })); }

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
    {post.pdfPage ? <p className="pdf-download"><a href={`/mosaic-editorials.pdf#page=${post.pdfPage}`}>Download the original essay PDF →</a></p> : null}
    <nav className="story-navigation" aria-label="Story navigation"><div>{previous ? <Link href={`/blog/${previous.slug}`}>← {previous.title}</Link> : <Link href="/blog">← All writing</Link>}</div><div>{next ? <Link href={`/blog/${next.slug}`}>{next.title} →</Link> : <Link href="/blog">All writing →</Link>}</div></nav>
  </article>;
}
