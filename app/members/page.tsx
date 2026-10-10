import type { Metadata } from 'next';
import { MemberCounter } from '@/components/MemberCounter';
import { FounderGallery } from '@/components/FounderGallery';
import { MemberSearch } from '@/components/MemberSearch';
import { members } from '@/data/members';

export const metadata: Metadata = {
  title: 'Members | The Mosaic Community',
  description: 'Meet the 206 members of The Mosaic, a student-led international community founded by Abhinav Ramakrishnan.',
  alternates: { canonical: '/members' },
  openGraph: { title: 'Members | The Mosaic', description: 'Meet The Mosaic community and its founder, Abhinav Ramakrishnan.', url: '/members', type: 'website' },
};

export default function MembersPage(){return <div className="page-shell plain-content"><h1>Members</h1><p>Our members are students and community-minded people who believe that every story deserves to be heard.</p><MemberCounter total={members.length} /><MemberSearch members={members} /><section className="founder-section"><h2>Meet the Founder</h2><div className="founder-layout"><FounderGallery /><div className="founder-copy"><h3>Abhinav Ramakrishnan</h3><p className="founder-role"><em>Founder &amp; President | The Mosaic</em></p><div className="founder-bio"><p>Abhinav is a student at Monroe Township High School and the founder of The Mosaic. He started the initiative with the belief that some of the most meaningful stories are found in the people we encounter every day, yet rarely take the time to understand.</p><p>Through The Mosaic, he hopes to bring together students from different backgrounds, encourage cultural exchange, and create opportunities for young people to make a difference in their communities.</p><p>For Abhinav, The Mosaic is more than a platform for storytelling. It&apos;s a way to remind people that despite our different experiences, we all have something to learn from one another.</p></div></div></div></section></div>}
