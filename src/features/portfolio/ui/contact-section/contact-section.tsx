import Link from 'next/link';
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
          <Link href="deonopinallae@yandex.ru" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
            <h3>Email</h3>
            <p>deonopinallae@yandex.ru</p>
          </Link>

          <Link href="https://github.com/deonopinallae" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
            <h3>GitHub</h3>
            <p>Check my work</p>
          </Link>
        </div>

        <div className={styles.cta}>
          <a href="deonopinallae@yandex.ru" target="_blank" rel="noopener noreferrer" className={styles.button}>
            Send Me an Email
          </a>
        </div>
      </div>
    </Section>
  );
}
