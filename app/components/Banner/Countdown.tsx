'use client';
import React, { useState, useEffect, useRef } from 'react';

interface CountdownProps {
  date: string;
  className?: string;
}

const Countdown: React.FC<CountdownProps> = ({ date, className }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const calculateCountdown = (endDate: string) => {
    let diff =
      (Date.parse(endDate) - Date.parse(new Date().toISOString())) / 1000;

    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    if (diff >= 365.25 * 86400) {
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = Math.floor(diff); // Aquí se redondea a un entero

    return timeLeft;
  };

  const stop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const addLeadingZeros = (value: number) => {
    let stringValue = String(value);
    while (stringValue.length < 2) {
      stringValue = '0' + stringValue;
    }
    return stringValue;
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const calculatedCountdown = calculateCountdown(date);
      if (calculatedCountdown) {
        setTimeLeft(calculatedCountdown);
      } else {
        stop();
      }
    }, 1000);

    return () => stop();
  }, [date]);

  return (
    <div className={`Countdown ${className || ''}`}>
      <span className="Countdown-col">
        <span className="Countdown-col-element">
          <strong>{addLeadingZeros(timeLeft.days)}</strong>
          <span>{timeLeft.days === 1 ? 'Día' : 'Días'}</span>
        </span>
      </span>

      <span className="Countdown-col">
        <span className="Countdown-col-element">
          <strong>{addLeadingZeros(timeLeft.hours)}</strong>
          <span>Horas</span>
        </span>
      </span>

      <span className="Countdown-col">
        <span className="Countdown-col-element">
          <strong>{addLeadingZeros(timeLeft.min)}</strong>
          <span>Minutos</span>
        </span>
      </span>

      <span className="Countdown-col">
        <span className="Countdown-col-element">
          <strong>{addLeadingZeros(timeLeft.sec)}</strong>
          <span>Segundos</span>
        </span>
      </span>
    </div>
  );
};

export default Countdown;
