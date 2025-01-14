import React from "react";
import ProjectCard from "./ProjectCard";
import { Link } from 'react-router-dom';

function ProjectSection() {
  return (
    <div className="bg-[#edf2f4] ">
      <div className="container mx-auto p-10   ">
        <h1 className="text-center text-sm uppercase tracking-wide font-light text-gray-600">
          Browse My Recent
        </h1>
        <h1 className="text-center text-[28px] lg:text-[36px]  ibm-plex-sans-medium mb-2 ">
          Projects
        </h1>

        <div className="flex flex-col items-center sm:flex-row justify-center gap-5" >
          <ProjectCard
            projectName="Awesome Project"
            technologies={["React", "Tailwind CSS", "JavaScript"]}
            githubLink="https://github.com/yourusername/project-repo"
            liveLink="https://your-live-project-link.com"
          />
          <ProjectCard
            projectName="Awesome Project"
            technologies={["React", "Tailwind CSS", "JavaScript"]}
            githubLink="https://github.com/yourusername/project-repo"
            liveLink="https://your-live-project-link.com"
          />
        </div>

        <div className="flex justify-center" >
         <Link to={"#"} className="p-2 border-[2px] border-gray-500 rounded-lg mt-3 ">Viwe All Project</Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
