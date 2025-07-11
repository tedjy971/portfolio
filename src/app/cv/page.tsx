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

// Import dynamique de html2pdf pour éviter les erreurs côté serveur
const Html2PdfComponent = dynamic(() => import('./Html2PdfComponent'), {
  ssr: false,
  loading: () => <p>Chargement de l'exportation PDF...</p>,
});

export default function CV() {
  const [showProjects, setShowProjects] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
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
          <h1 className={styles.name}>{personalInfo.name}</h1>
          <h2 className={styles.title}>{personalInfo.title}</h2>
          <p>{personalInfo.description}</p>

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
          </div>
        </header>

        <div className={styles.twoColumnGrid}>
          <main>
            {/* Expériences professionnelles */}
            <section>
              <h2 className={styles.sectionTitle}>Expériences professionnelles</h2>
              {professionalExperiences.map((experience, index) => (
                <div key={index} className={styles.experienceItem}>
                  <div className={styles.experienceHeader}>
                    <h3 className={styles.companyTitle}>
                      {experience.title} | {experience.company}
                    </h3>
                    <span className={styles.period}>{experience.period}</span>
                  </div>
                  <p className={styles.description}>{experience.description}</p>
                </div>
              ))}
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
              <h2 className={styles.sectionTitle}>Formation</h2>
              {educationExperiences.map((education, index) => (
                <div key={index} className={styles.educationItem}>
                  <div className={styles.experienceHeader}>
                    <h3 className={styles.companyTitle}>{education.title}</h3>
                    <span className={styles.schoolName}>{education.school}</span>
                    <span className={styles.period}>{education.period}</span>
                  </div>
                  <p className={styles.description}>{education.description}</p>
                </div>
              ))}
            </section>
          </main>

          <aside>
            {/* Compétences techniques */}
            <section>
              <h2 className={styles.sectionTitle}>Compétences techniques</h2>
              <div className={styles.skillsGrid}>
                {Object.entries(skillCategories).map(
                  ([key, category]) =>
                    category.skills.length > 0 && (
                      <div key={key} className={styles.skillCategory}>
                        <h3 className={styles.skillCategoryTitle}>{category.title}</h3>
                        <ul className={styles.skillList}>
                          {category.skills.map((skill, skillIndex) => (
                            <li key={skillIndex} className={styles.skillItem}>
                              <span className={styles.skillName}>{skill.name}</span>
                              <span className={styles.skillLevel}>{skill.level}%</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                )}
              </div>
            </section>

            {/* Centres d'intérêt */}
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
        </div>
      </div>
    </>
  );
}
