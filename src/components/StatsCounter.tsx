import { useEffect, useState } from "react";

interface StatsCounterProps {
  endValue: number;
  duration?: number;
  suffix?: string;
}

const StatsCounter = ({ endValue, duration = 2000, suffix = "" }: StatsCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const startValue = 0;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const currentCount = Math.floor(progress * (endValue - startValue) + startValue);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [endValue, duration]);

  return (
    <span className="font-bold text-2xl">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default StatsCounter;