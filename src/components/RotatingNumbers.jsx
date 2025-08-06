import React, { useEffect, useState } from "react";
import "./Home.css";

const RotatingNumbers = ({ numbers = [], interval = 3000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (numbers.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % numbers.length);
    }, interval);
    return () => clearInterval(timer);
  }, [numbers, interval]);

  return (
    <div className="rotating-numbers-overlay">
      <span className="rotating-number">{numbers[current]}</span>
    </div>
  );
};

export default RotatingNumbers;
