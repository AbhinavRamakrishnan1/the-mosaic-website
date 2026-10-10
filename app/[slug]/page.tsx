import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';

export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const project = projects.find(item => item.slug === slug); if (!project) notFound(); return <article className="detail"><p className="eyebrow">Project / {project.shortTitle}</p><h1>{project.title}</h1><p className="detail-lede">{project.description}</p><h2>About this project</h2><p>{project.detail}</p><p>This page is ready for the organization’s editorial stories, interviews, image galleries, and external links to be added as those materials become available.</p></article>; }
