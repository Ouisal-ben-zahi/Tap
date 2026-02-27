import React from "react";
import "../css/Hero.css";
import heroImage from "../assets/hero.jpg";

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