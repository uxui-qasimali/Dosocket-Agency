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
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-[0.8em] font-display font-medium transition-all duration-300 transform active:scale-95 text-[16px]";
  
  const variants = {
    primary: "bg-dosocket-accent text-dosocket-dark hover:bg-dosocket-surface hover:text-dosocket-text hover:border-dosocket-border/50 border border-transparent hover:shadow-[0_8px_25px_rgba(164,254,235,0.4)] hover:-translate-y-1",
    secondary: "bg-dosocket-surface text-dosocket-text hover:bg-dosocket-border border border-dosocket-border/50 hover:-translate-y-1",
    outline: "bg-transparent border border-dosocket-accent text-dosocket-accent hover:bg-dosocket-accent hover:text-dosocket-dark hover:-translate-y-1"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
      {icon && <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:rotate-45" />}
    </button>
  );
};

export default Button;