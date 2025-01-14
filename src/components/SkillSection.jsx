import React from "react";
import SkillCard from "./SkillCard";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { SiFirebase, SiCplusplus, SiDatabricks } from "react-icons/si";

// Array of skills
const skills = [
  { skill: "HTML", icon: <FaHtml5 /> },
  { skill: "CSS", icon: <FaCss3Alt /> },
  { skill: "Bootstrap", icon: <FaBootstrap /> },
  { skill: "JavaScript", icon: <FaJsSquare /> },
  { skill: "React", icon: <FaReact /> },
  { skill: "Firebase", icon: <SiFirebase /> },
  { skill: "C++", icon: <SiCplusplus /> },
  { skill: "Data Structures", icon: <SiDatabricks /> },
];

function SkillSection() {
  return (
    <div className="bg-[#edf2f4] ">
      <div className="mx-auto container p-5">
        <h1 className="text-center text-[12px] inconsolata-400 ">
          Discover My Proficiencies
        </h1>
        <h1 className="text-center text-[28px] lg:text-[36px]  ibm-plex-sans-medium mb-2 ">
          Skills
        </h1>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 place-items-center items gap-10 md:ms-20 md:me-20">
          {skills.map((skill, index) => (
            <SkillCard key={index} Skill={skill.skill} icon={skill.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
