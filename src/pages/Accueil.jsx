import React from "react";
import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import PourquoiTap from "../components/PourquoiTap";
import TalentSection from "../components/CommentCaMarche";

const Accueil = () => {
  return (
    <div>
      <Hero />
      <PourquoiTap />
      <TalentSection />
    </div>
  );
};

export default Accueil; 