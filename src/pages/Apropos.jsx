import React from "react";
import "../css/Apropos.css";
import heroImage from "../assets/hero.jpg";

function About() {
  return (
    <section
      className="about-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="about-overlay" />

      <div className="about-inner">
        <header className="about-header">
          <p className="about-eyebrow">À PROPOS DE TAP</p>
          <h1>
            La plateforme d&apos;employabilité qui élève chaque talent au
            niveau d&apos;exigence des meilleures entreprises.
          </h1>
          <p>
            TAP orchestre l&apos;analyse de CV, le scoring d&apos;employabilité
            et le micro‑learning pour transformer des profils prometteurs en
            candidats immédiatement opérationnels, évalués selon des standards
            dignes des environnements les plus exigeants.
          </p>
        </header>

        <div className="about-grid">
          <section className="about-column">
            <h2>Notre vision et notre mission</h2>
            <p>
              Réconcilier le potentiel des talents avec le niveau
              d&apos;exigence du marché, en installant une nouvelle norme
              d&apos;employabilité pilotée par la donnée et l&apos;expérience.
            </p>
            <ul className="about-list">
              <li>
                Offrir à chaque candidat un diagnostic précis et actionnable de
                son employabilité, au‑delà du CV et du diplôme.
              </li>
              <li>
                Concevoir des parcours de micro‑learning ciblés qui adressent
                les vrais écarts observés sur le terrain.
              </li>
              <li>
                Générer un portfolio vivant qui documente, par la preuve,
                l&apos;évolution des compétences et des réalisations.
              </li>
            </ul>
          </section>

          <section className="about-column">
            <h2>Un dispositif pensé pour les acteurs exigeants</h2>
            <p>
              TAP s&apos;adresse aux talents et aux organisations qui visent un
              recrutement raisonné, durable et aligné avec des enjeux
              stratégiques forts.
            </p>
            <div className="about-tags">
              <span className="about-tag">Jeunes diplômés à haut potentiel</span>
              <span className="about-tag">Profils en reconversion ambitieuse</span>
              <span className="about-tag">Talents tech &amp; métiers d&apos;avenir</span>
              <span className="about-tag">Écoles &amp; institutions académiques</span>
              <span className="about-tag">Entreprises en quête de précision</span>
            </div>
          </section>

          <aside className="about-highlight">
            <h3>Une expérience de recrutement haut de gamme</h3>
            <p>
              TAP transforme un flux de candidatures en un portefeuille
              restreint de talents sélectionnés, préparés et alignés avec votre
              niveau d&apos;exigence.
            </p>
            <ul>
              <li>Réduction drastique du temps passé sur des CV peu qualifiés.</li>
              <li>
                Des candidats déjà acculturés aux fondamentaux du poste et de
                votre environnement.
              </li>
              <li>
                Un score d&apos;employabilité lisible pour comparer les profils
                en toute transparence.
              </li>
              <li>
                Une meilleure rétention dès l&apos;amont, grâce à un
                accompagnement structuré du candidat avant même son arrivée.
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;