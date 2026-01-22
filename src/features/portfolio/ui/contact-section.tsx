import { Section } from '@/shared/ui/layout/section';
import styles from './contact-section.module.scss';

export default function ContactSection() {
  return (
    <Section id="contact" title="Get In Touch">
      <div className={styles.contactContent}>
        <p className={styles.intro}>
          I'm open to new opportunities and interesting projects. Feel free to reach out if you'd like to collaborate or just say hello.
        </p>

        <div className={styles.contactMethods}>
          <a href="mailto:alisa@example.com" className={styles.contactCard}>
            <h3>Email</h3>
            <p>alisa@example.com</p>
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
          </a>

          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
            <h3>GitHub</h3>
            <p>Check my work</p>
          </a>
        </div>

        <div className={styles.cta}>
          <a href="mailto:alisa@example.com" className={styles.button}>
            Send Me an Email
          </a>
        </div>
      </div>
    </Section>
  );
}
