
import React, { useState, useMemo } from 'react';
import { SectionWrapper } from '../SectionWrapper';
import { PortfolioItem, PortfolioCategory } from '../../types';
import { PlusIconDemo, XIcon } from '../icons/DemoIcons'; // Using PlusIconDemo

const portfolioData: PortfolioItem[] = [
  { 
    id: 'project-webinar', 
    title: 'Automated Webinar System', 
    category: PortfolioCategory.DIGITAL_MARKETING, 
    imageUrl: 'https://picsum.photos/seed/workbrahim1/600/400', 
    description: 'Designed a webinar strategy for lead generation for Pulse Formations. Orchestrated the entire process. Developed an automated multi-channel sales funnel. Generated over 300 leads with a 40% show-up rate.',
    date: 'May 2024',
    client: 'Pulse Formations',
    technologies: ['Automation Tools', 'Email Marketing', 'Funnel Design']
  },
  { id: '1', title: 'E-commerce Platform', category: PortfolioCategory.WEBSITE, imageUrl: 'https://picsum.photos/seed/workweb1/600/400', description: 'Full-stack e-commerce website development with custom features.' },
  { id: '2', title: 'Task Management App', category: PortfolioCategory.APP, imageUrl: 'https://picsum.photos/seed/workapp1/600/400', description: 'Cross-platform mobile application for team collaboration.' },
  { id: '3', title: 'CRM Software Solution', category: PortfolioCategory.SOFTWARE, imageUrl: 'https://picsum.photos/seed/worksoft1/600/400', description: 'Custom CRM software for a growing enterprise.' },
  { id: '4', title: 'Brand Identity Design', category: PortfolioCategory.BRANDING, imageUrl: 'https://picsum.photos/seed/workbrand1/600/400', description: 'Complete branding package for a new lifestyle brand.' },
   { id: '5', title: 'Landing Page Optimization', category: PortfolioCategory.DIGITAL_MARKETING, imageUrl: 'https://picsum.photos/seed/workdm2/600/400', description: 'A/B testing and conversion rate optimization for key landing pages.' },
];

const categories = [
    PortfolioCategory.ALL, 
    PortfolioCategory.DIGITAL_MARKETING, 
    PortfolioCategory.WEBSITE,
    PortfolioCategory.APP,
    PortfolioCategory.SOFTWARE,
    PortfolioCategory.BRANDING, 
    PortfolioCategory.DESIGN,
];

const PortfolioCardDisplay: React.FC<PortfolioItem & { onClick: () => void }> = ({ title, category, imageUrl, onClick }) => (
  <div 
    className="group relative rounded-lg overflow-hidden shadow-md cursor-pointer bg-custom-card-bg"
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
    aria-label={`View project: ${title}`}
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
                <p className="text-sm text-custom-text-primary whitespace-pre-line leading-relaxed">{item.description || "Detailed project description goes here."}</p>
            </div>
        </div>
      </div>
    </div>
  );
};


export const WorksSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>(PortfolioCategory.ALL);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredWorks = useMemo(() => {
    if (activeFilter === PortfolioCategory.ALL) {
      return portfolioData;
    }
    return portfolioData.filter(item => item.category === activeFilter);
  }, [activeFilter, portfolioData]);

  return (
    <SectionWrapper 
      id="works" 
      titleTag="Portfolio"
      mainTitle="My Recent Works"
      subtitle="Showcasing a selection of projects that highlight my skills in digital marketing, web development, and design."
    >
      <div className="flex justify-center flex-wrap gap-2 mb-10">
        {categories.map(category => (
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
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredWorks.map(item => (
          <PortfolioCardDisplay key={item.id} {...item} onClick={() => setSelectedItem(item)} />
        ))}
      </div>
      {filteredWorks.length === 0 && (
        <p className="text-center text-custom-text-primary mt-8">No projects found for this category.</p>
      )}
      <ModalDisplay item={selectedItem} onClose={() => setSelectedItem(null)} />
    </SectionWrapper>
  );
};
