import React from 'react';

interface VisionSectionProps {
  title: string;
  visionText: string[];
}

const VisionSection: React.FC<VisionSectionProps> = ({
  title,
  visionText
}) => {
  return (
    <section className="section section-alt">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center navy-text">
          {title}
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-md">
          {visionText.map((paragraph, index) => (
            <p key={index} className="text-lg mb-4 last:mb-0 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
