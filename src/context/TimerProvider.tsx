import { useEffect, useState, createContext } from 'react';
export const TimerContext = createContext<TimerContextType>({
  seconds: 0,
  formatTime: () => '',
});
type TimerContextType = {
  seconds: number;
  formatTime: (time: number) => string;
};

const formatTime = (time: number) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
  const [seconds, setSeconds] = useState(50);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <TimerContext.Provider value={{seconds, formatTime}}>{children}</TimerContext.Provider>;
};
