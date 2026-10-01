import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'lime' | 'outline' | 'ghost';
  size?: 'md' | 'lg';
};

const variants = {
  primary: 'bg-blue-800 text-white hover:bg-blue-900',
  lime: 'bg-lime-400 text-gray-950 hover:bg-lime-500',
  outline: 'border border-white/30 text-white hover:bg-white/10',
  ghost: 'text-gray-950 hover:bg-gray-100',
};

const sizes = {
  md: 'px-6 py-3 text-label-m',
  lg: 'px-8 py-4 text-label-l',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-3xl font-satoshi font-medium transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
