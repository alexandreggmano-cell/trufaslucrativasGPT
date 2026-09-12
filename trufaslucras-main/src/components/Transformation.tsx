import { BookOpen, ChefHat, Calculator, Tag, Megaphone, ShoppingBag, Repeat } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const STEPS = [
  { icon: BookOpen, label: 'APRENDER' },
  { icon: ChefHat, label: 'PRODUZIR' },
  { icon: Calculator, label: 'CALCULAR' },
  { icon: Tag, label: 'PRECIFICAR' },
  { icon: Megaphone, label: 'DIVULGAR' },
  { icon: ShoppingBag, label: 'VENDER' },
  { icon: Repeat, label: 'REINVESTIR' },
];

export function Transformation() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="bg-gradient-to-b from-cream-50 to-cream-100 py-10 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <h2 className="font-display text-xl font-bold leading-snug text-chocolate-800 sm:text-3xl lg:text-4xl">
            Não é apenas um livro de receitas.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-chocolate-500 sm:mt-4 sm:text-lg">
            Você aprende o caminho entre fazer uma trufa e saber como colocar essa trufa à venda.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2.5 sm:mt-12 sm:gap-3 lg:flex-row lg:justify-center lg:gap-0">
          {STEPS.map((step, i) => (
            <div
              key={step.label}
              className={`reveal ${visible ? 'is-visible' : ''} flex flex-col items-center lg:flex-row`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex flex-col items-center gap-2 rounded-xl border border-beige-200 bg-white px-4 py-3 shadow-soft transition-transform duration-300 hover:scale-105 sm:rounded-2xl sm:px-5 sm:py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-caramel-100 text-caramel-600">
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-bold tracking-wide text-chocolate-600 sm:text-xs sm:text-sm">
                  {step.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className="my-1 rotate-90 text-caramel-400 lg:mx-2 lg:rotate-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className={`reveal ${visible ? 'is-visible' : ''} mx-auto mt-8 max-w-3xl text-center text-sm text-chocolate-500 sm:mt-12 sm:text-lg`} style={{ animationDelay: '600ms' }}>
          A ideia é que você não termine o material sabendo apenas fazer trufas. Você também terá uma
          base para entender custos, montar sua oferta e começar a buscar seus primeiros clientes.
        </p>
      </div>
    </section>
  );
}
