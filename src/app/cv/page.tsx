'use client';

import { personalInfo } from '@/data/personalData';
import styles from '@/styles/cv.module.css';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRef, useState } from 'react';

const Html2PdfComponent = dynamic(() => import('./Html2PdfComponent'), {
  ssr: false,
});

const kernixContributions = [
  {
    label: 'Développement full-stack',
    description:
      'Conception et évolution d’applications métier avec Vue 3, React ou Angular côté interface, et NestJS ou Symfony côté API. Travail sur les parcours utilisateurs, les droits d’accès, le typage des échanges, le cache et les notifications temps réel.',
  },
  {
    label: 'Facturation et intégrations',
    description:
      'Évolution d’une plateforme de facturation électronique : abonnements et facturation à l’usage avec Stripe, paiements par carte, SEPA ou virement, synchronisation de webhooks et échanges de factures avec des services partenaires.',
  },
  {
    label: 'Fiabilité et sécurité',
    description:
      'Renforcement de services NestJS exposés en production : reprise sur erreurs réseau, gestion de l’authentification concurrente, propagation d’erreurs typées, protection des secrets dans les logs, contrôle CORS, rate limiting et correction de vulnérabilités applicatives.',
  },
  {
    label: 'Données et recherche',
    description:
      'Mise en œuvre de recherches Elasticsearch multilingues avec scoring, boost, agrégations et indexation. Optimisation de parcours de recherche côté front avec cache, pagination et restauration d’état.',
  },
  {
    label: 'Modernisation et delivery',
    description:
      'Migration et maintien de socles PHP/Symfony historiques, évolution des schémas de données et industrialisation des livraisons avec Docker, GitLab CI/CD, Ansible, Kubernetes et AWS. Ajout de tests unitaires et de scénarios métier Playwright.',
  },
];

const additionalExperiences = [
  {
    role: 'Technicien informatique',
    company: 'SPIE ICS',
    period: '2020 — 2021',
    description:
      'Administration d’un parc informatique, support utilisateurs et maintien en condition opérationnelle de systèmes sensibles.',
  },
  {
    role: 'Développeur automatisation',
    company: 'Amazon',
    period: '2019',
    description:
      'Création de scripts VBA et d’outils d’aide à la décision pour accélérer des opérations logistiques.',
  },
  {
    role: 'Data analyst télécom',
    company: 'LUCERNYS',
    period: '2018 — 2019',
    description:
      'Analyse de consommations, détection d’anomalies et recommandations d’optimisation de contrats mobiles.',
  },
  {
    role: 'Développeur web stagiaire',
    company: 'Conseil départemental de Seine-Saint-Denis',
    period: '2018',
    description:
      'Développement d’une application métier PHP/MySQL avec authentification et gestion des droits.',
  },
];

const skillGroups = [
  {
    label: 'Full-stack',
    value: 'TypeScript, Vue 3, React, Angular, NestJS, Node.js, Pinia, API REST, Web Components',
  },
  {
    label: 'Back-end',
    value: 'NestJS, PHP 8, Symfony 6, API Platform, microservices, OAuth 2.0, JWT',
  },
  {
    label: 'Données & intégrations',
    value:
      'PostgreSQL, MySQL, MongoDB, Elasticsearch, Redis, RabbitMQ, Stripe, webhooks, API tierces',
  },
  {
    label: 'Qualité & sécurité',
    value: 'Playwright, Vitest, Jest, PHPUnit, code review, OWASP, tests automatisés',
  },
  {
    label: 'DevOps & Cloud',
    value: 'Docker, Kubernetes, AWS, GitLab CI/CD, Ansible, Terraform, Linux, GitHub Actions',
  },
  {
    label: 'Architecture',
    value: 'Event-driven, DDD, SOLID, design patterns, monorepo, ESM, observabilité',
  },
];

const education = [
  {
    degree: 'Master Tech Lead — Management & architecture logicielle',
    school: 'HETIC',
    period: '2023 — 2025',
    details:
      'Architecture logicielle, DDD, microservices, cloud, DevSecOps et leadership technique',
  },
  {
    degree: 'Bachelor Développeur web full-stack',
    school: 'HETIC',
    period: '2021 — 2023',
    details: 'Développement full-stack, API, bases de données, qualité et méthodes agiles',
  },
  {
    degree: 'Licence SGBD & Big Data',
    school: 'Université d’Évry-Val-d’Essonne',
    period: '2019',
    details: 'Bases de données relationnelles et NoSQL, optimisation et analyse de données',
  },
  {
    degree: 'BTS Systèmes numériques — Informatique & réseaux',
    school: 'Lycée Parc de Vilgénis',
    period: '2018',
    details: 'Développement logiciel, systèmes, réseaux et sécurité',
  },
];

export default function CV() {
  const [isGeneratingVisualPdf, setIsGeneratingVisualPdf] = useState(false);
  const resumeRef = useRef<HTMLElement>(null);

  return (
    <div className={styles.pageShell}>
      {isGeneratingVisualPdf && (
        <Html2PdfComponent
          content={resumeRef.current}
          filename={`CV_${personalInfo.name.replace(/\s+/g, '_')}_visuel.pdf`}
          onComplete={() => setIsGeneratingVisualPdf(false)}
        />
      )}

      <nav className={styles.toolbar} aria-label="Actions du CV">
        <p>Pour candidater, privilégiez le PDF ATS avec texte sélectionnable.</p>
        <div className={styles.toolbarActions}>
          <Link className={styles.secondaryAction} href="/">
            Portfolio
          </Link>
          <button
            className={styles.secondaryAction}
            type="button"
            onClick={() => setIsGeneratingVisualPdf(true)}
          >
            PDF visuel
          </button>
          <button className={styles.primaryAction} type="button" onClick={() => window.print()}>
            PDF ATS / impression
          </button>
        </div>
      </nav>

      <article ref={resumeRef} className={styles.resume} aria-labelledby="cv-name">
        <header className={styles.header}>
          <div className={styles.identity}>
            <p className={styles.eyebrow}>Curriculum vitæ</p>
            <h1 id="cv-name" className={styles.name}>
              {personalInfo.name}
            </h1>
            <p className={styles.title}>Développeur Full-stack TypeScript</p>
            <p className={styles.positioning}>Vue.js · NestJS · Architecture · DevOps</p>
          </div>

          <address className={styles.contactBlock}>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}>{personalInfo.phone}</a>
            <span>{personalInfo.location}</span>
            <a href={personalInfo.linkedin}>linkedin.com/in/teddy-gamiette-9a1a9613a</a>
            <a href={personalInfo.github}>github.com/tedjy971</a>
            <a href={personalInfo.website}>teddygamiette.online</a>
          </address>
        </header>

        <main className={styles.content}>
          <section aria-labelledby="profile-title">
            <h2 id="profile-title">Profil</h2>
            <p className={styles.lead}>
              Développeur full-stack TypeScript chez Kernix depuis 2021, j’interviens sur plusieurs
              applications métier, de l’interface au déploiement. Mon activité actuelle se concentre
              principalement sur Vue.js et NestJS, avec une expérience solide de la modernisation de
              plateformes PHP/Symfony. J’apprécie les environnements où il faut comprendre
              rapidement un métier, fiabiliser l’existant et livrer des solutions maintenables.
              Diplômé d’un Master Tech Lead, je combine développement produit, architecture, qualité
              et culture DevOps.
            </p>
            <p className={styles.availability}>
              En CDI chez Kernix · À l’écoute d’un poste full-stack à dominante TypeScript
            </p>
          </section>

          <section aria-labelledby="experience-title">
            <h2 id="experience-title">Expérience professionnelle</h2>

            <article className={styles.primaryExperience}>
              <div className={styles.experienceHeader}>
                <div>
                  <h3>Développeur Full-stack · Kernix</h3>
                  <p className={styles.company}>CDI après quatre années d’alternance</p>
                </div>
                <p className={styles.period}>2021 — aujourd’hui</p>
              </div>

              <p className={styles.experienceIntro}>
                Intervention sur des produits métier aux contraintes variées : évolution
                fonctionnelle, intégration de services tiers, reprise de legacy, qualité et
                exploitation.
              </p>

              <div className={styles.contributionList}>
                {kernixContributions.map(contribution => (
                  <p key={contribution.label}>
                    <strong>{contribution.label}.</strong> {contribution.description}
                  </p>
                ))}
              </div>

              <p className={styles.stackLine}>
                <strong>Environnement principal :</strong> TypeScript, Vue 3, NestJS, Node.js,
                PHP/Symfony, PostgreSQL, Redis, RabbitMQ, Elasticsearch, Docker, GitLab CI/CD,
                Kubernetes et AWS.
              </p>
            </article>

            <div className={styles.previousExperiences}>
              {additionalExperiences.map(experience => (
                <article className={styles.compactExperience} key={experience.company}>
                  <div className={styles.compactHeader}>
                    <h3>
                      {experience.role} · {experience.company}
                    </h3>
                    <p className={styles.period}>{experience.period}</p>
                  </div>
                  <p>{experience.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="skills-title">
            <h2 id="skills-title">Compétences</h2>
            <dl className={styles.skillGrid}>
              {skillGroups.map(group => (
                <div className={styles.skillGroup} key={group.label}>
                  <dt>{group.label}</dt>
                  <dd>{group.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="education-title">
            <h2 id="education-title">Formation</h2>
            <div className={styles.educationList}>
              {education.map(item => (
                <article className={styles.education} key={item.degree}>
                  <div className={styles.educationHeader}>
                    <h3>{item.degree}</h3>
                    <p className={styles.period}>{item.period}</p>
                  </div>
                  <p className={styles.school}>{item.school}</p>
                  <p>{item.details}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="additional-title">
            <h2 id="additional-title">Informations complémentaires</h2>
            <div className={styles.additionalInfo}>
              <p>
                <strong>Langues :</strong> français natif · anglais technique professionnel
              </p>
              <p>
                <strong>Pratiques :</strong> autonomie · apprentissage rapide · résolution de
                problèmes · communication technique · travail en équipe
              </p>
            </div>
          </section>
        </main>
      </article>
    </div>
  );
}
