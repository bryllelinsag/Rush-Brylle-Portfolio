import Image from 'next/image';
import Link from 'next/link';
import Marquee from '@/components/Marquee';

export default function Home() {
  return (
    <main id="top">
      <section className="hero shell">
        <div className="hero__art hero__art--photo" aria-hidden="true"><Image src="/assets/rush/hero-working.jpg" alt="" fill priority sizes="100vw" /></div>
        <div className="hero__eyebrow"><span>2nd-year BSIT student</span><span>Graphic design · Web development</span></div>
        <h1 className="hero__title hero__title--rush" aria-label="Rush Brylle Linsag"><span>Rush Brylle</span><span>Linsag<em>.</em></span></h1>
        <div className="hero__footer">
          <p>I create school and personal projects in graphic design, photo editing, presentations, and web development.</p>
          <Link className="round-link" href="/portfolio" aria-label="Explore portfolio">↘</Link>
        </div>
      </section>

      <section className="home-intro shell">
        <p className="section-label"><span>01</span> About Me</p>
        <p className="home-intro__statement">I&apos;m a <i>second-year BSIT student</i> building practical skills in graphic design, presentations, photo editing, and <i>web development.</i></p>
        <div className="home-intro__links">
          <Link href="/portfolio"><span>Projects</span><b>01</b><i>↗</i></Link>
          <Link href="/about"><span>About Rush</span><b>02</b><i>↗</i></Link>
          <Link href="/gallery"><span>Project Gallery</span><b>03</b><i>↗</i></Link>
        </div>
      </section>
      <Marquee />
    </main>
  );
}
