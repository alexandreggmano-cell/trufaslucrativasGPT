import { CompleteCTA } from '@/components/CTAButtons';
import { useReveal } from '@/hooks/useReveal';

const CATEGORIES = [
  { emoji: '🍫', label: '12 Tradicionais' },
  { emoji: '✨', label: '12 Gourmet' },
  { emoji: '🎁', label: '12 Recheadas' },
  { emoji: '💰', label: '12 Econômicas' },
  { emoji: '⭐', label: '12 Sabores Especiais' },
];

const RECIPES = [
  { name: 'Brigadeiro', img: 'https://images.pexels.com/photos/20030846/pexels-photo-20030846.jpeg?auto=compress&cs=tinysrgb&h=350&w=350' },
  { name: 'Leite em Pó', img: 'https://images.pexels.com/photos/31249034/pexels-photo-31249034.png?auto=compress&cs=tinysrgb&h=350&w=350' },
  { name: 'Paçoca', img: 'https://images.pexels.com/photos/27850066/pexels-photo-27850066.jpeg?auto=compress&cs=tinysrgb&h=350&w=350' },
  { name: 'Maracujá', img: 'https://images.pexels.com/photos/29499891/pexels-photo-29499891.jpeg?auto=compress&cs=tinysrgb&h=350&w=350' },
  { name: 'Pistache', img: 'https://images.pexels.com/photos/31373196/pexels-photo-31373196.jpeg?auto=compress&cs=tinysrgb&h=350&w=350' },
  { name: 'Chocolate com Avelã', img: 'https://images.pexels.com/photos/66234/praline-chocolates-chocolate-chocolatier-66234.jpeg?auto=compress&cs=tinysrgb&h=350&w=350' },
  { name: 'Caramelo com Flor de Sal', img: 'https://images.pexels.com/photos/11178470/pexels-photo-11178470.jpeg?auto=compress&cs=tinysrgb&h=350&w=350' },
  { name: 'Churros', img: 'https://images.pexels.com/photos/16549164/pexels-photo-16549164.jpeg?auto=compress&cs=tinysrgb&h=350&w=350' },
  { name: 'Torta de Limão', img: 'https://images.pexels.com/photos/34474029/pexels-photo-34474029.jpeg?auto=compress&cs=tinysrgb&h=350&w=350' },
];

export function Recipes() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="bg-cream-100 py-10 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <h2 className={`reveal ${visible ? 'is-visible' : ''} text-center font-display text-xl font-bold leading-snug text-chocolate-800 sm:text-3xl lg:text-4xl`}>
          60 receitas para você montar um cardápio que dá vontade de experimentar
        </h2>

        <div className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-8 sm:gap-3">
          {CATEGORIES.map((cat) => (
            <span
              key={cat.label}
              className="rounded-full border border-beige-200 bg-white px-3 py-1.5 text-xs font-semibold text-chocolate-600 shadow-soft sm:px-4 sm:py-2 sm:text-sm"
            >
              {cat.emoji} {cat.label}
            </span>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3">
          {RECIPES.map((recipe, i) => (
            <div
              key={recipe.name}
              className={`reveal ${visible ? 'is-visible' : ''} group relative overflow-hidden rounded-xl shadow-soft sm:rounded-2xl`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <img
                src={recipe.img}
                alt={`Trufa de ${recipe.name}`}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-800/80 via-chocolate-800/10 to-transparent" />
              <span className="absolute bottom-2 left-2 rounded-md bg-white/90 px-2 py-0.5 text-xs font-semibold text-chocolate-700 backdrop-blur-sm sm:bottom-3 sm:left-3 sm:rounded-lg sm:px-3 sm:py-1 sm:text-sm">
                {recipe.name}
              </span>
            </div>
          ))}
        </div>

        <div className={`reveal ${visible ? 'is-visible' : ''} mt-8 text-center sm:mt-10`} style={{ animationDelay: '600ms' }}>
          <p className="mb-4 text-sm text-chocolate-500 sm:text-base">
            Tenha receitas, custos, precificação e vendas organizados em um único material.
          </p>
          <CompleteCTA
            label="QUERO AS 60 RECEITAS + GUIAS"
            className="text-sm sm:text-base sm:text-lg"
          />
        </div>
      </div>
    </section>
  );
}
