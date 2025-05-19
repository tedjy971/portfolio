import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface CustomDumbbellProps {
  imageUrl1: string;
  imageUrl2?: string; // Optional second image for alternating
  width?: number;
  height?: number;
  rotationSpeed?: number;
  floatSpeed?: number;
  className?: string;
}

const CustomDumbbell: React.FC<CustomDumbbellProps> = ({
  imageUrl1,
  imageUrl2,
  width = 120,
  height = 120,
  rotationSpeed = 2,
  floatSpeed = 3,
  className = "",
}) => {
  const controls = useAnimation();
  const alternateRef = useRef(false);
  const currentImageRef = useRef(imageUrl1);

  // Effet de flottement et de rotation
  useEffect(() => {
    const animateFloat = async () => {
      while (true) {
        await controls.start({
          y: [0, -10, 0, 10, 0],
          rotate: [0, 3, 0, -3, 0],
          transition: {
            y: { duration: floatSpeed, ease: "easeInOut", repeat: 0 },
            rotate: { duration: rotationSpeed, ease: "easeInOut", repeat: 0 },
          },
        });

        // Si une seconde image est fournie, alterner entre les deux
        if (imageUrl2) {
          alternateRef.current = !alternateRef.current;
          currentImageRef.current = alternateRef.current
            ? imageUrl2
            : imageUrl1;
        }
      }
    };

    animateFloat();
  }, [controls, floatSpeed, rotationSpeed, imageUrl1, imageUrl2]);

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <motion.div
        animate={controls}
        className="w-full h-full flex items-center justify-center"
        style={{ willChange: "transform" }}
      >
        <img
          src={currentImageRef.current}
          alt="Dumbbell"
          className="object-contain w-full h-full"
          style={{
            filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3))",
          }}
        />
      </motion.div>
    </div>
  );
};

export default CustomDumbbell;
