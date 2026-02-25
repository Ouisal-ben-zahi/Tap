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
          <div className="hero-card">
            <img src={cardIcon} alt="" className="hero-card-icon" />
            <span>Moins de tri.</span>
          </div>
          <div className="hero-card">
            <img src={cardIcon} alt="" className="hero-card-icon" />
            <span>Moins de risque.</span>
          </div>
          <div className="hero-card">
            <img src={cardIcon} alt="" className="hero-card-icon" />
            <span>Plus de talents prêts.</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn-primary">
            RECRUTER DES TALENTS PRÉPARÉS
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