import { members } from '@/data/members';

export function AnimatedStats() {
  const memberCount = members.length;
  return <div className="hero-stats" aria-label="The Mosaic at a glance">
    <div><strong>{memberCount}+</strong><span>Members</span></div>
    <div><strong>25+</strong><span>Countries</span></div>
    <div><strong>Global</strong><span>Perspectives</span></div>
  </div>;
}
