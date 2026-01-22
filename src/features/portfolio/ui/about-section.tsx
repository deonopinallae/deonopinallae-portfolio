import { Section } from '@/shared/ui/layout/section';
import styles from './about-section.module.scss';

export default function AboutSection() {
  return (
    <Section id="about" title="About">
      <div className={styles.aboutContent}>
        <div className={styles.bio}>
          <p>
            I'm a frontend developer with a passion for creating clean, intuitive interfaces and solving complex problems through code. 
            With experience in modern React ecosystems, I specialize in building scalable web applications.
          </p>
          <p>
            My journey into development started with curiosity about how things work on the web. 
            Since then, I've honed my skills across full-stack technologies, always focusing on delivering quality user experiences.
          </p>
        </div>

        <div className={styles.skills}>
          <h3 className={styles.skillsTitle}>Skills & Technologies</h3>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h4>Frontend</h4>
              <ul>
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Zustand & Redux</li>
                <li>React Query</li>
                <li>HTML & CSS/SCSS</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h4>Backend</h4>
              <ul>
                <li>Node.js & Express</li>
                <li>MongoDB</li>
                <li>REST API</li>
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h4>Tools & Workflow</h4>
              <ul>
                <li>Git & GitHub</li>
                <li>Figma</li>
                <li>GitHub Copilot</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
