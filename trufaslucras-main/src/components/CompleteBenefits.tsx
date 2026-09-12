import { Calculator, ClipboardList, MessageCircle, Boxes, CalendarDays } from 'lucide-react';
import { CompleteCTA } from '@/components/CTAButtons';
import { useReveal } from '@/hooks/useReveal';

const BONUSES = [
  {
    icon: Calculator,
    title: 'Calculadora / Planilha de Precificação',
    text: 'Organize ingredientes, embalagens, rendimento e custos para facilitar seus cálculos.',
  },
  {
    icon: ClipboardList,
    title: 'Cardápio para se Inspirar',
    text: 'Um modelo para ajudar você a estruturar sua própria apresentação.',
  },
  {
    icon: MessageCircle,
    title: '30 Mensagens para WhatsApp',
    text: 'Modelos para abertura de pedidos, pronta-entrega, recompra, kits, clientes antigos e datas especiais.',
  },
  {
    icon: Boxes,
    title: 'Guia de Combos e Kits',
    text: 'Aprenda a estruturar opções com 4, 6, 9 e 12 trufas.',
  },
  {
    icon: CalendarDays,
    title: 'Calendário para Vender Mais',
    text: 'Ideias de campanhas ao longo do ano.',
  },
];

export function CompleteBenefits() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="bg-gradient-to-b from-cream-100 to-cream-50 py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-5">
        <h2 className={`reveal ${visible ? 'is-visible' : ''} text-center font-display text-xl font-bold leading-snug text-chocolate-800 sm:text-3xl lg:text-4xl`}>
          Na versão completa você não precisa descobrir tudo sozinho
        </h2>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          {BONUSES.map((bonus, i) => (
            <div
              key={bonus.title}
              className={`reveal ${visible ? 'is-visible' : ''} group flex gap-3 rounded-2xl border border-caramel-200 bg-white p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1 sm:gap-4 sm:p-6`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-caramel-100 text-caramel-600 transition-colors group-hover:bg-caramel-500 group-hover:text-white sm:h-12 sm:w-12">
                <bonus.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">🎁</span>
                  <h3 className="text-sm font-bold text-chocolate-700 sm:text-base">{bonus.title}</h3>
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-chocolate-500 sm:mt-2 sm:text-sm">{bonus.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className={`reveal ${visible ? 'is-visible' : ''} mt-8 text-center font-display text-lg font-bold text-caramel-600 sm:mt-10 sm:text-xl sm:text-2xl`} style={{ animationDelay: '400ms' }}>
          Tudo isso já está incluído nos R$ 23,90.
        </p>

        <div className={`reveal ${visible ? 'is-visible' : ''} mt-5 text-center sm:mt-6`} style={{ animationDelay: '500ms' }}>
          <CompleteCTA label="SIM, QUERO A VERSÃO COMPLETA" className="text-sm sm:text-base sm:text-lg" />
        </div>
      </div>
    </section>
  );
}
