import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-display font-medium transition-all duration-300 transform active:scale-95";
  
  const variants = {
    primary: "bg-dosocket-accent text-dosocket-dark hover:bg-white hover:shadow-[0_0_20px_rgba(164,254,235,0.4)]",
    secondary: "bg-dosocket-surface text-dosocket-text hover:bg-dosocket-border border border-transparent",
    outline: "bg-transparent border border-dosocket-accent text-dosocket-accent hover:bg-dosocket-accent hover:text-dosocket-dark"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
      {icon && <ArrowUpRight className="ml-2 w-5 h-5" />}
    </button>
  );
};

export default Button;