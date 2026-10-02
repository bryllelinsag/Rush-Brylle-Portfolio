import './globals.css';
import Header from '@/components/Header';
import Effects from '@/components/Effects';

export const metadata = {
  title: { default: 'Rush Brylle Linsag — Creative Portfolio', template: '%s — Rush Brylle Linsag' },
  description: 'The creative portfolio of Rush Brylle Linsag — an emerging designer and developer learning through thoughtful digital experiments.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="noise" aria-hidden="true" />
        <Effects />
        <Header />
        {children}
      </body>
    </html>
  );
}
