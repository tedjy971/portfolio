import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import React, { useEffect, useRef } from "react";

// Enregistrer les plugins GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

const IntroAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameCharsRef = useRef<HTMLSpanElement[]>([]);
  const titleCharsRef = useRef<HTMLSpanElement[]>([]);
  const specialtiesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Créer une timeline principale
    const tl = gsap.timeline();

    // Animation des lettres du nom
    gsap.set(nameCharsRef.current, {
      y: -100,
      opacity: 0,
      rotateX: -90,
    });

    tl.to(nameCharsRef.current, {
      y: 0,
      opacity: 1,
      rotateX: 0,
      stagger: 0.06,
      duration: 0.8,
      ease: "back.out(1.7)",
    });

    // Animation des lettres du titre
    gsap.set(titleCharsRef.current, {
      opacity: 0,
      x: (i) => (i % 2 === 0 ? -50 : 50),
    });

    tl.to(
      titleCharsRef.current,
      {
        opacity: 1,
        x: 0,
        stagger: 0.03,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // Animation de la barre de séparation
    tl.fromTo(
      ".separator-line",
      { width: "0%" },
      { width: "100%", duration: 1, ease: "power2.inOut" },
      "-=0.2"
    );

    // Animation du texte de spécialités avec effet de machine à écrire
    const specialties = ["Symfony", "Next.js", "NestJS", "DevOps"];

    specialties.forEach((specialty, index) => {
      // L'indice détermine à quelle position il apparaît
      tl.to(".typing-text", {
        duration: 0.6,
        text: specialty,
        ease: "none",
      });

      // Pause avant d'effacer, sauf pour le dernier
      if (index < specialties.length - 1) {
        tl.to({}, { duration: 0.5 }); // pause
        tl.to(".typing-text", {
          duration: 0.4,
          text: "",
          ease: "none",
        });
      }
    });

    // Animation des icônes de passion
    tl.fromTo(
      ".passion-icon",
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.15,
        duration: 0.7,
        ease: "elastic.out(1, 0.5)",
      },
      "-=0.5"
    );

    // Animation du bouton CTA
    tl.fromTo(
      ctaRef.current,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Animation du conteneur principal
    tl.fromTo(
      containerRef.current,
      {
        backgroundPosition: "0% 0%",
      },
      {
        backgroundPosition: "100% 100%",
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      },
      "-=0.5"
    );

    // Animation du curseur clignotant
    gsap.to(".cursor", {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power2.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  // Diviser le nom en lettres individuelles
  const nameLetters = "TEDDY GAMIETTE".split("").map((letter, index) =>
    letter === " " ? (
      <span key={index} className="mx-3"></span>
    ) : (
      <span
        key={index}
        ref={(el) => {
          if (el) nameCharsRef.current[index] = el;
        }}
        className="inline-block"
      >
        {letter}
      </span>
    )
  );

  // Diviser le titre en lettres individuelles
  const titleLetters = "TECH LEAD & DÉVELOPPEUR BACK-END"
    .split("")
    .map((letter, index) =>
      letter === " " ? (
        <span key={index} className="mx-1"></span>
      ) : (
        <span
          key={index}
          ref={(el) => {
            if (el) titleCharsRef.current[index] = el;
          }}
          className="inline-block"
        >
          {letter}
        </span>
      )
    );

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 bg-size-200 flex flex-col justify-center items-center text-white p-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-2">{nameLetters}</h1>
        </div>

        <div className="mb-8">
          <h2 className="text-xl md:text-3xl font-medium bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            {titleLetters}
          </h2>
          <div className="separator-line h-0.5 bg-gradient-to-r from-blue-500 to-green-400 mt-2 mx-auto w-0"></div>
        </div>

        <div
          className="mb-12 text-xl text-gray-300 flex justify-center items-center"
          ref={specialtiesRef}
        >
          <span className="mr-2">Spécialisé en</span>
          <span className="typing-text text-blue-400 font-semibold"></span>
          <span className="cursor inline-block h-6 w-0.5 bg-blue-400 ml-0.5"></span>
        </div>

        <div className="flex justify-center gap-10 mb-10">
          <div className="passion-icon flex flex-col items-center">
            <div className="w-16 h-16 rounded-xl bg-blue-700/30 flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-blue-400"
              >
                <path
                  fillRule="evenodd"
                  d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-sm text-blue-300">Développement</span>
          </div>

          <div className="passion-icon flex flex-col items-center">
            <div className="w-16 h-16 rounded-xl bg-green-700/30 flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-green-400"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-sm text-green-300">Musculation</span>
          </div>

          <div className="passion-icon flex flex-col items-center">
            <div className="w-16 h-16 rounded-xl bg-orange-700/30 flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-orange-400"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
            </div>
            <span className="text-sm text-orange-300">Domotique</span>
          </div>
        </div>

        <button
          ref={ctaRef}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Voir mon portfolio
        </button>
      </div>
    </div>
  );
};

export default IntroAnimation;
