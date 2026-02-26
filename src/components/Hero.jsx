import React from "react";
import "../css/Hero.css";
import heroImage from "../assets/hero.jpg";
import cardIcon from "../assets/path20.svg";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          LA PLATEFORME DE RECRUTEMENT QUI TRANSFORME DES PROFILS EN TALENTS PRÊTS À EMBAUCHER.
        </h1>

        <p>
          Nous analysons, formons et évaluons les candidats grâce à l’IA avant de les connecter aux entreprises.
        </p>

        <div className="hero-cards">
          <div className="hero-stat-card">
            <img src={cardIcon} alt="" className="hero-stat-icon" />
            <div className="hero-stat-value">80%</div>
            <p className="hero-stat-text">
              Des candidatures sont filtrées avant lecture humaine.
            </p>
          </div>
          <div className="hero-stat-card">
            <img src={cardIcon} alt="" className="hero-stat-icon" />
            <div className="hero-stat-value">45%</div>
            <p className="hero-stat-text">
              Des diplômés restent invisibles faute de preuves concrètes.
            </p>
          </div>
          <div className="hero-stat-card">
            <img src={cardIcon} alt="" className="hero-stat-icon" />
            <div className="hero-stat-value">35%</div>
            <p className="hero-stat-text">
              Des talents quittent leur poste faute d’accompagnement.
            </p>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn-primary">
            RECRUTER 
          </button>
          <button className="btn-secondary">
            CRÉER MON PROFIL
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;