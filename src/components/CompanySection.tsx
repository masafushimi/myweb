import React from 'react';

interface CompanyValue {
  title: string;
  description: string;
}

interface BusinessService {
  title: string;
  description: string;
  imageUrl?: string;
}

interface CompanySectionProps {
  title: string;
  companyName: string;
  companyDescription: string;
  values: CompanyValue[];
  services: BusinessService[];
}

const CompanySection: React.FC<CompanySectionProps> = ({
  title,
  companyName,
  companyDescription,
  values,
  services
}) => {
  return (
    <section className="section">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center navy-text">
          {title}
        </h2>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-bold mb-4 gold-text">{companyName}</h3>
          <p className="text-lg mb-6">{companyDescription}</p>
          
          <h4 className="text-xl font-bold mb-4 navy-text">企業理念・ビジョン</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {values.map((value, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h5 className="text-lg font-bold mb-2 gold-text">{value.title}</h5>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
          
          <h4 className="text-xl font-bold mb-4 navy-text">主要事業</h4>
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-center">
                {service.imageUrl && (
                  <div className="md:w-1/4">
                    <img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                )}
                <div className={service.imageUrl ? "md:w-3/4" : "w-full"}>
                  <h5 className="text-lg font-bold mb-2">{service.title}</h5>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
