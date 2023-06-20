import { FC } from 'react';
import { YMaps } from '@pbe/react-yandex-maps';
import AppRouter from './components/appRouter/AppRouter';
import Header from './components/header/Header';
import './App.scss';

const App: FC = () => {
  return (
    <>
      <YMaps
        query={{
          ns: 'use-load-option',
          load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl',
        }}
      >
        <Header />
        <AppRouter />
      </YMaps>
    </>
  );
};

export default App;
