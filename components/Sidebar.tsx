
import React from 'react';
import { NavItem } from '../types';
import { DownloadIconDemo, GithubIconDemo, LinkedinIconDemo, TwitterIconDemo } from './icons/DemoIcons'; // Using DemoIcons

interface SidebarProps {
  navItems: NavItem[];
  activeSection: string;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ navItems, activeSection, isOpen, onClose, onNavigate }) => {
  
  const handleNavLinkClick = (sectionId: string) => {
    onNavigate(sectionId); 
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 z-30 md:hidden"
          onClick={onClose}
        ></div>
      )}
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-screen w-[300px] bg-custom-card-bg text-custom-text-primary p-7 z-40 
                   transform transition-transform duration-300 ease-in-out flex flex-col items-center shadow-2xl
                   ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                   md:translate-x-0 md:flex`}
      >
        <div className="flex flex-col items-center text-center w-full mb-6"> {/* Reduced mb slightly */}
          <div className="relative mb-4">
            <img 
              src="profile-brahim-circular.jpg" // Updated to use the new circular image
              alt="Brahim LAGNAFDI" 
              className="rounded-full w-32 h-32 md:w-36 md:h-36 border-4 border-custom-accent object-cover shadow-md" // Ensured circular and accent border
            />
            {/* Online status dot can be re-added if desired, removed to match demo closely */}
          </div>
          <h1 className="text-xl md:text-2xl font-poppins font-semibold text-custom-heading-text">Brahim LAGNAFDI</h1>
          <p className="text-sm text-custom-text-secondary mt-1 font-poppins">
            Digital Marketer
          </p>

          <div className="flex space-x-3 my-5"> {/* Reduced space-x slightly */}
            <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center text-custom-text-secondary hover:text-custom-accent hover:bg-[#4A4B4C] transition-all duration-200">
                <GithubIconDemo className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/brahimlagnafdi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center text-custom-text-secondary hover:text-custom-accent hover:bg-[#4A4B4C] transition-all duration-200">
                <LinkedinIconDemo className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center text-custom-text-secondary hover:text-custom-accent hover:bg-[#4A4B4C] transition-all duration-200">
                <TwitterIconDemo className="w-4 h-4" />
            </a>
          </div>
        </div>

        <nav className="w-full flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-custom-border-color scrollbar-track-transparent pr-2"> {/* Added pr-2 for scrollbar space */}
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(item.id);
                  }}
                  className={`flex items-center py-2.5 px-3 rounded-md transition-all duration-200 ease-in-out group relative
                              ${activeSection === item.id 
                                ? 'text-custom-accent bg-black/20'  // Slightly darker active background
                                : 'text-custom-text-secondary hover:text-custom-heading-text hover:bg-black/10'
                              }`}
                >
                  {activeSection === item.id && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-3/4 w-[3px] bg-custom-accent rounded-r-sm"></span>
                  )}
                  {item.icon && React.cloneElement(item.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: `w-4 h-4 mr-3.5 flex-shrink-0 ${activeSection === item.id ? 'text-custom-accent' : 'text-custom-text-secondary group-hover:text-custom-accent'}`})}
                  <span className="font-poppins text-[13px] font-medium tracking-wide">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
          
        <a 
          href="./resume-brahim-lagnafdi.pdf" // Changed to relative path
          download="Brahim_LAGNAFDI_Resume.pdf"
          className="mt-auto mb-1 w-full bg-custom-accent text-custom-dark-bg py-3 px-4 rounded-lg flex items-center justify-center font-poppins text-[15px] font-medium tracking-wide hover:bg-yellow-400 transition-colors duration-200" // Adjusted text size and font weight
        >
          <DownloadIconDemo className="w-5 h-5 mr-2" />
          Download CV
        </a>
      </aside>
    </>
  );
};
