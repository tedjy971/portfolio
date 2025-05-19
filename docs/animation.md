# Guide des Animations du Portfolio

Ce document explique les différentes animations utilisées dans le portfolio et comment les adapter selon vos besoins.

## Table des matières

1. [Framer Motion - Principes de base](#framer-motion---principes-de-base)
2. [Animations au défilement avec IntersectionObserver](#animations-au-défilement-avec-intersectionobserver)
3. [Animations avec GSAP](#animations-avec-gsap)
4. [Animations CSS](#animations-css)
5. [Astuces et optimisations](#astuces-et-optimisations)

## Framer Motion - Principes de base

[Framer Motion](https://www.framer.com/motion/) est une bibliothèque React qui simplifie la création d'animations complexes. Voici les concepts de base utilisés dans le portfolio :

### 1. Le composant `motion`

Framer Motion fonctionne en remplaçant les balises HTML standard par des versions `motion.` équivalentes :

```jsx
// Au lieu de <div>
<motion.div>
  Contenu animé
</motion.div>

// Au lieu de <h1>
<motion.h1>
  Titre animé
</motion.h1>
```

### 2. Les états d'animation

Les animations de Framer Motion sont basées sur des états. Les principaux états utilisés sont :

#### `initial`

L'état initial de l'élément avant l'animation :

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
>
```

Cet élément commence invisible (`opacity: 0`) et 20px plus bas que sa position finale (`y: 20`).

#### `animate`

L'état vers lequel l'élément va s'animer :

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
>
```

L'élément va s'animer pour devenir visible et remonter à sa position normale.

### 3. Animations conditionnelles

Dans le portfolio, de nombreuses animations sont déclenchées conditionnellement, souvent basées sur la visibilité :

```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={inView ? { opacity: 1 } : { opacity: 0 }}
>
```

Cet élément ne devient visible que lorsque `inView` est `true`, typiquement quand l'élément entre dans le viewport.

### 4. Contrôle du timing avec `transition`

La propriété `transition` contrôle comment l'animation se déroule :

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
>
```

- `duration` : durée de l'animation en secondes
- `delay` : délai avant le début de l'animation
- `ease` : type d'accélération/décélération

### 5. Animations interactives

#### `whileHover`

Applique une animation lorsque l'utilisateur survole l'élément :

```jsx
<motion.button whileHover={{ scale: 1.05 }}>
  Bouton qui grandit au survol
</motion.button>
```

#### `whileTap`

Applique une animation lorsque l'utilisateur clique sur l'élément :

```jsx
<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  Bouton qui rétrécit au clic
</motion.button>
```

### 6. Animations de groupe avec `variants`

Les `variants` permettent de coordonner des animations entre plusieurs éléments :

```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // enfants animés avec 0.1s de décalage entre eux
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// Utilisation
<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>;
```

## Animations au défilement avec IntersectionObserver

### Hook useInView

Le hook `useInView` de `react-intersection-observer` détecte quand un élément devient visible dans le viewport :

```jsx
import { useInView } from "react-intersection-observer";

const MyComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // l'animation ne se déclenche qu'une fois
    threshold: 0.2, // élément considéré visible quand 20% est dans le viewport
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      Contenu qui s'anime quand il devient visible
    </motion.div>
  );
};
```

### Avec l'attribut `whileInView` (alternative)

Framer Motion offre aussi une propriété directe pour les animations au défilement :

```jsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.2 }}
>
  Contenu qui s'anime quand il devient visible
</motion.div>
```

## Animations avec GSAP

[GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) est utilisé pour certaines animations plus complexes dans le portfolio :

```jsx
useEffect(() => {
  if (ballRef.current) {
    // Animation du ballon qui rebondit avec GSAP
    gsap.to(ballRef.current, {
      y: -20, // déplace l'élément vers le haut de 20px
      duration: 0.8, // durée de l'animation
      repeat: -1, // répète indéfiniment
      yoyo: true, // retourne à l'état initial
      ease: "power1.inOut", // type d'easing
    });
  }
}, []);
```

## Animations CSS

Certaines animations du portfolio sont faites avec CSS pur, notamment pour des performances optimales :

### Keyframes CSS

```css
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-220px * 12));
  }
}

.animate-scroll {
  animation: scroll 40s linear infinite;
}
```

### Animations au survol avec Tailwind

```jsx
<div className="hover:shadow-2xl transition-shadow duration-300">
  Élément qui change d'ombre au survol
</div>
```

## Astuces et optimisations

### Optimisation des performances

1. **Utiliser `will-change`** pour les animations complexes :

   ```css
   .will-change-transform {
     will-change: transform;
     backface-visibility: hidden;
     perspective: 1000px;
     transform: translateZ(0);
   }
   ```

2. **Préférer les animations CSS** pour les animations simples et répétitives.

3. **Utiliser `triggerOnce: true`** pour les animations qui n'ont besoin de se déclencher qu'une fois.

4. **Animations hors écran** :
   ```jsx
   // Pausez les animations qui ne sont pas visibles
   <div className={`sport-animation ${inView ? "" : "paused"}`}></div>
   ```

### Valeurs d'animation courantes

- **Opacité** : `opacity: 0` à `opacity: 1`
- **Mouvement vertical** : `y: 20` à `y: 0`
- **Mise à l'échelle** : `scale: 0.9` à `scale: 1`
- **Rotation** : `rotate: 0` à `rotate: 360`

### Techniques spécifiques utilisées dans le portfolio

#### Transition de la barre de compétence

```jsx
<div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
  <motion.div
    className={`h-2.5 rounded-full ${skill.color}`}
    initial={{ width: 0 }}
    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
    transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
  />
</div>
```

#### Slider automatique

```jsx
<div className="tech-slider">
  <div className="animate-scroll">
    {skills.map((skill) => (
      <div key={skill.name}>
        <img src={skill.logo} alt={skill.name} />
      </div>
    ))}
  </div>
</div>
```

#### Séquence d'animations

```jsx
// Timeline d'animations pour les éléments du hero
const tl = gsap.timeline();

if (heroRef.current) {
  // Animation subtile de l'arrière-plan
  tl.to(heroRef.current, {
    backgroundPosition: "100% 100%",
    duration: 20,
    repeat: -1,
    yoyo: true,
    ease: "none",
  });
}
```

## Ressources utiles

- [Documentation Framer Motion](https://www.framer.com/motion/introduction/)
- [Documentation GSAP](https://greensock.com/docs/)
- [Guide Intersection Observer](https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API)
- [Optimisation des animations web](https://developers.google.com/web/fundamentals/performance/rendering)

---

N'hésitez pas à adapter ces animations selon vos besoins. Les valeurs (durée, délai, échelle, etc.) peuvent être modifiées pour créer des effets plus subtils ou plus prononcés selon votre préférence.
