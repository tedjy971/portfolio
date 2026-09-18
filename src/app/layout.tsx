import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://tedjy.fr'),
  title: 'Teddy Gamiette | Développeur Full-stack',
  description:
    'Portfolio de Teddy Gamiette, développeur full-stack TypeScript spécialisé en Vue.js, NestJS, applications métier et DevOps.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {/* <SmoothScroll> */}
        {children}
        {/* </SmoothScroll> */}
      </body>
    </html>
  );
}
