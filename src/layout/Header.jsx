import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        
        {/* Logo */}
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" />
        </div>

        {/* Hamburger (mobile) */}
        <div 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" end onClick={() => setMenuOpen(false)}>
                Accueil
              </NavLink>
            </li>

            <li>
              <NavLink to="/a-propos" onClick={() => setMenuOpen(false)}>
                A propos
              </NavLink>
            </li>

           
            <li>
              <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink to="/offres" onClick={() => setMenuOpen(false)}>
                Offres
              </NavLink>
            </li>
             <li>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
            </li>

          </ul>
        </nav>

        {/* Buttons */}
        <div className="header-buttons">
          <button className="login-btn">
            Se connecter
          </button>

          <button 
            className="signup-btn"
            onClick={() => navigate("/profil")}
          >
            Créer mon profil
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;