interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-parchment rounded-2xl p-6 shadow-sm border border-history-100 ${className}`}>
      {children}
    </div>
  );
}
