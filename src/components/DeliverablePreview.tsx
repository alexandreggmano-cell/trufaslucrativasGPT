import { Eye, FileText, ZoomIn } from 'lucide-react';
import { useState } from 'react';
import { CompleteCTA } from '@/components/CTAButtons';
import { ImageLightbox, type GalleryImage } from '@/components/ImageLightbox';
import { useReveal } from '@/hooks/useReveal';

const DELIVERABLE_PAGES: GalleryImage[] = [
  { src: '/images/deliverable-pages/Pagina_18.png', alt: 'Página do material com receitas de trufa de limão e trufa de coco com chocolate', label: 'Receitas' },
  { src: '/images/deliverable-pages/Pagina_30.png', alt: 'Página do material com receitas de trufa recheada de morango e maracujá', label: 'Receitas recheadas' },
  { src: '/images/deliverable-pages/Pagina_52.png', alt: 'Página do material ensinando a montar a ficha técnica de uma trufa', label: 'Ficha técnica' },
  { src: '/images/deliverable-pages/Pagina_57.png', alt: 'Página do material mostrando como calcular o preço de uma trufa', label: 'Cálculo de preço' },
  { src: '/images/deliverable-pages/Pagina_62.png', alt: 'Página do material ensinando a organizar caixas com 4, 6, 9 ou 12 trufas', label: 'Custos e margem' },
];

export function DeliverablePreview() {
  const { ref, visible } = useReveal();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="overflow-hidden bg-cream-50 py-10 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <span className="inline-flex items-center gap-2 rounded-full bg-caramel-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-caramel-600 sm:text-sm">
            <Eye className="h-4 w-4" /> Veja por dentro
          </span>
          <h2 className="mt-4 font-display text-xl font-bold text-chocolate-800 sm:mt-5 sm:text-3xl lg:text-4xl">
            Veja por dentro o que você vai receber
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-chocolate-500 sm:mt-4 sm:text-lg">
            Não é apenas uma lista de receitas. Você recebe materiais para aprender a produzir, calcular custos, precificar e começar a vender.
          </p>
        </div>

        <div className={`reveal ${visible ? 'is-visible' : ''} relative mt-8 sm:mt-10`} style={{ animationDelay: '120ms' }}>
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-cream-50 to-transparent sm:w-24" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-cream-50 to-transparent sm:w-24" />
          <div className="deliverable-marquee flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 py-2 pb-4 sm:gap-6 sm:py-3">
            {DELIVERABLE_PAGES.map((page, index) => (
              <button
                key={page.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group w-[180px] flex-shrink-0 snap-start overflow-hidden rounded-xl border border-beige-200 bg-white p-1.5 text-left shadow-card transition-transform duration-300 hover:-translate-y-2 sm:w-[270px] sm:rounded-2xl sm:p-2"
                aria-label={`Ampliar ${page.label}`}
              >
                <div className="relative h-[238px] overflow-hidden rounded-lg bg-cream-100 sm:h-[360px] sm:rounded-xl">
                  <img src={page.src} alt={page.alt} className="block h-full w-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" decoding="async" width={1024} height={1365} />
                  <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-chocolate-800/85 px-2 py-1 text-[10px] font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 sm:text-xs">
                    <ZoomIn className="h-3 w-3" /> Ampliar
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-1.5 py-2 sm:gap-2 sm:px-2 sm:py-3">
                  <FileText className="h-3.5 w-3.5 text-caramel-500 sm:h-4 sm:w-4" />
                  <span className="text-xs font-semibold text-chocolate-700 sm:text-sm">{page.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className={`reveal ${visible ? 'is-visible' : ''} mt-7 text-center sm:mt-9`} style={{ animationDelay: '240ms' }}>
          <CompleteCTA label="QUERO ACESSAR O MATERIAL COMPLETO" className="text-sm sm:text-base sm:text-lg" />
          <p className="mt-3 text-xs text-chocolate-400 sm:text-sm">Material 100% digital • Acesso imediato • Pode acessar pelo celular</p>
        </div>
      </div>

      <ImageLightbox
        images={DELIVERABLE_PAGES}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={setActiveIndex}
      />
    </section>
  );
}
