import { useState, useEffect } from 'react';
import { Map, Placemark } from '@pbe/react-yandex-maps';
import styles from '../../page/Map/Map.module.scss';
import Loader from '../loader/Loader';

const MyMap = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // задержка в 1000 миллисекунд

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={styles.map}>
      {loading ? (
        <Loader />
      ) : (
        <Map
          defaultState={{
            center: [55.75, 37.57],
            zoom: 9,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          width="100%"
          height="100%"
        >
          <Placemark defaultGeometry={[55.75, 37.57]} />
        </Map>
      )}
    </div>
  );
};

export default MyMap;
