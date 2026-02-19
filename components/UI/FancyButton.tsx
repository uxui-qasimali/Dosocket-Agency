import React from 'react';

interface FancyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const FancyButton: React.FC<FancyButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  
  if (variant === 'secondary') {
    return (
      <button 
        {...props}
        className={`
          group relative h-[3.2em] px-8 rounded-[0.8em]
          bg-dosocket-surface border border-dosocket-border/50 text-white font-medium text-[16px] tracking-wide
          overflow-hidden transition-all duration-300
          hover:bg-dosocket-border hover:border-dosocket-accent/30
          flex items-center justify-center active:scale-95
          ${className}
        `}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </button>
    );
  }

  // Primary Button
  return (
    <>
      <style>{`
        .dosocket-primary-btn {
          background: #A4FEEB; /* dosocket-accent */
          color: #041F1A; /* dosocket-900 */
          font-family: inherit;
          padding: 0.4em;
          padding-left: 1.5em;
          font-size: 16px;
          font-weight: 600;
          border-radius: 0.8em;
          border: none;
          letter-spacing: 0.02em;
          display: flex;
          align-items: center;
          box-shadow: 0 4px 15px rgba(164, 254, 235, 0.2);
          overflow: hidden;
          position: relative;
          height: 3.2em;
          padding-right: 3.8em;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .dosocket-primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(164, 254, 235, 0.4);
          background: #FFFFFF;
        }

        .dosocket-primary-btn .icon-wrapper {
          background: #041F1A; /* dosocket-900 */
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2.4em;
          width: 2.4em;
          border-radius: 0.6em;
          right: 0.4em;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .dosocket-primary-btn:hover .icon-wrapper {
          width: calc(100% - 0.8em);
        }

        .dosocket-primary-btn .icon-wrapper svg {
          width: 1.2em;
          height: 1.2em;
          transform: rotate(-45deg); /* Default 45 degrees (pointing up-right) */
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          color: #A4FEEB; /* dosocket-accent */
        }

        .dosocket-primary-btn:hover .icon-wrapper svg {
          transform: rotate(0deg); /* Straight on hover */
          color: #A4FEEB;
        }

        .dosocket-primary-btn:active {
          transform: scale(0.95);
        }
      `}</style>
      <button {...props} className={`dosocket-primary-btn ${className}`}>
        {children}
        <div className="icon-wrapper">
          <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
          </svg>
        </div>
      </button>
    </>
  );
}

export default FancyButton;