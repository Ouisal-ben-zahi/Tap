import React from "react";
import Hero from "../components/Hero";
import HeroStats from "../components/HeroStats";
import PourquoiTap from "../components/PourquoiTap";
import TalentSection from "../components/CommentCaMarche";

const Accueil = () => {
  return (
    <div>
      <Hero />
      <HeroStats />
      <PourquoiTap />
      <TalentSection />
    </div>
  );
};

export default Accueil; 