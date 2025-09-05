// Template de CV optimisé pour ATS et recruteurs
// Ce fichier contient la structure recommandée pour maximiser vos chances

import React from 'react';

const OptimizedCVTemplate = () => {
  return (
    <div className="cv-container">
      {/* HEADER - Information de contact */}
      <header className="cv-header">
        <h1>TEDDY GAMIETTE</h1>
        <h2>Backend Engineer | PHP/Symfony Expert | Microservices & Cloud Architecture</h2>
        
        {/* Contact en ligne pour ATS */}
        <div className="contact-line">
          📧 gamiette.teddy@gmail.com | 📱 +33 7 81 95 04 36 | 📍 Palaiseau, Île-de-France | 
          💼 linkedin.com/in/teddy-gamiette | 🔗 github.com/tedjy971 | 🌐 teddygamiette.online
        </div>
        
        {/* Disponibilité claire */}
        <div className="availability">
          ✅ Disponible immédiatement | CDI recherché | Remote partiel accepté
        </div>
      </header>

      {/* PROFESSIONAL SUMMARY - Hook pour le recruteur */}
      <section className="professional-summary">
        <h3>PROFIL PROFESSIONNEL</h3>
        <p>
          Backend Engineer avec 4 ans d'expertise en architecture API REST et microservices. 
          Spécialisé dans le développement de solutions scalables avec Symfony 6, NestJS et AWS. 
          Track record prouvé: migration PHP 5.6→8.1 (50K+ users, zero downtime), 
          optimisation Elasticsearch (-40% latence), intégration wallets mobiles (10K+ passes). 
          Maîtrise complète du cycle DevOps avec Docker, Kubernetes et CI/CD.
        </p>
      </section>

      {/* KEY ACHIEVEMENTS - Section différenciante */}
      <section className="key-achievements">
        <h3>🏆 RÉALISATIONS CLÉS</h3>
        <ul>
          <li>• Migration Zero-Downtime PHP 5.6→8.1 | Impact: 50K+ users, +40% perf, -30% coûts</li>
          <li>• Architecture Microservices | 8+ services, 500K+ req/mois, 99.5% uptime</li>
          <li>• Optimisation Elasticsearch | -40% latence (3s→1.8s), indexation 500K+ documents</li>
          <li>• Plateforme Digital Wallet | 10K+ passes générés, +35% taux de conversion</li>
          <li>• Collaboration Technique | Participation active aux code reviews et veille technologique</li>
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
            <h4>Databases</h4>
            <p>PostgreSQL • MySQL • MongoDB • Redis • Elasticsearch • Query Optimization</p>
          </div>
          
          <div className="skill-category">
            <h4>DevOps & Cloud</h4>
            <p>AWS (EC2, S3, Lambda) • Docker • Kubernetes • GitLab CI/CD • Terraform • Linux</p>
          </div>
          
          <div className="skill-category">
            <h4>Architecture & Patterns</h4>
            <p>DDD • SOLID • Design Patterns • CQRS • Event-Driven • Hexagonal Architecture</p>
          </div>
          
          <div className="skill-category">
            <h4>Testing & Quality</h4>
            <p>PHPUnit • Jest • TDD • Code Review • SonarQube • Performance Monitoring</p>
          </div>
          
          <div className="skill-category">
            <h4>Méthodologies</h4>
            <p>Agile/Scrum • Git Flow • API Documentation • Technical Writing • Mentoring</p>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE - Format ATS avec bullets */}
      <section className="professional-experience">
        <h3>EXPÉRIENCE PROFESSIONNELLE</h3>
        
        <div className="experience-item">
          <div className="exp-header">
            <h4>Backend Developer | Kernix</h4>
            <span>2021 - 2025 (4 ans)</span>
          </div>
          <ul>
            <li>• Architecte et développe 8+ microservices RESTful (Symfony 6, NestJS) gérant 500K+ requêtes/mois</li>
            <li>• Contribue activement à la migration PHP 5.6→8.1 avec Rector: +40% performance, -30% coûts infrastructure</li>
            <li>• Implémente architecture event-driven (RabbitMQ/Redis): -30% latence opérations critiques</li>
            <li>• Optimise Elasticsearch pour 500K+ documents: temps de recherche 3s→1.8s</li>
            <li>• Déploie infrastructure AWS/Kubernetes (5-8 conteneurs) avec 99.5% uptime</li>
            <li>• Développe intégration Apple/Google Wallet: 10K+ passes générés en 3 mois</li>
            <li>• Participe activement aux code reviews et à la veille technologique de l'équipe</li>
          </ul>
          <p className="tech-stack">
            Stack: PHP 8, Symfony 6, NestJS, PostgreSQL, Redis, Elasticsearch, Docker, Kubernetes, AWS, GitLab CI/CD
          </p>
        </div>

        {/* Autres expériences en format condensé */}
        <div className="other-experiences">
          <div className="exp-short">
            <h4>IT Infrastructure Specialist | SPIE ICS (2020-2021)</h4>
            <p>• Administration 200+ machines, 15 serveurs Linux/Windows (99.5% uptime)</p>
            <p>• Automatisation avec Ansible (-70% temps setup)</p>
          </div>
          
          <div className="exp-short">
            <h4>Data Engineer | LUCERNYS (2018-2019)</h4>
            <p>• Conception BDD MySQL/PostgreSQL (5M+ enregistrements)</p>
            <p>• Pipelines ETL Python (100K+ lignes/jour, 99.9% fiabilité)</p>
          </div>
        </div>
      </section>

      {/* EDUCATION - Format académique */}
      <section className="education">
        <h3>FORMATION</h3>
        
        <div className="education-item">
          <h4>Master Tech Lead | HETIC</h4>
          <span>2023 - 2025</span>
          <p>Architecture logicielle, DDD, Microservices, Cloud Architecture, Leadership technique</p>
        </div>
        
        <div className="education-item">
          <h4>Bachelor Web | HETIC</h4>
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