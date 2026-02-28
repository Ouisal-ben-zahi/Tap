import React, { useRef, useEffect, useState } from "react";
import "../css/Apropos.css";
import "../css/PourquoiTap.css";
import heroImage from "../assets/hero.jpg";

function About() {
  const headerRef = useRef(null);
  const blocksRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [blocksVisible, setBlocksVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHeaderVisible(entry.isIntersecting),
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setBlocksVisible(entry.isIntersecting),
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    if (blocksRef.current) observer.observe(blocksRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="about-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="about-overlay" />

      <div className="about-inner">
        <header
          ref={headerRef}
          className={`about-header ${headerVisible ? "about-header--visible" : ""}`}
        >
          <div className="tag about-eyebrow-tag">
            <span className="tag-inner">À PROPOS DE TAP</span>
          </div>
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

        <div
          ref={blocksRef}
          className={`about-blocks ${blocksVisible ? "about-blocks--visible" : ""}`}
        >
          <section className="about-block about-block--1">
            <h2>Notre vision et notre mission</h2>
            <p>
              Réconcilier le potentiel des talents avec le niveau
              d&apos;exigence du marché, en installant une nouvelle norme
              d&apos;employabilité pilotée par la donnée et l&apos;expérience.
            </p>
            <ul className="about-list">
              <li>Diagnostic précis et actionnable de l&apos;employabilité, au‑delà du CV.</li>
              <li>Parcours de micro‑learning ciblés sur les vrais écarts terrain.</li>
              <li>Portfolio vivant qui documente l&apos;évolution des compétences.</li>
            </ul>
          </section>

          <section className="about-block about-block--2">
            <h2>Pour les acteurs exigeants</h2>
            <p>
              TAP s&apos;adresse aux talents et aux organisations qui visent un
              recrutement raisonné, durable et aligné avec des enjeux
              stratégiques forts.
            </p>
            <ul className="about-list">
              <li>Jeunes diplômés à haut potentiel</li>
              <li>Profils en reconversion ambitieuse</li>
              <li>Talents tech et métiers d&apos;avenir</li>
              <li>Écoles et institutions académiques</li>
              <li>Entreprises en quête de précision</li>
            </ul>
          </section>

          <section className="about-block about-block--3">
            <h2>Recrutement haut de gamme</h2>
            <p>
              TAP transforme un flux de candidatures en un portefeuille
              restreint de talents sélectionnés, préparés et alignés avec votre
              niveau d&apos;exigence.
            </p>
            <ul className="about-list">
              <li>Moins de temps sur des CV peu qualifiés.</li>
              <li>Candidats acculturés aux fondamentaux du poste.</li>
              <li>Score d&apos;employabilité lisible et transparent.</li>
              <li>Meilleure rétention grâce à l&apos;accompagnement en amont.</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;
