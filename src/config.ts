// ============================================================
// CONFIGURAÇÃO — Edite os links e IDs de tracking aqui
// ============================================================

export const ESSENTIAL_CHECKOUT_URL = "https://pay.cakto.com.br/zgdshm6_1069113";
export const COMPLETE_CHECKOUT_URL = "https://pay.cakto.com.br/eyzdn97_1069146";

// Dias de garantia. Defina como null para ocultar a seção de garantia.
export const GUARANTEE_DAYS: number | null = 7;

// ============================================================
// TRACKING — Meta Pixel
// ============================================================

export const META_PIXEL_ID = "2400052707493255";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function isMetaReady() {
  return typeof window !== 'undefined' && typeof window.fbq === 'function';
}

export function trackViewContent() {
  if (isMetaReady()) {
    window.fbq!('track', 'ViewContent', {
      content_name: 'Trufas Lucrativas',
      content_category: 'Ebook / Confeitaria',
    });
  }
}

export function trackCheckoutEssential() {
  if (isMetaReady()) {
    window.fbq!('track', 'InitiateCheckout', {
      content_name: 'Trufas Lucrativas — Essencial',
      value: 14.90,
      currency: 'BRL',
    });
  }
}

export function trackCheckoutComplete() {
  if (isMetaReady()) {
    window.fbq!('track', 'InitiateCheckout', {
      content_name: 'Trufas Lucrativas — Completa',
      value: 23.90,
      currency: 'BRL',
    });
  }
}

export function goToEssentialCheckout() {
  trackCheckoutEssential();
  if (ESSENTIAL_CHECKOUT_URL) {
    window.open(ESSENTIAL_CHECKOUT_URL, '_blank', 'noopener');
  }
}

export function goToCompleteCheckout() {
  trackCheckoutComplete();
  if (COMPLETE_CHECKOUT_URL) {
    window.open(COMPLETE_CHECKOUT_URL, '_blank', 'noopener');
  }
}
