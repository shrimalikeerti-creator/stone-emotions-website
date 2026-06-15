import type { Metadata } from 'next';
import { Fraunces, Work_Sans } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-fraunces',
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-work-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Stone Emotions — Premium Natural Stone Architectural Elements',
  description:
    'Stone Emotions LLP — CNC-carved stone murals, sofa walls, jali screens and feature walls for architects, interior designers and luxury developments.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <body>
        <nav>
          <a className="nav-logo" href="/">
            <img src="/images/logo.jpg" alt="Stone Emotions logo" />
          </a>
          <div className="nav-links">
            <a href="/about/">About</a>
            <a href="/gallery/">Gallery</a>
            <a href="/products/">Products</a>
            <a href="/materials/">Materials</a>
            <a href="/architects/">Architects</a>
            <a href="/knowledge-center/">Knowledge Center</a>
            <a href="/#contact" className="nav-cta">
              Contact
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
