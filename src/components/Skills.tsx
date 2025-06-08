'use client';
import { skills } from '@/data/personalData';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  // Filtres pour les compétences
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Définir l'interface pour les étoiles
  interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
  }

  const [stars, setStars] = useState<Star[]>([]);
  useEffect(() => {
    if (inView) {
      // Création d'étoiles aléatoires pour l'animation de fond
      const newStars = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 8,
        duration: 15 + Math.random() * 15,
      }));
      setStars(newStars);
    }
  }, [inView]);

  // Filtre les compétences en fonction de la catégorie sélectionnée
  const filteredSkills =
    filter === 'all' ? skills : skills.filter(skill => skill.category === filter);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Éléments décoratifs dynamiques inspirés du sport */}
      {inView &&
        stars.map(star => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-blue-400 dark:bg-blue-600 opacity-20"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Mes Compétences
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
            Spécialisé en développement back-end avec des compétences solides en PHP, Symfony et
            Node.js. Je maîtrise également le développement front-end avec React et Next.js.
          </motion.p>
        </div>

        {/* Filtres de compétences */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {['all', 'backend', 'frontend', 'devops', 'data', 'other'].map(category => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                filter === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Barres de compétences */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  {skill.logo && (
                    <div className="w-8 h-8 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <h3 className="font-bold text-gray-800 dark:text-white">{skill.name}</h3>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <motion.div
                  className={`h-2.5 rounded-full ${skill.color}`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{
                    duration: 1,
                    delay: index * 0.05,
                    ease: 'easeOut',
                  }}
                />
              </div>

              {/* Indicateur visuel pour représenter la compétence */}
              <div className="mt-3 flex">
                {Array.from({ length: 5 }).map((_, i) => {
                  const isFilled = (skill.level / 100) * 5 > i;
                  return (
                    <motion.svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={isFilled ? 'currentColor' : 'none'}
                      stroke="currentColor"
                      className={`w-4 h-4 mr-1 ${
                        isFilled
                          ? 'text-blue-500 dark:text-blue-400'
                          : 'text-gray-300 dark:text-gray-500'
                      }`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.5 + index * 0.05 + i * 0.05,
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Slider de logos tech */}
        <div className="mt-16 mb-8">
          <motion.h3
            className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent inline-block"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Technologies & Outils
          </motion.h3>

          <div className="tech-slider max-w-5xl mx-auto">
            <div className="animate-scroll">
              {[
                ...skills.filter(skill => skill.logo !== null),
                ...skills.filter(skill => skill.logo !== null),
              ].map((skill, index) => (
                <div
                  key={`tech-${skill.name}-${index}`}
                  className={`flex-shrink-0 w-24 h-24 ${
                    skill.category === 'backend'
                      ? 'bg-blue-50 dark:bg-blue-900/20'
                      : skill.category === 'frontend'
                        ? 'bg-green-50 dark:bg-green-900/20'
                        : skill.category === 'mobile'
                          ? 'bg-orange-50 dark:bg-orange-900/20'
                          : 'bg-purple-50 dark:bg-purple-900/20'
                  } 
                    rounded-xl shadow-lg p-4 flex flex-col items-center justify-center group hover:scale-110 transition-transform duration-300`}
                  title={skill.name}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-xs font-medium mt-1 text-gray-600 dark:text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Légende sous le slider */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-6 max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Ajout d'une légende pour les catégories */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Backend</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Frontend</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-orange-500"></span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Mobile</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              <span className="text-sm text-gray-600 dark:text-gray-400">DevOps</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
