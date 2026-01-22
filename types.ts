import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  level: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FormData {
  name: string;
  phone: string;
  interest: string;
}