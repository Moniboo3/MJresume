import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ icon: Icon, title, children }) => {
  return (
    <section className="scroll-mt-20" id={title.toLowerCase().replace(' ', '-')}>
      <div className="flex items-center space-x-4 mb-8">
        <Icon className="w-8 h-8 text-blue-400" />
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default Section;