import Image from 'next/image';
import Contact from '@/components/Contact';

export const metadata = { title: 'Gallery' };

const pieces = [
  { id: '01', title: 'Portfolio Cover', type: 'PDF page', image: '/assets/rush/pdf-cover.png' },
  { id: '02', title: 'Presentation Design', type: 'PDF page', image: '/assets/rush/pdf-presentation.png' },
  { id: '03', title: 'Digital Painting', type: 'PDF page', image: '/assets/rush/pdf-painting.png' },
  { id: '04', title: 'Photo Manipulation', type: 'PDF page', image: '/assets/rush/pdf-photo-manipulation.png' },
  { id: '05', title: 'Melon Head', type: 'PDF page', image: '/assets/rush/pdf-melon-head.png' },
  { id: '06', title: 'Logo Tracing', type: 'PDF page', image: '/assets/rush/pdf-logo-trace.png' },
  { id: '07', title: 'Logo, Flyer & Brochure', type: 'PDF page', image: '/assets/rush/pdf-branding.png' },
  { id: '08', title: 'EcoGuardians Logo', type: 'Final artwork', image: '/assets/rush/eco-logo.jpg' },
];

export default function GalleryPage() {
  return (
    <main id="top">
      <section className="gallery-hero shell">
        <p className="section-label"><span>01</span> Project Gallery</p>
        <h1>Project photos &<br /><i>portfolio pages.</i></h1>
        <div className="gallery-hero__intro"><p>Selected snapshots from my 2025 work immersion portfolio and graphic design activities.</p><a href="/assets/rush/rush-brylle-work-immersion-portfolio.pdf" target="_blank" rel="noreferrer">Open full portfolio PDF ↗</a></div>
      </section>
      <section className="gallery-grid shell">
        {pieces.map((piece) => (
          <article className="gallery-piece" key={piece.id} tabIndex="0">
            <div className="gallery-art gallery-art--image"><Image src={piece.image} alt={`${piece.title} by Rush Brylle Linsag`} fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
            <div><span>{piece.id}</span><h2>{piece.title}</h2><small>{piece.type} · 2025</small></div>
          </article>
        ))}
      </section>
      <Contact />
    </main>
  );
}
