import React from "react";
import { FaReact, FaNodeJs, FaPython,FaHtml5 } from "react-icons/fa";
import ExperienceCard from "./ExpreincesCard";

function Experiences() {
  return (
    <div className="bg-[#edf2f4] ">
      <div className="container mx-auto">
        <h1 className="text-center text-[12px] inconsolata-400 ">Explore My</h1>
        <h1 className="text-center text-[28px] lg:text-[36px] leading-7 mb-5  ibm-plex-sans-medium ">
          Experiences
        </h1>

        <div className="flex flex-col items-center sm:flex-row justify-center gap-10">
          <ExperienceCard
            jobRole="React.js Devloper Intern"
            companyName="The Baap Company."
            duration="Dec 2024 - Present"
            skills={"React,Html,Tailwind,Javascript"}
            icon={<FaReact />} //
          />
          <ExperienceCard
            jobRole="Web developer Intern"
            companyName="Vault of Code."
            duration="Jun 2024 - July 2024"
            skills={"HTML5,Javascript"}
            icon={<FaHtml5 />} 
          />
        </div>
      </div>
    </div>
  );
}

export default Experiences;
