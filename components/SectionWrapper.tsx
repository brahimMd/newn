
import React from 'react';

interface SectionWrapperProps {
  id?: string;
  titleTag?: string; // The small all-caps tag (e.g., "ABOUT ME")
  mainTitle?: string; // The main section heading
  subtitle?: string; // Optional subtitle below main heading
  children: React.ReactNode;
  className?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, titleTag, mainTitle, subtitle, children, className = '' }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-28 px-4 sm:px-6 lg:px-10 min-h-screen flex flex-col justify-center items-center animate-fade-in-up ${className}`}
    >
      <div className="max-w-6xl mx-auto w-full">
        {(titleTag || mainTitle) && (
          <div className="text-left mb-12 md:mb-16 animate-slide-in-left">
            {titleTag && (
              <span className="section-title-tag">
                {titleTag}
              </span>
            )}
            {mainTitle && (
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-custom-heading-text mt-1">
                {mainTitle}
              </h2>
            )}
            {subtitle && <p className="text-md text-custom-text-secondary mt-3 font-poppins max-w-xl">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
