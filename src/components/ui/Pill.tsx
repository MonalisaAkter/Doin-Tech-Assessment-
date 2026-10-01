import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type PillProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  active?: boolean;
};

export function Pill({ children, active = false, className = '', ...props }: PillProps) {
  return (
    <button
      className={`shrink-0 rounded-3xl px-5 py-2.5 font-satoshi text-label-m transition-all duration-300 ${
        active
          ? 'bg-blue-800 text-white shadow-lg shadow-blue-800/20'
          : 'border border-gray-200 bg-gray-50 text-gray-950 hover:bg-gray-100'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
