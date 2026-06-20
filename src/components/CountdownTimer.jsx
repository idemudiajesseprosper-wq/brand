"use client";

import { useState, useEffect } from "react";

export default function CountdownTimer({ deadline, compact = false }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(deadline) - new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  if (compact) {
    return (
      <div className="flex items-center gap-1 text-sm">
        <span className="font-semibold text-red-600">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
        </span>
        <span className="text-gray-500">left</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <div className="text-center">
        <div className="bg-gray-900 text-white rounded-lg px-3 py-2 min-w-0 sm:min-w-[60px]">
          <div className="text-xl font-bold sm:text-2xl">{timeLeft.days}</div>
        </div>
        <div className="text-xs text-gray-600 mt-1">Days</div>
      </div>

      <div className="text-center">
        <div className="bg-gray-900 text-white rounded-lg px-3 py-2 min-w-0 sm:min-w-[60px]">
          <div className="text-xl font-bold sm:text-2xl">{timeLeft.hours}</div>
        </div>
        <div className="text-xs text-gray-600 mt-1">Hours</div>
      </div>

      <div className="text-center">
        <div className="bg-gray-900 text-white rounded-lg px-3 py-2 min-w-0 sm:min-w-[60px]">
          <div className="text-xl font-bold sm:text-2xl">{timeLeft.minutes}</div>
        </div>
        <div className="text-xs text-gray-600 mt-1">Minutes</div>
      </div>

      <div className="text-center">
        <div className="bg-gray-900 text-white rounded-lg px-3 py-2 min-w-0 sm:min-w-[60px]">
          <div className="text-xl font-bold sm:text-2xl">{timeLeft.seconds}</div>
        </div>
        <div className="text-xs text-gray-600 mt-1">Seconds</div>
      </div>
    </div>
  );
}
