import { Section } from '@/shared/ui/layout/section';
import styles from './work-section.module.scss';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: '"urstar" Clothers Shopping Web',
    description: 'Full-stack e-commerce application built with Next.js and Express. Features include product catalog, shopping cart, user authentication, and payment integration.',
    tech: ['React', 'Redux', 'Express', 'MongoDB', 'SCSS'],
    link: 'https://github.com/deonopinallae/urstar-frontend',
  },
  {
    id: 2,
    title: '"Crystals" Crystals Shop SPA (in proccess)',
    description: 'Single Page Application for browsing and purchasing crystals and minerals. Features detailed product catalog, shopping cart, user reviews, and advanced filtering by crystal type, price, and metaphysical properties with responsive design.',
    tech: ['Next.js', 'TypeScript', 'Zustand', 'Redux', 'SCSS'],
    link: 'https://github.com/deonopinallae/crystals',
  },
  {
    id: 3,
    title: 'Task Management App (in proccess)',
    description: 'Frontend application with integrated Pomodoro timer for productivity tracking. Features task creation and organization, real-time session timing, progress visualization, local storage persistence, and task history management with a clean, intuitive interface.',
    tech: ['Next.js', 'TypeScript', 'Zustand', 'React Query', 'Tailwind CSS', 'SCSS'],
    link: 'https://github.com/deonopinallae/task-sync-frontend',
  },
];

export default function WorkSection() {
  return (
    <Section id="work" title="Work">
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectTech}>
                {project.tech.map((tech, index) => (
                  <span key={index} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {project.link && project.link !== '#' && (
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                View Project →
              </Link>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
