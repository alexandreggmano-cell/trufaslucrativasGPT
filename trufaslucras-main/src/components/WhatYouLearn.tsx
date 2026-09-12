import { useReveal } from '@/hooks/useReveal';

const CARDS = [
  'Como produzir trufas mesmo sendo iniciante',
  'Como chegar ao ponto correto',
  'Como padronizar tamanho e peso',
  'Como calcular o custo da receita',
  'Como descobrir o custo por unidade',
  'Como definir seu preço de venda',
  'Como organizar embalagem e apresentação',
  'Como começar a divulgar e vender',
];

export function WhatYouLearn() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="bg-cream-100 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <h2 className={`reveal ${visible ? 'is-visible' : ''} text-center font-display text-xl font-bold text-chocolate-800 sm:text-3xl lg:text-4xl`}>
          O que você vai aprender
        </h2>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'is-visible' : ''} group rounded-2xl border border-beige-200 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-6`}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <span className="font-display text-2xl font-extrabold text-caramel-300 transition-colors group-hover:text-caramel-500 sm:text-3xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="mt-2 text-[13px] font-medium leading-relaxed text-chocolate-600 sm:mt-3 sm:text-sm sm:text-base">
                {card}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
