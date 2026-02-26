import React, { useState, useEffect } from "react";
import "../css/Countdown.css";

// Date de déploiement v1 (fixe : le compteur diminue jusqu'à 0)
const DEPLOYMENT_DATE = new Date("2026-04-07T00:00:00");

// Bases de calcul pour la partie \"passée\" (pourcentage de bordure)
const DAYS_BASE = 41;
const HOURS_BASE = 24;
const MINUTES_BASE = 60;
const SECONDS_BASE = 60;

const getProgress = (value, base) =>
  Math.max(0, Math.min(1, value / base));

const getTimeRemaining = () => {
  const now = new Date();
  const diff = DEPLOYMENT_DATE - now;
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
};

const Countdown = () => {
  const [time, setTime] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemaining());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="countdown-section">
      <div className="countdown-inner">
        <div className="countdown-text">
          <p className="countdown-label">PLUS QUE QUELQUES INSTANTS AVANT TAP V1</p>
          <p className="countdown-sublabel">
            Préparez-vous à découvrir la première version de TAP et à révéler encore plus de talents.
          </p>
        </div>

        <div className="countdown-circles">
          <div className="countdown-circle-wrapper">
            <div
              className="countdown-circle"
              style={{ "--progress": getProgress(time.days, DAYS_BASE) }}
            >
              <div className="countdown-circle-inner">
                <span className="countdown-number">{time.days}</span>
                <span className="countdown-unit">jours</span>
              </div>
            </div>
          </div>

          <div className="countdown-circle-wrapper">
            <div
              className="countdown-circle countdown-circle--secondary"
              style={{ "--progress": getProgress(time.hours, HOURS_BASE) }}
            >
              <div className="countdown-circle-inner">
                <span className="countdown-number">{time.hours}</span>
                <span className="countdown-unit">heures</span>
              </div>
            </div>
          </div>

          <div className="countdown-circle-wrapper">
            <div
              className="countdown-circle countdown-circle--tertiary"
              style={{ "--progress": getProgress(time.minutes, MINUTES_BASE) }}
            >
              <div className="countdown-circle-inner">
                <span className="countdown-number">{time.minutes}</span>
                <span className="countdown-unit">minutes</span>
              </div>
            </div>
          </div>

          <div className="countdown-circle-wrapper">
            <div
              className="countdown-circle countdown-circle--quaternary"
              style={{ "--progress": getProgress(time.seconds, SECONDS_BASE) }}
            >
              <div className="countdown-circle-inner">
                <span className="countdown-number">{time.seconds}</span>
                <span className="countdown-unit">secondes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
