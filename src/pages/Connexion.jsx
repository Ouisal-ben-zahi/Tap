import React, { useState } from "react";
import "../css/Contact.css";
import heroImage from "../assets/new-bgpages.jpg";

function Connexion() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section
      className="contact-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="contact-inner">
        <header className="contact-header">
          <div className="contact-heading">
            <div className="contact-heading-main">CONNEXION</div>
          </div>
        </header>

        <div className="contact-grid">
          <form className="contact-form">
            <div className="form-field form-field-full">
              <label htmlFor="login-email">Email</label>
              <input
                id="login-email"
                type="email"
                name="email"
                placeholder="vous@exemple.com"
                required
              />
            </div>

            <div className="form-field form-field-full">
              <label htmlFor="login-password">Mot de passe</label>
              <div className="password-input-wrapper">
                <input
                  id="login-password"
                  className="password-input"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Votre mot de passe"
                  required
                />
                <button
                  type="button"
                  className={
                    "password-eye" + (showPassword ? " password-eye--active" : "")
                  }
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                />
              </div>
            </div>

            <div className="contact-submit-wrapper">
              <button type="submit" className="contact-submit">
                SE CONNECTER
              </button>
            </div>
            <div className="login-create-account">
              <button type="button" className="login-create-account-link">
                Créer un compte
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Connexion;


