interface NeoBrutalistCardProps {
  variant?: 'surface' | 'accent';
  padding?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const paddingClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

function mergeClasses(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function NeoBrutalistCard({
  variant = 'surface',
  padding = 'md',
  href,
  children,
  className,
  onClick,
}: NeoBrutalistCardProps) {
  const isAccent = variant === 'accent';
  const shadowColor = isAccent ? '#00B8FF' : '#000000';
  const staticShadow = `shadow-[4px_4px_0_${shadowColor}]`;
  const hoverShadow = `hover:shadow-[7px_7px_0_${shadowColor}]`;

  const baseClasses = mergeClasses(
    'bg-white border-[3px] border-black transition-transform duration-100',
    paddingClasses[padding],
    staticShadow,
    hoverShadow,
    'hover:translate-x-[-3px] hover:translate-y-[-3px]',
    'translate-x-0 translate-y-0',
    className
  );

  if (href) {
    return (
      <a href={href} className={baseClasses} style={{ textDecoration: 'none', display: 'block' }}>
        {children}
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={mergeClasses(baseClasses, 'cursor-pointer text-left w-full')}
      >
        {children}
      </button>
    );
  }

  return <div className={baseClasses}>{children}</div>;
}