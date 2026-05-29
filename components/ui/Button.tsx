import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "gradient" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ 
  variant = "primary", 
  size = "md", 
  icon: Icon,
  children,
  className = "",
  ...props 
}: ButtonProps) => {
  const baseStyles = "font-semibold rounded-xl transition-all flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/20",
    secondary: "bg-gray-100 text-text hover:bg-gray-200",
    gradient: "bg-gradient-to-r from-accent to-accent-glow text-white shadow-lg shadow-accent/30 hover:shadow-accent/50",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm min-h-[44px]",
    md: "px-6 py-3 text-sm sm:text-base min-h-[48px]",
    lg: "px-6 sm:px-8 py-4 text-sm sm:text-base min-h-[52px]",
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2 }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />}
      {children}
    </motion.button>
  );
};

export default Button;
