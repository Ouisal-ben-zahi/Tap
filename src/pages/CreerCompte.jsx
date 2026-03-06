import React, { useState } from "react";
import "../css/Contact.css";
import heroImage from "../assets/new-bgpages.jpg";

function CreerCompte() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showGenerate, setShowGenerate] = useState(false);

  const generateSecurePassword = () => {
    const length = 14;
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}";
    let result = "";
    for (let i = 0; i < length; i += 1) {
      const index = Math.floor(Math.random() * chars.length);
      result += chars[index];
    }
    setPassword(result);
  };

  return (
    <section
      className="contact-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="contact-inner">
        <header className="contact-header">
          <div className="contact-heading">
            <div className="contact-heading-main">CRÉER UN COMPTE</div>
          </div>
        </header>

        <div className="contact-grid">
          <form className="contact-form">
            <div className="form-field form-field-full account-type-field">
              <span className="account-type-label">Type de compte</span>
              <div className="account-type-radios">
                <label className="account-type-radio">
                  <input
                    type="radio"
                    name="accountType"
                    value="candidat"
                    defaultChecked
                  />
                  <span>Candidat</span>
                </label>
                <label className="account-type-radio">
                  <input
                    type="radio"
                    name="accountType"
                    value="recruteur"
                  />
                  <span>Recruteur</span>
                </label>
              </div>
            </div>

            <div className="form-field form-field-full">
              <label htmlFor="signup-email">Email</label>
              <input
                id="signup-email"
                type="email"
                name="email"
                placeholder="vous@exemple.com"
                required
              />
            </div>

            <div className="form-field form-field-full">
              <label htmlFor="signup-password">Mot de passe</label>
              <div className="password-input-row">
                <div className="password-input-wrapper">
                  <input
                    id="signup-password"
                    className="password-input"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setShowGenerate(true)}
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
                {showGenerate && (
                  <button
                    type="button"
                    className="password-suggest-inline"
                    onClick={generateSecurePassword}
                  >
                    Suggérer un mot de passe sécurisé…
                  </button>
                )}
              </div>
            </div>

            <div className="contact-submit-wrapper">
              <button type="submit" className="contact-submit">
                CRÉER MON COMPTE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreerCompte;

