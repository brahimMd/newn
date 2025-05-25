
import React, { useState } from 'react';
import { SectionWrapper } from '../SectionWrapper';
import { EnvelopeIconDemo, PhoneIconDemo, MapPinIconDemo, ArrowRightIconDemo } from '../icons/DemoIcons'; // Using DemoIcons

interface ContactInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const ContactInfoItemDisplay: React.FC<ContactInfoItemProps> = ({ icon, label, value, href }) => (
  <div className="flex items-center p-4 bg-custom-card-bg rounded-lg shadow-md">
    <div className="w-10 h-10 rounded-full bg-custom-accent/10 flex items-center justify-center mr-4 flex-shrink-0">
      {React.cloneElement(icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: 'w-5 h-5 text-custom-accent' })}
    </div>
    <div>
      <h4 className="text-sm font-poppins font-medium text-custom-text-secondary">{label}</h4>
      {href ? (
        <a href={href} className="text-md font-poppins text-custom-heading-text hover:text-custom-accent transition-colors break-all">{value}</a>
      ) : (
        <p className="text-md font-poppins text-custom-heading-text break-all">{value}</p>
      )}
    </div>
  </div>
);

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
    
    console.log('Form data submitted:', formData);
    setSubmitMessage('Message sent successfully! (Demo)');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  return (
    <SectionWrapper 
      id="contact" 
      titleTag="Contact"
      mainTitle="Get In Touch"
      subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
    >
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <ContactInfoItemDisplay 
          icon={<PhoneIconDemo />} 
          label="Call Me" 
          value="+212 7 08 55 16 41"
          href="tel:+212708551641"
        />
        <ContactInfoItemDisplay 
          icon={<EnvelopeIconDemo />} 
          label="Email Me" 
          value="lagnafdi.brahim@gmail.com"
          href="mailto:lagnafdi.brahim@gmail.com"
        />
        <ContactInfoItemDisplay 
          icon={<MapPinIconDemo />} 
          label="Location" 
          value="Marrakech, Morocco"
        />
      </div>

      {/* Map Placeholder - In a real app, you'd embed a map here */}
      <div className="h-64 md:h-80 bg-custom-card-bg rounded-lg shadow-md mb-12 flex items-center justify-center text-custom-text-secondary">
        Map Placeholder (e.g., Google Maps Embed)
      </div>
      
      <h3 className="text-2xl font-poppins font-semibold text-custom-heading-text text-left mb-6">
        Let's make your project brilliant!
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input 
            type="text" name="name" value={formData.name} onChange={handleChange} required 
            className="w-full p-3 bg-custom-card-bg border border-custom-border-color rounded-md text-custom-text-primary focus:ring-1 focus:ring-custom-accent focus:border-custom-accent placeholder-custom-text-secondary" 
            placeholder="Full Name" aria-label="Full Name"
          />
          <input 
            type="email" name="email" value={formData.email} onChange={handleChange} required 
            className="w-full p-3 bg-custom-card-bg border border-custom-border-color rounded-md text-custom-text-primary focus:ring-1 focus:ring-custom-accent focus:border-custom-accent placeholder-custom-text-secondary" 
            placeholder="Email Address" aria-label="Email Address"
          />
        </div>
         <input 
            type="text" name="subject" value={formData.subject} onChange={handleChange} required 
            className="w-full p-3 bg-custom-card-bg border border-custom-border-color rounded-md text-custom-text-primary focus:ring-1 focus:ring-custom-accent focus:border-custom-accent placeholder-custom-text-secondary" 
            placeholder="Subject" aria-label="Subject"
          />
        <textarea 
          name="message" rows={5} value={formData.message} onChange={handleChange} required 
          className="w-full p-3 bg-custom-card-bg border border-custom-border-color rounded-md text-custom-text-primary focus:ring-1 focus:ring-custom-accent focus:border-custom-accent placeholder-custom-text-secondary" 
          placeholder="Your Message" aria-label="Message"
        ></textarea>
        <div>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="inline-flex items-center bg-custom-accent text-custom-dark-bg font-poppins font-semibold py-3 px-7 rounded-lg shadow-md hover:bg-yellow-400 transition-colors duration-300 disabled:opacity-60 group"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            {!isSubmitting && <ArrowRightIconDemo className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />}
          </button>
        </div>
        {submitMessage && (
          <p className={`mt-4 text-sm ${submitMessage.includes('successfully') ? 'text-green-400' : 'text-red-400'}`} role="alert">
            {submitMessage}
          </p>
        )}
      </form>
    </SectionWrapper>
  );
};
