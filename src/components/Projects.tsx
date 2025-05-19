import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Application Symfony",
      description:
        "Développement d'une API complète avec gestion des utilisateurs et authentification JWT.",
      tags: ["Symfony", "PHP", "API Platform", "Docker"],
      image: "/assets/projects/symfony-project.svg",
      color: "from-blue-500 to-blue-700",
    },
    {
      id: 2,
      title: "Dashboard React",
      description:
        "Interface utilisateur pour analyser des données sportives en temps réel.",
      tags: ["React", "TypeScript", "ChartJS", "WebSockets"],
      image: "/assets/projects/react-dashboard.svg",
      color: "from-green-500 to-green-700",
    },
    {
      id: 3,
      title: "Application Next.js",
      description:
        "Site web dynamique pour un club de sport avec système de réservation.",
      tags: ["Next.js", "TailwindCSS", "Prisma", "PostgreSQL"],
      image: "/assets/projects/nextjs-project.svg",
      color: "from-purple-500 to-purple-700",
    },
    {
      id: 4,
      title: "Solution Domotique",
      description:
        "Système de contrôle domotique pour la gestion intelligente d'un espace sportif.",
      tags: ["IoT", "Node.js", "MQTT", "MongoDB"],
      image: "/assets/projects/domotique-project.svg",
      color: "from-orange-500 to-orange-700",
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
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mes Projets
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-blue-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Une sélection de projets sur lesquels j'ai travaillé, combinant ma
            passion pour le développement web et mon intérêt pour le sport et la
            domotique.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => {
            // Using react-intersection-observer for each item
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            return (
              <motion.div
                key={project.id}
                ref={ref}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ y: -10 }}
              >
                <div
                  className={`h-48 bg-gradient-to-r ${project.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                    <div className="absolute inset-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative z-10 font-bold text-xl text-white bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm">
                      {project.title}
                    </div>
                  </div>

                  {/* Animation d'élément sportif selon le type de projet */}
                  {project.id % 2 === 0 ? (
                    <motion.div
                      className="absolute w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm right-4 top-4"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    />
                  ) : (
                    <motion.div
                      className="absolute left-4 bottom-4 w-20 h-2 bg-white/20"
                      animate={{ width: [20, 60, 20] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    />
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={`#project-${project.id}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    whileHover={{ x: 5 }}
                  >
                    Voir les détails
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
