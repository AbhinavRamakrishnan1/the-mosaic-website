import { milestones } from '@/data/milestones';

export function BuiltTimeline() {
  return <div className="built-timeline">{milestones.map(item => <article className="milestone" key={item.title}><p className="eyebrow">{item.label}</p><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>;
}
