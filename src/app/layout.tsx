import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Teddy Gamiette | Développeur Web',
  description:
    'Portfolio de Teddy Gamiette,  Développeur Back-end spécialisé en PHP, React, Next.js et Symfony. Passionné de sport et de domotique.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {/* <SmoothScroll> */}
        {children}
        {/* </SmoothScroll> */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
