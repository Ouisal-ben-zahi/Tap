import React from "react";
import "../css/Team.css";
import heroImage from "../assets/hero.jpg";

const founders = [
  {
    name: "Imad El Boukhiari",
    role: "Co‑Founder",
    focus:
      "Co‑fondateur de TAP, en charge de la vision globale et du déploiement stratégique auprès des partenaires et entreprises.",
  },
  {
    name: "zakaria Ajmil",
    role: "Co‑Founder",
    focus:
      "Co‑fondateur de TAP, garant de l’exécution opérationnelle et de l’alignement entre produit, marché et expérience talents.",
  },
];

const teamMembers = [
  {
    name: "Ouissal Ben Zahi",
    role: "Lead Full‑Stack",
    focus:
      "Architecture et développement de la plateforme TAP, de l’interface aux services backend.",
  },
  {
    name: "Hajar El Aouni",
    role: "AI Product Lead",
    focus:
      "Conception des parcours et des fonctionnalités pilotées par l’IA au service de l’employabilité.",
  },
  {
    name: "Ayoub Zouani",
    role: "Product Designer UI/UX",
    focus:
      "Expérience utilisateur et identité visuelle, au service d’une interface à la fois élégante et exigeante.",
  }
];

function Team() {
  const allMembers = [...founders, ...teamMembers];

  return (
    <section
      className="team-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="team-overlay" />

      <div className="team-inner">
        <header className="team-header">
          <p className="team-eyebrow">L&apos;ÉQUIPE TAP</p>
          <h1>
            Une équipe fondatrice et opérationnelle réunie autour d&apos;une
            ambition commune&nbsp;: élever les standards de l&apos;employabilité.
          </h1>
          <p>
            TAP est portée par deux co‑fondateurs et une équipe cœur mêlant
            produit, IA, design et ingénierie, pour concevoir une expérience à
            la fois exigeante, fluide et profondément utile aux talents comme
            aux entreprises.
          </p>
        </header>

        <div className="team-list">
          {allMembers.map((member, index) => (
            <div
              key={member.name}
              className={`team-row ${index % 2 === 1 ? "team-row-alt" : ""}`}
            >
              <article className="team-card">
                <div className="team-avatar">
                  <span>
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                </div>
                <div className="team-card-body">
                  <h2>{member.name}</h2>
                  <p className="team-role">{member.role}</p>
                  <p className="team-focus">{member.focus}</p>
                  <div className="team-card-footer">
                    <div className="team-bio-link-wrapper">
                      <span className="team-bio-text">Découvrir sa bio</span>
                      <span className="team-bio-arrow">↓</span>
                    </div>
                    <div className="team-social">
                      <span className="team-social-icon">in</span>
                      <span className="team-social-icon">@</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;

