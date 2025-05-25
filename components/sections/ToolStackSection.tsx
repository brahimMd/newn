
import React from 'react';
import { SectionWrapper } from '../SectionWrapper';
import { ToolStackItem } from '../../types';
import { 
  AnalyticsIconDemo, HubspotIconPlaceholder, SEMrushIconPlaceholder, GoogleAdsIconPlaceholder, 
  MetaBusinessIconPlaceholder, KlaviyoIconPlaceholder, TrelloIconPlaceholder, CanvaIconPlaceholder 
} from '../icons/DemoIcons';

const toolStackData: ToolStackItem[] = [
  { name: 'Google Analytics', proficiency: 90, icon: <AnalyticsIconDemo className="w-8 h-8 text-custom-accent" /> },
  { name: 'HubSpot CRM', proficiency: 85, icon: <HubspotIconPlaceholder className="w-8 h-8 text-custom-accent" /> },
  { name: 'SEMrush', proficiency: 80, icon: <SEMrushIconPlaceholder className="w-8 h-8 text-custom-accent" /> },
  { name: 'Google Ads', proficiency: 88, icon: <GoogleAdsIconPlaceholder className="w-8 h-8 text-custom-accent" /> },
  { name: 'Meta Business Suite', proficiency: 92, icon: <MetaBusinessIconPlaceholder className="w-8 h-8 text-custom-accent" /> },
  { name: 'Klaviyo', proficiency: 75, icon: <KlaviyoIconPlaceholder className="w-8 h-8 text-custom-accent" /> },
  { name: 'Trello', proficiency: 95, icon: <TrelloIconPlaceholder className="w-8 h-8 text-custom-accent" /> },
  { name: 'Canva', proficiency: 90, icon: <CanvaIconPlaceholder className="w-8 h-8 text-custom-accent" /> },
];

const ToolCardDisplay: React.FC<ToolStackItem> = ({ name, proficiency, icon }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (proficiency / 100) * circumference;

  return (
    <div className="bg-custom-card-bg p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:shadow-custom-accent/20 hover:-translate-y-1">
      <div className="relative w-32 h-32 mb-4">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-custom-border-color"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
          />
          <circle
            className="text-custom-accent"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
            transform="rotate(-90 50 50)"
            style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
          />
          <foreignObject x="25" y="25" width="50" height="50" className="flex items-center justify-center">
             <div className="w-full h-full flex items-center justify-center text-custom-accent">
                {icon}
             </div>
          </foreignObject>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center" style={{top: '2.8rem'}}> 
          <span className="text-md font-poppins font-semibold text-custom-heading-text">{proficiency}%</span>
        </div>
      </div>
      <p className="text-sm font-poppins font-semibold text-custom-heading-text mt-1">{name}</p>
    </div>
  );
};

export const ToolStackSection: React.FC = () => {
  return (
    <SectionWrapper
      id="tool-stack"
      titleTag="Tool Stack"
      mainTitle="My Digital Toolkit"
      subtitle="A selection of key tools and platforms I proficiently use to drive digital marketing success."
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {toolStackData.map((tool) => (
          <ToolCardDisplay key={tool.name} {...tool} />
        ))}
      </div>
    </SectionWrapper>
  );
};
