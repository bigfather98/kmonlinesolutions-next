export interface Service {
  title: string;
  description: string;
}

export interface Project {
  title: string;
  category: string;
  src: string;
  href?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  cta: string;
  href: string;
  highlight: boolean;
}
