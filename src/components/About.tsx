'use client';

import { educationExperiences, experiences, interests } from '@/data/personalData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            À Propos de Moi
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-blue-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Section Expériences Professionnelles */}
            <div>
              <motion.h3
                className="text-2xl font-bold mb-4 text-gray-900 dark:text-white"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Expériences Professionnelles
              </motion.h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="space-y-6"
              >
                {experiences.map((experience, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="border-l-4 border-blue-500 pl-4 py-1"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="font-bold text-gray-800 dark:text-white">
                        {experience.title}
                      </h5>
                      <span className="text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded">
                        {experience.period}
                      </span>
                    </div>
                    <h6 className="text-gray-600 dark:text-gray-300 mb-2">{experience.company}</h6>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {experience.description}
                    </p>
                    {experience.tags && (
                      <div className="flex flex-wrap gap-2">
                        {experience.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Section Formation */}
            <div>
              <motion.h3
                className="text-2xl font-bold mb-4 text-gray-900 dark:text-white"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Formation
              </motion.h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="space-y-6"
              >
                {educationExperiences.map((education, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="border-l-4 border-green-500 pl-4 py-1"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="font-bold text-gray-800 dark:text-white">{education.title}</h5>
                      <span className="text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded">
                        {education.period}
                      </span>
                    </div>
                    <h6 className="text-gray-600 dark:text-gray-300 mb-2">{education.school}</h6>
                    <p className="text-gray-600 dark:text-gray-400">{education.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mb-8">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <div className="relative bg-gradient-to-br from-blue-600 to-green-400 p-6 rounded-lg shadow-lg overflow-hidden">
                  <motion.p
                    className="text-white text-lg mb-4 relative z-10"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Développeur web passionné spécialisé dans les technologies back-end comme PHP et
                    Symfony, tout en maîtrisant React et Next.js pour le front-end. Actuellement
                    Développeur Back-end chez Kernix, je combine expertise technique et vision
                    stratégique pour mener des projets web innovants.
                  </motion.p>

                  <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                      className="absolute w-20 h-20 bg-white/10 rounded-full top-10 left-10"
                      animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                        y: [0, -30, 0],
                      }}
                      transition={{ duration: 8, repeat: Infinity }}
                    />

                    <motion.div
                      className="absolute w-12 h-12 bg-white/10 rounded-full bottom-10 right-10"
                      animate={{
                        scale: [1, 1.5, 1],
                        x: [0, -20, 0],
                        y: [0, 20, 0],
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <motion.h3
              className="text-2xl font-bold mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Centres d&apos;Intérêt
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="text-4xl mb-2">{interest.icon}</div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">{interest.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{interest.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
