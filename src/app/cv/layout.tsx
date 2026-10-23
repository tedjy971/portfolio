import { personalInfo } from '@/data/personalData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `CV ${personalInfo.name} | Développeur Full-stack orienté Back-end`,
  description:
    'CV de Teddy Gamiette, développeur full-stack orienté back-end : PHP/Symfony 7, TypeScript/NestJS, Vue 3, API REST, microservices et IA.',
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
