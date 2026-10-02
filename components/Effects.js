'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Effects() {
  const cursor = useRef(null);
  const progress = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
    const cursorNode = cursor.current;
    const progressNode = progress.current;
    const pointer = (event) => {
      cursorNode.style.left = `${event.clientX}px`;
      cursorNode.style.top = `${event.clientY}px`;
    };
    const scroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressNode.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    };
    const links = document.querySelectorAll('a, button, [tabindex="0"]');
    const enter = () => cursorNode.classList.add('is-active');
    const leave = () => cursorNode.classList.remove('is-active');
    links.forEach((link) => {
      link.addEventListener('mouseenter', enter);
      link.addEventListener('mouseleave', leave);
    });
    window.addEventListener('pointermove', pointer);
    window.addEventListener('scroll', scroll, { passive: true });
    scroll();
    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', enter);
        link.removeEventListener('mouseleave', leave);
      });
      window.removeEventListener('pointermove', pointer);
      window.removeEventListener('scroll', scroll);
    };
  }, [pathname]);

  return <><div ref={cursor} className="cursor" aria-hidden="true" /><div ref={progress} className="progress" aria-hidden="true" /></>;
}
