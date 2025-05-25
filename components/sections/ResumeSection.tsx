

import React from 'react';
import { SectionWrapper } from '../SectionWrapper';
import { TimelineEvent, CircularSkillItem, LanguageSkillDetail } from '../../types'; // Removed SkillType.Certification as it's no longer directly used here
import { BriefcaseIconDemo, AcademicCapIconDemo, UsersIconDemo, CogIconDemo, LanguageIconDemo, CheckBadgeIconDemo, BoltIconDemo } from '../icons/DemoIcons';

const experienceData: TimelineEvent[] = [
  { date: 'Sep 2024 - Present', title: 'Assistant Marketing Digital', institution: 'IAWEB.DEV', location: 'Marrakech', description: 'Elaboration and implementation of B2B and B2C marketing strategies for a cosmetics brand. Management of online presence, content creation, sales funnels, and lead generation. Collaboration with the marketing team on inbound and outbound strategies.' },
  { date: 'Feb 2024 - May 2024', title: 'Marketing Intern (PFE)', institution: 'Digital Speak', location: 'Marrakech', description: 'Developed marketing strategies, automated email campaigns, and integrated third-party tools. Established an automated marketing ecosystem for lead acquisition.' },
  { date: 'Feb 2024 - May 2024', title: 'UX Research Intern', institution: 'Capturelife', location: 'Béni Mellal', description: 'Conducted UX research for the agency\'s website including analysis, design exercises, and usability tests. Formulated recommendations to improve UX.' },
  { date: 'Jun 2022 - Jul 2022', title: 'Sales Intern', institution: 'Afourar Auto Renault - Dacia', location: 'Béni Mellal', description: 'Assisted with sales presentations and client file management. Gained exposure to automotive sales processes and customer service best practices.' },
  { date: 'Jul 2022 - Aug 2022', title: 'Observation Intern', institution: 'OCP Group', location: 'Khouribga', description: 'Acquired knowledge on inventory management and internal collaboration within a large organization.' },
];

const educationData: TimelineEvent[] = [
  { date: 'Sep 2019 - Jun 2024', title: 'Master in Digital Marketing', institution: 'ENCG (National School of Commerce and Management)', location: 'Béni Mellal', description: 'Graduated with a comprehensive Master\'s degree focusing on modern digital marketing strategies and practices.' },
];

const extracurricularData: TimelineEvent[] = [
  { date: '2022', title: 'Treasurer', institution: 'Rotaract-ENCG Béni Mellal', description: 'Managed club finances and ensured appropriate allocation of funds for initiatives.'},
  { date: '2022', title: 'Assistant Treasurer', institution: 'ADE-ENCG Béni Mellal', description: 'Supported treasury functions and contributed to organizing various club events and activities.'}
];

const professionalSkills: CircularSkillItem[] = [
  { name: 'Content Marketing', level: 85 },
  { name: 'SEO', level: 75 },
  { name: 'Marketing Automation', level: 80 },
  { name: 'Lead Generation', level: 90 },
];

const languageSkills: LanguageSkillDetail[] = [
  { name: 'Arabic', level: 10, levelDescription: 'Native' }, 
  { name: 'French', level: 9, levelDescription: 'Advanced' },
  { name: 'English', level: 9, levelDescription: 'Advanced' },
];

// certificationsList is removed from here and will be in CertificationsSection.tsx


const TimelineItemDisplay: React.FC<TimelineEvent> = ({ date, title, institution, description, location }) => (
  <div className="relative pl-8 pb-8 group">
    <div className="absolute left-0 top-1 w-3 h-3 bg-custom-border-color rounded-full transition-colors duration-300 group-hover:bg-custom-accent"></div>
    <div className="absolute left-[5px] top-5 w-[2px] h-[calc(100%-1.25rem)] bg-custom-border-color"></div>
    
    <span className="block text-xs text-custom-text-secondary font-poppins font-medium mb-1">{date} {location && `- ${location}`}</span>
    <h3 className="text-lg font-poppins font-semibold text-custom-heading-text mb-1.5">{title}</h3>
    <p className="text-sm text-custom-text-secondary mb-2 font-medium">{institution}</p>
    <p className="text-sm text-custom-text-primary leading-relaxed">{description}</p>
  </div>
);

const CircularSkillDisplay: React.FC<CircularSkillItem> = ({ name, level }) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative w-28 h-28 mb-2">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle className="text-custom-border-color" strokeWidth="8" stroke="currentColor" fill="transparent" r="42" cx="50" cy="50" />
        <circle 
          className="text-custom-accent"
          strokeWidth="8"
          strokeDasharray={2 * Math.PI * 42}
          strokeDashoffset={(2 * Math.PI * 42) * (1 - level / 100)}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="42" cx="50" cy="50"
          transform="rotate(-90 50 50)"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-poppins font-semibold text-custom-heading-text">{level}%</span>
      </div>
    </div>
    <p className="text-sm font-poppins text-custom-text-primary">{name}</p>
  </div>
);

const LanguageSkillItemDisplay: React.FC<LanguageSkillDetail> = ({ name, level, levelDescription }) => (
  <div className="mb-3">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-poppins text-custom-heading-text">{name}</span>
      <span className="text-xs font-poppins text-custom-text-secondary">{levelDescription}</span>
    </div>
    <div className="flex space-x-1">
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i} className={`h-1.5 flex-1 rounded-sm ${i < level ? 'bg-custom-accent' : 'bg-custom-border-color'}`}></span>
      ))}
    </div>
  </div>
);

// KnowledgeItem component is removed as certifications are handled in CertificationsSection

const ResumeSectionHeading: React.FC<{icon: React.ReactNode, title: string}> = ({icon, title}) => (
  <div className="flex items-center mb-6">
    <div className="w-8 h-8 rounded-full bg-custom-accent/10 flex items-center justify-center mr-3">
       {React.cloneElement(icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: 'w-4 h-4 text-custom-accent' })}
    </div>
    <h3 className="text-xl font-poppins font-semibold text-custom-heading-text uppercase tracking-wider">{title}</h3>
  </div>
);


export const ResumeSection: React.FC = () => {
  return (
    <SectionWrapper 
      id="resume" 
      titleTag="Resume"
      mainTitle="My Journey & Expertise"
    >
      <div className="grid lg:grid-cols-2 gap-x-12 gap-y-10">
        <div>
          <ResumeSectionHeading icon={<BriefcaseIconDemo />} title="Experience" />
          <div className="relative border-l-2 border-transparent">
            {experienceData.map((exp, index) => (
              <TimelineItemDisplay key={index} {...exp} />
            ))}
          </div>
        </div>
        <div>
          <ResumeSectionHeading icon={<AcademicCapIconDemo />} title="Education" />
           <div className="relative border-l-2 border-transparent">
            {educationData.map((edu, index) => (
              <TimelineItemDisplay key={index} {...edu} />
            ))}
          </div>
        </div>
         <div className="lg:col-span-2"> 
          <ResumeSectionHeading icon={<UsersIconDemo />} title="Extracurricular" />
           <div className="relative border-l-2 border-transparent">
            {extracurricularData.map((activity, index) => (
              <TimelineItemDisplay key={index} {...activity} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <ResumeSectionHeading icon={<BoltIconDemo />} title="Skills" />
        <div className="mb-10">
            <h4 className="text-md font-poppins font-semibold text-custom-heading-text mb-5 uppercase tracking-wide">Professional Skills</h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {professionalSkills.map(skill => (
                <CircularSkillDisplay key={skill.name} {...skill} />
            ))}
            </div>
        </div>
        
        <div className="grid md:grid-cols-1 gap-x-12 gap-y-10"> {/* Changed to 1 column for languages to take full width if no certs here */}
          <div>
            <h4 className="text-md font-poppins font-semibold text-custom-heading-text mb-5 uppercase tracking-wide flex items-center">
                <LanguageIconDemo className="w-4 h-4 text-custom-accent mr-2"/> Languages
            </h4>
            {languageSkills.map(lang => (
              <LanguageSkillItemDisplay key={lang.name} {...lang} />
            ))}
          </div>
          {/* Removed Knowledges/Certifications UL from here */}
        </div>
      </div>
    </SectionWrapper>
  );
};