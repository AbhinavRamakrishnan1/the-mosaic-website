import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { BlogFilters } from '@/components/BlogFilters';

export default function BlogPage(){return <div className="page-shell plain-content"><h1>Blog</h1><p className="intro">Stories, reflections, and conversations from The Mosaic community.</p><section className="editors-picks"><div className="section-heading-row"><div><p className="eyebrow">Read and explore</p><h2>Editors&apos; Picks</h2></div><Link href="#submit">Submit your writing →</Link></div><BlogFilters posts={blogPosts} /></section><section className="blog-submit" id="submit"><h2>Submit your writing</h2><p>Have a story or reflection? Send us a PDF for consideration.</p><p><a href="mailto:abhinavkrishna1008@gmail.com?subject=The%20Mosaic%20blog%20submission">Email your PDF to abhinavkrishna1008@gmail.com →</a></p></section></div>}
