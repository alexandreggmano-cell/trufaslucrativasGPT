export interface Testimonial {
  name: string;
  city: string;
  text: string;
  rating?: number;
  photoUrl?: string;
}

export const TESTIMONIALS: Testimonial[] = [];
