import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const FAQ_ITEMS = [
  {
    q: 'O material é físico?',
    a: 'Não. O Trufas Lucrativas é um material digital.',
  },
  {
    q: 'Como recebo o material?',
    a: 'Após a confirmação do pagamento, você recebe acesso ao material digital.',
  },
  {
    q: 'Preciso já saber fazer trufas?',
    a: 'Não. O material foi pensado para quem está começando e também para quem já faz doces, mas quer se organizar melhor.',
  },
  {
    q: 'Posso acessar pelo celular?',
    a: 'Sim.',
  },
  {
    q: 'Qual é a diferença entre a versão Essencial e a Completa?',
    a: 'A versão Essencial traz as receitas, fundamentos de produção, precificação, conservação e um guia essencial de vendas. A versão Completa inclui tudo isso, mais o plano de primeiras vendas, calculadora de precificação, cardápio para se inspirar, 30 mensagens prontas para WhatsApp, guia de combos e kits, calendário de datas e estratégias de crescimento.',
  },
  {
    q: 'Preciso comprar equipamentos caros?',
    a: 'Não. O material foi pensado para quem está começando, embora alguns utensílios básicos sejam recomendados.',
  },
];

export function FAQ() {
  const { ref, visible } = useReveal();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section ref={ref} className="bg-cream-50 py-10 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-5">
        <h2 className={`reveal ${visible ? 'is-visible' : ''} text-center font-display text-xl font-bold text-chocolate-800 sm:text-3xl lg:text-4xl`}>
          Perguntas frequentes
        </h2>

        <div className="mt-6 space-y-2.5 sm:mt-8 sm:space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'is-visible' : ''} overflow-hidden rounded-2xl border border-beige-200 bg-white shadow-soft`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:gap-4 sm:px-5 sm:py-4"
                aria-expanded={open === i}
              >
                <span className="text-[13px] font-semibold text-chocolate-700 sm:text-sm sm:text-base">
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-caramel-500 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-3.5 text-[13px] leading-relaxed text-chocolate-500 sm:px-5 sm:pb-4 sm:text-sm sm:text-base">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
