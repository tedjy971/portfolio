import { personalInfo } from '@/data/personalData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `CV ${personalInfo.name} | Développeur Full-stack Vue.js NestJS`,
  description:
    'CV de Teddy Gamiette, développeur full-stack TypeScript spécialisé en Vue.js, NestJS, applications métier, API, microservices et DevOps.',
  keywords: [
    'Développeur Full-stack',
    'Développeur TypeScript',
    'Développeur Vue.js',
    'Développeur NestJS',
    'Vue 3',
    'React',
    'Angular',
    'Pinia',
    'Storybook',
    'Vitest',
    'Développeur PHP',
    'Développeur Symfony',
    'Développeur Back-end',
    'PHP',
    'Symfony',
    'API Platform',
    'NestJS',
    'Microservices',
    'Elasticsearch',
    'RabbitMQ',
    'Stripe',
    'Playwright',
    'DevOps',
    'Docker',
    'Kubernetes',
    'AWS',
    'API REST',
    'TypeScript',
    'PostgreSQL',
  ].join(', '),
  alternates: {
    canonical: '/cv',
  },
};

export default function CvLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
