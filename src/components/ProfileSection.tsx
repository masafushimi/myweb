import React from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface ProfileSectionProps {
  title: string;
  basicInfo: {
    name: string;
    position: string;
    education: string;
    birthYear: string;
  };
  timeline: TimelineItem[];
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  title,
  basicInfo,
  timeline
}) => {
  return (
    <section className="section">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center navy-text">
          {title}
        </h2>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-bold mb-4 gold-text">基本情報</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-lg mb-2"><span className="font-bold">氏名:</span> {basicInfo.name}</p>
              <p className="text-lg mb-2"><span className="font-bold">役職:</span> {basicInfo.position}</p>
            </div>
            <div>
              <p className="text-lg mb-2"><span className="font-bold">学歴:</span> {basicInfo.education}</p>
              <p className="text-lg mb-2"><span className="font-bold">生年:</span> {basicInfo.birthYear}</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-6 gold-text text-center">経歴</h3>
        <div className="ml-4">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="mb-2">
                <span className="font-bold text-lg navy-text">{item.year}</span>
              </div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
