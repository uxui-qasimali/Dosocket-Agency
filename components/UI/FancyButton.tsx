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
          group relative h-[2.8em] px-8 rounded-[0.9em]
          border border-white/40 text-white font-medium text-[17px] tracking-wide
          overflow-hidden transition-all duration-300
          hover:bg-white hover:text-dosocket-900 hover:border-white
          flex items-center justify-center
          ${className}
        `}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }

  // Primary Button - "cssbuttons-io-button" style adapted to brand colors
  return (
    <>
      <style>{`
        .cssbuttons-io-button {
          background: #A4FEEB; /* dosocket-accent */
          color: #041F1A; /* dosocket-900 */
          font-family: inherit;
          padding: 0.35em;
          padding-left: 1.2em;
          font-size: 17px;
          font-weight: 600;
          border-radius: 0.9em;
          border: none;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          box-shadow: inset 0 0 1.6em -0.6em rgba(4, 31, 26, 0.2); /* Shadow with dark color */
          overflow: hidden;
          position: relative;
          height: 2.8em;
          padding-right: 3.3em;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .cssbuttons-io-button .icon {
          background: #041F1A; /* dosocket-900 */
          margin-left: 1em;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2.2em;
          width: 2.2em;
          border-radius: 0.7em;
          box-shadow: 0.1em 0.1em 0.6em 0.2em rgba(4, 31, 26, 0.1);
          right: 0.3em;
          transition: all 0.3s;
        }

        .cssbuttons-io-button:hover .icon {
          width: calc(100% - 0.6em);
        }

        .cssbuttons-io-button .icon svg {
          width: 1.1em;
          transition: transform 0.3s;
          color: #A4FEEB; /* dosocket-accent */
        }

        .cssbuttons-io-button:hover .icon svg {
          transform: translateX(0.1em) rotate(45deg);
        }

        .cssbuttons-io-button:active .icon {
          transform: scale(0.95);
        }
      `}</style>
      <button {...props} className={`cssbuttons-io-button ${className}`}>
        {children}
        <div className="icon">
          <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
          </svg>
        </div>
      </button>
    </>
  );
}

export default FancyButton;