import { Section } from '@/shared/ui/layout/section';
import styles from './work-section.module.scss';

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
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce application built with Next.js and Express. Features include product catalog, shopping cart, user authentication, and payment integration.',
    tech: ['Next.js', 'React', 'TypeScript', 'Zustand', 'Express', 'MongoDB'],
    link: '#',
  },
  {
    id: 2,
    title: 'Task Management Dashboard',
    description: 'Real-time collaborative task management system with drag-and-drop functionality. Built with React Query for server state management and REST API integration.',
    tech: ['React', 'React Query', 'Redux', 'SCSS', 'Node.js'],
    link: '#',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Data visualization dashboard displaying real-time analytics. Responsive design based on Figma mockups with interactive charts and filters.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    link: '#',
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
              <a href={project.link} className={styles.projectLink}>
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
