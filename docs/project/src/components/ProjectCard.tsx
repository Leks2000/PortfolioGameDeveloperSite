import React from 'react';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  repoUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, repoUrl }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a 
          href={repoUrl}
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300"
        >
          <Github className="w-4 h-4" />
          View Repository
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;