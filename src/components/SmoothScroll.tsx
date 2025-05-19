'use client';

import Lenis from '@studio-freight/lenis';
import { useEffect, useRef } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialisation de Lenis pour le smooth scrolling avec des paramètres optimisés
    lenisRef.current = new Lenis({
      duration: 0.8, // Durée réduite pour un défilement plus réactif
      easing: t => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // Easing plus simple
      touchMultiplier: 1.5, // Valeur réduite pour plus de stabilité
      infinite: false,
      // Amélioration des performances
      syncTouch: true,
      wheelMultiplier: 0.8,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Ajouter un gestionnaire d'événements pour les liens d'ancrage
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      
      const anchor = e.currentTarget as HTMLAnchorElement;
      const targetId = anchor.getAttribute("href")?.substring(1);
      
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          lenisRef.current?.scrollTo(targetElement, {
            offset: -100, // Offset pour tenir compte du header fixe
            duration: 1.5,
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
