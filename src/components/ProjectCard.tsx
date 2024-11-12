import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  details: string[];
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  details,
  technologies,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors h-full flex flex-col">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <ul className="space-y-2 mb-6 text-gray-300">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start space-x-2">
              <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto pt-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-900 rounded-full text-sm text-blue-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;