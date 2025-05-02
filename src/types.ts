export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  image: string;
  rating: number;
}

export interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
}

export interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}