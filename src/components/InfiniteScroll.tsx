import React, { ReactNode } from 'react';

interface InfiniteScrollProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  gap?: number;
  className?: string;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  children,
  direction = 'left',
  speed = 20,
  gap = 32,
  className = '',
}) => {
  // Fonction handleScroll et tableau items supprimés car non utilisés

  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <div 
        className="flex animate-infinite-scroll" 
        style={{ 
          gap: `${gap}px`,
          // Direction de défilement
          ['--scroll-direction' as string]: direction === 'left' ? '-1' : '1',
          // Vitesse (plus le chiffre est bas, plus c'est rapide)
          ['--scroll-speed' as string]: `${speed}s`,
        }}
      >
        {/* Premier groupe d'éléments */}
        <div className="flex items-center justify-center gap-8 shrink-0">
          {children}
        </div>
        
        {/* Deuxième groupe d'éléments (dupliqué pour l'animation infinie) */}
        <div className="flex items-center justify-center gap-8 shrink-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
