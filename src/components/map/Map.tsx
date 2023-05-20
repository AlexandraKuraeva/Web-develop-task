import { useState, useEffect } from 'react';
import { Map, Placemark } from '@pbe/react-yandex-maps';
import styles from '../../page/Map/Map.module.scss'
const MyMap = () => {
  const [loading, setLoading] = useState(true);
  //   const mapLoaded = () => {
  //     setLoading(false);
  //   };

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
        <p>Карта грузится</p>
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
