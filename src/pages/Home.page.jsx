import React from "react";
import {
  AboutComponents,
  ContainerComponents,
  ExperienceComponents,
  HeroComponents,
  NavComponents,
  SkillsComponents,
} from "../components";

const HomePage = () => {
  return (
    <div className=" snap-y snap-mandatory h-[100vh] overflow-y-scroll scroll-smooth">
      <NavComponents />
      <ContainerComponents>
        <HeroComponents />
        <AboutComponents />
        <ExperienceComponents />
        <SkillsComponents />
      </ContainerComponents>
    </div>
  );
};

export default HomePage;
