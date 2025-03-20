import React from 'react';

interface Achievement {
  title: string;
  description: string;
  icon?: string;
}

interface AchievementsSectionProps {
  title: string;
  achievements: Achievement[];
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  title,
  achievements
}) => {
  return (
    <section className="section section-alt">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center navy-text">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="card bg-white p-6 h-full">
              {achievement.icon && (
                <div className="mb-4 text-center">
                  <span className="inline-block p-3 rounded-full bg-blue-50">
                    <img src={achievement.icon} alt="" className="w-8 h-8" />
                  </span>
                </div>
              )}
              <h3 className="text-xl font-bold mb-3 gold-text">{achievement.title}</h3>
              <p className="text-gray-700">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
