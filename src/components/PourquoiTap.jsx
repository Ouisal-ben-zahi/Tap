import React from "react";
import "../css/PourquoiTap.css";
import bgSections from "../assets/bgsections.jpg";

const PourquoiTap = () => {
  return (
    <section
      className="pourquoi-section"
      style={{ backgroundImage: `url(${bgSections})` }}
    >
      <div className="pourquoi-overlay" />

      <div className="pourquoi-inner">
        <header className="pourquoi-header">
          <h2>POURQUOI TAP ?</h2>

          <p className="pourquoi-note">
            Le recrutement décalé repose sur des CV.
          </p>
          <p className="pourquoi-note">
            TAP repose sur des talents révélés.
          </p>
          <p className="pourquoi-subtitle">
            Chaque candidat visible sur TAP est&nbsp;:
          </p>
        </header>

        <div className="pourquoi-tags">
          <div className="tag"><span className="tag-inner">ANALYSE PAR IA</span></div>
          <div className="tag"><span className="tag-inner">STRUCTURÉ ET SCORÉ</span></div>
          <div className="tag"><span className="tag-inner">ACCOMPAGNÉ POUR PROGRESSER</span></div>
          <div className="tag"><span className="tag-inner">PRÊT À ÊTRE ÉVALUÉ PAR UNE ENTREPRISE</span></div>
        </div>

        <p className="pourquoi-note">
          Vous ne recevez pas des CV.
        </p>
        <p className="pourquoi-note">
          Vous accédez à des profils préparés.
        </p>

        <div className="pourquoi-columns">
          <div>
            <div className="pourquoi-block">
              <div className="block-title">POUR LES ENTREPRISES</div>
              <div className="block-body">
                <p>GARDEZ DU TEMPS POUR VOS VRAIS SUJETS.</p>
                <p>DES TALENTS PRÉPARÉS, PRÊTS À CONTRIBUER.</p>
                <p>UNE SÉLECTION SÉCURISÉE PAR LES DONNÉES.</p>
                <p>MOINS DE RISQUE SUR LES DÉBUTS D’ESSAI.</p>
              </div>
            </div>
            <div className="block-footer">
              RECRUTEZ MIEUX, PLUS VITE ET PLUS EN CONFIANCE.
            </div>
          </div>

          <div>
            <div className="pourquoi-block">
              <div className="block-title">POUR LES CANDIDATS</div>
              <div className="block-body">
                <p>UNE LECTURE DE VOS FORCES, PAS JUSTE DE VOTRE CV.</p>
                <p>UN PARCOURS DE FORMATION RENFORÇANT VOS ATOUTS.</p>
                <p>DES ENTREPRISES QUI VOUS VOIENT COMME UN TALENT.</p>
                <p>UN ACCOMPAGNEMENT POUR RÉUSSIR VOS PREMIERS MOIS.</p>
              </div>
            </div>

            <div className="block-footer">
              100 % gratuit.
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PourquoiTap;

