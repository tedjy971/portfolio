import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ballRef.current) {
      // Animation du ballon qui rebondit avec GSAP
      gsap.to(ballRef.current, {
        y: -20,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    // Timeline d'animations pour les éléments du hero
    const tl = gsap.timeline();

    if (heroRef.current) {
      // Animation subtile de l'arrière-plan
      tl.to(heroRef.current, {
        backgroundPosition: "100% 100%",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });
    }
  }, []);

  return (
    <motion.div
      ref={heroRef}
      className="min-h-screen pt-24 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-blue-100 to-green-50 dark:from-gray-800 dark:to-gray-900 bg-size-200 transition-all duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 opacity-20 bg-[url('/grid-pattern.svg')] bg-repeat"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Développeur Web Passionné
            </motion.span>

            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Teddy Gamiette
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent font-semibold">
                Tech Lead & Développeur Back-end
              </span>
            </motion.h2>

            <motion.p
              className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Spécialisé en Symfony, Next.js, NestJS, avec des notions de
              Flutter et Ionic. Passionné de musculation et de domotique, avec
              un intérêt pour le DevOps.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
                whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
                whileTap={{ scale: 0.95 }}
              >
                Voir mes projets
              </motion.a>

              <motion.a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Me contacter
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden md:flex justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-80 h-80">
              {/* Image de profil stylisée */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-green-400 blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-4 border-white dark:border-gray-800 shadow-xl overflow-hidden">
                <img
                  src="/assets/profile/profile-bg.svg"
                  alt="Teddy Gamiette - Tech Lead & Développeur"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Élément décoratif: ballon de sport */}
              <motion.div
                ref={ballRef}
                className="absolute -bottom-10 -right-10 w-20 h-20 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-10 h-10"
                  >
                    <path d="M12.75 7.76v8.48a.75.75 0 0 1-1.5 0V7.76L9.49 9.2a.75.75 0 0 1-.98-1.13l2.75-2.38a.75.75 0 0 1 .98 0L15 8.07a.75.75 0 1 1-.98 1.13l-1.26-1.44Z" />
                    <path
                      fillRule="evenodd"
                      d="M12 1.25C6.06 1.25 1.25 6.06 1.25 12S6.06 22.75 12 22.75 22.75 17.94 22.75 12 17.94 1.25 12 1.25ZM2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vague animée au bas de la section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 text-white dark:text-gray-900"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </motion.div>
  );
};

export default Hero;
