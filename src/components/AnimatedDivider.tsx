"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedDividerProps {
  color?: "blue" | "green" | "purple" | "orange";
  direction?: "up" | "down";
  height?: number;
}

const AnimatedDivider: React.FC<AnimatedDividerProps> = ({
  color = "blue",
  direction = "up",
  height = 120,
}) => {
  const dividerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Détection des appareils mobiles
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: dividerRef,
    offset: ["start end", "end start"],
  });

  // Animation de la ligne centrale - optimisée pour mobile
  const lineWidth = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "100%", "100%"]
  );

  const colorMap = {
    blue: "from-blue-500 to-blue-700",
    green: "from-green-500 to-green-700",
    purple: "from-purple-500 to-purple-700",
    orange: "from-orange-500 to-orange-700",
  };

  const accentColorMap = {
    blue: "bg-blue-400",
    green: "bg-green-400",
    purple: "bg-purple-400",
    orange: "bg-orange-400",
  };

  // Version simplifiée pour mobile
  if (isMobile) {
    return (
      <div
        ref={dividerRef}
        className="w-full overflow-hidden relative z-10 flex flex-col items-center justify-center"
        style={{ height: `${height * 0.7}px` }} // Réduire la hauteur sur mobile
      >
        <div className="relative w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center h-full">
          {/* Ligne simplifiée pour mobile */}
          <motion.div
            className={`h-0.5 ${accentColorMap[color]}`}
            style={{ 
              width: lineWidth,
              opacity: 0.9,
              willChange: "width" // Optimisation des performances
            }}
            transition={{ duration: 0.1 }} // Animation plus rapide sur mobile
          />
          
          {/* Icône simplifiée */}
          <div
            className={`w-6 h-6 mt-2 rounded-full ${accentColorMap[color]} flex items-center justify-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  // Version complète pour desktop
  return (
    <div
      ref={dividerRef}
      className="w-full overflow-hidden relative z-10 flex flex-col items-center justify-center"
      style={{ height: `${height}px` }}
    >
      {/* Design élégant avec une ligne stylisée au lieu des points */}
      <div className="relative w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center h-full">
        <motion.div
          className={`h-0.5 ${accentColorMap[color]}`}
          style={{ width: lineWidth, opacity: 0.9 }}
        />

        {/* Décorations minimalistes */}
        <motion.div
          className="flex items-center justify-center mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div
            className={`w-8 h-8 rounded-full ${accentColorMap[color]} flex items-center justify-center relative overflow-hidden shadow-md`}
          >
            {color === "blue" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {color === "green" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {color === "purple" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
              </svg>
            )}
            {color === "orange" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            )}
          </div>
        </motion.div>
      </div>

      {/* Effet de vague subtil en arrière-plan - uniquement sur desktop */}
      <motion.div
        className={`absolute w-full h-1/2 bottom-0 ${
          direction === "up" ? "" : "top-0 bottom-auto"
        } opacity-5 bg-gradient-to-r ${colorMap[color]}`}
        style={{
          borderRadius: direction === "up" ? "80% 80% 0 0" : "0 0 80% 80%",
        }}
      />
    </div>
  );
};

export default AnimatedDivider;
