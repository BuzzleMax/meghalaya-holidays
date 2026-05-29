import { LucideIcon } from "lucide-react";

interface InputProps {
  label?: string;
  icon?: LucideIcon;
  error?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  children?: React.ReactNode;
}

const Input = ({ 
  label, 
  icon: Icon, 
  error,
  className = "",
  ...props 
}: InputProps) => {
  const baseInputStyles = "w-full rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm min-h-[48px] pl-10 sm:pl-12 pr-3 sm:pr-4 py-3.5 sm:py-4";
  
  const selectStyles = "w-full px-3 sm:px-4 py-3.5 sm:py-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white text-sm min-h-[48px]";
  
  const inputClassName = props.type === "select" ? selectStyles : baseInputStyles;
  
  return (
    <div className="space-y-2">
      {label && <label className="text-sm font-medium text-text">{label}</label>}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
        )}
        {props.type === "select" ? (
          <select className={inputClassName} {...(props as any)}>
            {props.children}
          </select>
        ) : (
          <input 
            className={`${inputClassName} ${error ? 'border-red-500' : ''} ${className}`}
            {...props}
          />
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
