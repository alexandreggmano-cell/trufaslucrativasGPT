import { goToCompleteCheckout, goToEssentialCheckout } from '@/config';

interface CTAProps {
  variant?: 'complete' | 'essential';
  className?: string;
  label?: string;
}

export function CompleteCTA({ className = '', label = 'QUERO A VERSÃO COMPLETA — R$ 23,90' }: CTAProps) {
  return (
    <button
      onClick={goToCompleteCheckout}
      className={`btn-cta bg-caramel-500 text-white shadow-card hover:bg-caramel-600 hover:shadow-premium ${className}`}
    >
      {label}
    </button>
  );
}

export function EssentialCTA({ className = '', label = 'QUERO A VERSÃO ESSENCIAL — R$ 14,90' }: CTAProps) {
  return (
    <button
      onClick={goToEssentialCheckout}
      className={`btn-cta bg-chocolate-500 text-white shadow-card hover:bg-chocolate-600 ${className}`}
    >
      {label}
    </button>
  );
}
