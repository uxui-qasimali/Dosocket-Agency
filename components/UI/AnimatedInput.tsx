import React from 'react';

interface AnimatedInputProps {
  label: string;
  type?: string;
  placeholder?: string; // Placeholder is generally hidden in this design until focus, or not used
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const AnimatedInput: React.FC<AnimatedInputProps> = ({ 
  label, 
  type = "text", 
  value, 
  onChange,
  name 
}) => {
  return (
    <div className="relative w-full my-4">
      <style>{`
        .form-control {
          position: relative;
          margin: 20px 0 40px;
          width: 100%;
        }

        .form-control input {
          background-color: transparent;
          border: 0;
          border-bottom: 2px #041F1A solid; /* Dark color for white bg */
          display: block;
          width: 100%;
          padding: 15px 0;
          font-size: 18px;
          color: #041F1A; /* Dark text */
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 500;
        }

        .form-control input:focus,
        .form-control input:valid {
          outline: 0;
          border-bottom-color: #0A3C31; /* Slightly lighter teal on focus */
        }

        .form-control label {
          position: absolute;
          top: 15px;
          left: 0;
          pointer-events: none;
          display: flex;
        }

        .form-control label span {
          display: inline-block;
          font-size: 18px;
          min-width: 5px;
          color: #041F1A; /* Dark label text */
          transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .form-control input:focus + label span,
        .form-control input:valid + label span {
          color: #0A3C31;
          transform: translateY(-30px);
          font-weight: 600;
          font-size: 14px;
        }
      `}</style>

      <div className="form-control">
        <input 
          type={type} 
          name={name}
          value={value} 
          onChange={onChange} 
          required 
          autoComplete="off"
        />
        <label>
          {label.split('').map((char, index) => (
            <span 
              key={index} 
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </label>
      </div>
    </div>
  );
};

export default AnimatedInput;