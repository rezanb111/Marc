import type { ReactNode } from 'react';

export function GradientButton({
  children,
  href,
  variant = 'primary',
  className = '',
}: {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}) {
  if (variant === 'secondary') {
    return (
      <a
        href={href}
        className={`inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`btn-glow inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent-cyan to-accent-indigo px-7 py-3.5 text-sm font-bold text-base-900 shadow-lg shadow-accent-indigo/20 ${className}`}
    >
      {children}
    </a>
  );
}

export function Chip({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className = '',
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-cyan/80">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-white/50 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
