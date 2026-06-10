export interface Product {
  id: string;
  name: string;
  tagline: string;
  colorName: string;
  badgeColor: string; // Tailwind class
  bannerGradient: string; // Tailwind gradient
  accentColor: string; // Hex color
  description: string;
  longDescription: string;
  size: string;
  bestServed: string;
  tasteNotes: string[];
  ingredients: string[];
  nutrition: {
    calories: string;
    sodium: string;
    carbs: string;
    sugars: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Can be rich HTML/Markdown structure
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'products' | 'factory' | 'events';
  imageUrl: string;
  description: string;
}

export interface DistributorSubmission {
  id: string;
  fullName: string;
  businessName: string;
  city: string;
  phone: string;
  email: string;
  message: string;
  date: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}
