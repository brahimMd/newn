
import React, { useState, useMemo } from 'react';
import { SectionWrapper } from '../SectionWrapper';
import { PortfolioItem, PortfolioCategory } from '../../types'; // Reusing PortfolioItem for CertificationItem structure
import { PlusIconDemo, XIcon } from '../icons/DemoIcons';

const certificationsListArray: string[] = [
  'Meta Social Media Marketing Certificate', 'Google UX Design Certificate', 'Google Project Management Certificate',
  'Google Digital Marketing & Ecommerce Certificate', 'Hootsuite Social Media Marketing Certification',
  'Hootsuite Platform Certification', 'HubSpot Marketing Hub Software', 'Meta Certified Digital Marketing Associate',
  'System.io Automation & Funnels Certificate', 'Klaviyo Product Certification', 'ZoomInfo Marketing Certification',
  'Make Intermediate Automation Certificate', 'Workato automation pro 1 certification', 'HubSpot SEO Certificate',
];

// Transform certificationsList into PortfolioItem structure
const certificationsData: PortfolioItem[] = certificationsListArray.map((certName, index) => {
  // Create a URL-friendly seed for picsum photos
  const seedName = certName.replace(/[^a-zA-Z0-9]/g, '').substring(0, 15);
  return {
    id: `cert-${index + 1}`,
    title: certName,
    category: PortfolioCategory.CERTIFICATION,
    imageUrl: `https://picsum.photos/seed/${seedName || `cert${index}`}/600/400`, // Ensure seed is not empty
    description: `This certificate validates expertise in ${certName}. Acquired through dedicated study and practical application of skills in the respective domain.`,
    // Other fields like date, client, technologies can be omitted or set to generic values
  };
});


const categories = [
    PortfolioCategory.ALL, 
    PortfolioCategory.CERTIFICATION, 
];

const CertificationCardDisplay: React.FC<PortfolioItem & { onClick: () => void }> = ({ title, category, imageUrl, onClick }) => (
  <div 
    className="group relative rounded-lg overflow-hidden shadow-md cursor-pointer bg-custom-card-bg"
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
    aria-label={`View details for certification: ${title}`}
  >
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
      <div className="w-10 h-10 bg-custom-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 mb-2">
        <PlusIconDemo className="w-5 h-5 text-custom-dark-bg" />
      </div>
    </div>
    <div className="p-4">
      <p className="text-xs text-custom-text-secondary font-poppins uppercase tracking-wider mb-1">{category}</p>
      <h3 className="text-md font-poppins font-semibold text-custom-heading-text group-hover:text-custom-accent transition-colors">{title}</h3>
    </div>
  </div>
);

const ModalDisplay: React.FC<{ item: PortfolioItem | null; onClose: () => void }> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fade-in-up" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-custom-card-bg p-6 md:p-8 rounded-lg shadow-xl max-w-3xl w-full relative max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-custom-border-color scrollbar-track-transparent" 
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-custom-text-secondary hover:text-custom-accent text-3xl leading-none font-semibold z-10"
          aria-label="Close modal"
        >
          <XIcon className="w-6 h-6" />
        </button>
        <div className="grid md:grid-cols-2 gap-6">
            <div>
                 <img src={item.imageUrl.replace('/600/400', '/800/500')} alt={item.title} className="w-full h-auto object-cover rounded-md mb-4 md:mb-0" />
            </div>
            <div>
                <p className="text-xs text-custom-accent font-poppins uppercase tracking-wider mb-1">{item.category}</p>
                <h3 id="modal-title" className="text-2xl font-poppins font-semibold text-custom-heading-text mb-3">{item.title}</h3>
                
                {item.date && <p className="text-sm text-custom-text-secondary mb-1"><strong className="text-custom-text-primary">Date:</strong> {item.date}</p>}
                {item.client && <p className="text-sm text-custom-text-secondary mb-1"><strong className="text-custom-text-primary">Client:</strong> {item.client}</p>}
                {item.technologies && item.technologies.length > 0 && (
                  <p className="text-sm text-custom-text-secondary mb-3">
                    <strong className="text-custom-text-primary">Technologies:</strong> {item.technologies.join(', ')}
                  </p>
                )}
                <p className="text-sm text-custom-text-primary whitespace-pre-line leading-relaxed">{item.description || "Detailed information about this certification."}</p>
            </div>
        </div>
      </div>
    </div>
  );
};


export const CertificationsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>(PortfolioCategory.ALL);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredCertifications = useMemo(() => {
    if (activeFilter === PortfolioCategory.ALL || activeFilter === PortfolioCategory.CERTIFICATION) {
      return certificationsData;
    }
    return certificationsData.filter(item => item.category === activeFilter);
  }, [activeFilter]); // certificationsData is stable, so only activeFilter is needed as a dependency.

  return (
    <SectionWrapper 
      id="certifications" 
      titleTag="Credentials"
      mainTitle="My Certifications"
      subtitle="A showcase of my completed certifications and validated expertise in various digital marketing domains."
    >
      <div className="flex justify-center flex-wrap gap-2 mb-10">
        {categories.map(category => {
           // Only show "All" and "Certification" filters
           if (category !== PortfolioCategory.ALL && category !== PortfolioCategory.CERTIFICATION) {
            return null;
           }
           return (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`py-2 px-4 rounded-md font-poppins text-xs font-semibold transition-colors duration-200 border
                          ${activeFilter === category 
                            ? 'bg-custom-accent text-custom-dark-bg border-custom-accent' 
                            : 'bg-transparent text-custom-text-primary border-custom-border-color hover:bg-custom-accent hover:text-custom-dark-bg hover:border-custom-accent'
                          }`}
              aria-pressed={activeFilter === category}
            >
              {category}
            </button>
           );
        })}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredCertifications.map(item => (
          <CertificationCardDisplay key={item.id} {...item} onClick={() => setSelectedItem(item)} />
        ))}
      </div>
      {filteredCertifications.length === 0 && (
        <p className="text-center text-custom-text-primary mt-8">No certifications found for this category.</p>
      )}
      <ModalDisplay item={selectedItem} onClose={() => setSelectedItem(null)} />
    </SectionWrapper>
  );
};