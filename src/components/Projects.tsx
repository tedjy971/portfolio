'use client';

import { motion } from 'framer-motion';
import { Key, ReactNode, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
// Import Swiper et styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { trackProjectView, trackSectionView, trackExternalLinkClick } from '../utils/analytics';

interface Project {
  id: Key | null | undefined;
  title: string | ReactNode;
  description: ReactNode;
  tags: string[];
  image: string | undefined;
  color: string;
  githubLink: string | undefined;
  type: ReactNode;
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      // Track when the projects section comes into view
      trackSectionView('projects');
    }
  }, [inView]);

  const projects: Project[] = [
    {
      id: 1,
      title: 'krankenPhp',
      description:
        'Application web moderne utilisant Docker, FrankenPHP et Symfony 7. Une architecture containerisée performante pour le développement PHP moderne avec les dernières technologies.',
      tags: ['Docker', 'FrankenPHP', 'Symfony', 'PHP', 'DevOps'],
      image: '/assets/projects/krankenphp-project.svg',
      color: 'from-blue-500 to-blue-700',
      githubLink: 'https://github.com/tedjy971/krankenPhp',
      type: 'Backend',
    },
    {
      id: 2,
      title: 'Raytracing C++',
      description:
        'Moteur de ray-tracing développé en C++ avec optimisations avancées. Implémentation complète des algorithmes de rendu 3D, gestion des ombres, reflets et éclairage réaliste.',
      tags: ['C++', 'Ray-tracing', '3D', 'Graphisme', 'Optimisation'],
      image: '/assets/projects/raytracing-project.svg',
      color: 'from-purple-500 to-purple-700',
      githubLink: 'https://github.com/tedjy971/Raytracing-Cpp',
      type: 'Graphics',
    },
    {
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
      title: 'GoofySeRA',
      description:
        'Plateforme de gestion de cours de musique en ligne pour la Saline Royale Academy. Frontend React avec backend Laravel, gestion complète des formations musicales.',
      tags: ['React', 'Laravel', 'Management', 'Education', 'Docker'],
      image: '/assets/projects/goofy-sera.svg',
      color: 'from-indigo-500 to-indigo-700',
      githubLink: 'https://github.com/GoofyTeam/GoofySeRA',
      type: 'Web App',
    },
    {
      id: 7,
      title: 'Portfolio React Workshop',
      description:
        'Projet de formation React développé pendant le workshop BeginReact.dev. Implémentation des concepts avancés de React avec hooks, context et bonnes pratiques.',
      tags: ['React', 'Workshop', 'Formation', 'Hooks', 'Context'],
      image: '/assets/projects/react-portfolio.svg',
      color: 'from-cyan-500 to-cyan-700',
      githubLink: 'https://github.com/tedjy971/portfolio-react-workshop',
      type: 'Learning',
    },
    {
      id: 8,
      title: 'FrankenPHP Docker',
      description:
        'Configuration Docker optimisée pour FrankenPHP avec environnement de développement complet. Setup performant pour applications PHP modernes avec hot-reload.',
      tags: ['Docker', 'FrankenPHP', 'PHP', 'Development', 'Configuration'],
      image: '/assets/projects/frankenphp-docker.svg',
      color: 'from-violet-500 to-violet-700',
      githubLink: 'https://github.com/tedjy971/frankenphp-docker',
      type: 'DevOps',
    },
    {
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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

  // Fonction pour diviser les projets en groupes de 4
  const chunkArray = (array: Project[], chunkSize: number) => {
    const chunks: Project[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Diviser les projets en groupes de 4
  const projectChunks = chunkArray(projects, 4);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Mes Projets
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-blue-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Voici quelques-uns des projets sur lesquels j&apos;ai travaillé, montrant mon expertise
            dans le développement web et mes intérêts dans le domaine du sport et de la technologie.
          </motion.p>
        </div>

        {/* Swiper slider pour les projets */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative"
        >
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            spaceBetween={30}
            className="project-slider"
            style={{
              paddingBottom: '60px', // Espace pour les contrôles de pagination
              paddingLeft: '40px',
              paddingRight: '40px',
            }}
          >
            {/* Chaque slide contient un bloc de 4 projets */}
            {projectChunks.map((chunk, chunkIndex) => (
              <SwiperSlide key={`chunk-${chunkIndex}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {chunk.map((project: Project) => (
                    <motion.div
                      key={project.id}
                      className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg flex flex-col h-full"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      onClick={() =>
                        trackProjectView(typeof project.title === 'string' ? project.title : String(project.title))
                      }
                    >
                      {/* Remplacer <img> par <Image /> plus tard pour optimisation Next.js */}
                      {/* <img src={project.image} alt={project.title} className="w-full h-48 object-contain p-6 rounded-t-xl bg-gradient-to-tr" style={{background: project.color}}/> */}
                      <img
                        src={project.image}
                        alt={typeof project.title === 'string' ? project.title : ''}
                        className="w-full h-48 object-contain p-6 rounded-t-xl bg-gradient-to-tr"
                        style={{ background: project.color }}
                      />
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="text-zinc-700 dark:text-zinc-300 mb-4 text-sm">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag: string) => (
                            <span
                              key={tag}
                              className="inline-block bg-zinc-100 dark:bg-zinc-800 text-xs px-2 py-1 rounded-full text-zinc-600 dark:text-zinc-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="inline-block text-xs text-zinc-400 mb-2">
                          {project.type === 'personnel'
                            ? 'Projet personnel'
                            : 'Projet d&apos;équipe'}
                        </span>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                          onClick={() => trackExternalLinkClick('github', project.githubLink || '')}
                        >
                          <svg
                            className="w-5 h-5 mr-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                          </svg>
                          Voir sur GitHub
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
