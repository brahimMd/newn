
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Sidebar } from './components/Sidebar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection'; 
import { ResumeSection } from './components/sections/ResumeSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ToolStackSection } from './components/sections/ToolStackSection'; // Added ToolStackSection
import { ContactSection } from './components/sections/ContactSection';
import { MenuIcon, XIcon } from './components/icons/MenuIcons';
import { NavItem } from './types';
import { HomeIconDemo, UserIconDemo, ServicesIconDemo, ResumeIconDemo, CheckBadgeIconDemo, ToolsIconDemo, ContactIconDemo, ArrowUpIconDemo } from './components/icons/DemoIcons'; // Added ToolsIconDemo


const navItemsData: NavItem[] = [
  { id: 'home', label: 'Home', icon: <HomeIconDemo className="w-4 h-4" /> },
  { id: 'about', label: 'About', icon: <UserIconDemo className="w-4 h-4" /> },
  { id: 'services', label: 'Services', icon: <ServicesIconDemo className="w-4 h-4" /> },
  { id: 'resume', label: 'Resume', icon: <ResumeIconDemo className="w-4 h-4" /> },
  { id: 'tool-stack', label: 'Tool Stack', icon: <ToolsIconDemo className="w-4 h-4" /> }, // Added Tool Stack
  { id: 'certifications', label: 'Certifications', icon: <CheckBadgeIconDemo className="w-4 h-4" /> },
  { id: 'contact', label: 'Contact', icon: <ContactIconDemo className="w-4 h-4" /> },
];

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const handleScroll = useCallback(() => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection = 'home'; 

    for (const sectionId of navItemsData.map(item => item.id)) {
      const section = sectionRefs.current[sectionId];
      if (section) {
        const sectionTop = section.offsetTop - 150; 
        const sectionBottom = sectionTop + section.offsetHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionBottom) {
          newActiveSection = sectionId;
          break; 
        }
      }
    }
    setActiveSection(newActiveSection);

    if (pageYOffset > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  }, []); // navItemsData removed as it's constant now

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    navItemsData.forEach(item => {
      sectionRefs.current[item.id] = document.getElementById(item.id);
    });
    
    handleScroll(); // Initial call to set active section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]); // navItemsData removed
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 0; 

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsSidebarOpen(false); 
  };


  return (
    <div className="font-sans bg-custom-dark-bg text-custom-text-primary">
      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-custom-card-bg z-50 p-4 flex justify-between items-center shadow-lg">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNavigate('home');}} className="text-xl font-poppins font-bold">
          Brahim<span className="text-custom-accent">L.</span>
        </a>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
          className="text-custom-accent p-2 focus:outline-none"
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
          aria-expanded={isSidebarOpen}
        >
          {isSidebarOpen ? <XIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
        </button>
      </header>

      <Sidebar 
        navItems={navItemsData} 
        activeSection={activeSection}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onNavigate={handleNavigate}
      />

      <main className="md:ml-[300px] pt-16 md:pt-0">
        <div id="home" ref={el => { sectionRefs.current['home'] = el; }}><HeroSection /></div>
        <div id="about" ref={el => { sectionRefs.current['about'] = el; }}><AboutSection /></div>
        <div id="services" ref={el => { sectionRefs.current['services'] = el; }}><ServicesSection /></div>
        <div id="resume" ref={el => { sectionRefs.current['resume'] = el; }}><ResumeSection /></div>
        <div id="tool-stack" ref={el => { sectionRefs.current['tool-stack'] = el; }}><ToolStackSection /></div> {/* Added Tool Stack Section */}
        <div id="certifications" ref={el => { sectionRefs.current['certifications'] = el; }}><CertificationsSection /></div> 
        <div id="contact" ref={el => { sectionRefs.current['contact'] = el; }}><ContactSection /></div>
      </main>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-custom-accent text-custom-dark-bg p-3 rounded-full shadow-lg hover:bg-opacity-80 transition-opacity duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUpIconDemo className="w-5 h-5" />
        </button>
      )}

      <footer className="text-center py-8 text-xs text-custom-text-secondary border-t border-custom-border-color md:ml-[300px]">
        © {new Date().getFullYear()} Brahim LAGNAFDI. All Rights Reserved. <br/>
        Design inspired by RyanCV.
      </footer>
    </div>
  );
};

export default App;
