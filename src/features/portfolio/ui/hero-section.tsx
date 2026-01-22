import styles from './hero-section.module.scss';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>Alisa</span>
          </h1>
          <p className={styles.subtitle}>
            Frontend Developer crafting elegant digital experiences
          </p>
          <p className={styles.description}>
            I build responsive, performant web applications with React and Next.js. 
            Passionate about clean code, user experience, and minimalist design.
          </p>
          <div className={styles.cta}>
            <a href="#work" className={styles.button}>
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
