import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToOffers = () => {
    document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      } top-0`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-5 sm:py-3.5">
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl">🍫</span>
          <span className="font-display text-base font-bold text-chocolate-700 sm:text-xl">
            Trufas Lucrativas
          </span>
        </div>

        <button
          onClick={scrollToOffers}
          className="inline-flex items-center gap-1.5 rounded-full bg-chocolate-600 px-3 py-1.5 text-xs font-semibold text-cream-50 transition-colors hover:bg-chocolate-700 sm:gap-2 sm:px-5 sm:py-2 sm:text-sm"
        >
          <ShoppingBag className="h-4 w-4" />
          <span className="hidden sm:inline">Ver ofertas</span>
          <span className="sm:hidden">Ofertas</span>
        </button>
      </nav>
    </header>
  );
}
