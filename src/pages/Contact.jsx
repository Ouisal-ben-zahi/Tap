import React from "react";
import "../css/Contact.css";
import heroImage from "../assets/bgpages.jpg";

function Contact() {
  return (
    <section
      className="contact-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="contact-inner">
        <header className="contact-header">
          <div className="contact-heading">
            <div className="contact-heading-sub">CONTACT</div>
            <div className="contact-heading-main">PARLONS DE VOTRE PROJET</div>
          </div>
          <p>
            Une question, un besoin de recrutement ou l’envie de tester TAP ?<br />
            Envoyez-nous un message, nous revenons vers vous rapidement.
          </p>
        </header>

        <div className="contact-grid">
          <form
            className="contact-form"
            method="POST"
            action="https://formsubmit.co/ouissalbenzahi@gmail.com"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="Nouveau message depuis le site TAP"
            />

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Nom et prénom</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Votre nom complet"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="vous@gmail.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="company">Entreprise (facultatif)</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Nom de votre entreprise"
                />
              </div>
              <div className="form-field">
                <label htmlFor="topic">Sujet</label>
                <input
                  id="topic"
                  name="subject"
                  type="text"
                  placeholder="Recrutement, partenariat..."
                  required
                />
              </div>
            </div>

            <div className="form-field form-field-full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Expliquez-nous votre besoin ou votre projet."
                required
              />
            </div>

            <div className="contact-submit-wrapper">
              <button type="submit" className="contact-submit">
                ENVOYER LE MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;