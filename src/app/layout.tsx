import { IBM_Plex_Sans, Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-plex',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata = {
  metadataBase: new URL('https://tedjy.fr'),
  title: 'Teddy Gamiette | Développeur Full-stack orienté Back-end',
  description:
    'Portfolio de Teddy Gamiette, développeur full-stack orienté back-end : PHP/Symfony 7, TypeScript/NestJS, Vue 3, API REST, microservices et IA/LLM.',
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
      <body className={`${inter.variable} ${plexSans.variable} ${jetbrainsMono.variable} antialiased`}>
        {/* <SmoothScroll> */}
        {children}
        {/* </SmoothScroll> */}
        <Analytics />
      </body>
    </html>
  );
}
