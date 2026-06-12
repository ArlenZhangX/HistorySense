'use client';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export function Button({ 
  variant = 'primary', 
  size = 'md',
  children,
  icon,
  iconPosition = 'left',
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-history-500 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-gradient-primary text-white hover:shadow-lg hover:-translate-y-0.5 active:scale-95',
    secondary: 'bg-history-100 text-history-700 hover:bg-history-200',
    outline: 'border-2 border-history-300 text-history-700 hover:bg-history-50 hover:border-history-400',
    ghost: 'text-history-600 hover:bg-history-50',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
}