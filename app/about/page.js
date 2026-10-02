import Image from 'next/image';
import Marquee from '@/components/Marquee';
import Contact from '@/components/Contact';

export const metadata = { title: 'About' };

const principles = [
  ['01', 'Understand the task', 'I start by identifying the required output, audience, and information that must be included.'],
  ['02', 'Build and experiment', 'I try layouts, colors, images, and tools until the project communicates the idea clearly.'],
  ['03', 'Review and improve', 'I check my work, listen to feedback, and refine the parts that can be clearer or stronger.'],
];

const skills = [
  ['Design tools', 'Adobe Photoshop, Adobe Illustrator, Canva'],
  ['Visual design', 'Photo manipulation, logo tracing, layout, color, typography'],
  ['Presentations', 'Microsoft PowerPoint, visual hierarchy, slide layout'],
  ['Web basics', 'HTML, CSS, JavaScript, responsive design'],
  ['IT foundations', 'Programming fundamentals, basic troubleshooting, file management'],
  ['Currently learning', 'Next.js, UI/UX design, stronger front-end development'],
];

export default function AboutPage() {
  return (
    <main id="top">
      <section className="about-hero shell">
        <p className="section-label"><span>01</span> About Me</p>
        <h1>BSIT student.<br /><i>Designer in progress.</i></h1>
        <div className="about-hero__meta"><p>I&apos;m Rush Brylle Linsag, a second-year Bachelor of Science in Information Technology student from the Philippines. I enjoy graphic design, editing images, building presentations, and learning how websites work.</p><p>My current portfolio comes from school activities and work immersion. I&apos;m developing both creative and technical skills while learning how to turn requirements into clear, finished outputs.</p></div>
      </section>

      <section className="portrait-band shell">
        <div className="portrait-band__visual portrait-band__visual--photo"><Image src="/assets/rush/hero-working.jpg" alt="Rush Brylle Linsag working on a digital design project" fill sizes="100vw" /><span>RBL</span><i>Second-year BSIT student<br />Learning through real projects.</i></div>
        <p>Student<br />Creative Journey<br />© 2026</p>
      </section>

      <section className="skills-section shell">
        <p className="section-label"><span>02</span> Skills</p>
        <div className="skills-heading"><h2>Tools I use and<br /><i>skills I&apos;m building.</i></h2><p>My current skill set combines school-level IT foundations with hands-on visual design experience.</p></div>
        <div className="skills-list">{skills.map(([title, detail], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{detail}</p></article>)}</div>
      </section>

      <section className="process shell">
        <p className="section-label"><span>03</span> Work Process</p>
        <div className="process__grid">
          <h2>Less noise.<br /><i>More meaning.</i></h2>
          <div className="principles">{principles.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
        </div>
      </section>
      <Marquee />
      <Contact />
    </main>
  );
}
