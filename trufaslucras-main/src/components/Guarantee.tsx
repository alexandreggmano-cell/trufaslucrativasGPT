import { Shield } from 'lucide-react';
import { GUARANTEE_DAYS } from '@/config';
import { useReveal } from '@/hooks/useReveal';

export function Guarantee() {
  const { ref, visible } = useReveal();

  if (GUARANTEE_DAYS === null) return null;

  return (
    <section ref={ref} className="bg-cream-100 py-12 sm:py-20">
      <div
        className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-3xl px-4 sm:px-5`}
      >
        <div className="flex flex-col items-center gap-4 rounded-2xl border-2 border-caramel-200 bg-white p-5 text-center shadow-soft sm:flex-row sm:gap-5 sm:rounded-3xl sm:p-8 sm:text-left">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-caramel-100 text-caramel-600">
            <Shield className="h-8 w-8" />
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-chocolate-800 sm:text-xl sm:text-2xl">
              Compra protegida
            </h2>
            <p className="mt-1.5 text-xs text-chocolate-600 sm:mt-2 sm:text-sm sm:text-base">
              Você tem {GUARANTEE_DAYS} dias para conhecer o material conforme as condições
              informadas no checkout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
