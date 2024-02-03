import styles from './about.module.css';
import AboutCol1 from '@/components/about/AboutCol1';
import AboutCol2 from '@/components/about/AboutCol2';

const About = () => {

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.aboutMe}>
          <AboutCol1/>
        </div>
        <div className={styles.content}>
          <AboutCol2/>
        </div>
      </div>
    </main>
  );
};

export default About;
