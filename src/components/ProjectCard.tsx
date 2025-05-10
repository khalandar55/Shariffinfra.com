import React from 'react';

interface ProjectCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white shadow-md rounded-lg cursor-pointer hover:shadow-xl transition-all text-center w-full max-w-md mx-auto"
  >
    <div className="w-full overflow-hidden rounded-t-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-contain"
      />
    </div>
    <div className="py-4 px-2">
      <p className="font-semibold text-center">{title}</p>
    </div>
  </div>
);

export default ProjectCard;
