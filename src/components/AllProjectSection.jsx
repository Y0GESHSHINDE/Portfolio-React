import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
  // Define an array of project details
  const projects = [
    {
      projectName: "PhotoPalette",
      technologies: ["React", "Bootstrap", "JavaScript", "Firebase"],
      githubLink: "https://github.com/Y0GESHSHINDE/PhotoPallete",
      liveLink: "https://photopallete.vercel.app/",
    },
    {
      projectName: "QuickUnits",
      technologies: ["React", "Bootstrap", "JavaScript", "Firebase"],
      githubLink: "https://github.com/Y0GESHSHINDE/QuickUnits",
      liveLink: "https://quickunits.vercel.app/",
    },
    {
      projectName: "ChatBot Landing Page",
      technologies: ["React", "Bootstrap", "JavaScript"],
      githubLink: "https://customer-care-chatbot-service-landing-page--theta.vercel.app/",
      liveLink: "https://github.com/Y0GESHSHINDE/AI-Powered-Customer-Care-Chatbot-Service-Landing-Page",
    },
    
  ];

  return (
    <div className="bg-[#edf2f4]">
      <div className="container mx-auto p-10">
        <h1 className="text-center text-sm uppercase tracking-wide font-light text-gray-600">
          Browse My Recent
        </h1>
        <h1 className="text-center text-[28px] lg:text-[36px] ibm-plex-sans-medium mb-2">
          Projects
        </h1>

        <div className="flex flex-col items-center md:flex-row justify-center gap-5">
          {/* Map over the projects array and render a ProjectCard for each project */}
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              projectName={project.projectName}
              technologies={project.technologies}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
