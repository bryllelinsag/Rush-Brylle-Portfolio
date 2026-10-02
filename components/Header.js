'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={`nav shell ${pathname === '/portfolio' ? 'nav--dark' : ''}`}>
      <Link className="brand" href="/" aria-label="Rush Brylle Linsag, home">RBL<span>.</span></Link>
      <nav aria-label="Primary navigation">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link key={link.href} href={link.href} className={active ? 'active' : ''} aria-current={active ? 'page' : undefined}>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
      <Link className="availability" href="/about#contact"><i />Let&apos;s talk</Link>
    </header>
  );
}
