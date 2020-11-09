import styles from '../styles/pages/landing.module.css';
import { FiChevronRight } from 'react-icons/fi';

const Home: React.FC = () => {
  return (
    <div className={styles.page_landing}>
      <div className={styles.content_wrapper}>
        <img src='/logo.svg' alt='Happy' />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <div className={styles.location}>
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </div>
        <a href='' className={styles.enter_app}>
          <FiChevronRight size={20} />
        </a>
      </div>
    </div>
  );
};

export default Home;
