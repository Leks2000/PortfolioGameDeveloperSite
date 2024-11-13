import React from 'react';
import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  url: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail, url }) => {
  return (
    <a 
      href={url}
      className="group relative block bg-gray-800 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
    >
      <img 
        src={thumbnail} 
        alt={title} 
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <Play className="w-16 h-16 text-white" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </a>
  );
};

export default VideoCard;