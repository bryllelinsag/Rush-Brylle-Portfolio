import ProjectGrid from '@/components/ProjectGrid';
import Contact from '@/components/Contact';

export const metadata = { title: 'Portfolio' };

export default function PortfolioPage() {
  return (
    <main id="top" className="light-page">
      <section className="page-hero shell">
        <p className="section-label"><span>01</span> Projects · 2025–2026</p>
        <div className="page-hero__grid"><h1>Projects &<br /><i>school work.</i></h1><p>Real work from my school activities and work immersion, including graphic design, image editing, presentations, and campaign materials.</p></div>
      </section>
      <ProjectGrid />
      <section className="project-note shell"><p>What these projects show</p><h2>I can develop an idea, work with design software, and improve a project through <i>practice and feedback.</i></h2></section>
      <Contact />
    </main>
  );
}
