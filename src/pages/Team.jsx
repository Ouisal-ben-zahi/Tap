import React from "react";
import "../css/Team.css";
import heroImage from "../assets/bgpages.jpg";
import imadAvatar from "../assets/imad-el-boukhiari.png";
import zakariaAvatar from "../assets/zakaria-Ajmil.png";
import hajarAvatar from "../assets/Hajar-el-aouni.jpg";
import jawharAvatar from "../assets/Juwher Profil.jpg";
import ouissalAvatar from "../assets/Ouissal-ben-zahi.jpg";
import "../css/PourquoiTap.css"

const founders = [
  {
    name: "Imad El Boukhiari",
    role: "Co‑Founder",
    focus:
      "Co‑fondateur de TAP, Imad pilote la vision globale de la plateforme et le déploiement stratégique auprès des entreprises et partenaires. Entrepreneur engagé, il orchestre les partenariats clés et s’assure que TAP reste alignée sur les enjeux du marché de l’emploi et de l’upskilling.",
    avatar: imadAvatar,
  },
  {
    name: "zakaria Ajmil",
    role: "Co‑Founder",
    focus:
      "Co‑fondateur de TAP, Zakaria est le garant de l’exécution opérationnelle et de la qualité d’expérience pour les talents comme pour les recruteurs. Il veille à ce que chaque fonctionnalité soit concrètement utile, mesurable et fidèle à l’ambition d’excellence de TAP.",
    avatar: zakariaAvatar,
  },
];

const teamMembers = [
  {
    name: "Ouissal Ben Zahi",
    role: "Lead Full‑Stack",
    focus:
      "Lead Full‑Stack au cœur du produit TAP, Ouissal conçoit et développe l’architecture de la plateforme, du front à l’infrastructure backend. Elle s’assure que chaque parcours utilisateur soit fluide, robuste et prêt à évoluer à grande échelle.",
  },
  {
    name: "Hajar El Aouni",
    role: "AI Product Lead",
    avatar: hajarAvatar,
    focus:
      "AI Product Lead, Hajar imagine et pilote les expériences guidées par l’IA au sein de TAP. Elle travaille à transformer les données en recommandations concrètes pour aider chaque talent à mieux se positionner, monter en compétences et gagner en employabilité.",
  },
  {
    name: "Ayoub Zouani",
    role: "Product Designer UI/UX",
    avatar: jawharAvatar,
    focus:
      "Product Designer UI/UX, Ayoub façonne l’identité visuelle de TAP et conçoit des interfaces exigeantes mais accessibles. Son objectif : créer une expérience claire, esthétique et rassurante, qui valorise le parcours des talents et la marque employeur des entreprises.",
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
          <div className="tag team-eyebrow-tag"><span className="tag-inner">L&apos;ÉQUIPE TAP</span></div>
          
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
                  {member.avatar ? (
                    <img src={member.avatar} alt={member.name} />
                  ) : (
                    <span>
                      {member.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                  )}
                </div>
                <div className="team-card-body">
                  <div className="team-card-header">
                    <div>
                      <h2>{member.name}</h2>
                      <p className="team-role">{member.role}</p>
                    </div>
                    <div className="team-social">
                      <span className="team-social-icon">in</span>
                      <span className="team-social-icon">@</span>
                    </div>
                  </div>

                  {member.focus && (
                    <p className="team-focus">{member.focus}</p>
                  )}
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

