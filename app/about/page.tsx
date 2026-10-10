import { PageHeading } from '@/components/PageHeading';
import { BuiltTimeline } from '@/components/BuiltTimeline';

export default function AboutPage() {
  return <div className="page-shell plain-content">
    <PageHeading title="The Mosaic" />
    <p className="about-kicker"><em>Every person has a story. Every story deserves to be heard.</em></p>
    <p>The Mosaic is a student-led initiative founded on a simple belief: our differences should bring us closer, not keep us apart. Every community is shaped by people with their own experiences, traditions, challenges, and perspectives. Yet so many of these stories remain unheard, often because the people living them are never given the opportunity to share them.</p>
    <p>We created The Mosaic to change that. Through storytelling, cultural exchange, and community involvement, we hope to connect people who might otherwise never cross paths. Just as individual pieces come together to form a mosaic, we believe that understanding one another is what creates a stronger, more compassionate society.</p>
    <h2>What We Do</h2>
    <p>We believe meaningful change begins with understanding. Before we can make a difference in someone&apos;s life, we must first be willing to listen to their experiences, recognize their challenges, and see the world from a perspective beyond our own.</p>
    <p>The Mosaic aims to bring these perspectives together by creating opportunities for students and community members to share their stories, explore different cultures, and take part in meaningful service. Through future interviews, written reflections, cultural initiatives, and collaborations with community organizations, we hope to turn everyday interactions into something lasting.</p>
    <p>Our mission centers on two goals:</p>
    <ol><li><strong>Connecting communities.</strong> We want to bring people from different cultural and social backgrounds together, encouraging conversations that challenge assumptions, build empathy, and create genuine relationships.</li><li><strong>Turning understanding into action.</strong> By sharing personal experiences and highlighting community needs, we hope to inspire young people to become more involved, whether through volunteering, educational outreach, or initiatives of their own.</li></ol>
    <p>We don&apos;t believe making a difference always requires grand gestures. Sometimes, it begins with a conversation, a shared experience, or simply taking the time to hear someone else&apos;s story.</p>
    <section className="about-built"><p className="eyebrow">Evidence of progress</p><h2>What We&apos;ve Built</h2><BuiltTimeline /></section>
    <h2>Letter From the Founder</h2>
    <h3>How It All Started</h3>
    <p>I&apos;ve always found it interesting how much we can know about the world while knowing so little about the people around us.</p>
    <p>We pass hundreds of people throughout our lives, in classrooms, grocery stores, neighborhoods, and crowded streets. Each carries experiences that have shaped who they are, yet most of us will never hear them. We see people every day without really knowing their stories.</p>
    <p>That thought stayed with me. I began thinking about how easily we become comfortable within our own circles, surrounded by people who think, speak, and live much like we do. There is nothing inherently wrong with that, but I wondered how much we miss when we never look beyond them.</p>
    <p>The idea for The Mosaic grew from that curiosity. I wanted to create something that would encourage people, especially students, to step outside what feels familiar and discover the perspectives that exist all around them.</p>
    <p>I chose the name <em>The Mosaic</em> because no two pieces of a mosaic are exactly alike. Each has its own shape, color, and place, but together they create something that none could form alone. I think communities work the same way.</p>
    <p>I don&apos;t expect The Mosaic to change the world overnight. But if it encourages someone to listen more closely, question an assumption, or reach out to a person they otherwise wouldn&apos;t have, then I believe it&apos;s already moving in the right direction.</p>
    <p>After all, the most meaningful connections often begin with something as simple as asking someone about their story.</p>
    <p><strong>— Abhinav Ramakrishnan</strong><br />Founder, The Mosaic</p>
  </div>;
}
