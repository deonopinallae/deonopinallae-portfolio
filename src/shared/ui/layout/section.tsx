import styles from './section.module.scss';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </section>
  );
};
