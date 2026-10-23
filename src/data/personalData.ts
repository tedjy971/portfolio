import { Key, ReactNode } from 'react';

export const personalInfo = {
  name: 'Teddy Gamiette',
  title: 'Développeur Full-stack orienté Back-end | PHP/Symfony · NestJS · Vue | IA/LLM',
  role: 'Développeur Back-end',
  company: 'Kernix',
  email: 'gamiette.teddy@gmail.com',
  phone: '+33 7 81 95 04 36',
  location: 'Palaiseau, Île-de-France',
  github: 'https://github.com/tedjy971',
  linkedin: 'https://www.linkedin.com/in/teddy-gamiette-9a1a9613a/',
  website: 'https://teddygamiette.online',
  description:
    "Développeur Full-stack orienté Back-end avec 5 ans d'expérience (2021 – 2026), spécialisé en PHP 8/Symfony, API REST et architecture microservices (DDD, CQRS, event-driven). Utilise l'IA au quotidien (Claude Code, Cursor, agents, MCP). Back-end sur deux stacks (PHP/Symfony et TypeScript/NestJS), front Vue 3, DevOps (Docker, AWS, CI/CD). Master Tech Lead HETIC.",
  objective: "Recherche un poste de Développeur Full-stack orienté Back-end (CDI) — disponible rapidement.",
};

export const educationExperiences = [
  {
    title: 'Master Tech Lead - Management & Architecture Logicielle',
    school: 'HETIC (Grande École du Numérique)',
    period: 'Diplômé',
    description:
      "Formation d'excellence en leadership technique et architecture logicielle moderne. Expertise avancée : Domain-Driven Design (DDD), Architecture Microservices, Event Sourcing/CQRS, Design Patterns. Spécialisation Cloud Architecture (AWS/GCP), DevSecOps, et Management d'équipes techniques agiles. Projet de fin d'études : Développement d'une application mobile anti-gaspillage alimentaire avec React Native, NestJS, Elasticsearch et déploiement Kubernetes.",
  },
  {
    title: 'Bachelor Développeur Web Full-Stack',
    school: 'HETIC (Grande École du Numérique)',
    period: '2021 - 2023',
    description:
      'Formation intensive en alternance alliée à 4 ans d\'expérience professionnelle chez Kernix. Maîtrise complète du développement web moderne : PHP/Symfony, JavaScript/React, API REST, bases de données. Apprentissage par la pratique avec projets réels en entreprise et méthodologies agiles (Scrum). Formation qui allie théorie académique et expérience opérationnelle immédiate.',
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
    title: 'Développeur Full-stack orienté Back-end (alternance puis CDI)',
    company: 'Kernix',
    period: '2021 - Présent',
    tags: ['Symfony 7', 'NestJS', 'TypeScript', 'Vue 3', 'API REST', 'TypeORM', 'Elasticsearch', 'Docker', 'AWS', 'IA/LLM'],
    description:
      "• Développe des API REST et microservices avec Symfony 7 et NestJS (DDD, CQRS)\n• Réalise la migration PHP 5.6 → 8.1 avec Rector, améliorant performances et stabilité\n• Réalise la migration d'une application de facturation Java/Spring Boot vers NestJS 11 + Vue 3 (monorepo pnpm/Turbo, types partagés, TypeORM SQL Server/MariaDB, intégrations SAP) — contributeur principal\n• Conçoit un cockpit métier Vue 3 avec design system réutilisable (Vuetify → Shoelace) et widgets autonomes (Custom Elements, Pinia)\n• Implémente une architecture event-driven avec RabbitMQ/Redis\n• Optimise les requêtes Elasticsearch, réduisant le temps de recherche de 3s à 1.8s\n• Développe l'intégration Apple/Google Wallet (API PKPass, notifications push)\n• Déploie des applications conteneurisées sur AWS avec Docker et Kubernetes\n• Utilise l'IA au quotidien en entreprise : Claude Code, Cursor, Claude Design, agents et serveurs MCP\n• Écrit les tests (PHPUnit, Vitest), documente avec Storybook, participe aux code reviews et décisions d'architecture",
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
    period: '2018',
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
    name: 'Symfony 7',
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
  // IA & Mobile
  {
    name: 'IA / LLM (Claude, OpenAI)',
    level: 80,
    category: 'backend',
    color: 'bg-violet-600',
    logo: '/assets/skills/api.svg',
  },
  {
    name: 'Agents IA & MCP',
    level: 75,
    category: 'backend',
    color: 'bg-violet-700',
    logo: '/assets/skills/microservices.svg',
  },
  {
    name: 'CQRS',
    level: 75,
    category: 'backend',
    color: 'bg-indigo-600',
    logo: '/assets/skills/ddd.svg',
  },
  {
    name: 'PHPStan',
    level: 80,
    category: 'backend',
    color: 'bg-green-700',
    logo: '/assets/skills/phpunit.svg',
  },
  {
    name: 'Vitest',
    level: 75,
    category: 'frontend',
    color: 'bg-green-600',
    logo: '/assets/skills/jest.svg',
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
    title: 'Migration PHP 5.6 → 8.1 avec Rector',
    description:
      "Réalisation de la migration PHP 5.6 → 8.1 d'une application client : refactoring automatisé avec Rector, mise à niveau Symfony, pipelines CI/CD GitLab et tests de non-régression PHPUnit. Gains de performance et de stabilité.",
    image: '/assets/projects/Symfony SVG Icon.svg',
    color: 'from-blue-500 to-blue-700',
    tags: ['PHP 8.1', 'Symfony 7', 'Rector', 'GitLab CI/CD', 'Docker', 'PHPUnit'],
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
  {
    id: 11,
    title: 'Migration Java → NestJS - Plateforme de facturation',
    description:
      "Refonte d'un système de facturation d'un groupe international de l'énergie : migration Java/Spring Boot vers NestJS 11 et Vue 3. Monorepo pnpm/Turbo avec types et DTO partagés front/back, TypeORM sur SQL Server et MariaDB, intégrations SAP, cycle complet des factures (création, signature, envoi, export). Contributeur principal (~60 % des commits).",
    image: '/assets/projects/NestJS (1).svg',
    color: 'from-red-500 to-rose-700',
    tags: ['NestJS 11', 'Vue 3', 'TypeScript', 'TypeORM', 'SQL Server', 'pnpm/Turbo', 'Swagger'],
    type: 'entreprise',
  },
  {
    id: 12,
    title: 'Coachemy - App mobile de coaching sportif',
    description:
      "Produit complet conçu et développé seul : app mobile coach/sportif avec abonnement Premium. API PHP (Laravel 12, FrankenPHP, PostgreSQL, Redis), app Flutter (Riverpod), CI mobile Codemagic, déploiement Docker/Coolify et publication sur les stores.",
    image: '/assets/projects/react-native.svg',
    color: 'from-emerald-500 to-green-700',
    tags: ['PHP', 'Laravel 12', 'PostgreSQL', 'Redis', 'Flutter', 'Docker'],
    type: 'personnel',
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
