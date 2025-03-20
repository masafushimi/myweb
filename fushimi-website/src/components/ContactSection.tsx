import React from 'react';

interface ContactSectionProps {
  title: string;
  contactMessage: string;
  contactButtonText: string;
  recruitButtonText: string;
  socialLinks: {
    platform: string;
    url: string;
    icon?: string;
  }[];
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  contactMessage,
  contactButtonText,
  recruitButtonText,
  socialLinks
}) => {
  return (
    <section className="section section-alt">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center navy-text">
          {title}
        </h2>
        
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <p className="text-lg mb-8">{contactMessage}</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a 
              href="#contact" 
              className="btn btn-primary"
            >
              {contactButtonText}
            </a>
            <a 
              href="#recruit" 
              className="btn btn-accent"
            >
              {recruitButtonText}
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.icon ? (
                  <img src={link.icon} alt={link.platform} className="w-8 h-8" />
                ) : (
                  <span className="text-2xl">{link.platform}</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
