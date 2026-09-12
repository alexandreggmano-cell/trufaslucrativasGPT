import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface GalleryImage {
  src: string;
  alt: string;
  label?: string;
}

interface ImageLightboxProps {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

export function ImageLightbox({ images, activeIndex, onClose, onChange }: ImageLightboxProps) {
  useEffect(() => {
    if (activeIndex === null) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onChange((activeIndex - 1 + images.length) % images.length);
      if (event.key === 'ArrowRight') onChange((activeIndex + 1) % images.length);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, images.length, onChange, onClose]);

  if (activeIndex === null) return null;

  const activeImage = images[activeIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-chocolate-900/95 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Visualização ampliada"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
        aria-label="Fechar visualização"
      >
        <X className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={() => onChange((activeIndex - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

      <div className="flex max-h-full max-w-4xl flex-col items-center gap-3">
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className="max-h-[76vh] max-w-full rounded-lg object-contain shadow-2xl sm:max-h-[80vh]"
        />
        <div className="flex items-center gap-2 text-center text-xs font-medium text-white/80 sm:text-sm">
          <span>{activeImage.label}</span>
          <span aria-hidden="true">•</span>
          <span>{activeIndex + 1} de {images.length}</span>
        </div>
        <div className="flex max-w-full gap-2 overflow-x-auto px-1 pb-1">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => onChange(index)}
              className={`h-14 w-11 flex-shrink-0 overflow-hidden rounded border-2 transition-opacity ${index === activeIndex ? 'border-caramel-300 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
              aria-label={`Ver imagem ${index + 1}`}
            >
              <img src={image.src} alt="" className="h-full w-full object-cover object-top" />
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => onChange((activeIndex + 1) % images.length)}
        className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="h-7 w-7" />
      </button>
    </div>
  );
}
