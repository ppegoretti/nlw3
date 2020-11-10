import styles from '../styles/pages/orphanagesmap.module.css';
import React from 'react';
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';

const OrphanagesMap: React.FC = () => {
  return (
    <div className={styles.page_map}>
      <aside>
        <header>
          <img src='/map-marker.svg' alt='marcador' />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Timbó</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>
      <div>
        <Link href='/orphanages-map'>
          <div className={styles.create_orphanages}>
            <FiPlus size={26} color='#fff' />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OrphanagesMap;
