"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

  const { scrollYProgress } = useScroll({
    target: dividerRef,
    offset: ["start end", "end start"],
  });

  // Transformation optimisée basée sur le défilement pour créer un effet d'onde plus léger
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [height / 4, -height / 4] : [-height / 4, height / 4]
  );

  // Couleurs pour le dégradé
  const colorMap = {
    blue: "from-blue-500 to-blue-700",
    green: "from-green-500 to-green-700",
    purple: "from-purple-500 to-purple-700",
    orange: "from-orange-500 to-orange-700",
  };

  return (
    <div
      ref={dividerRef}
      className="w-full overflow-hidden relative z-10"
      style={{ height: `${height}px` }}
    >
      <motion.div
        className={`absolute w-[120%] left-[-10%] h-full bg-gradient-to-r ${colorMap[color]}`}
        style={{
          y: translateY,
          borderRadius: direction === "up" ? "50% 50% 0 0" : "0 0 50% 50%",
        }}
      >
        {/* Éléments décoratifs inspirés du sport */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <svg
            className="w-full h-20"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 Q300,80 600,40 T1200,0 V60 H0 Z"
              fill="rgba(255,255,255,0.2)"
            />
          </svg>
        </div>

        {/* Particules animées - nombre réduit pour de meilleures performances */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full bg-white opacity-40"
              style={{
                left: `${15 + i * 20}%`,
                top: direction === "up" ? "60%" : "30%",
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedDivider;
