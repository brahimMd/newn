
import React from 'react';
import { SectionWrapper } from '../SectionWrapper';
import { ServiceItem } from '../../types';
import { 
  MegaphoneIconDemo, // Content Mktg, Social Media, Facebook Ads, Social Listening, Lead Gen
  CogIconDemo, // SEO, Marketing Automation
  CodeBracketIconDemo, // Digital Marketing
  EnvelopeIconDemo, // Email Mktg
  FunnelIconDemo, // Funnel Building
  UserGroupIconDemo, // UX Research
  BriefcaseIconDemo // Project Management
} from '../icons/DemoIcons'; // Using DemoIcons

const servicesData: ServiceItem[] = [
  {
    icon: <MegaphoneIconDemo />, title: 'Content Marketing',
    description: 'Crafting valuable content to attract and engage target audiences.', iconBgClass: 'bg-custom-accent/10'
  },
  {
    icon: <CogIconDemo />, title: 'Search Engine Optimization',
    description: 'Improving website visibility on search engines for organic traffic.', iconBgClass: 'bg-custom-accent/10'
  },
  {
    icon: <CodeBracketIconDemo />, title: 'Digital Marketing',
    description: 'Comprehensive digital strategies to achieve marketing goals.', iconBgClass: 'bg-custom-accent/10'
  },
  {
    icon: <MegaphoneIconDemo />, title: 'Social Media Marketing',
    description: 'Managing and growing brand presence on social media platforms.', iconBgClass: 'bg-custom-accent/10'
  },
  {
    icon: <MegaphoneIconDemo />, title: 'Facebook Ads',
    description: 'Creating and managing effective Facebook advertising campaigns.', iconBgClass: 'bg-custom-accent/10'
  },
  {
    icon: <EnvelopeIconDemo />, title: 'Email Marketing',
    description: 'Developing targeted email campaigns for engagement and conversion.', iconBgClass: 'bg-custom-accent/10'
  },
  {
    icon: <FunnelIconDemo />, title: 'Funnel Building',
    description: 'Designing and implementing marketing funnels to guide customer journeys.', iconBgClass: 'bg-custom-accent/10'
  },
  {
    icon: <UserGroupIconDemo />, title: 'Recherche UX',
    description: 'Conducting user research to enhance user experience and usability.', iconBgClass: 'bg-custom-accent/10'
  },
  {
    icon: <CogIconDemo />, title: 'Marketing Automation',
    description: 'Utilizing tools to automate marketing tasks and workflows.', iconBgClass: 'bg-custom-accent/10'
  },
  {
    icon: <MegaphoneIconDemo />, title: 'Social Listening',
    description: 'Monitoring social media for brand mentions and industry insights.', iconBgClass: 'bg-custom-accent/10'
  },
  {
    icon: <MegaphoneIconDemo />, title: 'Lead Generation',
    description: 'Implementing strategies to attract and capture potential customers.', iconBgClass: 'bg-custom-accent/10'
  },
  {
    icon: <BriefcaseIconDemo />, title: 'Project Management',
    description: 'Organizing and leading projects to successful completion.', iconBgClass: 'bg-custom-accent/10'
  },
];

const ServiceCard: React.FC<ServiceItem> = ({ icon, title, description, iconBgClass }) => (
  <div className="bg-custom-card-bg p-6 rounded-lg shadow-lg text-left transition-all duration-300 hover:shadow-custom-accent/20 hover:-translate-y-1">
    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${iconBgClass || 'bg-custom-accent/10'}`}>
      {React.cloneElement(icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: 'w-6 h-6 text-custom-accent' })}
    </div>
    <h3 className="text-xl font-poppins font-semibold text-custom-heading-text mb-2">{title}</h3>
    <p className="text-sm text-custom-text-primary mb-4 leading-relaxed">{description}</p>
    <a href="#contact" className="text-xs font-poppins font-semibold text-custom-accent hover:underline uppercase tracking-wider">
      Get Started &rarr;
    </a>
  </div>
);

export const ServicesSection: React.FC = () => {
  return (
    <SectionWrapper 
      id="services" 
      titleTag="Services"
      mainTitle="What I Do"
      subtitle="Providing tailored digital marketing solutions to help your business grow and succeed in the online landscape."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {servicesData.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
};
