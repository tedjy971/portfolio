'use client';

import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

interface DumbbellImageProps {
  width?: number;
  height?: number;
  className?: string;
  position?: "left" | "right";
}

const DumbbellImage: React.FC<DumbbellImageProps> = ({
  width = 150,
  height = 150,
  className = "",
  position = "right",
}) => {
  const controls = useAnimation();
  const [currentImage, setCurrentImage] = useState(0);

  // Images des haltères
  const images = ["/assets/altere.jpg", "/assets/altere2.jpg"];

  // Animation de flottement et alternance des images
  useEffect(() => {
    const animateFloat = async () => {
      while (true) {
        await controls.start({
          y: [0, -10, 0, 10, 0],
          rotate: position === "right" ? [0, 5, 0, -5, 0] : [0, -5, 0, 5, 0],
          transition: {
            duration: 4,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: 0,
          },
        });

        // Alterner entre les images
        setCurrentImage((prev) => (prev === 0 ? 1 : 0));
      }
    };

    animateFloat();
  }, [controls, position]);

  return (
    <div className={`${className} select-none`} style={{ width, height }}>
      <motion.div
        animate={controls}
        className="w-full h-full flex items-center justify-center"
        style={{ filter: "contrast(1.1) brightness(0.9)" }}
      >
        <div className="relative w-full h-full">
          <img
            src={images[currentImage]}
            alt="Haltère fitness"
            className="w-full h-full object-contain"
            style={{
              filter:
                "contrast(1.2) brightness(0.9) drop-shadow(0 8px 16px rgba(0,0,0,0.3))",
              transform: "scale(1.05)",
            }}
          />

          {/* Élément de brillance pour effet métallique */}
          <div
            className="absolute inset-0 opacity-50 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)",
              mixBlendMode: "overlay",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default DumbbellImage;
