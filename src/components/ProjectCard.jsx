import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ projectName, technologies, githubLink, liveLink }) {
  return (
    <div className="max-w-sm border-[2px] border-gray-500 rounded-lg   p-5 m-3 w-[300px] h-[200px] text-center">
      <h2 className="text-2xl font-semibold mb-3">{projectName}</h2>
      <p className="text-gray-600 mb-4">
        <strong>Technologies:</strong> {technologies.join(", ")}
      </p>
      <div className="flex justify-around mt-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center  text-black px-4 py-2 rounded-lg border-[2px] border-black"
        >
          <FaGithub className="mr-2" /> GitHub
        </a>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center  text-black px-4 py-2 rounded-lg border-[2px] border-black"
        >
          <FaExternalLinkAlt className="mr-2" /> Live
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
