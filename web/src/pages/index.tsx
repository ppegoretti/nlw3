import styles from '../styles/pages/landing.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.page_landing}>
      <div className='content-wrapper'>
        <img src='/logo.svg' alt='Happy' />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
      </div>
    </div>
  );
};

export default Home;
