export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  sector: string;
  serviceType: string;
  description: string;
  challenge: string;
  approach: string;
  outcome: string;
  testimonial: string | null;
  testimonialAuthor: string | null;
  testimonialRole: string | null;
  vimeoId: string | null;
  thumbnailUrl: string | null;
  featured: boolean | null;
  order: number | null;
  cloudinaryVideoUrl?: string;
  cloudinaryPosterUrl?: string;
  theBrief?: string;
  approachBullets?: string[];
  tags?: string[];
  year?: number;
  hero?: boolean;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  whoIsFor: string;
  problemSolved: string;
  whyFilmmakerLed: string;
  whatMakesDifferent: string;
  deliverables: string;
  priceFrom: string | null;
  order: number | null;
}

export interface Sector {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  industryKnowledge: string;
  whyDocumentaryWorks: string;
  experience: string;
  testimonial: string | null;
  testimonialAuthor: string | null;
  testimonialRole: string | null;
  order: number | null;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  sector: string | null;
  featured: boolean | null;
  order: number | null;
}

export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: number;
  published: boolean | null;
  createdAt: Date | null;
}
