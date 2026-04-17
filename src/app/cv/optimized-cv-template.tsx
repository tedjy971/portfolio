// Template de CV optimisé pour ATS et recruteurs
// Ce fichier contient la structure recommandée pour maximiser vos chances

import React from 'react';

const OptimizedCVTemplate = () => {
  return (
    <div className="cv-container">
      {/* HEADER - Information de contact */}
      <header className="cv-header">
        <h1>TEDDY GAMIETTE</h1>
        <h2>Développeur Back-end | PHP/Symfony | Vue.js | API REST & Microservices</h2>

        {/* Contact en ligne pour ATS */}
        <div className="contact-line">
          📧 gamiette.teddy@gmail.com | 📱 +33 7 81 95 04 36 | 📍 Palaiseau, Île-de-France |
          💼 linkedin.com/in/teddy-gamiette | 🔗 github.com/tedjy971 | 🌐 teddygamiette.online
        </div>

        {/* Statut */}
        <div className="availability">
          🟢 En poste — CDI chez Kernix | Ouvert aux opportunités
        </div>
      </header>

      {/* PROFESSIONAL SUMMARY - Hook pour le recruteur */}
      <section className="professional-summary">
        <h3>PROFIL PROFESSIONNEL</h3>
        <p>
          Développeur Back-end avec 4+ ans d'expérience chez Kernix (agence digitale).
          Spécialisé en PHP 8/Symfony 6, API REST et architecture microservices.
          Compétences transverses en Vue 3 (design system, dashboards) et DevOps (Docker, AWS, CI/CD).
          Diplômé Master Tech Lead — HETIC (2025).
        </p>
      </section>

      {/* KEY ACHIEVEMENTS - Section différenciante */}
      <section className="key-achievements">
        <h3>🏆 RÉALISATIONS CLÉS</h3>
        <ul>
          <li>• Cockpit métier Vue 3 + Design System réutilisable | Migration Vuetify → Shoelace</li>
          <li>• Migration PHP 5.6 → 8.1 avec Rector | Amélioration performances et stabilité</li>
          <li>• Optimisation Elasticsearch | Réduction temps de recherche de 3s à 1.8s</li>
          <li>• Intégration Apple/Google Wallet | API PKPass et notifications push</li>
          <li>• Architecture event-driven RabbitMQ/Redis | Déploiement Docker/AWS/Kubernetes</li>
        </ul>
      </section>

      {/* TECHNICAL SKILLS - Organisé par catégorie */}
      <section className="technical-skills">
        <h3>COMPÉTENCES TECHNIQUES</h3>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Backend</h4>
            <p>PHP 8.x • Symfony 6 • NestJS • Node.js • API REST • GraphQL • Microservices</p>
          </div>

          <div className="skill-category">
            <h4>Frontend</h4>
            <p>Vue 3 • Vuetify • Shoelace • Pinia • TypeScript • Storybook • Web Components</p>
          </div>

          <div className="skill-category">
            <h4>Bases de données</h4>
            <p>PostgreSQL • MySQL • MongoDB • Redis • Elasticsearch</p>
          </div>

          <div className="skill-category">
            <h4>DevOps & Cloud</h4>
            <p>Docker • Kubernetes • AWS • GitLab CI/CD • Terraform • Linux</p>
          </div>

          <div className="skill-category">
            <h4>Architecture & Qualité</h4>
            <p>DDD • SOLID • Design Patterns • Event-Driven • PHPUnit • Jest • Vitest</p>
          </div>

          <div className="skill-category">
            <h4>Méthodologies</h4>
            <p>Agile/Scrum • Git Flow • Code Review • Documentation Storybook</p>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE - Format ATS avec bullets */}
      <section className="professional-experience">
        <h3>EXPÉRIENCE PROFESSIONNELLE</h3>
        
        <div className="experience-item">
          <div className="exp-header">
            <h4>Développeur Back-end (CDI) | Kernix</h4>
            <span>2021 - Présent (4+ ans, dont CDI depuis Sept. 2025)</span>
          </div>
          <ul>
            <li>• Conçoit un cockpit métier Vue 3 avec design system réutilisable et widgets autonomes</li>
            <li>• Développe des API REST et microservices avec Symfony 6 et NestJS</li>
            <li>• Migration PHP 5.6 → 8.1 avec Rector, amélioration performances et stabilité</li>
            <li>• Architecture event-driven avec RabbitMQ/Redis pour découplage des services</li>
            <li>• Optimisation Elasticsearch, réduction temps de recherche de 3s à 1.8s</li>
            <li>• Intégration Apple Wallet et Google Pay, développement API PKPass</li>
            <li>• Déploiement containerisé sur AWS avec Docker et Kubernetes</li>
            <li>• Code reviews, documentation Storybook et veille technologique</li>
          </ul>
          <p className="tech-stack">
            Stack: PHP 8, Symfony 6, Vue 3, NestJS, PostgreSQL, Redis, Elasticsearch, Docker, AWS, GitLab CI/CD, Storybook
          </p>
        </div>

        {/* Autres expériences en format condensé */}
        <div className="other-experiences">
          <div className="exp-short">
            <h4>Technicien Informatique | SPIE ICS (2020-2021)</h4>
            <p>• Administration du parc informatique, support technique et maintenance systèmes critiques</p>
          </div>

          <div className="exp-short">
            <h4>Data Analyst Télécom | LUCERNYS (2018-2019)</h4>
            <p>• Analyse de consommations et optimisation de contrats mobiles pour grandes entreprises</p>
          </div>
        </div>
      </section>

      {/* EDUCATION - Format académique */}
      <section className="education">
        <h3>FORMATION</h3>
        
        <div className="education-item">
          <h4>Master Tech Lead | HETIC</h4>
          <span>2023 - 2025 (Obtenu en Septembre 2025)</span>
          <p>Architecture logicielle, DDD, Microservices, Cloud Architecture, Leadership technique</p>
        </div>

        <div className="education-item">
          <h4>Bachelor Développeur Web Full-Stack | HETIC</h4>
          <span>2021 - 2023</span>
          <p>Développement Full-Stack, Méthodologies Agiles, DevOps</p>
        </div>
      </section>


      {/* SOFT SKILLS - Important pour senior */}
      <section className="soft-skills">
        <h3>COMPÉTENCES TRANSVERSALES</h3>
        <p>
          Leadership Technique • Mentoring • Communication Stakeholders • 
          Problem Solving • Architecture Decision Records • Code Review • 
          Documentation Technique • Veille Technologique • Open Source Contribution
        </p>
      </section>

      {/* LANGUAGES */}
      <section className="languages">
        <h3>LANGUES</h3>
        <p>Français (Natif) • Anglais (Professionnel - Documentation, Stack Overflow, GitHub)</p>
      </section>
    </div>
  );
};

export default OptimizedCVTemplate;

/* 
NOTES D'IMPLÉMENTATION:
1. Ce template maximise la compatibilité ATS
2. Les mots-clés sont répétés naturellement
3. Format bullet points pour scanner facilement
4. Métriques quantifiées partout
5. Pas d'images ou graphiques complexes
6. Structure claire et hiérarchisée
7. Exportable en PDF simple
*/