import styles from '../styles/pages/orphanagesmap.module.css';
import 'leaflet/dist/leaflet';
import React from 'react';
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';
import { MapContainer, TileLayer } from 'react-leaflet';

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
      <MapContainer
        center={[-26.8126124, -49.272274]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}>
        <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'></TileLayer>
      </MapContainer>
      <div className={styles.create_orphanages}>
        <Link href='/orphanages-map'>
          <FiPlus size={26} color='#fff' />
        </Link>
      </div>
    </div>
  );
};

export default OrphanagesMap;
