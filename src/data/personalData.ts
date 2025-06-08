import { Key, ReactNode } from 'react';

export const personalInfo = {
  name: 'Teddy Gamiette',
  title: 'Développeur Web Passionné',
  role: 'Développeur Back-end en alternance',
  company: 'Kernix',
  email: 'gamiette.teddy@gmail.com',
  phone: '+33 7 81 95 04 36',
  location: 'Palaiseau, Ile de France',
  github: 'https://github.com/tedjy971',
  linkedin: 'https://www.linkedin.com/in/teddy-gamiette-9a1a9613a/',
  website: 'https://teddygamiette.online',
  description:
    'Développeur web back-end spécialisé en PHP, Symfony, React et Next.js. Développeur Back-end en alternance chez Kernix avec une passion pour le sport et la domotique.',
};

export const educationExperiences = [
  {
    title: 'Master Tech Lead',
    school: 'HETIC',
    period: 'En cours',
    description:
      "Formation en alternance axée sur le leadership technique et la gestion de projets IT complexes. Acquisition de compétences avancées en architecture logicielle, DevOps, et management d'équipes techniques. Spécialisation en optimisation des processus de développement et déploiement continu.",
  },
  {
    title: 'Bachelor Web ',
    school: 'HETIC',
    period: '2023',
    description:
      'Formation intensive dans le développement web avec spécialisation full-stack. Maîtrise des frameworks modernes (React, Symfony) et méthodologies agiles. Projets concrets en conditions réelles avec des partenaires.',
  },
  {
    title: 'Licence SGBD (Système de Gestion de Base de Données)',
    school: 'Université Evry',
    period: '2019',
    description:
      "Cursus spécialisé dans l'analyse et la visualisation de données massives. Acquisition de compétences en statistiques avancées.",
  },
  {
    title: 'BTS SNIR (Système Numériques Informatique et Réseaux)',
    school: 'Lycée Parc de Vilgénis',
    period: '2018',
    description:
      'Diplôme technique en Systèmes Numériques option Informatique et Réseaux. Formation approfondie en développement logiciel, administration système et réseaux, avec projets pratiques en entreprise',
  },
];

export const experiences = [
  {
    title: 'Developpeur web Back-end en alternance',
    company: 'Kernix',
    period: 'Actuel',
    tags: ['NextJS', 'NestJS', 'Symfony', 'API REST'],
    description:
      "Développement et maintenance d'applications web et d'APIs robustes. Utilisation quotidienne de technologies modernes telles que Symfony, NestJS, NextJS, et API Platform. Contribution à des projets d'envergure impliquant Elasticsearch pour la recherche, AWS et Linode pour l'infrastructure cloud. Maîtrise des outils de versioning Git (GitLab, GitHub) et des bases de données NoSQL comme Redis. Participation active au développement et à l'amélioration d'un framework PHP maison (KWO).",
  },
  {
    title: 'Data Analyst',
    company: 'LUCERNYS',
    period: '2018-2019',
    tags: ['Base de données', 'Analyses Big Data', 'R', 'Tableau de bord', 'VBA'],
    description:
      "Analyse et traitement de données massives pour extraire des insights stratégiques. Utilisation d'outils d'analyse statistique comme R pour identifier des tendances et créer des modèles prédictifs. Développement de tableaux de bord interactifs pour la visualisation des données et l'aide à la décision.",
  },
  {
    title: 'Problem Solver',
    company: 'Amazon',
    period: '2022',
    tags: ['VBA', 'Excel', 'Macros'],
    description:
      "Conception et développement d'une macro VBA pour l'automatisation de recherches de produits et la récupération de données via l'API Amazon. Optimisation des processus de collecte d'informations et de reporting.",
  },
  {
    title: 'Technicien Informatique',
    company: 'SPIE ICS',
    period: '2021',
    tags: ['Windows', 'MacOS', 'Linux', 'Network', 'IT', 'Support'],
    description:
      'Gestion du parc informatique et support technique aux utilisateurs. Déploiement et maintenance de solutions réseau. Résolution des incidents et optimisation des infrastructures IT pour garantir la continuité des services.',
  },
  {
    title: 'Développeur Web (Stage)',
    company: 'Conseil Départemental de Seine-Saint-Denis',
    period: '2020',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    description:
      "Conception et développement d'une application de gestion de projets en PHP natif. Mise en place d'une interface utilisateur intuitive et d'une base de données optimisée. Collaboration étroite avec les équipes métier pour répondre aux besoins spécifiques de l'administration.",
  },
];

export const interests = [
  {
    title: 'Musculation',
    icon: '💪',
    description:
      "Passionné de musculation et d'entraînement physique. La discipline et la persévérance du sport sont des valeurs que j'applique en développement.",
  },
  {
    title: 'DevOps',
    icon: '⚙️',
    description:
      "Intéressé par les pratiques DevOps, l'automatisation des déploiements et l'infrastructure as code.",
  },
  {
    title: 'Domotique',
    icon: '🏠',
    description:
      "Passionné par les technologies de maison intelligente et l'automatisation résidentielle.",
  },
];

export const skills = [
  // Backend
  {
    name: 'Symfony',
    level: 95,
    category: 'backend',
    color: 'bg-blue-600',
    logo: '/assets/skills/Symfony Icon.svg',
  },
  {
    name: 'NestJS',
    level: 80,
    category: 'backend',
    color: 'bg-blue-700',
    logo: '/assets/skills/Nest.js Icon.svg',
  },
  {
    name: 'API REST',
    level: 90,
    category: 'backend',
    color: 'bg-blue-500',
    logo: '/assets/skills/Swagger Icon.svg',
  },
  {
    name: 'Event-Driven',
    level: 75,
    category: 'backend',
    color: 'bg-blue-800',
    logo: '/assets/skills/Redis Icon.svg',
  },
  {
    name: 'PostgreSQL',
    level: 85,
    category: 'backend',
    color: 'bg-blue-900',
    logo: '/assets/skills/PostgresSQL Icon.svg',
  },

  // Frontend
  {
    name: 'Next.js',
    level: 90,
    category: 'frontend',
    color: 'bg-green-600',
    logo: '/assets/skills/Next.js Icon.svg',
  },
  {
    name: 'TypeScript',
    level: 85,
    category: 'frontend',
    color: 'bg-green-800',
    logo: '/assets/skills/TypeScript Icon.svg',
  },
  {
    name: 'TailwindCSS',
    level: 80,
    category: 'frontend',
    color: 'bg-green-700',
    logo: '/assets/skills/Tailwind CSS Icon.svg',
  },
  {
    name: 'React',
    level: 85,
    category: 'frontend',
    color: 'bg-green-500',
    logo: '/assets/skills/React Icon.svg',
  },

  // DevOps
  {
    name: 'Docker',
    level: 95,
    category: 'devops',
    color: 'bg-purple-500',
    logo: '/assets/skills/Docker Icon.svg',
  },
  {
    name: 'CI/CD',
    level: 85,
    category: 'devops',
    color: 'bg-purple-600',
    logo: '/assets/skills/Ci Cd.svg',
  },
  {
    name: 'Git',
    level: 90,
    category: 'devops',
    color: 'bg-purple-700',
    logo: '/assets/skills/Git.png',
  },

  // Méthodologies & Outils
  {
    name: 'Agile/Scrum',
    level: 85,
    category: 'other',
    color: 'bg-red-600',
    logo: '/assets/skills/Jira Icon.svg',
  },
  {
    name: 'PhpStorm',
    level: 100,
    category: 'other',
    color: 'bg-red-700',
    logo: '/assets/skills/PhpStorm Icon.svg',
  },
  {
    name: 'Redis',
    level: 80,
    category: 'data',
    color: 'bg-yellow-600',
    logo: '/assets/skills/Redis Icon.svg',
  },
  {
    name: 'Elasticsearch',
    level: 80,
    category: 'data',
    color: 'bg-yellow-600',
    logo: '/assets/skills/Elastic Search Icon.svg',
  },
  {
    name: 'AWS',
    level: 80,
    category: 'data',
    color: 'bg-yellow-600',
    logo: '/assets/skills/Aws.png',
  },
  //kubernetes
  {
    name: 'Kubernetes',
    level: 80,
    category: 'data',
    color: 'bg-yellow-600',
    logo: '/assets/skills/Kubernetes Icon.svg',
  },
];

export interface Project {
  id: Key | null | undefined;
  title: string | ReactNode;
  description: ReactNode;
  tags: string[];
  image: string | undefined;
  color: string;
  githubLink: string | undefined;
  type: ReactNode;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Saline Royale Academy',
    description:
      "Plateforme de formation en ligne sur la musique pour la Saline Royale Academy. Développement d'une interface immersive permettant aux musiciens du monde entier d'accéder à des masterclasses de haut niveau. Système de gestion de contenu vidéo avec annotations interactives et suivi pédagogique personnalisé.",
    tags: ['React', 'Laravel', 'Education', 'Streaming', 'UX Design'],
    image: '/assets/projects/goofy-sera.svg',
    color: 'from-indigo-500 to-indigo-700',
    githubLink: undefined,
    type: 'Web App',
  },
  {
    id: 2,
    title: 'FrankenPHP Symfony',
    description:
      "Mise en place d'une architecture moderne avec FrankenPHP et Symfony 7. Configuration optimisée pour le développement PHP haute performance avec support natif des WebSockets, HTTP/3 et auto-reload. Containerisation complète avec Docker pour un déploiement simplifié.",
    tags: ['FrankenPHP', 'Symfony', 'PHP', 'Docker', 'WebSockets'],
    image: '/assets/projects/frankenphp-docker.svg',
    color: 'from-blue-500 to-blue-700',
    githubLink: 'https://github.com/tedjy971/krankenPhp',
    type: 'Backend',
  },
  {
    id: 3,
    title: 'Raytracing C++',
    description:
      "Moteur de ray-tracing développé en C++ avec optimisations avancées. Implémentation complète des algorithmes de rendu 3D, gestion des ombres, reflets et éclairage réaliste. Utilisation de techniques d'accélération comme les BVH (Bounding Volume Hierarchies) pour améliorer les performances.",
    tags: ['C++', 'Ray-tracing', '3D', 'Graphisme', 'Optimisation'],
    image: '/assets/projects/raytracing-project.svg',
    color: 'from-purple-500 to-purple-700',
    githubLink: 'https://github.com/tedjy971/Raytracing-Cpp',
    type: 'Graphics',
  },
  {
    id: 4,
    title: 'MicroService Event-Driven',
    description:
      'Architecture microservices event-driven développée pour maîtriser les patterns de communication asynchrone. Implémentation de RabbitMQ pour la gestion des événements, avec Circuit Breaker et système de retry. Déploiement sur Kubernetes avec monitoring avancé.',
    tags: ['Microservices', 'Event-Driven', 'RabbitMQ', 'Kubernetes', 'Resilience'],
    image: '/assets/projects/microservice-event.svg',
    color: 'from-green-500 to-green-700',
    githubLink: undefined,
    type: 'Architecture',
  },
  {
    id: 5,
    title: 'GoofyChat',
    description:
      'Application de chat instantané cross-platform développée avec React et React Native. Backend Symfony avec Mercure pour les WebSockets temps réel et synchronisation multi-appareils.',
    tags: ['React', 'React Native', 'Symfony', 'WebSocket', 'Mercure', 'Real-time'],
    image: '/assets/projects/goofychat-project.svg',
    color: 'from-green-500 to-green-700',
    githubLink: 'https://github.com/GoofyTeam/GoofyChat',
    type: 'Mobile',
  },
  {
    id: 6,
    title: 'DevOps Pipeline MT4',
    description:
      'Projet DevOps complet avec Docker, Terraform et Apache Spark. Infrastructure cloud automatisée avec monitoring Grafana, CI/CD et déploiement sur AWS.',
    tags: ['Docker', 'Terraform', 'DevOps', 'Apache Spark', 'Grafana', 'AWS'],
    image: '/assets/projects/devops-project.svg',
    color: 'from-orange-500 to-orange-700',
    githubLink: 'https://github.com/GoofyTeam/RENDU_DEVOPS_MT4',
    type: 'DevOps',
  },
  {
    id: 7,
    title: 'GoofyComponent',
    description:
      'Bibliothèque de composants UI moderne développée en Svelte avec TypeScript. Documentation interactive déployée sur Netlify avec exemples live et API complète.',
    tags: ['Svelte', 'TypeScript', 'UI Library', 'Components', 'Documentation'],
    image: '/assets/projects/goofy-component.svg',
    color: 'from-teal-500 to-teal-700',
    githubLink: 'https://github.com/GoofyTeam/GoofyComponent',
    type: 'Frontend',
  },
  {
    id: 8,
    title: 'Portfolio Next.js',
    description:
      'Portfolio personnel développé avec Next.js 15 et TailwindCSS. Design moderne responsive avec animations Framer Motion, optimisé pour les performances et le SEO.',
    tags: ['Next.js', 'TailwindCSS', 'Framer Motion', 'Portfolio', 'SEO'],
    image: '/assets/projects/portfolio-nextjs.svg',
    color: 'from-pink-500 to-pink-700',
    githubLink: 'https://github.com/tedjy971/portfolio',
    type: 'Frontend',
  },
  {
    id: 9,
    title: 'GoofyOlympics',
    description:
      'Plateforme de gestion de compétitions sportives avec système de classement en temps réel. Interface web moderne pour organiser et suivre les événements olympiques.',
    tags: ['Competition', 'Sports', 'Real-time', 'Management', 'Web App'],
    image: '/assets/projects/goofy-olympics.svg',
    color: 'from-yellow-500 to-yellow-700',
    githubLink: 'https://github.com/GoofyTeam/GoofyOlympics',
    type: 'Web App',
  },
  {
    id: 10,
    title: 'CloudFormation DevOps',
    description:
      "Infrastructure AWS automatisée avec CloudFormation. Déploiement d'architecture cloud scalable avec EC2, RDS, Load Balancer et Auto Scaling intégrés.",
    tags: ['AWS', 'CloudFormation', 'Infrastructure', 'IaC', 'Cloud'],
    image: '/assets/projects/cloudformation-devops.svg',
    color: 'from-red-500 to-red-700',
    githubLink: 'https://github.com/GoofyTeam/DEVOPS_2024_CLOUDFORMATION',
    type: 'Cloud',
  },
  {
    id: 11,
    title: 'NYC Urban Data Analytics',
    description:
      'Analyse complète des données urbaines de New York avec Python. Visualisations interactives des flux de trafic, densité de population et indicateurs économiques.',
    tags: ['Python', 'Data Analysis', 'Pandas', 'Visualization', 'Urban Data'],
    image: '/assets/projects/nyc-analytics.svg',
    color: 'from-gray-500 to-gray-700',
    githubLink: 'https://github.com/GoofyTeam/NYC-Urban-Data-Analytics',
    type: 'Data Science',
  },
];

export const socialLinks = {
  github: personalInfo.github,
  linkedin: personalInfo.linkedin,
  // twitter: 'https://twitter.com/teddygamiette',
  email: personalInfo.email,
};

export const contactInfo = {
  email: personalInfo.email,
  phone: personalInfo.phone,
  address: 'Palaiseau, Ile de France',
  availability: "Actuellement en alternance, en recherche d'un contrat à temps plein",
};

export const themes = {
  sport: {
    primary: 'from-blue-500 to-blue-700',
    secondary: 'from-green-500 to-green-700',
    accent: 'from-red-500 to-red-700',
  },
  web: {
    primary: 'from-purple-500 to-purple-700',
    secondary: 'from-blue-500 to-blue-700',
    accent: 'from-pink-500 to-pink-700',
  },
};

export const contactDetails = [
  {
    icon: '📧',
    title: 'Email',
    detail: personalInfo.email,
    link: `mailto:${personalInfo.email}`,
  },
  {
    icon: '🔗',
    title: 'LinkedIn',
    detail: 'linkedin.com/in/teddygamiette',
    link: 'https://www.linkedin.com/in/teddy-gamiette-9a1a9613a/',
  },
  {
    icon: '📱',
    title: 'Téléphone',
    detail: personalInfo.phone,
    link: `tel:${personalInfo.phone}`,
  },
  {
    icon: '💻',
    title: 'GitHub',
    detail: 'github.com',
    link: personalInfo.github,
  },
  {
    icon: '🌐',
    title: 'Portfolio',
    detail: 'teddygamiette.online',
    link: personalInfo.website,
  },
];
