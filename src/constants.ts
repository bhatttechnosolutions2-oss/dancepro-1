import { Star, Award, Music, Zap } from 'lucide-react';
import { Program, Testimonial, Feature } from './types';

export const PROGRAMS: Program[] = [
  {
    id: 'contemporary',
    title: 'Contemporary',
    description: 'Expressive movement combining ballet, modern, and jazz techniques. Perfect for storytelling through dance.',
    image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=800&auto=format&fit=crop',
    level: 'All Levels',
  },
  {
    id: 'hiphop',
    title: 'Hip Hop & Urban',
    description: 'High-energy street styles focusing on rhythm, groove, and attitude. Learn the latest trends and old school foundations.',
    image: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=800&auto=format&fit=crop',
    level: 'Beginner - Advanced',
  },
  {
    id: 'bollywood',
    title: 'Bollywood Funk',
    description: 'The vibrancy of Indian cinema mixed with modern funk. Energetic, fun, and perfect for building stamina.',
    image: 'https://images.unsplash.com/photo-1545622340-9a35e2389d36?q=80&w=800&auto=format&fit=crop',
    level: 'Open for All',
  },
  {
    id: 'kids',
    title: 'Kids Creative Movement',
    description: 'Specially designed curriculum for ages 4-12 to build confidence, coordination, and rhythm early on.',
    image: 'https://images.unsplash.com/photo-1555597408-26bc8e548a46?q=80&w=800&auto=format&fit=crop',
    level: 'Kids (4-12)',
  }
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Expert Faculty',
    description: 'Learn from experienced choreographers who are passionate about bringing out the best in you.',
    icon: Star,
  },
  {
    id: 2,
    title: 'Professional Training',
    description: 'Structured courses designed to take you from a beginner to a professional performer.',
    icon: Award,
  },
  {
    id: 3,
    title: 'Premium Studio',
    description: 'Spacious floor, full mirrors, and professional sound system in the heart of Guwahati.',
    icon: Music,
  },
  {
    id: 4,
    title: 'Performance Opportunities',
    description: 'Regular showcases and events to help you overcome stage fright and shine.',
    icon: Zap,
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rohan Das",
    role: "Student - Hip Hop",
    content: "Dance Pro Studio has completely changed my vibe. The instructors explain every beat so clearly!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Parent",
    content: "My son loves his evening classes here. It's safe, professional, and really fun for the kids.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Professional Batch",
    content: "The best place in Guwahati if you want to take dance seriously. Highly recommended!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
  }
];