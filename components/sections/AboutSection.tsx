
import React from 'react';
import { SectionWrapper } from '../SectionWrapper';

// Personal Info data - can be expanded
const personalInfo = [
  { label: "Name", value: "Brahim LAGNAFDI" },
  { label: "Email", value: "lagnafdi.brahim@gmail.com", href: "mailto:lagnafdi.brahim@gmail.com" },
  { label: "Residence", value: "Morocco" },
  { label: "Freelance", value: "Available" }, // Example, can be dynamic
];

export const AboutSection: React.FC = () => {
  return (
    <SectionWrapper 
      id="about" 
      titleTag="About Me"
      mainTitle="Know Me More"
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Image - Hidden on small, shown on large */}
        <div className="lg:col-span-4 hidden lg:block">
          <img 
            src="https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/DSC03065-1-scaled.jpg" 
            alt="Brahim LAGNAFDI - About" 
            className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[3/4]"
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="lg:col-span-8">
          {/* Image for smaller screens, above text */}
          <img 
            src="https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/DSC03065-1-scaled.jpg" 
            alt="Brahim LAGNAFDI - About" 
            className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3] mb-8 lg:hidden" // Show on small, hide on large
          />
          <h3 className="text-2xl md:text-3xl font-poppins font-semibold text-custom-heading-text mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            I'm <span className="text-custom-accent">Brahim LAGNAFDI</span>, a Digital Marketer
          </h3>
          <p className="text-custom-text-primary mb-4 leading-relaxed">
            With a Master's degree in Digital Marketing, I specialize in marketing automation and effective B2B/B2C lead acquisition. My expertise lies in leveraging automation tools and crafting targeted email marketing campaigns to develop innovative strategies that deliver measurable results.
          </p>
          <p className="text-custom-text-primary mb-8 leading-relaxed">
            I blend creativity with data-driven insights to drive marketing growth and am passionate about using technology to optimize performance and achieve business objectives. I'm committed to continuous learning and staying ahead in the dynamic digital landscape.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {personalInfo.map(info => (
              <div key={info.label} className="font-poppins text-sm">
                <span className="font-semibold text-custom-heading-text mr-2">{info.label}:</span>
                {info.href ? (
                  <a href={info.href} className="text-custom-text-primary hover:text-custom-accent transition-colors">{info.value}</a>
                ) : (
                  <span className="text-custom-text-primary">{info.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
