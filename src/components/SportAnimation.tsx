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

  useEffect(() => {
    // Générer un décalage aléatoire plus léger pour de meilleures performances
    setRandomOffset({
      x: Math.random() * 10 - 5,
      y: Math.random() * 10 - 5,
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

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [theme]);

  // Définir les tailles
  const sizeMap = {
    small: { width: 30, height: 30 },
    medium: { width: 60, height: 60 },
    large: { width: 100, height: 100 },
  };

  // Définir les couleurs
  const colorMap = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
    orange: "bg-orange-500",
    purple: "bg-purple-500",
  };

  // Définir les positions
  const positionMap = {
    "top-right": "top-10 right-10",
    "top-left": "top-10 left-10",
    "bottom-right": "bottom-10 right-10",
    "bottom-left": "bottom-10 left-10",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  // Différentes animations selon le thème
  switch (theme) {
    case "ball":
      return (
        <motion.div
          className={`absolute ${positionMap[position]} rounded-full ${colorMap[color]} shadow-lg z-10 sport-animation`}
          style={{ width: sizeMap[size].width, height: sizeMap[size].height }}
          animate={{
            y: [0, -20 + randomOffset.y, 0],
            x: [0, 10 + randomOffset.x, 0],
            rotate: [0, 360], // Animation plus légère
            boxShadow: [
              "0 4px 8px rgba(0,0,0,0.1)",
              "0 8px 16px rgba(0,0,0,0.2)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear", // Easing linéaire pour de meilleures performances
            // Utiliser un délai animé plus simple
            delay: 0.2,
          }}
          onClick={() => trackSportInteraction('ball', 'click')}
          onMouseEnter={() => trackSportInteraction('ball', 'hover')}
        >
          {/* Lignes de ballon */}
          <div className="absolute inset-0 rounded-full border-2 border-white opacity-40"></div>
          <div className="absolute inset-0 rounded-full border-t-2 border-white opacity-30 rotate-45"></div>
          <div className="absolute inset-0 rounded-full border-b-2 border-white opacity-30 rotate-45"></div>
        </motion.div>
      );

    case "runner":
      return (
        <motion.div
          className={`absolute ${positionMap[position]} z-10 flex items-center justify-center overflow-hidden`}
          style={{
            width: sizeMap[size].width * 2,
            height: sizeMap[size].height,
          }}
          onClick={() => trackSportInteraction('runner', 'click')}
          onMouseEnter={() => trackSportInteraction('runner', 'hover')}
        >
          <motion.div
            className={`${colorMap[color]} w-1/3 h-full rounded-full relative sport-animation`}
            animate={{
              x: [
                -sizeMap[size].width,
                sizeMap[size].width,
                -sizeMap[size].width,
              ],
              scaleY: [1, 0.8, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />

          {/* Traînée d'énergie */}
          <motion.div
            className={`absolute top-0 h-full bg-opacity-30 ${colorMap[color]} rounded-full sport-animation`}
            style={{ left: "30%", width: "70%" }}
            animate={{
              width: ["0%", "70%", "0%"],
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        </motion.div>
      );

    case "energy":
      return (
        <motion.div
          className={`absolute ${positionMap[position]} z-10`}
          style={{ width: sizeMap[size].width, height: sizeMap[size].height }}
          onClick={() => trackSportInteraction('energy', 'click')}
          onMouseEnter={() => trackSportInteraction('energy', 'hover')}
        >
          {/* Pulse d'énergie - optimisé */}
          <motion.div
            className={`absolute inset-0 rounded-full ${colorMap[color]} opacity-70 sport-animation`}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />

          {/* Particules d'énergie réduites pour optimiser les performances */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${colorMap[color]} w-3 h-3 sport-animation`}
              style={{
                left: "50%",
                top: "50%",
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                x: [
                  0,
                  Math.cos((i * 120 * Math.PI) / 180) *
                    sizeMap[size].width *
                    0.7,
                ],
                y: [
                  0,
                  Math.sin((i * 120 * Math.PI) / 180) *
                    sizeMap[size].height *
                    0.7,
                ],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
      );

    default:
      return null;
  }
};

export default SportAnimation;
