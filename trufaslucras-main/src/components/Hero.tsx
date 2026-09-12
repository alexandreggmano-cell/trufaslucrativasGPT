import { Check } from 'lucide-react';
import { CompleteCTA } from '@/components/CTAButtons';

const BULLETS = [
  '60 receitas de trufas',
  'Ficha técnica e cálculo de custos',
  'Guia de precificação',
  'Embalagem e conservação',
  'Estratégias para começar a vender',
];

const HERO_IMAGE =
  'https://images.pexels.com/photos/37976917/pexels-photo-37976917.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const TRUFFLE_IMAGE_1 =
  'https://images.pexels.com/photos/39216528/pexels-photo-39216528.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const TRUFFLE_IMAGE_2 =
  'https://images.pexels.com/photos/38441751/pexels-photo-38441751.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const GIFT_BOX_IMAGE =
  'https://images.pexels.com/photos/14791211/pexels-photo-14791211.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50 pt-20 pb-10 sm:pt-28 sm:pb-24">
      <div className="pointer-events-none absolute top-10 right-0 hidden h-72 w-72 rounded-full bg-caramel-200/30 blur-3xl sm:block" />
      <div className="pointer-events-none absolute bottom-10 left-0 hidden h-64 w-64 rounded-full bg-chocolate-200/20 blur-3xl sm:block" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-4 sm:gap-12 sm:px-5 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-chocolate-100 px-4 py-1.5 text-xs font-semibold tracking-wide text-chocolate-600 sm:text-sm">
            🍫 DO ZERO À PRIMEIRA VENDA
          </span>

          <h1 className="mt-4 font-display text-[24px] font-extrabold leading-[1.15] text-chocolate-800 sm:mt-5 sm:text-4xl lg:text-5xl">
            Aprenda 60 receitas de trufas e saiba quanto cobrar para começar a vender
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-chocolate-500 sm:mt-5 sm:text-lg lg:mx-0">
            Do preparo à primeira venda: aprenda receitas, calcule seus custos, defina preços, organize a produção e tenha um caminho claro para começar mesmo do zero.
          </p>

          <ul className="mx-auto mt-5 flex max-w-lg flex-col gap-2 text-left sm:mt-6 sm:gap-2.5 lg:mx-0">
            {BULLETS.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-[13px] text-chocolate-600 sm:text-base">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-caramel-400 text-white">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col items-center gap-1.5 sm:mt-8 lg:items-start">
            <CompleteCTA
              label="QUERO COMEÇAR AGORA"
              className="w-full max-w-md text-base shadow-card sm:text-lg"
            />
            <p className="text-sm font-bold text-chocolate-700 sm:text-base">
              Versão completa por apenas R$ 23,90
            </p>
            <p className="text-xs text-chocolate-400 sm:text-sm">
              Acesso imediato • Material digital • Pagamento seguro
            </p>
          </div>
        </div>

        {/* Product image */}
        <div className="relative mx-auto mt-2 w-full max-w-xs sm:mt-0 sm:max-w-md lg:mt-0 lg:max-w-none">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-premium sm:rounded-3xl">
              <img
                src={HERO_IMAGE}
                alt="Trufas de chocolate artesanais"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width={940}
                height={650}
              />
            </div>

            <div className="absolute -left-3 top-8 hidden animate-floatY rounded-2xl bg-white p-2 shadow-card sm:block">
              <img
                src={TRUFFLE_IMAGE_1}
                alt="Trufa de chocolate"
                className="h-20 w-20 rounded-xl object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div
              className="absolute -right-3 top-1/2 hidden animate-floatY rounded-2xl bg-white p-2 shadow-card sm:block"
              style={{ animationDelay: '1.5s' }}
            >
              <img
                src={GIFT_BOX_IMAGE}
                alt="Caixa de trufas presenteável"
                className="h-20 w-20 rounded-xl object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div
              className="absolute -left-3 bottom-6 hidden animate-floatY rounded-2xl bg-white p-2 shadow-card sm:block"
              style={{ animationDelay: '0.8s' }}
            >
              <img
                src={TRUFFLE_IMAGE_2}
                alt="Trufas gourmet"
                className="h-20 w-20 rounded-xl object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-chocolate-700 px-4 py-2 text-center shadow-premium sm:-bottom-4 sm:px-5 sm:py-2.5">
              <span className="text-[11px] font-bold tracking-wide text-caramel-300 sm:text-xs sm:text-sm">
                60 RECEITAS + GUIAS DE VENDA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
