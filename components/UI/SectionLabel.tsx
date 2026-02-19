import React from 'react';

interface SectionLabelProps {
  text: string;
  light?: boolean;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ text, light = false }) => {
  return (
    <div className="flex flex-col items-start gap-3 mb-8">
      <div className={`h-[1.5px] w-16 ${light ? 'bg-dosocket-accent/50' : 'bg-dosocket-border'}`}></div>
      <span className={`${light ? 'text-dosocket-accent' : 'text-dosocket-900'} text-xs font-bold uppercase tracking-[0.2em]`}>
        {text}
      </span>
    </div>
  );
};

export default SectionLabel;
