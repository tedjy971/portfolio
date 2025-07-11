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
    "Développeur web back-end avec 4 ans d'expérience en alternance, spécialisé en PHP, Symfony, React et Next.js. Passionné par le sport et la domotique, je suis constamment à la recherche de nouveaux défis techniques.",
  objective: "En recherche d'un contrat à temps plein à partir de Novembre.",
};

export const educationExperiences = [
  {
    title: 'Master Tech Lead (en alternance)',
    school: 'HETIC',
    period: 'En cours',
    description:
      "Formation en alternance axée sur le leadership technique et la gestion de projets IT complexes. Acquisition de compétences avancées en architecture logicielle, DevOps, et management d'équipes techniques. Spécialisation en optimisation des processus de développement et déploiement continu.",
  },
  {
    title: 'Bachelor Web ',
    school: 'HETIC',
    period: '2021 - 2023',
    description:
      'Formation en alternance intensive dans le développement web avec spécialisation full-stack. Maîtrise des frameworks modernes (React, Symfony) et méthodologies agiles. Projets concrets en conditions réelles avec des partenaires.',
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
      'Diplôme axé sur le développement logiciel et la gestion des réseaux informatiques. Projets en C++, Java et administration système sous Linux.',
  },
];

export const experiences = [
  {
    title: 'Développeur Back-end (Alternance)',
    company: 'Kernix',
    period: '2021 - Actuel',
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
    level: 95,
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
    level: 75,
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
    level: 50,
    category: 'frontend',
    color: 'bg-green-700',
    logo: '/assets/skills/Tailwind CSS Icon.svg',
  },
  {
    name: 'React',
    level: 70,
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
  githubLink?: string;
  type: ReactNode;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Montée de version Symfony',
    description:
      "Migration complète d'une application Symfony de PHP 5.6 à PHP 8.1 en utilisant Rector. Amélioration des performances et de la maintenabilité du code.",
    image: '/assets/projects/Symfony SVG Icon.svg',
    color: 'from-indigo-500 to-indigo-700',
    tags: ['Symfony', 'PHP', 'Rector', 'Gitlab CI'],
    type: 'entreprise',
  },
  {
    id: 2,
    title: 'Recherche avec Elasticsearch',
    description:
      'Mise en place d’un système de recherche avancé avec Elasticsearch sur une application Symfony, permettant une indexation et une recherche rapide et pertinente des données.',
    image: '/assets/projects/ES.png',    color: 'from-indigo-500 to-indigo-700',


    tags: ['Elasticsearch', 'Symfony', 'PHP', 'Kibana'],
    type: 'entreprise',
  },
  {
    id: 3,
    title: 'API REST avec NestJS',
    description:
      'Développement d’API RESTful robustes et évolutives avec NestJS pour des applications web modernes. Utilisation de TypeScript pour un code plus sûr et maintenable.',
    image: '/assets/projects/NestJS (1).svg',
    tags: ['NestJS', 'Node.js', 'TypeScript', 'API REST'],
    color: 'from-indigo-500 to-indigo-700',

    type: 'entreprise',
  },
  {
    id: 4,
    title: 'Intégration de Wallets Mobiles',
    description:
      'Implémentation de solutions de paiement et de fidélisation via des cartes dématérialisées pour Apple Wallet (iOS) et Google Wallet (Android).',
    image: '/assets/projects/Wallet Glyph Blue/dd8f3fa9-d7e0-46e3-b6dd-dbd028761207.jpg',
    tags: ['Apple Wallet', 'Google Wallet', 'API', 'Mobile'],
    color: 'from-indigo-500 to-indigo-700',

    type: 'entreprise',
  },
  {
    id: 5,
    title: 'Firebase pour Applications Mobiles',
    description:
      'Utilisation des services Firebase (Cloud Functions, Firestore, Authentication, FCM) pour construire le backend d’applications mobiles performantes et réactives.',
    image: '/assets/projects/Firebase 1 Logo.svg',
    tags: ['Firebase', 'Cloud Functions', 'FCM', 'NoSQL'],
    color: 'from-indigo-500 to-indigo-700',

    type: 'entreprise',
  },
  {
    id: 6,
    title: 'Boilerplate Serverless Symfony',
    description:
      'Création d’un template de projet Symfony optimisé pour le déploiement sur des infrastructures serverless avec BrefPHP et le Serverless Framework, pour des applications scalables et à coût maîtrisé.',
    image: '/assets/projects/Logo Bref.svg',
    tags: ['Symfony', 'Serverless', 'BrefPHP', 'AWS Lambda'],
    color: 'from-indigo-500 to-indigo-700',

    githubLink: 'https://github.com/tedjy971/boilerplate-symfony-serverless-bref',
    type: 'personnel',
  },
  {
    id: 7,
    title: 'Boilerplate FrankenPHP',
    description:
      'Template de projet Symfony prêt à l’emploi avec FrankenPHP, un serveur d’application moderne pour PHP qui simplifie le déploiement et améliore les performances. Idéal pour démarrer rapidement des projets robustes.',
    image: '/assets/projects/frankenphp.png',
    tags: ['Symfony', 'FrankenPHP', 'Docker', 'CI/CD'],
    color: 'from-indigo-500 to-indigo-700',

    githubLink: 'https://github.com/tedjy971/boilerplate-symfony-frankenphp',
    type: 'personnel',
  },
  {
    id: 8,
    title: 'Ray Tracing en C++',
    description:
      'Implémentation d’un moteur de rendu d’images par lancer de rayons (Ray Tracing) en C++. Ce projet explore les algorithmes de rendu photoréaliste, la gestion de la lumière, des ombres et des réflexions.',
    image: '/assets/projects/c.svg',
    tags: ['C++', 'Ray Tracing', 'Infographie', 'Algorithmique'],
    githubLink: 'https://github.com/tedjy971/RayTracing',
    color: 'from-indigo-500 to-indigo-700',

    type: 'personnel',
  },
];

export const socialLinks = {
  github: personalInfo.github,
  linkedin: personalInfo.linkedin,
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
    detail: 'linkedin.com/in/teddy-gamiette-9a1a9613a',
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
    detail: 'github.com/tedjy971',
    link: personalInfo.github,
  },
  {
    icon: '🌐',
    title: 'Portfolio',
    detail: 'teddygamiette.online',
    link: personalInfo.website,
  },
];
