"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import About from "../components/About";
import AnimatedDivider from "../components/AnimatedDivider";
import Contact from "../components/Contact";
import CustomCursor from "../components/CustomCursor";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import IntroAnimation from "../components/IntroAnimation";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import SportAnimation from "../components/SportAnimation";

export default function Home() {
  // État pour contrôler quelle animation afficher
  const [showGsapIntro, setShowGsapIntro] = useState(true);
  
  // Animation pour le chargement de la page
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Effet pour initialiser les animations avec amélioration des performances
  useEffect(() => {
    // Ajouter une classe au body pour permettre les transitions CSS
    document.body.classList.add("has-animations");

    // Effet de révélation des sections lors du défilement avec paramètres optimisés
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Delay minime pour éviter de surcharger le thread principal
            setTimeout(() => {
              entry.target.classList.add("in-view");
            }, 10);
          }
        });
      },
      {
        // Réduire le threshold pour déclencher les animations plus tôt
        threshold: 0.05,
        // Ajouter une marge pour pré-charger les animations
        rootMargin: "50px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Animation légère du fond pour éviter la surcharge CPU
    // Utiliser requestAnimationFrame au lieu de GSAP pour les animations subtiles
    let animationFrameId: number;
    const animateBackground = () => {
      const now = Date.now() / 40000; // Cycle lent pour économiser les ressources
      const x = 50 + Math.sin(now) * 10;
      const y = 50 + Math.cos(now) * 10;
      document.body.style.backgroundPosition = `${x}% ${y}%`;
      animationFrameId = requestAnimationFrame(animateBackground);
    };
    animationFrameId = requestAnimationFrame(animateBackground);

    return () => {
      document.body.classList.remove("has-animations");
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      // Nettoyage de l'animation de fond
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Header />
      <main>
        {showGsapIntro ? (
          <>
            <IntroAnimation />
            <div className="fixed bottom-10 right-10 z-50">
              <button 
                onClick={() => setShowGsapIntro(false)}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 flex items-center justify-center hover:shadow-xl transition-all"
                title="Basculer vers l'affichage standard"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <>
            <Hero />
            <div className="fixed bottom-10 right-10 z-50">
              <button 
                onClick={() => setShowGsapIntro(true)}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 flex items-center justify-center hover:shadow-xl transition-all"
                title="Voir l'animation GSAP"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
              </button>
            </div>
          </>
        )}

        <AnimatedDivider color="blue" direction="up" height={120} />

        {/* Animations sportives intégrées à différents endroits du site */}
        <div className="relative">
          <Projects />
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <SportAnimation
              position="top-right"
              theme="ball"
              color="blue"
              size="medium"
            />
          </div>
        </div>

        <AnimatedDivider color="green" direction="down" height={100} />

        <div className="relative">
          <Skills />
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <SportAnimation
              position="bottom-left"
              theme="runner"
              color="green"
              size="large"
            />
          </div>
        </div>

        <AnimatedDivider color="purple" direction="up" height={120} />

        <div className="relative">
          <About />
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <SportAnimation
              position="top-left"
              theme="energy"
              color="purple"
              size="small"
            />
            <SportAnimation
              position="bottom-right"
              theme="ball"
              color="orange"
              size="small"
            />
          </div>
        </div>

        <AnimatedDivider color="orange" direction="down" height={100} />

        <div className="relative">
          <Contact />
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <SportAnimation
              position="center"
              theme="energy"
              color="blue"
              size="large"
            />
          </div>
        </div>
      </main>
      <Footer />

      {/* Curseur personnalisé avec animation */}
      <CustomCursor />

      {/* Élément de fond pour animation sportive */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-5 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-500 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-green-500 blur-3xl animate-pulse-slow"></div>
      </div>
    </motion.div>
  );
}
