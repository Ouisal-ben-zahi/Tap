import React from "react";
import "../css/Hero.css";
import heroImage from "../assets/herobgacc.jpeg";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src={heroImage}
        alt=""
        className="hero-bg-img"
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-content-inner">
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
      </div>
    </section>
  );
};

export default Hero;