import { personalInfo } from '@/data/personalData';
import styles from '@/styles/portfolio.module.css';
import {
  ArrowRight,
  ArrowSquareOut,
  Briefcase,
  CheckCircle,
  Cloud,
  Code,
  CreditCard,
  Database,
  DownloadSimple,
  Envelope,
  GithubLogo,
  GraduationCap,
  LinkedinLogo,
  MagnifyingGlass,
  MapPin,
  Phone,
  RocketLaunch,
  ShieldCheck,
  Stack,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

const expertise = [
  {
    icon: Code,
    title: 'Produit full-stack',
    description:
      'Interfaces Vue 3, React ou Angular et API NestJS ou Symfony, du cadrage métier à la mise en production.',
    technologies: 'TypeScript · Vue 3 · NestJS · Node.js',
  },
  {
    icon: Database,
    title: 'Données & intégrations',
    description:
      'Modélisation, recherche avancée, cache et intégrations tierces sur des parcours métier sensibles.',
    technologies: 'PostgreSQL · Elasticsearch · Redis · RabbitMQ',
  },
  {
    icon: ShieldCheck,
    title: 'Qualité & sécurité',
    description:
      'Tests automatisés, contrôle des accès, résilience réseau et protection des données dans les services exposés.',
    technologies: 'Playwright · Vitest · Jest · OWASP',
  },
  {
    icon: Cloud,
    title: 'DevOps & delivery',
    description:
      'Conteneurisation, pipelines CI/CD et exploitation de services sur des infrastructures cloud.',
    technologies: 'Docker · Kubernetes · AWS · GitLab CI/CD',
  },
];

const workExamples = [
  {
    icon: CreditCard,
    title: 'Facturation électronique',
    description:
      'Évolution de parcours d’abonnement et de facturation à l’usage avec Stripe, paiements carte, SEPA, virements et synchronisation de webhooks.',
  },
  {
    icon: MagnifyingGlass,
    title: 'Recherche métier',
    description:
      'Recherche Elasticsearch multilingue avec scoring, boost, agrégations et optimisation des parcours côté interface.',
  },
  {
    icon: RocketLaunch,
    title: 'Modernisation & exploitation',
    description:
      'Reprise de socles PHP/Symfony, évolution des schémas de données et industrialisation des livraisons.',
  },
];

const journey = [
  {
    period: '2021 — aujourd’hui',
    title: 'Développeur Full-stack · Kernix',
    detail: 'CDI après quatre années d’alternance — applications métier, API, qualité et DevOps.',
  },
  {
    period: '2020 — 2021',
    title: 'Technicien informatique · SPIE ICS',
    detail: 'Administration de parc, support et maintien en condition opérationnelle.',
  },
  {
    period: '2018 — 2019',
    title: 'Automatisation & data · Amazon / LUCERNYS',
    detail: 'Outils d’aide à la décision, automatisation de processus et analyse de données.',
  },
  {
    period: '2018',
    title: 'Développeur web · Département de Seine-Saint-Denis',
    detail: 'Application métier PHP/MySQL avec authentification et gestion des droits.',
  },
];

const education = [
  'Master Tech Lead — HETIC, 2025',
  'Bachelor Développeur web full-stack — HETIC, 2023',
  'Licence SGBD & Big Data — Université d’Évry, 2019',
  'BTS Systèmes numériques — Lycée Parc de Vilgénis, 2018',
];

export default function Home() {
  return (
    <div className={styles.siteShell}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.brand} href="#top" aria-label="Retour en haut de page">
            <span aria-hidden="true">TG</span>
            <strong>Teddy Gamiette</strong>
          </a>

          <nav className={styles.desktopNav} aria-label="Navigation principale">
            <a href="#experience">Expérience</a>
            <a href="#expertise">Compétences</a>
            <a href="#parcours">Parcours</a>
            <a href="#contact">Contact</a>
          </nav>

          <Link className={styles.headerCta} href="/cv">
            <DownloadSimple aria-hidden="true" size={18} weight="regular" />
            <span>Voir le CV</span>
          </Link>
        </div>
      </header>

      <main id="top">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Développeur Full-stack TypeScript</p>
              <h1 id="hero-title">
                Je construis des applications métier fiables, de l’interface au déploiement.
              </h1>
              <p className={styles.heroLead}>
                Chez Kernix depuis 2021, je travaille principalement avec Vue.js et NestJS, tout en
                m’appuyant sur une expérience solide de PHP/Symfony et une vraie culture DevOps.
              </p>

              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} href="/cv">
                  Consulter mon CV
                  <ArrowRight aria-hidden="true" size={19} weight="regular" />
                </Link>
                <a className={styles.secondaryButton} href={`mailto:${personalInfo.email}`}>
                  <Envelope aria-hidden="true" size={19} weight="regular" />
                  Me contacter
                </a>
              </div>

              <p className={styles.availability}>
                <CheckCircle aria-hidden="true" size={18} weight="regular" />
                En CDI chez Kernix · À l’écoute d’opportunités full-stack à dominante TypeScript
              </p>
            </div>

            <aside className={styles.profileCard} aria-label="Profil en bref">
              <div className={styles.profileMark} aria-hidden="true">
                TG
              </div>
              <div>
                <p className={styles.profileName}>Teddy Gamiette</p>
                <p className={styles.profileRole}>Full-stack · Architecture · DevOps</p>
              </div>
              <dl className={styles.quickFacts}>
                <div>
                  <dt>Expérience actuelle</dt>
                  <dd>Depuis 2021 chez Kernix</dd>
                </div>
                <div>
                  <dt>Stack principale</dt>
                  <dd>Vue.js · NestJS · TypeScript</dd>
                </div>
                <div>
                  <dt>Localisation</dt>
                  <dd>Palaiseau · Île-de-France</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className={styles.section} id="experience" aria-labelledby="experience-title">
          <div className={styles.sectionIntro}>
            <p className={styles.sectionNumber}>01</p>
            <div>
              <p className={styles.eyebrow}>Expérience récente</p>
              <h2 id="experience-title">Des sujets concrets, au cœur des produits métier.</h2>
              <p>
                Mon rôle couvre l’analyse du besoin, l’implémentation, la fiabilisation et le suivi
                en production. Voici trois contextes représentatifs de mon travail.
              </p>
            </div>
          </div>

          <div className={styles.workGrid}>
            {workExamples.map(item => {
              const Icon = item.icon;
              return (
                <article className={styles.workCard} key={item.title}>
                  <Icon aria-hidden="true" size={26} weight="regular" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.sectionAlt} id="expertise" aria-labelledby="expertise-title">
          <div className={styles.sectionInner}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionNumber}>02</p>
              <div>
                <p className={styles.eyebrow}>Compétences</p>
                <h2 id="expertise-title">
                  Un profil full-stack avec une forte autonomie technique.
                </h2>
                <p>
                  Les compétences sont regroupées par usage pour rester lisibles par un recruteur,
                  sans catalogue de logos ni jauges artificielles.
                </p>
              </div>
            </div>

            <div className={styles.expertiseGrid}>
              {expertise.map(item => {
                const Icon = item.icon;
                return (
                  <article className={styles.expertiseCard} key={item.title}>
                    <div className={styles.iconBox}>
                      <Icon aria-hidden="true" size={24} weight="regular" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <strong>{item.technologies}</strong>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.section} id="parcours" aria-labelledby="journey-title">
          <div className={styles.sectionIntro}>
            <p className={styles.sectionNumber}>03</p>
            <div>
              <p className={styles.eyebrow}>Parcours</p>
              <h2 id="journey-title">Une progression du terrain vers le pilotage technique.</h2>
            </div>
          </div>

          <div className={styles.journeyLayout}>
            <div className={styles.timeline}>
              <h3>
                <Briefcase aria-hidden="true" size={22} weight="regular" />
                Expériences
              </h3>
              {journey.map(item => (
                <article className={styles.timelineItem} key={`${item.period}-${item.title}`}>
                  <p>{item.period}</p>
                  <div>
                    <h4>{item.title}</h4>
                    <span>{item.detail}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.educationCard}>
              <h3>
                <GraduationCap aria-hidden="true" size={22} weight="regular" />
                Formation
              </h3>
              <ul>
                {education.map(item => (
                  <li key={item}>
                    <CheckCircle aria-hidden="true" size={18} weight="regular" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.contactSection} id="contact" aria-labelledby="contact-title">
          <div className={styles.contactIntro}>
            <p className={styles.eyebrow}>Contact</p>
            <h2 id="contact-title">Parlons de votre besoin.</h2>
            <p>
              Pour un premier échange, le plus simple reste l’email ou LinkedIn. Mon CV détaillé est
              également disponible en version web et PDF.
            </p>
            <Link className={styles.contactCta} href="/cv">
              <Stack aria-hidden="true" size={20} weight="regular" />
              Voir le CV complet
            </Link>
          </div>

          <address className={styles.contactList}>
            <a href={`mailto:${personalInfo.email}`}>
              <Envelope aria-hidden="true" size={22} weight="regular" />
              <span>
                <small>Email</small>
                {personalInfo.email}
              </span>
            </a>
            <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}>
              <Phone aria-hidden="true" size={22} weight="regular" />
              <span>
                <small>Téléphone</small>
                {personalInfo.phone}
              </span>
            </a>
            <span>
              <MapPin aria-hidden="true" size={22} weight="regular" />
              <span>
                <small>Localisation</small>
                {personalInfo.location}
              </span>
            </span>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
              <LinkedinLogo aria-hidden="true" size={22} weight="regular" />
              <span>
                <small>LinkedIn</small>
                teddy-gamiette
              </span>
              <ArrowSquareOut aria-hidden="true" className={styles.externalIcon} size={17} />
            </a>
          </address>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <p>© 2026 Teddy Gamiette</p>
          <p>Développeur Full-stack TypeScript · Vue.js · NestJS · DevOps</p>
        </div>
        <div className={styles.footerLinks}>
          <a href={personalInfo.github} target="_blank" rel="noreferrer">
            <GithubLogo aria-hidden="true" size={20} weight="regular" />
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
            <LinkedinLogo aria-hidden="true" size={20} weight="regular" />
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
