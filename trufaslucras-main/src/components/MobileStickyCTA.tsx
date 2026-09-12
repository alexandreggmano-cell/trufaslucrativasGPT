import { goToCompleteCheckout } from '@/config';

export function MobileStickyCTA() {
  return (
    <div
      className="fixed bottom-14 left-0 right-0 z-40 border-t border-beige-200 bg-cream-50/95 px-3 py-2 backdrop-blur-md sm:bottom-12 sm:px-4 sm:py-2.5 lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)', maxHeight: '70px' }}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-[11px] text-chocolate-400 sm:text-xs">Versão Completa</p>
          <p className="font-display text-base font-bold text-chocolate-800 sm:text-lg">R$ 23,90</p>
        </div>
        <button
          onClick={goToCompleteCheckout}
          className="flex-shrink-0 rounded-lg bg-caramel-500 px-5 py-3 text-xs font-bold text-white shadow-card transition-colors hover:bg-caramel-600 active:scale-95 sm:rounded-xl sm:px-5 sm:py-3 sm:text-sm"
        >
          QUERO AGORA
        </button>
      </div>
    </div>
  );
}
