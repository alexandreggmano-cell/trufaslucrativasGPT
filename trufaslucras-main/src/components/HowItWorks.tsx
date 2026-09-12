import { useReveal } from '@/hooks/useReveal';

const STEPS = [
  {
    num: '1',
    title: 'Escolha sua versão',
    text: 'Selecione entre a Essencial ou a Completa, com base no que faz sentido para você.',
  },
  {
    num: '2',
    title: 'Finalize sua compra',
    text: 'O pagamento é processado de forma segura pela plataforma de checkout.',
  },
  {
    num: '3',
    title: 'Receba o acesso',
    text: 'Após a confirmação, o acesso ao material digital é liberado.',
  },
  {
    num: '4',
    title: 'Coloque em prática',
    text: 'Escolha seus primeiros sabores e comece a aplicar o plano.',
  },
];

export function HowItWorks() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="bg-cream-50 py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-5">
        <h2 className={`reveal ${visible ? 'is-visible' : ''} text-center font-display text-xl font-bold text-chocolate-800 sm:text-3xl lg:text-4xl`}>
          Começar é simples
        </h2>

        <div className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`reveal ${visible ? 'is-visible' : ''} relative text-center`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-chocolate-700 font-display text-xl font-bold text-caramel-300 shadow-card sm:h-14 sm:w-14 sm:text-2xl">
                {step.num}
              </div>
              <h3 className="mt-3 text-sm font-bold text-chocolate-700 sm:mt-4 sm:text-base">{step.title}</h3>
              <p className="mt-1.5 text-[13px] text-chocolate-500 sm:mt-2 sm:text-sm">{step.text}</p>
              {i < STEPS.length - 1 && (
                <div className="absolute right-0 top-7 z-0 hidden h-0.5 w-full lg:block">
                  <div className="mx-auto h-0.5 w-8 bg-caramel-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
