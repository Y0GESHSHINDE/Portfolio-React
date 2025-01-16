import React from "react";
import SkillCard from "./SkillCard";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { SiFirebase, SiCplusplus,SiCanva,SiFigma,SiVercel, SiDatabricks } from "react-icons/si";
import {
  FaGithub,
  FaCode,
} from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";
// Array of skills
const skills = [ 
    { skill: "VS Code", icon: <FaCode /> }, // Visual Studio Code icon
    { skill: "Git & GitHub", icon: <FaGithub /> }, // Git & GitHub icon
    { skill: "Figma", icon: <SiFigma /> }, // Figma icon
    { skill: "Adobe XD", icon: <SiFigma /> }, // Using Figma icon for Adobe XD (as it's more commonly found)
    { skill: "Canva", icon: <SiCanva /> }, // Canva icon
    { skill: "Firebase", icon: <SiFirebase /> }, // Firebase icon
    { skill: "Vercel", icon: <SiVercel /> }, // Vercel icon
    { skill: "OBS Studio", icon: <BsCameraVideo /> }, // OBS Studio (video icon)
];

function ToolsPlatforms() {
  return (
    <div className="bg-[#edf2f4] ">
      <div className="mx-auto container p-10  ">
        <h1 className="text-center text-[28px] lg:text-[36px]  ibm-plex-sans-medium mb-2 ">
        Tools and Platforms
        </h1>

        <div className="  grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 mb-8 lg:grid-cols-6 xl:grid-cols-8 place-items-center items gap-10 md:ms-20 md:me-20">
          {skills.map((skill, index) => (
            <SkillCard key={index} Skill={skill.skill} icon={skill.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToolsPlatforms;
