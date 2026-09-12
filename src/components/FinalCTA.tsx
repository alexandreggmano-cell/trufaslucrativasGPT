import { CompleteCTA } from '@/components/CTAButtons';
import { useReveal } from '@/hooks/useReveal';

export function FinalCTA() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="bg-chocolate-800 py-12 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-5">
        <h2 className={`reveal ${visible ? 'is-visible' : ''} font-display text-xl font-bold leading-snug text-cream-50 sm:text-2xl sm:text-3xl`}>
          Comece com um caminho mais organizado
        </h2>
        <p className={`reveal ${visible ? 'is-visible' : ''} mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-chocolate-100 sm:mt-5 sm:text-lg`} style={{ animationDelay: '100ms' }}>
          Aprenda as receitas, entenda seus custos, defina seus preços e tenha um plano para dar os primeiros passos nas vendas.
        </p>

        <div className={`reveal ${visible ? 'is-visible' : ''} mt-8 inline-block rounded-xl border-2 border-caramel-400 bg-chocolate-700/50 px-6 py-4 shadow-glow`} style={{ animationDelay: '200ms' }}>
          <p className="text-xs font-semibold uppercase tracking-wide text-caramel-300 sm:text-sm">
            Trufas Lucrativas — Versão Completa
          </p>
          <p className="mt-1 font-display text-2xl font-extrabold text-caramel-400 sm:text-3xl">
            R$ 23,90
          </p>
        </div>

        <div className={`reveal ${visible ? 'is-visible' : ''} mt-8 flex flex-col items-center gap-3`} style={{ animationDelay: '300ms' }}>
          <CompleteCTA
            label="QUERO COMEÇAR AGORA"
            className="w-full max-w-md text-base sm:text-lg"
          />
          <p className="text-xs text-chocolate-200 sm:text-sm">
            Acesso imediato • Material digital • Pagamento seguro
          </p>
        </div>
      </div>
    </section>
  );
}
