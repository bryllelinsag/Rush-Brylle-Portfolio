import Image from 'next/image';

const projects = [
  {
    number: '01',
    title: 'EcoGuardians Campaign',
    category: 'Logo · Flyer · Trifold brochure',
    description: 'An environmental awareness campaign created during work immersion. The project combines a nature-based logo, informational flyer, and two-sided brochure in one consistent green visual theme.',
    image: '/assets/rush/eco-brochure-front.png',
    process: '/assets/rush/brochure-process.jpg',
    tools: 'Adobe Illustrator · Adobe Photoshop',
    wide: true,
  },
  {
    number: '02',
    title: 'Photo Manipulation',
    category: 'Image composition',
    description: 'A Photoshop composition that combines a landscape, characters, lighting, and color adjustments into one detailed scene.',
    image: '/assets/rush/pdf-photo-manipulation.png',
    process: '/assets/rush/photo-manipulation-process.jpg',
    tools: 'Adobe Photoshop',
  },
  {
    number: '03',
    title: 'Work Immersion Portfolio',
    category: 'Portfolio · Presentation design',
    description: 'A seven-page portfolio documenting presentation design, digital painting, photo manipulation, logo tracing, and print-layout activities completed in 2025.',
    image: '/assets/rush/pdf-cover.png',
    process: '/assets/rush/pdf-presentation.png',
    tools: 'PowerPoint · Photoshop · Illustrator',
  },
];

export default function ProjectGrid() {
  return (
    <div className="real-projects shell">
      {projects.map((project) => (
        <article className={`real-project ${project.wide ? 'real-project--wide' : ''}`} key={project.number}>
          <div className="real-project__image">
            <Image src={project.image} alt={`${project.title} by Rush Brylle Linsag`} fill sizes={project.wide ? '100vw' : '(max-width: 800px) 100vw, 50vw'} />
            <span>{project.number}</span>
          </div>
          <div className="real-project__content">
            <p>{project.category}</p>
            <h2>{project.title}</h2>
            <p className="real-project__description">{project.description}</p>
            <div className="real-project__tools"><span>Tools</span><b>{project.tools}</b></div>
          </div>
          <div className="real-project__process">
            <Image src={project.process} alt={`Process for ${project.title}`} fill sizes="(max-width: 800px) 100vw, 35vw" />
            <span>Process snapshot</span>
          </div>
        </article>
      ))}
    </div>
  );
}
