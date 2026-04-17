import { Key, ReactNode } from 'react';

export const personalInfo = {
  name: 'Teddy Gamiette',
  title: 'Développeur Back-end | PHP/Symfony | Vue.js | API REST & Microservices',
  role: 'Développeur Back-end',
  company: 'Kernix',
  email: 'gamiette.teddy@gmail.com',
  phone: '+33 7 81 95 04 36',
  location: 'Palaiseau, Île-de-France',
  github: 'https://github.com/tedjy971',
  linkedin: 'https://www.linkedin.com/in/teddy-gamiette-9a1a9613a/',
  website: 'https://teddygamiette.online',
  description:
    "Développeur Back-end avec 4+ ans d'expérience chez Kernix, spécialisé en PHP/Symfony, API REST et architecture microservices. Compétences transverses en Vue.js (design system, dashboards) et DevOps (Docker, AWS, CI/CD). Diplômé Master Tech Lead (HETIC, 2025).",
  objective: "Développeur Back-end en CDI chez Kernix.",
};

export const educationExperiences = [
  {
    title: 'Master Tech Lead - Management & Architecture Logicielle',
    school: 'HETIC (Grande École du Numérique)',
    period: '2023 - 2025 (Obtenu en Septembre 2025)',
    description:
      "Formation d'excellence en leadership technique et architecture logicielle moderne. Expertise avancée : Domain-Driven Design (DDD), Architecture Microservices, Event Sourcing/CQRS, Design Patterns. Spécialisation Cloud Architecture (AWS/GCP), DevSecOps, et Management d'équipes techniques agiles. Projet de fin d'études : Développement d'une application mobile anti-gaspillage alimentaire avec React Native, NestJS, Elasticsearch et déploiement Kubernetes.",
  },
  {
    title: 'Bachelor Développeur Web Full-Stack',
    school: 'HETIC (Grande École du Numérique)',
    period: '2021 - 2023',
    description:
      'Formation intensive en alternance alliée à 4 ans d\'expérience professionnelle chez Kernix. Maîtrise complète du développement web moderne : PHP/Symfony, JavaScript/React, API REST, bases de données. Apprentissage par la pratique avec projets réels en entreprise et méthodologies agiles (Scrum). Formation qui allie théorie acadmique et expérience opérationnelle immédiate.',
  },
  {
    title: 'Licence SGBD & Big Data',
    school: 'Université d\'Evry-Val d\'Essonne',
    period: '2019',
    description:
      "Spécialisation universitaire en architecture de bases de données et Big Data. Maîtrise des SGBD relationnels et NoSQL, optimisation de requêtes, modélisation de données complexes. Compétences en analyse statistique et visualisation de données massives. Foundation solide qui a directement contribué à mon expertise Elasticsearch et optimisation de performances en entreprise.",
  },
  {
    title: 'BTS SNIR - Systèmes Numériques & Réseaux',
    school: 'Lycée Parc de Vilgénis (Massy)',
    period: '2018',
    description:
      'Formation technique de niveau Bac+2 couvrant le développement logiciel et l\'infrastructure réseau. Programmation orientée objet (C++, Java), administration systèmes Linux/Windows, architecture réseaux et sécurité. Base technique solide qui a facilité ma transition vers le développement web et ma compréhension des enjeux DevOps/infrastructure.',
  },
];

export const experiences = [
  {
    title: 'Développeur Back-end en CDI',
    company: 'Kernix',
    period: 'Depuis Septembre 2025',
    tags: ['Symfony 6', 'Vue 3', 'NestJS', 'API REST', 'Design System', 'Storybook', 'Docker', 'AWS'],
    description:
      "• Développe des API REST et microservices avec Symfony 6 et NestJS\n• Conçoit un cockpit métier Vue 3 avec design system réutilisable (Vuetify → Shoelace)\n• Développe des widgets autonomes (Custom Elements, Pinia) pour intégration multi-applications\n• Maintient la documentation composants avec Storybook et tests Vitest\n• Participe aux code reviews, veille technologique et décisions d'architecture",
  },
  {
    title: 'Développeur Back-end en alternance',
    company: 'Kernix',
    period: '2021 - 2025',
    tags: ['Symfony 6', 'NestJS', 'API REST', 'Elasticsearch', 'AWS', 'Docker', 'Kubernetes', 'Redis'],
    description:
      "• Développe et maintient des microservices RESTful avec Symfony 6 et NestJS\n• Participe à la migration PHP 5.6 → 8.1 avec Rector, améliorant performances et stabilité\n• Implémente une architecture event-driven avec RabbitMQ/Redis\n• Optimise les requêtes Elasticsearch, réduisant le temps de recherche de 3s à 1.8s\n• Déploie des applications conteneurisées sur AWS avec Docker et Kubernetes\n• Développe l'intégration Apple/Google Wallet (API PKPass, notifications push)",
  },
  {
    title: 'Technicien Informatique',
    company: 'SPIE ICS',
    period: '2020-2021',
    tags: [
      'IT Support',
      'Windows Administration',
      'Network Management',
      'Hardware Maintenance',
      'System Administration',
      'User Support',
    ],
    description:
      '• Gère l\'infrastructure informatique complète d\'un commissariat de police\n• Administre le parc informatique (postes de travail, serveurs, équipements réseau)\n• Assure le support technique et la maintenance des systèmes critiques\n• Garantit la continuité de service des applications métiers sensibles\n• Met en place des procédures de sauvegarde et de sécurité informatique',
  },
  {
    title: 'Automation Developer',
    company: 'Amazon',
    period: '2019',
    tags: ['VBA', 'Automation', 'Process Optimization', 'Warehouse Management', 'Problem Solving'],
    description:
      "• Développe des scripts VBA d'automatisation pour localiser les objets perdus dans l'entrepôt\n• Optimise les processus de recherche des Problem Solvers, réduisant significativement le temps de résolution\n• Conçoit des outils d'aide à la décision pour améliorer l'efficacité logistique\n• Contribue à l'amélioration continue des procédures opérationnelles",
  },
  {
    title: 'Data Analyst - Télécom',
    company: 'LUCERNYS',
    period: '2018-2019',
    tags: ['Data Analysis', 'Excel', 'Reporting', 'Telecom', 'Contract Management', 'Business Intelligence'],
    description:
      "• Analyse les consommations téléphoniques de grandes entreprises et optimise leurs contrats mobiles\n• Rédige des compilations de données détaillées comparant usage réel vs forfaits souscrits\n• Identifie les anomalies de facturation et opportunités d'économies pour les clients\n• Produit des rapports d'analyse permettant aux entreprises d'optimiser leurs coûts télécom\n• Gère les données de consommation de flottes mobiles multi-opérateurs",
  },
  {
    title: 'Développeur Web Stagiaire',
    company: 'Conseil Départemental de Seine-Saint-Denis',
    period: 'Mai 2018 - Juin 2018',
    tags: ['PHP 7', 'MySQL', 'MVC Architecture', 'jQuery', 'Bootstrap', 'Git'],
    description:
      "• Développe from scratch une application web de gestion de projets en PHP/MVC\n• Conçoit l'architecture complète : base de données, backend et interface utilisateur\n• Implémente un système d'authentification et de gestion des droits utilisateurs\n• Livre une solution fonctionnelle répondant aux besoins métiers du service\n• Première expérience complète en développement web full-stack",
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
    name: 'PHP 8.x',
    level: 95,
    category: 'backend',
    color: 'bg-blue-500',
    logo: '/assets/skills/php.svg',
  },
  {
    name: 'Symfony 6',
    level: 95,
    category: 'backend',
    color: 'bg-blue-600',
    logo: '/assets/skills/symfony.svg',
  },
  {
    name: 'NestJS',
    level: 80,
    category: 'backend',
    color: 'bg-blue-700',
    logo: '/assets/skills/nestjs.svg',
  },
  {
    name: 'API REST',
    level: 95,
    category: 'backend',
    color: 'bg-blue-500',
    logo: '/assets/skills/swagger.svg',
  },
  {
    name: 'Event-Driven',
    level: 75,
    category: 'backend',
    color: 'bg-blue-800',
    logo: '/assets/skills/event-driven-new.svg',
  },
  {
    name: 'PostgreSQL',
    level: 85,
    category: 'backend',
    color: 'bg-blue-900',
    logo: '/assets/skills/postgresql.svg',
  },
  {
    name: 'MySQL',
    level: 90,
    category: 'backend',
    color: 'bg-blue-800',
    logo: '/assets/skills/mysql.svg',
  },
  {
    name: 'MongoDB',
    level: 75,
    category: 'backend',
    color: 'bg-green-700',
    logo: '/assets/skills/mongodb.svg',
  },
  {
    name: 'GraphQL',
    level: 70,
    category: 'backend',
    color: 'bg-pink-600',
    logo: '/assets/skills/graphql.svg',
  },
  {
    name: 'gRPC',
    level: 65,
    category: 'backend',
    color: 'bg-teal-600',
    logo: '/assets/skills/grpc-logo.svg',
  },

  // Frontend
  {
    name: 'Vue 3',
    level: 80,
    category: 'frontend',
    color: 'bg-green-500',
    logo: '/assets/skills/vue.svg',
  },
  {
    name: 'Next.js',
    level: 75,
    category: 'frontend',
    color: 'bg-green-600',
    logo: '/assets/skills/nextjs.svg',
  },
  {
    name: 'TypeScript',
    level: 85,
    category: 'frontend',
    color: 'bg-green-800',
    logo: '/assets/skills/typescript.svg',
  },
  {
    name: 'TailwindCSS',
    level: 50,
    category: 'frontend',
    color: 'bg-green-700',
    logo: '/assets/skills/tailwindcss.svg',
  },
  {
    name: 'React',
    level: 70,
    category: 'frontend',
    color: 'bg-green-500',
    logo: '/assets/skills/react.svg',
  },

  // DevOps
  {
    name: 'Docker',
    level: 95,
    category: 'devops',
    color: 'bg-purple-500',
    logo: '/assets/skills/docker.svg',
  },
  {
    name: 'Docker Compose',
    level: 90,
    category: 'devops',
    color: 'bg-purple-600',
    logo: '/assets/skills/docker.svg',
  },
  {
    name: 'GitLab CI',
    level: 85,
    category: 'devops',
    color: 'bg-orange-600',
    logo: '/assets/skills/gitlab.svg',
  },
  {
    name: 'AWS',
    level: 85,
    category: 'devops',
    color: 'bg-orange-500',
    logo: '/assets/skills/Aws.png',
  },
  {
    name: 'Kubernetes',
    level: 80,
    category: 'devops',
    color: 'bg-blue-500',
    logo: '/assets/skills/kubernetes.svg',
  },
  {
    name: 'CI/CD',
    level: 85,
    category: 'devops',
    color: 'bg-purple-600',
    logo: '/assets/skills/cicd.svg',
  },
  {
    name: 'Git',
    level: 90,
    category: 'devops',
    color: 'bg-purple-700',
    logo: '/assets/skills/git.svg',
  },
  {
    name: 'Terraform',
    level: 70,
    category: 'devops',
    color: 'bg-purple-800',
    logo: '/assets/skills/terraform.svg',
  },
  {
    name: 'GitHub Actions',
    level: 80,
    category: 'devops',
    color: 'bg-gray-800',
    logo: '/assets/skills/github.svg',
  },
  {
    name: 'Monitoring (Prometheus/Grafana)',
    level: 75,
    category: 'devops',
    color: 'bg-orange-700',
    logo: '/assets/skills/prometheus.svg',
  },
  {
    name: 'Linux/Bash',
    level: 85,
    category: 'devops',
    color: 'bg-gray-700',
    logo: '/assets/skills/linux.svg',
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
    logo: '/assets/skills/redis.svg',
  },
  {
    name: 'Elasticsearch',
    level: 80,
    category: 'data',
    color: 'bg-yellow-600',
    logo: '/assets/skills/Elastic Search Icon.svg',
  },
  // Mots-clés techniques pour ATS
  {
    name: 'RESTful APIs',
    level: 95,
    category: 'backend',
    color: 'bg-blue-600',
    logo: '/assets/skills/api.svg',
  },
  {
    name: 'Microservices',
    level: 85,
    category: 'backend',
    color: 'bg-blue-600',
    logo: '/assets/skills/microservices.svg',
  },
  {
    name: 'API Platform',
    level: 90,
    category: 'backend',
    color: 'bg-blue-600',
    logo: '/assets/skills/api-platform.svg',
  },
  {
    name: 'Monorepo',
    level: 75,
    category: 'devops',
    color: 'bg-purple-600',
    logo: '/assets/skills/monorepo.svg',
  },
  {
    name: 'Architecture Orientée Événements',
    level: 80,
    category: 'backend',
    color: 'bg-blue-600',
    logo: '/assets/skills/event-driven.svg',
  },
  {
    name: 'RabbitMQ',
    level: 75,
    category: 'backend',
    color: 'bg-orange-600',
    logo: '/assets/skills/rabbitmq.svg',
  },
  {
    name: 'Kafka',
    level: 70,
    category: 'backend',
    color: 'bg-gray-800',
    logo: '/assets/skills/kafka.svg',
  },
  // Testing & Quality
  {
    name: 'PHPUnit',
    level: 85,
    category: 'backend',
    color: 'bg-green-600',
    logo: '/assets/skills/phpunit.svg',
  },
  {
    name: 'Jest',
    level: 75,
    category: 'backend',
    color: 'bg-red-600',
    logo: '/assets/skills/jest.svg',
  },
  {
    name: 'SonarQube',
    level: 70,
    category: 'devops',
    color: 'bg-blue-700',
    logo: '/assets/skills/sonarqube.svg',
  },
  // Architecture & Patterns
  {
    name: 'Domain-Driven Design',
    level: 75,
    category: 'backend',
    color: 'bg-indigo-600',
    logo: '/assets/skills/ddd.svg',
  },
  {
    name: 'SOLID Principles',
    level: 90,
    category: 'backend',
    color: 'bg-indigo-700',
    logo: '/assets/skills/solid.svg',
  },
  {
    name: 'Design Patterns',
    level: 85,
    category: 'backend',
    color: 'bg-indigo-800',
    logo: '/assets/skills/patterns.svg',
  },
  // Security
  {
    name: 'OAuth 2.0/JWT',
    level: 85,
    category: 'backend',
    color: 'bg-red-700',
    logo: '/assets/skills/oauth.svg',
  },
  {
    name: 'OWASP Security',
    level: 80,
    category: 'backend',
    color: 'bg-red-800',
    logo: '/assets/skills/owasp.svg',
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
    title: 'Migration PHP Enterprise - 50K+ Utilisateurs',
    description:
      "Lead technique sur la migration critique PHP 5.6 → 8.1 d'une plateforme SaaS. Résultat: +40% performances, -30% coûts infrastructure, zéro downtime. Refactoring de 500K+ lignes de code avec Rector, mise en place de pipelines CI/CD automatisés.",
    image: '/assets/projects/Symfony SVG Icon.svg',
    color: 'from-blue-500 to-blue-700',
    tags: ['PHP 8.1', 'Symfony 6', 'Rector', 'GitLab CI/CD', 'Docker', 'Zero-Downtime'],
    type: 'entreprise',
  },
  {
    id: 2,
    title: 'Moteur de Recherche Elasticsearch',
    description:
      "Optimisation d'un moteur de recherche haute performance avec Elasticsearch. Amélioration scoring, auto-complétion temps réel, indexation optimisée. Réduction significative du temps de réponse (3s → 1.8s).",
    image: '/assets/projects/ES.png',
    color: 'from-yellow-500 to-orange-600',
    tags: ['Elasticsearch 8', 'Performance', 'Search', 'Indexation'],
    type: 'entreprise',
  },
  {
    id: 3,
    title: 'Architecture Microservices NestJS',
    description:
      "Développement d'architecture microservices avec NestJS et TypeScript. Communication event-driven via RabbitMQ, architecture hexagonale. Monitoring des performances et haute disponibilité.",
    image: '/assets/projects/NestJS (1).svg',
    tags: ['NestJS', 'Microservices', 'RabbitMQ', 'TypeScript', 'Event-Driven', 'Docker'],
    color: 'from-red-500 to-red-700',
    type: 'entreprise',
  },
  {
    id: 4,
    title: 'Plateforme Digital Wallet',
    description:
      "Intégration complète Apple Wallet et Google Pay avec génération dynamique de passes. API REST sécurisée, PKPass generation, notifications push. Interface d'administration et analytics.",
    image: '/assets/projects/Wallet Glyph Blue/dd8f3fa9-d7e0-46e3-b6dd-dbd028761207.jpg',
    tags: ['Apple Wallet', 'Google Pay', 'API REST', 'Node.js', 'Integration', 'PKPass'],
    color: 'from-green-500 to-green-700',
    type: 'entreprise',
  },
  {
    id: 5,
    title: 'Real-time Backend Platform - 25K+ DAU',
    description:
      "Architecture serverless avec Firebase supportant 25K+ utilisateurs actifs quotidiens. Implémentation de synchronisation temps réel avec Firestore, authentification multi-provider, Cloud Functions. Solution scalable et performante.",
    image: '/assets/projects/Firebase 1 Logo.svg',
    tags: ['Firebase', 'Cloud Functions', 'Firestore', 'FCM', 'Serverless', 'Real-time'],
    color: 'from-orange-500 to-red-600',
    type: 'entreprise',
  },
  {
    id: 6,
    title: 'Boilerplate Serverless Symfony',
    description:
      'Création d’un template de projet Symfony optimisé pour le déploiement sur des infrastructures serverless avec BrefPHP et le Serverless Framework, pour des applications scalables et à coût maîtrisé.',
    image: '/assets/projects/Logo Bref.svg',
    tags: ['Symfony', 'Serverless', 'BrefPHP', 'AWS Lambda'],
    color: 'from-purple-500 to-purple-700',

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
    color: 'from-gray-600 to-gray-800',

    type: 'personnel',
  },
  {
    id: 9,
    title: 'Anti-Waste Recipe App - Projet Fin d\'Études',
    description:
      "Application mobile de lutte contre le gaspillage alimentaire. Suggestions intelligentes de recettes basées sur les ingrédients à date de péremption proche. Architecture microservices avec recherche avancée Elasticsearch et déploiement containerisé.",
    image: '/assets/projects/react-native.svg',
    color: 'from-green-400 to-emerald-600',
    tags: ['React Native', 'NestJS', 'Elasticsearch', 'Kubernetes', 'Docker', 'CI/CD'],
    type: 'academique',
  },
  {
    id: 10,
    title: 'Cockpit Stelogy - Dashboard & Design System Vue.js',
    description:
      "Développement d'un cockpit métier complet en Vue 3 avec un design system réutilisable. Widgets autonomes (Custom Elements et Pinia), modules de facturation, production, abonnements et devis. Migration Vuetify → Shoelace (Web Components). Backend NestJS avec API REST. Architecture monorepo avec Storybook, Vitest et multi-theming (dark/light).",
    image: '/assets/projects/vue.svg',
    color: 'from-emerald-500 to-teal-700',
    tags: ['Vue 3', 'TypeScript', 'Vuetify', 'Shoelace', 'Pinia', 'NestJS', 'Storybook', 'Design System'],
    type: 'entreprise',
  },
];

// Recréation de socialLinks pour compatibilité avec Footer.tsx
export const socialLinks = {
  github: personalInfo.github,
  linkedin: personalInfo.linkedin,
  email: personalInfo.email,
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
