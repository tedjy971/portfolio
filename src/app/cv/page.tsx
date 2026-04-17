'use client';

import {
  contactDetails,
  educationExperiences,
  experiences,
  interests,
  personalInfo,
  projects,
  skills,
} from '@/data/personalData';
import styles from '@/styles/cv.module.css';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';

// Données optimisées pour ATS
const optimizedPersonalInfo = {
  ...personalInfo,
  title: "Développeur Back-end | PHP/Symfony | Vue.js | API REST & Microservices",
  description: [
    "Développeur Back-end avec 4+ ans d'expérience en CDI chez Kernix (agence digitale).",
    "Expertise PHP 8/Symfony 6, NestJS, Vue 3, API REST et architecture microservices.",
    "Compétences transverses : design system Vue.js, Elasticsearch, DevOps (Docker, AWS, CI/CD).",
    "Diplômé Master Tech Lead — HETIC (2026)."
  ],
  objective: "🟢 En poste — CDI chez Kernix | Ouvert aux opportunités"
};

const keyAchievements = [
  "Cockpit métier Vue 3 + Design System réutilisable | Migration Vuetify → Shoelace (Web Components)",
  "Migration PHP 5.6 → 8.1 avec Rector | Amélioration performances et stabilité applicative",
  "Optimisation Elasticsearch | Réduction temps de recherche de 3s à 1.8s",
  "Intégration Apple/Google Wallet | API PKPass et notifications push",
  "Architecture event-driven RabbitMQ/Redis | Déploiement Docker/AWS/Kubernetes"
];

// Import dynamique de html2pdf pour éviter les erreurs côté serveur
const Html2PdfComponent = dynamic(() => import('./Html2PdfComponent'), {
  ssr: false,
  loading: () => <p>Chargement de l'exportation PDF...</p>,
});

export default function CV() {
  const [showProjects, setShowProjects] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [atsMode, setAtsMode] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);

  // Fonction pour exporter le CV en PDF avec html2pdf
  const handleExportPdf = () => {
    if (cvRef.current) {
      setIsGeneratingPdf(true);
    }
  };

  // Fonction pour imprimer le CV (méthode native)
  const handlePrint = () => {
    window.print();
  };

  // Regroupement des compétences par catégorie
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>
  );

  const otherAndData = [...(skillsByCategory['other'] || []), ...(skillsByCategory['data'] || [])];

  const skillCategories = {
    backend: { title: 'Backend', skills: skillsByCategory['backend'] || [] },
    frontend: { title: 'Frontend', skills: skillsByCategory['frontend'] || [] },
    mobile: { title: 'Mobile', skills: skillsByCategory['mobile'] || [] },
    devops: { title: 'DevOps', skills: skillsByCategory['devops'] || [] },
    other: { title: 'Méthodologies & Outils', skills: otherAndData },
  };

  // Sélection des projets les plus pertinents (limité à 4)
  const highlightedProjects = projects.slice(0, 4);

  const professionalExperiences = experiences;

  return (
    <>
      {isGeneratingPdf && (
        <Html2PdfComponent
          content={cvRef.current}
          filename={`CV_${personalInfo.name.replace(' ', '_')}.pdf`}
          onComplete={() => setIsGeneratingPdf(false)}
        />
      )}
      <div ref={cvRef} className={`${styles.container} ${styles.printColorAdjust}`}>
        {/* En-tête avec informations personnelles */}
        <header className={styles.header}>
          <h1 className={styles.name}>{personalInfo.name.toUpperCase()}</h1>
          <h2 className={styles.title}>{atsMode ? optimizedPersonalInfo.title : personalInfo.title}</h2>
          {atsMode ? (
            <div className={styles.professionalSummary}>
              {optimizedPersonalInfo.description.map((paragraph, index) => (
                <p key={index} className={styles.summaryParagraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p className={styles.description}>
              {personalInfo.description}
            </p>
          )}
          {atsMode && (
            <div className={styles.availability}>
              {optimizedPersonalInfo.objective}
            </div>
          )}

          <div className={styles.contactGrid}>
            {contactDetails.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className={styles.contactItem}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{contact.icon}</span>
                <span>{contact.detail}</span>
              </a>
            ))}
            <div className={styles.contactItem}>
              <span>📍</span>
              <span>{personalInfo.location}</span>
            </div>
            {/* <div className={styles.contactItem}>
              <span>🌐</span>
              <span>Portfolio : https://www.teddygamiette.online</span>
            </div> */}
          </div>
        </header>

        <div className={atsMode ? styles.singleColumn : styles.twoColumnGrid}>
          <main>
            {/* Section Réalisations Clés - Mode ATS uniquement */}
            {atsMode && (
              <section>
                <h2 className={styles.sectionTitle}>🏆 RÉALISATIONS CLÉS</h2>
                <ul className={styles.achievementList}>
                  {keyAchievements.map((achievement, index) => (
                    <li key={index} className={styles.achievementItem}>
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Expériences professionnelles */}
            <section>
              <h2 className={styles.sectionTitle}>
                {atsMode ? 'EXPÉRIENCE PROFESSIONNELLE' : 'Expériences professionnelles'}
              </h2>
              {professionalExperiences.map((experience, index) => {
                if (atsMode && experience.company === 'Kernix' && experience.period === 'Depuis 2025') {
                  return (
                    <div key={index} className={styles.experienceItem}>
                      <div className={styles.experienceHeader}>
                        <h3 className={styles.companyTitle}>
                          Développeur Back-end (CDI) | Kernix
                        </h3>
                        <span className={styles.period}>2021 - Présent (4+ ans, dont CDI depuis 2025)</span>
                      </div>
                      <ul className={styles.bulletList}>
                        <li>• Conçoit un cockpit métier Vue 3 avec design system réutilisable et widgets autonomes</li>
                        <li>• Développe des API REST et microservices avec Symfony 6 et NestJS</li>
                        <li>• Migration PHP 5.6 → 8.1 avec Rector, amélioration performances et stabilité</li>
                        <li>• Architecture event-driven avec RabbitMQ/Redis pour découplage des services</li>
                        <li>• Optimisation Elasticsearch, réduction temps de recherche de 3s à 1.8s</li>
                        <li>• Intégration Apple Wallet et Google Pay, développement API PKPass</li>
                        <li>• Déploiement containerisé sur AWS avec Docker et Kubernetes</li>
                        <li>• Code reviews, documentation Storybook et veille technologique</li>
                      </ul>
                      <p className={styles.techStack}>
                        <strong>Stack:</strong> PHP 8, Symfony 6, Vue 3, NestJS, PostgreSQL, Redis, Elasticsearch, Docker, AWS, GitLab CI/CD, Storybook
                      </p>
                    </div>
                  );
                }
                if (atsMode && experience.company === 'Kernix' && experience.period !== 'Depuis 2025') {
                  return null;
                }
                return (
                  <div key={index} className={styles.experienceItem}>
                    <div className={styles.experienceHeader}>
                      <h3 className={styles.companyTitle}>
                        {experience.title} | {experience.company}
                      </h3>
                      <span className={styles.period}>{experience.period}</span>
                    </div>
                    <div className={styles.description}>
                      {experience.description.split('\n').map((line, lineIndex) => (
                        <p key={lineIndex} className={styles.descriptionLine}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </section>

            {/* Projets significatifs - Optionnel */}
            {showProjects && (
              <section>
                <h2 className={styles.sectionTitle}>Projets significatifs</h2>
                <div className={styles.projectGrid}>
                  {highlightedProjects.map(project => (
                    <div key={project.id} className={styles.projectItem}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectDescription}>{project.description}</p>
                      <div className={styles.tagList}>
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Formation */}
            <section>
              <h2 className={styles.sectionTitle}>
                {atsMode ? 'FORMATION' : 'Formation'}
              </h2>
              {educationExperiences.map((education, index) => {
                const period = education.period === 'En cours' ? '2023 - 2026' : education.period;
                return (
                  <div key={index} className={styles.educationItem}>
                    <div className={styles.experienceHeader}>
                      <h3 className={styles.companyTitle}>{education.title}</h3>
                      <span className={styles.schoolName}>{education.school}</span>
                      <span className={styles.period}>{period}</span>
                    </div>
                    {atsMode && education.title.includes('Master') ? (
                      <p className={styles.description}>
                        Architecture logicielle, DDD, Microservices, Cloud Architecture, Leadership technique
                      </p>
                    ) : (
                      <p className={styles.description}>{education.description}</p>
                    )}
                  </div>
                );
              })}
              
            </section>
          </main>

          <aside>
            {/* Compétences techniques */}
            <section>
              <h2 className={styles.sectionTitle}>
                {atsMode ? 'COMPÉTENCES TECHNIQUES' : 'Compétences Techniques'}
              </h2>
              {atsMode ? (
                <div className={styles.skillsAts}>
                  <div className={styles.skillCategoryAts}>
                    <h4>Backend</h4>
                    <p>PHP 8.x • Symfony 6 • NestJS • Node.js • API REST • GraphQL • Microservices</p>
                  </div>
                  <div className={styles.skillCategoryAts}>
                    <h4>Frontend</h4>
                    <p>Vue 3 • Vuetify • Shoelace • Pinia • TypeScript • Storybook • Web Components</p>
                  </div>
                  <div className={styles.skillCategoryAts}>
                    <h4>Bases de données</h4>
                    <p>PostgreSQL • MySQL • MongoDB • Redis • Elasticsearch</p>
                  </div>
                  <div className={styles.skillCategoryAts}>
                    <h4>DevOps & Cloud</h4>
                    <p>Docker • Kubernetes • AWS • GitLab CI/CD • Terraform • Linux</p>
                  </div>
                  <div className={styles.skillCategoryAts}>
                    <h4>Architecture & Qualité</h4>
                    <p>DDD • SOLID • Design Patterns • Event-Driven • PHPUnit • Jest • Vitest</p>
                  </div>
                  <div className={styles.skillCategoryAts}>
                    <h4>Méthodologies</h4>
                    <p>Agile/Scrum • Git Flow • Code Review • Documentation Storybook</p>
                  </div>
                </div>
              ) : (
                <div className={styles.skillsGrid}>
                  {Object.entries(skillCategories).map(
                    ([key, category]) =>
                      category.skills.length > 0 && (
                        <div key={key} className={styles.skillCategory}>
                          <h3 className={styles.skillCategoryTitle}>{category.title}</h3>
                          <ul className={styles.skillList}>
                            {category.skills.map((skill, skillIndex) => (
                              <li key={skillIndex} className={styles.skillItem}>
                                <span className={styles.skillName}>
                                  {skill.name} (
                                  {skill.level >= 80
                                    ? 'Avancé'
                                    : skill.level >= 50
                                      ? 'Confirmé'
                                      : 'Intermédiaire'}
                                  )
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                  )}
                </div>
              )}
            </section>

            {/* Compétences Transversales - Mode ATS */}
            {atsMode && (
              <section>
                <h2 className={styles.sectionTitle}>COMPÉTENCES TRANSVERSALES</h2>
                <p className={styles.softSkills}>
                  Leadership Technique • Mentoring • Communication Stakeholders • 
                  Problem Solving • Architecture Decision Records • Code Review • 
                  Documentation Technique • Veille Technologique • Open Source Contribution
                </p>
              </section>
            )}
            
            {/* Langues - Mode ATS */}
            {atsMode && (
              <section>
                <h2 className={styles.sectionTitle}>LANGUES</h2>
                <p className={styles.languages}>
                  Français (Natif) • Anglais (Professionnel - Documentation, Stack Overflow, GitHub)
                </p>
              </section>
            )}

            {/* Centres d'intérêt - Mode Standard uniquement */}
            {!atsMode && (
              <section>
                <h2 className={styles.sectionTitle}>Centres d'intérêt</h2>
                <div className={styles.interestList}>
                  {interests.map((interest, index) => (
                    <div key={index} className={styles.interestItem}>
                      <span>{interest.icon}</span>
                      <span>{interest.title}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </aside>
        </div>

        {/* Boutons de contrôle (visibles uniquement à l'écran) */}
        <div className={styles.printButton}>
          <button onClick={handleExportPdf} className={styles.actionButton}>
            Télécharger en PDF
          </button>
          <button
            onClick={handlePrint}
            className={styles.actionButton}
            style={{ marginRight: '10px' }}
          >
            Aperçu impression
          </button>
          <button
            onClick={() => setShowProjects(!showProjects)}
            className={styles.actionButton}
            style={{ marginRight: '10px' }}
          >
            {showProjects ? 'Masquer les projets' : 'Afficher les projets'}
          </button>
          <button
            onClick={() => setAtsMode(!atsMode)}
            className={styles.actionButton}
            style={{ marginRight: '10px', backgroundColor: atsMode ? '#10b981' : '#6b7280' }}
          >
            {atsMode ? 'Mode Standard' : 'Mode ATS Optimisé'}
          </button>
        </div>
      </div>
    </>
  );
}
