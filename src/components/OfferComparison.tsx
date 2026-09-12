import { Check, Crown } from 'lucide-react';
import { EssentialCTA, CompleteCTA } from '@/components/CTAButtons';
import { useReveal } from '@/hooks/useReveal';

const COMPLETE_FEATURES = [
  '60 receitas',
  'Fundamentos de produção',
  'Ficha técnica',
  'Cálculo de custos',
  'Precificação detalhada',
  'Margem e preço de venda',
  'Embalagem e conservação',
  'Guia de vendas',
  'Plano para primeiras vendas',
  'Organização financeira',
  'Reinvestimento',
  'Materiais extras disponíveis na versão completa',
];

const ESSENTIAL_FEATURES = [
  '60 receitas de trufas',
  'Fundamentos de produção',
  'Guia de precificação',
  'Cálculo de custos',
  'Embalagem e conservação',
  'Guia essencial de vendas',
];

export function OfferComparison() {
  const { ref, visible } = useReveal();

  return (
    <section id="ofertas" ref={ref} className="scroll-mt-16 bg-cream-50 py-10 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-5">
        {/* COMPLETE — Main offer, dominant */}
        <div
          className={`reveal ${visible ? 'is-visible' : ''} relative rounded-2xl border-2 border-caramel-400 bg-white p-5 shadow-premium sm:rounded-3xl sm:p-8`}
          style={{ animationDelay: '100ms' }}
        >
          <div className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 gap-1.5 sm:-top-4">
            <span className="inline-flex items-center gap-1 rounded-full bg-caramel-500 px-3 py-1 text-[10px] font-bold text-white shadow-card sm:text-xs">
              <Crown className="h-3.5 w-3.5" /> MAIS RECOMENDADO
            </span>
          </div>

          <div className="mt-2 flex items-center gap-2 sm:mt-3">
            <span className="text-lg sm:text-xl">👑</span>
            <h3 className="font-display text-base font-bold text-chocolate-700 sm:text-xl">
              Trufas Lucrativas — Versão Completa
            </h3>
          </div>

          <div className="mt-4 flex items-baseline gap-3 sm:mt-5">
            <span className="font-display text-3xl font-extrabold text-caramel-500 sm:text-4xl sm:text-5xl">
              R$ 23,90
            </span>
          </div>
          <p className="mt-1.5 text-xs font-semibold text-caramel-600 sm:mt-2 sm:text-sm">
            Por apenas R$ 9 a mais que a versão Essencial, leve o pacote completo.
          </p>

          <ul className="mt-5 grid gap-2 sm:mt-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2.5">
            {COMPLETE_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2 text-[13px] text-chocolate-600 sm:gap-2.5 sm:text-sm sm:text-base">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-caramel-500 sm:h-5 sm:w-5" strokeWidth={2.5} />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-5 sm:mt-6">
            <CompleteCTA className="w-full text-sm sm:text-base sm:text-lg" />
          </div>
          <p className="mt-2.5 text-center text-xs text-chocolate-400 sm:mt-3 sm:text-sm">
            Acesso imediato após a confirmação do pagamento
          </p>
        </div>

        {/* ESSENTIAL — Secondary, smaller */}
        <div
          className={`reveal ${visible ? 'is-visible' : ''} mx-auto mt-8 max-w-md rounded-2xl border border-beige-200 bg-white p-5 shadow-soft sm:mt-10 sm:p-6`}
          style={{ animationDelay: '200ms' }}
        >
          <p className="text-center text-sm font-medium text-chocolate-500 sm:text-base">
            Prefere começar pelo básico?
          </p>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-base sm:text-lg">⭐</span>
            <h3 className="font-display text-sm font-bold text-chocolate-600 sm:text-lg">
              Versão Essencial — R$ 14,90
            </h3>
          </div>

          <ul className="mt-4 space-y-1.5 sm:space-y-2">
            {ESSENTIAL_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2 text-[13px] text-chocolate-500 sm:gap-2.5 sm:text-sm">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-chocolate-400 sm:h-5 sm:w-5" strokeWidth={2.5} />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <EssentialCTA
              label="QUERO APENAS A VERSÃO ESSENCIAL"
              className="w-full text-xs sm:text-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
