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
    role: "Co‑Founder & CEO",
    avatar: imadAvatar,
    focusItems: [
      "Expert en IA (LLM) & systèmes intelligents",
      "Spécialiste blockchain & finance décentralisée",
      "Conception scoring & matching intelligent",
      "Vision produit & stratégie technologique TAP",
    ],
  },
  {
    name: "Zakaria Ajmil",
    role: "Co‑Founder & COO",
    avatar: zakariaAvatar,
    focusItems: [
      "Professeur d’économie",
      "Expert en marketing & communication stratégique",
      "Structuration acquisition & activation marché",
      "Déploiement partenariats universités & entreprises",
    ],
  },
];

const teamMembers = [
  {
    name: "Hajar El Aouni",
    role: "AI Product Lead",
    avatar: hajarAvatar,
    focusItems: [
      "Intégration modèles IA & LLM",
      "Optimisation scoring & matching",
      "Structuration logique produit IA",
      "Amélioration continue des performances",
    ],
  },
  {
    name: "Ouissal Ben Zahi",
    role: "Lead Full‑Stack Developer",
    avatar: ouissalAvatar,
    focusItems: [
      "Architecture backend & API",
      "Déploiement cloud & scalabilité",
      "Sécurisation & gestion des données",
      "Intégration IA côté infrastructure",
    ],
  },
  {
    name: "Ayoub Zouani",
    role: "Product Designer (UI/UX)",
    avatar: jawharAvatar,
    focusItems: [
      "Expérience utilisateur candidat & recruteur",
      "Design system & interfaces scalables",
      "Optimisation adoption & conversion",
      "Cohérence visuelle & fluidité parcours",
    ],
  },
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

                  {Array.isArray(member.focusItems) && member.focusItems.length > 0 && (
                    <div className="team-focus-multi">
                      {member.focusItems.map((item) => (
                        <p key={item} className="team-focus-line">
                          {item}
                        </p>
                      ))}
                    </div>
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

