'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })  ;

  const experiences = [
    {
      title: "Tech Lead en alternance",
      company: "Kernix",
      period: "Actuel",
      description:
        "Direction technique des projets web, management d'équipe et implémentation des meilleures pratiques de développement.",
    },
    {
      title: "Développeur Back-end",
      company: "Kernix",
      period: "Précédemment",
      description:
        "Développement d'applications web robustes avec PHP, Symfony et API REST.",
    },
    {
      title: "Master Tech Lead",
      company: "Formation",
      period: "En cours",
      description:
        "Formation en alternance avec spécialisation en direction technique des projets web.",
    },
    {
      title: "Bachelor Web",
      company: "Formation",
      period: "Précédemment",
      description:
        "Formation approfondie en développement web et technologies modernes.",
    },
    {
      title: "Licence Data Analyste",
      company: "Formation",
      period: "Précédemment",
      description:
        "Formation en analyse de données et manipulation d'informations complexes.",
    },
    {
      title: "BTS SNIR",
      company: "Formation",
      period: "Précédemment",
      description:
        "Systèmes Numériques Informatique et Réseaux - Formation technique en informatique et réseaux.",
    },
  ];

  const interests = [
    {
      title: "Musculation",
      icon: "💪",
      description:
        "Passionné de musculation et d'entraînement physique. La discipline et la persévérance du sport sont des valeurs que j'applique en développement.",
    },
    {
      title: "DevOps",
      icon: "⚙️",
      description:
        "Intéressé par les pratiques DevOps, l'automatisation des déploiements et l'infrastructure as code.",
    },
    {
      title: "Domotique",
      icon: "🏠",
      description:
        "Création de solutions domotiques pour automatiser et optimiser mon environnement quotidien.",
    },
    {
      title: "Développement Web",
      icon: "💻",
      description:
        "Veille technologique constante pour rester à la pointe des dernières technologies web et mobiles.",
    },
  ];

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
        type: "spring",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3
              className="text-2xl font-bold mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Mon Parcours
            </motion.h3>

            <motion.p
              className="text-gray-600 dark:text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Développeur web passionné spécialisé dans les technologies
              back-end comme PHP et Symfony, tout en maîtrisant React et Next.js
              pour le front-end. Actuellement Tech Lead chez Kernix, je combine
              expertise technique et vision stratégique pour mener des projets
              web innovants.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="border-l-4 border-blue-500 pl-4 py-2"
                >
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-gray-800 dark:text-white">
                      {exp.title}
                    </h4>
                    <span className="text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {exp.company}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mb-8 rounded-xl overflow-hidden">
              {/* Silhouette de profil ou image */}
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-tr from-blue-500 to-green-400 rounded-xl flex items-center justify-center">
                <div className="text-white text-6xl font-bold">TG</div>

                {/* Animation sportive en arrière-plan */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                      "radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                      "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                    ],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />

                {/* Éléments décoratifs animés */}
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
              animate={inView ? "visible" : "hidden"}
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
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                    {interest.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {interest.description}
                  </p>
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
