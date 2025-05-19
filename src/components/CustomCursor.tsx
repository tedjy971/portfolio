'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Rendre le curseur visible après le premier mouvement de souris
      if (!visible) setVisible(true);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Ajout des événements pour détecter le survol des liens et boutons
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverStart);
      link.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverStart);
        link.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, [visible]);

  const cursorVariants = {
    default: {
      width: 32,
      height: 32,
      x: position.x - 16,
      y: position.y - 16,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      border: '2px solid #3B82F6',
      mixBlendMode: 'difference' as const
    },
    clicked: {
      width: 28,
      height: 28,
      x: position.x - 14,
      y: position.y - 14,
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      mixBlendMode: 'difference' as const
    },
    hovered: {
      width: 40,
      height: 40,
      x: position.x - 20,
      y: position.y - 20,
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      mixBlendMode: 'difference' as const
    }
  };

  // Curseur de style sport : imite une "balle" avec une traînée
  return (
    <>
      {/* Curseur principal */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-50 hidden md:block"
        variants={cursorVariants}
        animate={
          clicked ? 'clicked' : linkHovered ? 'hovered' : 'default'
        }
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
        style={{
          opacity: visible ? 1 : 0
        }}
      />
      
      {/* Traînée du curseur (effet sportif) */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-40 hidden md:block bg-blue-500"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: clicked ? 0.5 : 1
        }}
        transition={{
          type: 'spring',
          stiffness: 250,
          damping: 40,
          mass: 0.8
        }}
        style={{
          opacity: visible ? 0.2 : 0,
          width: 8,
          height: 8
        }}
      />
    </>
  );
};

export default CustomCursor;