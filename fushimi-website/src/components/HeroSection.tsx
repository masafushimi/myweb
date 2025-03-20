import React from 'react';

interface HeroSectionProps {
  name: string;
  title: string;
  catchphrase: string;
  vision: string;
  imageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  title,
  catchphrase,
  vision,
  imageUrl
}) => {
  return (
    <section className="hero-section">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {name}
            </h1>
            <p className="text-xl mb-4 text-gray-600">{title}</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 navy-text accent-text">
              {catchphrase}
            </h2>
            <p className="text-lg mb-8">{vision}</p>
            <button className="btn btn-primary">詳しく見る</button>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={imageUrl || "/images/profile-placeholder.jpg"}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
