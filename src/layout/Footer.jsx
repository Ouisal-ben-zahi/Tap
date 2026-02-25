import React from "react";
import "../css/Footer.css";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        
        {/* Logo aligné en haut */}
        <div className="footer-brand">
          <img src={logo} alt="TAP" className="footer-logo" />
          <p className="brand-description">
            PLATEFORME D'EMPLOYABILITÉ ASSISTÉE
            PAR INTELLIGENCE ARTIFICIELLE.
          </p>
        </div>

        {/* Ligne séparatrice centrée verticalement */}
        <div className="footer-divider"></div>

        {/* Grille des menus alignée en haut */}
        <div className="footer-grid">
          <div className="footer-column">
            <h3>NAVIGATION</h3>
            <ul>
              <li>Accueil</li>
              <li>Comment ça marche</li>
              <li>À propos</li>
              <li>Ressources</li>
              <li>Connexion</li>
              <li>Créer mon profil</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>PRODUIT</h3>
            <ul>
              <li>Analyse IA du CV</li>
              <li>Score d'employabilité</li>
              <li>Micro-learning</li>
              <li>Portfolio généré</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>LÉGAL</h3>
            <ul>
              <li>Mentions légales</li>
              <li>Politique de confidentialité</li>
              <li>Conditions d'utilisation</li>
              <li>Gestion des données</li>
            </ul>
          </div>

          <div className="footer-column contact-column">
            <h3>CONTACT</h3>
            <div className="contact-block">
              <strong>Email</strong>
              <span>contact@tap.ai</span>
            </div>
            <div className="contact-block">
              <strong>Téléphone</strong>
              <span>+212 6 00 00 00 00</span>
            </div>
            <div className="contact-block">
              <strong>Adresse</strong>
              <span>Maroc</span>
            </div>
            <div className="contact-block">
              <strong>Support</strong>
              <span>support@tap.ai</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© 2026 TAP — TOUS DROITS RÉSERVÉS.</p>
      </div>
    </footer>
  );
};

export default Footer;