import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { BlogFilters } from '@/components/BlogFilters';
import { site } from '@/data/site';

export default function BlogPage(){return <div className="page-shell plain-content"><h1>Blog</h1><p className="intro">Stories, reflections, and conversations from The Mosaic community.</p><section className="editors-picks"><div className="section-heading-row"><div><p className="eyebrow">Read and explore</p><h2>Editors&apos; Picks</h2></div><a href={site.submissionUrl} target="_blank" rel="noreferrer">Submit Your Writing →</a></div><BlogFilters posts={blogPosts} /></section><section className="blog-submit" id="submit"><p className="eyebrow">Share your perspective</p><h2>Submit Your Writing</h2><p>Every perspective adds something to the bigger picture. Share an original reflection, cultural experience, opinion, or creative piece through our submission form.</p><p className="submission-note">Submissions are reviewed by The Mosaic team; publication is not guaranteed.</p><a className="join-button" href={site.submissionUrl} target="_blank" rel="noreferrer">Open the submission form →</a></section></div>}
