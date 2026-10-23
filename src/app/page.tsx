'use client';

import { MotionConfig, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import {
  educationExperiences,
  experiences,
  personalInfo,
  projects,
  skills,
} from '../data/personalData';

const nav = [
  { href: '#experience', label: 'Expérience' },
  { href: '#projets', label: 'Projets' },
  { href: '#competences', label: 'Compétences' },
  { href: '#contact', label: 'Contact' },
];

const skillGroups = [
  { key: 'backend', title: 'Back-end & architecture' },
  { key: 'frontend', title: 'Front-end & mobile' },
  { key: 'devops', title: 'DevOps & cloud' },
  { key: 'data', title: 'Data & recherche' },
];

const projectTypeLabel: Record<string, string> = {
  entreprise: 'Entreprise',
  personnel: 'Open source',
  academique: 'Académique',
};

const projectOrder = ['entreprise', 'personnel', 'academique'];
const sortedProjects = [...projects].sort(
  (a, b) => projectOrder.indexOf(String(a.type)) - projectOrder.indexOf(String(b.type))
);

// Hero code sample: a back-end dev introduces himself as an API response
const apiLines: [string, string][] = [
  ['"role"', '"Full-stack orienté back-end"'],
  ['"experience"', '"5 ans"'],
  ['"stack"', '["PHP 8", "Symfony 7", "NestJS", "Vue 3"]'],
  ['"architecture"', '["DDD", "CQRS", "event-driven"]'],
  ['"ai"', '["Claude Code", "Cursor", "MCP"]'],
  ['"available"', 'true'],
];

const ease = [0.16, 1, 0.3, 1] as const;

const Icon = {
  github: (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
};

const focus =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300';
const btn = `inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-[background-color,border-color,color,transform] duration-150 active:scale-[0.98] cursor-pointer ${focus}`;
const btnPrimary = `${btn} bg-emerald-400 text-[#04150e] hover:bg-emerald-300`;
const btnGhost = `${btn} border border-[#24352e] text-[#e8f0ec] hover:border-emerald-400 hover:text-white`;

function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <ol ref={ref} className="relative ml-1">
      <span className="absolute left-0 top-2 bottom-2 w-px bg-[#1d2a25]" aria-hidden="true" />
      <motion.span
        className="absolute left-0 top-2 bottom-2 w-px bg-emerald-400 origin-top"
        style={{ scaleY: reduce ? 1 : progress }}
        aria-hidden="true"
      />
      {experiences.map((exp, i) => {
        const current = i === 0;
        const lines = exp.description.split('\n').map(l => l.replace(/^•\s*/, ''));
        return (
          <li key={exp.title + exp.company} className="relative pl-8 pb-14 last:pb-0">
            <span
              className={`absolute -left-[4.5px] top-[9px] h-2.5 w-2.5 rounded-full ring-4 ring-[#0a0f0d] ${current ? 'bg-emerald-400' : 'bg-[#3a4d45]'}`}
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-lg font-semibold text-[#f1f6f3] [text-wrap:balance]">
                {exp.title} <span className="text-emerald-400 font-medium">· {exp.company}</span>
              </h3>
              <span className="font-mono text-sm tabular-nums text-[#86998f]">{exp.period}</span>
            </div>
            <ul className="mt-4 space-y-2 max-w-[68ch]">
              {(current ? lines : lines.slice(0, 3)).map(line => (
                <li key={line} className="flex gap-3 leading-relaxed text-[#b4c4bc]">
                  <span className="mt-[11px] h-px w-3 shrink-0 bg-emerald-400/70" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            {current && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <li key={tag} className="font-mono text-xs rounded border border-[#1d2a25] bg-[#111916] px-2 py-1 text-[#c9d6cf]">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ol>
  );
}

function ApiCard() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.7, ease, delay: 0.35 }}
      className="rounded-xl border border-[#1d2a25] bg-[#0e1512] shadow-[0_24px_60px_-20px_rgba(16,185,129,0.25)] overflow-hidden"
      aria-label="Profil résumé sous forme de réponse d'API"
    >
      <figcaption className="flex items-center justify-between border-b border-[#1d2a25] px-4 py-3 font-mono text-xs text-[#86998f]">
        <span>
          <span className="text-emerald-400">GET</span> /api/teddy-gamiette
        </span>
        <span className="rounded bg-emerald-400/10 px-1.5 py-0.5 text-emerald-300">200 OK</span>
      </figcaption>
      <pre className="px-5 py-5 font-mono text-[13px] leading-7 text-[#c9d6cf] overflow-x-auto">
        <span>{'{'}</span>
        {apiLines.map(([k, v], i) => (
          <motion.span
            key={k}
            className="block pl-4"
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease, delay: 0.6 + i * 0.07 }}
          >
            <span className="text-emerald-300">{k}</span>: <span className="text-[#e8f0ec]">{v}</span>
            {i < apiLines.length - 1 && ','}
          </motion.span>
        ))}
        <span>{'}'}</span>
      </pre>
    </motion.figure>
  );
}

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="home min-h-dvh bg-[#0a0f0d] text-[#b4c4bc] font-sans">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-emerald-400 focus:text-[#04150e] focus:px-3 focus:py-2 focus:rounded"
        >
          Aller au contenu
        </a>

        <header className="sticky top-0 z-40 border-b border-[#16211d] bg-[#0a0f0d]/85 backdrop-blur-md">
          <nav aria-label="Navigation principale" className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="h-16 flex items-center justify-between gap-4">
              <a href="#" className={`font-mono font-semibold text-[#f1f6f3] rounded ${focus}`}>
                teddy<span className="text-emerald-400">.gamiette</span>
              </a>
              <ul className="hidden md:flex items-center gap-8 text-sm">
                {nav.map(item => (
                  <li key={item.href}>
                    <a href={item.href} className={`rounded transition-colors hover:text-emerald-300 ${focus}`}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a href="/cv" className={`${btnPrimary} py-2`}>
                <span className="sm:hidden">CV</span>
                <span className="hidden sm:inline">Télécharger le CV</span>
              </a>
            </div>
            <ul className="md:hidden flex justify-between pb-3 text-sm">
              {nav.map(item => (
                <li key={item.href}>
                  <a href={item.href} className={`inline-block py-1 rounded hover:text-emerald-300 ${focus}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main id="contenu" className="mx-auto max-w-6xl px-4 sm:px-6">
          <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div>
              <motion.h1
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={{ duration: 0.8, ease }}
                className="text-5xl sm:text-7xl font-bold tracking-[-0.035em] text-[#f1f6f3] leading-[0.95]"
              >
                Teddy
                <br />
                Gamiette
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, filter: 'blur(8px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, ease, delay: 0.2 }}
                className="mt-6 text-xl sm:text-2xl font-medium text-[#e8f0ec] [text-wrap:balance]"
              >
                Développeur full&#8209;stack <span className="text-emerald-400">orienté back-end</span>
              </motion.p>
              <p className="mt-5 max-w-[60ch] text-base sm:text-lg leading-relaxed">
                J&apos;écris des API et des microservices qui tiennent en production, en PHP/Symfony et
                NestJS, et je sais livrer le front Vue qui va avec. Cinq ans chez Kernix.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#contact" className={btnPrimary}>
                  Me contacter {Icon.arrow}
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={btnGhost}>
                  {Icon.github} GitHub
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={btnGhost}>
                  {Icon.linkedin} LinkedIn
                </a>
              </div>
              <p className="mt-8 inline-flex items-center gap-2.5 text-sm text-[#c9d6cf]">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Disponible rapidement · CDI · {personalInfo.location}
              </p>
            </div>
            <ApiCard />
          </section>

          <section id="experience" className="py-20 scroll-mt-28 md:scroll-mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[#f1f6f3] mb-12">Expérience</h2>
            <Timeline />
          </section>

          <section id="projets" className="py-20 scroll-mt-28 md:scroll-mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[#f1f6f3] mb-10">Projets</h2>
            <ul className="border-t border-[#1d2a25]">
              {sortedProjects.map(p => (
                <li
                  key={String(p.id)}
                  className="group grid gap-x-10 gap-y-3 border-b border-[#1d2a25] py-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] transition-colors duration-200 hover:bg-[#0e1512] -mx-4 px-4 sm:-mx-6 sm:px-6"
                >
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#86998f]">
                      {projectTypeLabel[String(p.type)] ?? p.type}
                    </span>
                    <h3 className="mt-1.5 text-lg font-semibold leading-snug text-[#f1f6f3] transition-colors group-hover:text-emerald-300 [text-wrap:balance]">
                      {p.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-[15px] leading-relaxed max-w-[68ch]">{p.description}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-emerald-300/90">
                        {p.tags.map(tag => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                      {p.githubLink && (
                        <a
                          href={p.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 text-sm font-medium text-[#e8f0ec] underline decoration-emerald-400/60 underline-offset-4 hover:decoration-emerald-300 rounded ${focus}`}
                        >
                          Voir le code {Icon.arrow}
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section id="competences" className="py-20 scroll-mt-28 md:scroll-mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[#f1f6f3] mb-10">Compétences</h2>
            <div className="grid gap-10 sm:grid-cols-2">
              {skillGroups.map(group => {
                const list = skills.filter(s => s.category === group.key);
                if (!list.length) return null;
                return (
                  <div key={group.key}>
                    <h3 className="text-sm font-semibold text-[#e8f0ec] mb-4">{group.title}</h3>
                    <ul className="flex flex-wrap gap-2">
                      {list.map(s => (
                        <li
                          key={s.name}
                          className="rounded-md border border-[#1d2a25] bg-[#111916] px-3 py-1.5 text-sm text-[#d3ded8]"
                        >
                          {s.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <h3 className="mt-20 text-sm font-semibold text-[#e8f0ec] mb-4">Formation</h3>
            <ul className="border-t border-[#1d2a25]">
              {educationExperiences.map(e => (
                <li key={e.title} className="py-4 border-b border-[#1d2a25] flex flex-wrap justify-between gap-x-6 gap-y-1">
                  <span className="text-[#e8f0ec]">{e.title}</span>
                  <span className="text-sm text-[#86998f]">
                    {e.school} · <span className="font-mono tabular-nums">{e.period}</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <section id="contact" className="scroll-mt-16 bg-emerald-400 text-[#04150e]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
            <h2
              className="text-4xl sm:text-6xl font-bold tracking-[-0.035em] leading-[1.02] max-w-[16ch] [text-wrap:balance]"
            >
              Un poste back-end ou full&#8209;stack à pourvoir&nbsp;?
            </h2>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-[#0b3a28]">
              Je suis disponible rapidement. Écrivez-moi, je réponds sous 24&nbsp;h.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className={`${btn} bg-[#04150e] text-emerald-300 hover:bg-[#0b2a1d] focus-visible:outline-[#04150e]`}
              >
                {Icon.mail} {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                className={`${btn} border border-[#04150e]/30 hover:border-[#04150e] tabular-nums focus-visible:outline-[#04150e]`}
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-[#0a0f0d]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-wrap justify-between gap-4 text-sm text-[#86998f]">
            <span>
              © {new Date().getFullYear()} {personalInfo.name}
            </span>
            <a href="/cv" className={`rounded hover:text-emerald-300 ${focus}`}>
              CV version ATS
            </a>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
