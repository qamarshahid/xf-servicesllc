import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  message: string;
  sms_consent: boolean;
}

export interface Testimonial {
  id: string;
  client_name: string;
  company_name: string;
  position?: string;
  quote: string;
  rating: number;
  display_order: number;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  featured_image_url?: string;
  published_at: string;
  created_at: string;
}

export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  job_type: string;
  description: string;
  created_at: string;
}

export interface NewsletterSubscription {
  email: string;
}
