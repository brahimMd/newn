
import React from 'react';
import { FunFactItem } from '../../types';
import { BriefcaseIconDemo, CheckBadgeIconDemo, LightBulbIconDemo } from '../icons/DemoIcons'; // Using demo icons

const funFactsData: FunFactItem[] = [
  { count: "2+", label: "Years Experience", icon: <BriefcaseIconDemo className="w-5 h-5 text-custom-accent" /> },
  { count: "1+", label: "Project Detailed", icon: <LightBulbIconDemo className="w-5 h-5 text-custom-accent" /> },
  { count: "14+", label: "Certifications Earned", icon: <CheckBadgeIconDemo className="w-5 h-5 text-custom-accent" /> },
];

const FunFact: React.FC<FunFactItem> = ({ count, label, icon }) => (
  <div className="flex items-center space-x-3">
    {/* Icon can be added here if desired, but demo doesn't have prominent icons in this spot */}
    <div>
      <p className="text-3xl md:text-4xl font-poppins font-bold text-custom-accent">{count}</p>
      <p className="text-xs font-poppins text-custom-text-secondary uppercase tracking-wider">{label}</p>
    </div>
  </div>
);

export const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-custom-dark-bg text-custom-heading-text relative overflow-hidden px-6 md:px-10 py-20 md:py-0 animate-fade-in-up">
      <div className="max-w-4xl">
        <p className="text-lg md:text-xl font-poppins text-custom-text-primary mb-2">
          Hello, I'm Brahim LAGNAFDI.
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-extrabold mb-6 leading-tight">
          Digital Marketer and <span className="text-custom-accent">Professional</span> Based in Morocco.
        </h1>
        <p className="text-md md:text-lg text-custom-text-secondary mb-10 max-w-2xl leading-relaxed">
          A Master's graduate skilled in marketing automation and B2B/B2C lead acquisition. I develop innovative, data-driven strategies for measurable growth and combine creativity with technology to optimize marketing performance.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8 max-w-xl">
          {funFactsData.map((fact) => (
            <FunFact key={fact.label} {...fact} />
          ))}
        </div>
      </div>
    </div>
  );
};
