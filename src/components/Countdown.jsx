"use client";

import { useEffect, useState } from "react";

export default function Countdown({ endDate }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = new Date(endDate) - new Date();
      if (diff <= 0) {
        setTime("Preorder closed");
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / 1000 / 60) % 60);

      setTime(`${d}d : ${h}h : ${m}m`);
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <p className="text-sm text-red-600 mt-2">
      Preorder closes in: {time}
    </p>
  );
}
