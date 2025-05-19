import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';

interface DumbbellAnimationProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';
  size?: 'small' | 'medium' | 'large';
  reverseAnimation?: boolean;
}

const DumbbellAnimation: React.FC<DumbbellAnimationProps> = ({ 
  position = 'bottom-right',
  size = 'medium',
  reverseAnimation = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const rotateValue = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Paramètres de taille
  const sizeMap = {
    small: { width: 80, height: 80 },
    medium: { width: 120, height: 120 },
    large: { width: 180, height: 180 }
  };
  
  // Paramètres de position
  const positionMap = {
    'top-right': 'absolute top-20 right-10',
    'top-left': 'absolute top-20 left-10',
    'bottom-right': 'absolute bottom-20 right-10',
    'bottom-left': 'absolute bottom-20 left-10',
    'center': 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  };
  
  // Calculer l'inclinaison 3D basée sur la rotation
  const rotateX = useTransform(rotateValue, [0, 180, 360], [5, -5, 5]);
  const rotateZ = useTransform(rotateValue, [0, 180, 360], [-3, 3, -3]);
  
  // Animation de l'ombre portée
  const shadowOpacity = useTransform(y, [0, 10], [0.2, 0.4]);
  const shadowBlur = useTransform(y, [0, 10], [5, 15]);
  const shadowY = useTransform(y, [0, 10], [0, 5]);
  
  useEffect(() => {
    // Animation d'exercice de musculation
    const sequence = async () => {
      // Lever l'haltère (animation vers le haut)
      await controls.start({
        y: reverseAnimation ? [0, -20, 0] : [0, -15, 0],
        transition: {
          duration: 2,
          times: [0, 0.5, 1],
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1
        }
      });
    };
    
    // Animation de rotation continue
    controls.start({
      rotateY: reverseAnimation ? -360 : 360,
      transition: {
        duration: 12,
        ease: "linear",
        repeat: Infinity
      }
    });
    
    sequence();
    
    // Nettoyer les animations
    return () => {
      controls.stop();
    };
  }, [controls, reverseAnimation]);
  
  return (
    <div 
      ref={containerRef}
      className={`${positionMap[position]} perspective-800 pointer-events-none z-10`}
      style={{ 
        width: sizeMap[size].width, 
        height: sizeMap[size].height,
      }}
    >
      {/* Ombre portée */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black rounded-full z-0"
        style={{
          width: sizeMap[size].width * 0.6,
          height: sizeMap[size].width * 0.1,
          opacity: shadowOpacity,
          filter: `blur(${shadowBlur}px)`,
          y: shadowY
        }}
      />
      
      {/* Container 3D */}
      <motion.div
        className="w-full h-full relative"
        style={{ y, rotateX, rotateZ }}
        animate={controls}
      >
        {/* Haltère */}
        <svg
          viewBox="0 0 100 40"
          className="w-full h-full"
          style={{ 
            filter: "drop-shadow(0px 5px 3px rgba(0,0,0,0.2))",
          }}
        >
          {/* Disque gauche */}
          <motion.g>
            <circle cx="15" cy="20" r="13" fill="#333" />
            <circle cx="15" cy="20" r="9" fill="#555" stroke="#444" strokeWidth="1" />
            <circle cx="15" cy="20" r="5" fill="#666" />
          </motion.g>
          
          {/* Barre centrale */}
          <rect x="15" y="18" width="70" height="4" rx="2" fill="#777" />
          
          {/* Poignée centrale */}
          <rect x="37" y="17" width="26" height="6" rx="3" fill="#444" />
          
          {/* Disque droit */}
          <motion.g>
            <circle cx="85" cy="20" r="13" fill="#333" />
            <circle cx="85" cy="20" r="9" fill="#555" stroke="#444" strokeWidth="1" />
            <circle cx="85" cy="20" r="5" fill="#666" />
          </motion.g>
          
          {/* Reflets */}
          <ellipse cx="15" cy="15" rx="5" ry="2" fill="#888" opacity="0.3" />
          <ellipse cx="85" cy="15" rx="5" ry="2" fill="#888" opacity="0.3" />
          <rect x="40" y="17" width="20" height="2" rx="1" fill="#888" opacity="0.3" />
        </svg>
      </motion.div>
    </div>
  );
};

export default DumbbellAnimation;