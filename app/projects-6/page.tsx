import { PageHeading } from '@/components/PageHeading';
import { focusAreas } from '@/data/focus';

export default function ProjectsPage() { return <div className="page-shell"><PageHeading title="Our Focus" /><p className="intro">We bring people together through cultural exchange, educational opportunity, community engagement, and youth leadership.</p><div className="focus-list">{focusAreas.map(area => <article className="focus-item" key={area.title}><h2>{area.title}</h2><p>{area.description}</p></article>)}</div></div>; }
