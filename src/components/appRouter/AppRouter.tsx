import { Routes, Route } from 'react-router-dom';
import { routes } from '../../routes/index';
import all from '../../page/All.module.scss';
import { TimerProvider } from '../../context/TimerProvider';

const AppRouter = () => {
  return (
    <main className={all.main}>
      <div className={all.container}>
        <TimerProvider>
          <Routes>
            {routes.map((route) => (
              <Route path={route.path} element={<route.element />} key={route.path} />
            ))}
          </Routes>
        </TimerProvider>
      </div>
    </main>
  );
};

export default AppRouter;
