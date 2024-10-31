import { useEffect, useState } from "react";

const useInterval = (fn, timer) => {
  useEffect(() => {
    const interval = setInterval(fn, timer);

    return () => {
      clearInterval(interval);
    };
  }, []);
};

const Timer = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((count) => count + 1);
  }, 1000);

  return <div>Timer is {count}</div>;
};

export default Timer;
