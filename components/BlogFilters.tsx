'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { BlogPost } from '@/data/blog';

export function BlogFilters({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState('');
  const [topic, setTopic] = useState('All topics');
  const topics = ['All topics', ...Array.from(new Set(posts.map(post => post.category)))];
  const filtered = useMemo(() => posts.filter(post => {
    const matchesTopic = topic === 'All topics' || post.category === topic;
    const haystack = `${post.title} ${post.author} ${post.excerpt} ${post.category}`.toLowerCase();
    return matchesTopic && haystack.includes(query.toLowerCase());
  }), [posts, query, topic]);

  return <>
    <div className="blog-controls" role="search">
      <label><span>Search stories</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search by title, author, or topic" /></label>
      <label><span>Topic</span><select value={topic} onChange={event => setTopic(event.target.value)}>{topics.map(item => <option key={item}>{item}</option>)}</select></label>
    </div>
    <div className="blog-list">{filtered.length ? filtered.map(post => <article className="blog-item" key={post.slug}><p className="blog-meta">{post.category} · {post.author} · {post.date} · {post.readTime}</p><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link className="blog-link" href={`/blog/${post.slug}`}>Read more →</Link></article>) : <p className="empty-search">No stories match that search yet.</p>}</div>
  </>;
}
