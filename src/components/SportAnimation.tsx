"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { trackSportInteraction } from "../utils/analytics";

interface SportAnimationProps {
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "center";
  theme?: "ball" | "runner" | "energy";
  color?: "blue" | "green" | "red" | "orange" | "purple";
  size?: "small" | "medium" | "large";
}

const SportAnimation: React.FC<SportAnimationProps> = ({
  position = "top-right",
  theme = "ball",
  color = "blue",
  size = "medium",
}) => {
  const [randomOffset, setRandomOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Détection des appareils mobiles
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Vérifier les préférences de réduction de mouvement
    const checkReducedMotion = () => {
      setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    
    // Vérifier au chargement
    checkIfMobile();
    checkReducedMotion();
    
    // Générer un décalage aléatoire plus léger pour de meilleures performances
    setRandomOffset({
      x: Math.random() * (isMobile ? 5 : 10) - (isMobile ? 2.5 : 5),
      y: Math.random() * (isMobile ? 5 : 10) - (isMobile ? 2.5 : 5),
    });

    // Track when the sport animation is rendered
    trackSportInteraction(theme, 'render');

    // Désactiver les animations quand la page n'est pas visible pour économiser les ressources
    const handleVisibilityChange = () => {
      const isHidden = document.hidden;
      const animElements = document.querySelectorAll(".sport-animation");
      animElements.forEach((el) => {
        if (isHidden) {
          el.classList.add("paused");
        } else {
          el.classList.remove("paused");
        }
      });
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener('resize', checkIfMobile);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [theme, isMobile]);

  // Déterminer la taille en fonction du paramètre et de l'appareil
  const sizeMap = {
    small: isMobile ? 40 : 60,
    medium: isMobile ? 60 : 100,
    large: isMobile ? 80 : 140,
  };

  const animationSize = sizeMap[size];

  // Réduire la complexité des animations sur mobile
  const getAnimationVariants = () => {
    // Version simplifiée pour les appareils avec préférence de réduction de mouvement
    if (reducedMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 0.8 },
      };
    }
    
    // Version simplifiée pour mobile
    if (isMobile) {
      return {
        initial: { 
          opacity: 0,
          scale: 0.8,
        },
        animate: { 
          opacity: 0.8,
          scale: 1,
          transition: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut",
          }
        },
      };
    }
    
    // Version complète pour desktop
    return {
      initial: { 
        opacity: 0,
        scale: 0.8,
      },
      animate: { 
        opacity: 0.8,
        scale: 1,
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut",
        }
      },
    };
  };

  // Positionnement en fonction du paramètre
  const positionStyles = {
    "top-right": "top-0 right-0",
    "top-left": "top-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-0 left-0",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  // Couleurs en fonction du paramètre
  const colorStyles = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
    orange: "bg-orange-500",
    purple: "bg-purple-500",
  };

  // Rendu conditionnel en fonction du thème
  const renderTheme = () => {
    switch (theme) {
      case "ball":
        return (
          <motion.div
            className={`rounded-full ${colorStyles[color]} sport-animation`}
            style={{
              width: `${animationSize}px`,
              height: `${animationSize}px`,
              willChange: "transform, opacity", // Optimisation des performances
            }}
            variants={getAnimationVariants()}
            initial="initial"
            animate="animate"
            onClick={() => trackSportInteraction('ball', 'click')}
            onMouseEnter={() => trackSportInteraction('ball', 'hover')}
          />
        );
      case "runner":
        // Remplacer l'animation du coureur par une image statique
        return (
          <div
            className={`sport-animation static-runner`}
            style={{
              width: `${animationSize}px`,
              height: `${animationSize}px`,
              opacity: 0.8,
            }}
            onClick={() => trackSportInteraction('runner', 'click')}
            onMouseEnter={() => trackSportInteraction('runner', 'hover')}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className={`w-full h-full ${
                color === "blue"
                  ? "text-blue-500"
                  : color === "green"
                  ? "text-green-500"
                  : color === "red"
                  ? "text-red-500"
                  : color === "orange"
                  ? "text-orange-500"
                  : "text-purple-500"
              }`}
            >
              <path
                d="M15 5C16.1046 5 17 4.10457 17 3C17 1.89543 16.1046 1 15 1C13.8954 1 13 1.89543 13 3C13 4.10457 13.8954 5 15 5Z"
                fill="currentColor"
              />
              <path
                d="M13.0824 15.9231L13.2403 18.2799L10.9771 17.0132L9.19139 13.3554L6.99829 15.7422L8.77898 22.5L6.60205 23L4.5 15.5L9.87654 9.64588L7.22396 7.12573L8.91045 5.26544L13.7603 9.80438C14.1068 10.1335 14.3367 10.5673 14.4135 11.0429C14.4903 11.5184 14.4095 12.0044 14.1837 12.4281L13.0824 15.9231Z"
                fill="currentColor"
              />
              <path
                d="M18.4005 7.61611L20.8846 13.2845L19.9148 14.3374C19.6097 14.6735 19.1683 14.8518 18.7131 14.8244C18.2579 14.797 17.8399 14.5664 17.5736 14.1932L14.2581 9.44287L18.4005 7.61611Z"
                fill="currentColor"
              />
            </svg>
          </div>
        );
      case "energy":
        // Remplacer l'animation d'énergie par une image statique
        return (
          <div
            className={`sport-animation static-energy`}
            style={{
              width: `${animationSize}px`,
              height: `${animationSize}px`,
              opacity: 0.8,
            }}
            onClick={() => trackSportInteraction('energy', 'click')}
            onMouseEnter={() => trackSportInteraction('energy', 'hover')}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className={`w-full h-full ${
                color === "blue"
                  ? "text-blue-500"
                  : color === "green"
                  ? "text-green-500"
                  : color === "red"
                  ? "text-red-500"
                  : color === "orange"
                  ? "text-orange-500"
                  : "text-purple-500"
              }`}
            >
              <path
                d="M13 10H20L11 23V14H4L13 1V10Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`absolute ${positionStyles[position]} mix-blend-screen pointer-events-none`}
      style={{
        transform: `translate(${randomOffset.x}%, ${randomOffset.y}%)`,
      }}
    >
      {renderTheme()}
    </div>
  );
};

export default SportAnimation;
