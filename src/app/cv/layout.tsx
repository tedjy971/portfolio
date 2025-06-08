import { personalInfo } from '@/data/personalData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `CV - ${personalInfo.name} - ${personalInfo.title}`,
  description: `${personalInfo.title} - ${personalInfo.description}`,
  keywords: [
    'Tech Lead',
    'Développeur Back-end',
    'PHP',
    'Symfony',
    'React',
    'Next.js',
    'DevOps',
    'Docker',
    'API REST',
    'TypeScript',
    'MySQL',
    'PostgreSQL',
  ].join(', '),
};

export default function CvLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}