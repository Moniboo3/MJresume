import React from 'react';
import { Trophy } from 'lucide-react';

interface AchievementCardProps {
  title: string;
  description: string;
  year: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  description,
  year,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
      <div className="flex items-start space-x-4">
        <div className="bg-blue-400/10 rounded-full p-2">
          <Trophy className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">{title}</h3>
            <span className="text-blue-400">{year}</span>
          </div>
          <p className="text-gray-300 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;