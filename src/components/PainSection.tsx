import { HelpCircle, Tag, Megaphone } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const PAINS = [
  {
    icon: HelpCircle,
    text: 'Não sabe quais trufas fazer para começar',
  },
  {
    icon: Tag,
    text: 'Não sabe calcular seus custos nem quanto cobrar',
  },
  {
    icon: Megaphone,
    text: 'Não sabe como divulgar e conseguir os primeiros clientes',
  },
];

export function PainSection() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="bg-cream-100 py-10 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-5">
        <h2 className={`reveal ${visible ? 'is-visible' : ''} text-center font-display text-xl font-bold leading-snug text-chocolate-800 sm:text-2xl sm:text-3xl lg:text-4xl`}>
          Quer começar a vender, mas ainda não sabe por onde começar?
        </h2>
        <p className={`reveal ${visible ? 'is-visible' : ''} mx-auto mt-3 max-w-2xl text-center text-sm text-chocolate-500 sm:mt-4 sm:text-lg`} style={{ animationDelay: '80ms' }}>
          O Trufas Lucrativas organiza esse caminho para você.
        </p>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-5">
          {PAINS.map((pain, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'is-visible' : ''} rounded-2xl border border-beige-200 bg-white p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1 sm:p-6`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-cream-200 text-chocolate-500 sm:mb-3 sm:h-11 sm:w-11">
                <pain.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium leading-relaxed text-chocolate-600 sm:text-base">
                {pain.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
