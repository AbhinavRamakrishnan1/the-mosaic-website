import Link from 'next/link';
import { projects } from '@/data/projects';

export function ProjectList() { return <div className="project-list">{projects.map(project => <article className="project-entry" key={project.slug}><h2><Link href={`/${project.slug}`}>{project.title}</Link></h2><p>{project.description}</p></article>)}</div>; }
