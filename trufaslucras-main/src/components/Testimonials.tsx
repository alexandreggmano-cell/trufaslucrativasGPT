import { MessageCircle, ShieldCheck, ZoomIn } from 'lucide-react';
import { useState } from 'react';
import { ImageLightbox, type GalleryImage } from '@/components/ImageLightbox';
import { useReveal } from '@/hooks/useReveal';

const TESTIMONIALS: GalleryImage[] = [
  {
    src: '/images/testimonials/Screenshot_57.png',
    alt: 'Depoimento de cliente sobre os resultados praticando o método',
    label: 'Resultado de cliente',
  },
  {
    src: '/images/testimonials/c254ce23-a61c-47e5-a9a1-38a33ff9436f.png',
    alt: 'Depoimento de cliente agradecendo pelo material',
    label: 'Mensagem de cliente',
  },
  {
    src: '/images/testimonials/2a77cd98-8628-4298-b855-5ceb02b5150b.png',
    alt: 'Depoimento de cliente sobre faturamento com as trufas',
    label: 'Resultado de cliente',
  },
  {
    src: '/images/testimonials/4af09a91-33d0-4d70-9036-1a30d77728ca.png',
    alt: 'Depoimento de cliente sobre pagar as contas com as vendas',
    label: 'Mensagem de cliente',
  },
  {
    src: '/images/testimonials/a54fecdd-d05a-4ad5-8b03-4013d9cd5881.png',
    alt: 'Depoimento de cliente sobre o método de trufas',
    label: 'Mensagem de cliente',
  },
];

export function Testimonials() {
  const { ref, visible } = useReveal();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="depoimentos" ref={ref} className="bg-chocolate-800 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-3xl text-center`}>
          <span className="inline-flex items-center gap-2 rounded-full bg-caramel-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-caramel-300 sm:text-sm">
            <MessageCircle className="h-4 w-4" /> Prova real
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-cream-50 sm:mt-5 sm:text-4xl">
            Quem coloca em prática, começa a ver resultado
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-chocolate-100 sm:mt-4 sm:text-lg">
            Depoimentos reais de pessoas que usaram o material para organizar a produção e começar a vender.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              key={testimonial.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`reveal ${visible ? 'is-visible' : ''} group relative overflow-hidden rounded-xl border border-white/10 bg-chocolate-700 text-left shadow-card transition duration-300 hover:-translate-y-1 hover:border-caramel-300/70 sm:rounded-2xl`}
              style={{ animationDelay: `${index * 80}ms` }}
              aria-label={`Ampliar ${testimonial.label?.toLowerCase()}`}
            >
              <img
                src={testimonial.src}
                alt={testimonial.alt}
                className="block aspect-[9/16] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                loading={index < 3 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1.5 bg-gradient-to-t from-chocolate-900/90 to-transparent px-2 pb-3 pt-8 text-[10px] font-semibold text-white sm:text-xs">
                <ZoomIn className="h-3.5 w-3.5" /> Toque para ampliar
              </span>
            </button>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-center gap-2 text-xs text-chocolate-100 sm:mt-9 sm:text-sm">
          <ShieldCheck className="h-4 w-4 text-caramel-300" />
          Imagens compartilhadas por clientes
        </div>
      </div>

      <ImageLightbox
        images={TESTIMONIALS}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={setActiveIndex}
      />
    </section>
  );
}
