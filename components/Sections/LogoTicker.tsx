import React from 'react';

const LogoTicker: React.FC = () => {
  const companies = [
    "TechFlow", "Nvidia", "SaaSify", "Quantum", "Apex", "Horizon", "Nebula", "Vertex"
  ];

  return (
    <section className="py-12 bg-dosocket-dark border-t border-b border-dosocket-border overflow-hidden">
      <div className="container mx-auto px-6 mb-6 text-center">
         <p className="text-sm uppercase tracking-widest text-dosocket-muted">Trusted by innovators worldwide</p>
      </div>
      <div className="relative w-full overflow-hidden group">
        <div className="flex space-x-16 animate-[scroll_30s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap min-w-full justify-center">
          {[...companies, ...companies, ...companies].map((company, idx) => (
            <span 
              key={`${company}-${idx}`} 
              className="text-2xl md:text-3xl font-display font-bold text-dosocket-muted/40 uppercase tracking-widest hover:text-dosocket-accent/80 transition-colors cursor-default"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default LogoTicker;