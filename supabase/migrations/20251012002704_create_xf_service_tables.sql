/*
  # Create Xf Service LLC Database Schema

  ## Overview
  This migration creates the complete database schema for the Xf Service LLC website,
  including tables for contact forms, testimonials, blog posts, careers, and newsletter subscriptions.

  ## New Tables

  ### 1. `contact_submissions`
  Stores all contact form submissions from potential clients
  - `id` (uuid, primary key) - Unique identifier for each submission
  - `name` (text) - Full name of the person contacting
  - `email` (text) - Email address for follow-up
  - `phone` (text) - Phone number (optional)
  - `message` (text) - The inquiry or message content
  - `sms_consent` (boolean) - Whether user consented to SMS communications
  - `created_at` (timestamptz) - When the submission was received
  - `status` (text) - Tracking status: 'new', 'contacted', 'closed'

  ### 2. `testimonials`
  Client reviews and success stories
  - `id` (uuid, primary key) - Unique identifier
  - `client_name` (text) - Name of the person giving testimonial
  - `company_name` (text) - Their company name
  - `position` (text) - Their job title (optional)
  - `quote` (text) - The testimonial content
  - `rating` (integer) - Star rating 1-5
  - `is_approved` (boolean) - Whether testimonial is approved for display
  - `created_at` (timestamptz) - When testimonial was added
  - `display_order` (integer) - For manual ordering on frontend

  ### 3. `blog_posts`
  Articles and insights about web design, SEO, and IT trends
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Post title
  - `slug` (text, unique) - URL-friendly identifier
  - `excerpt` (text) - Short summary for listing pages
  - `content` (text) - Full article content (supports markdown)
  - `author` (text) - Author name
  - `category` (text) - Post category (e.g., 'web-design', 'seo', 'development')
  - `featured_image_url` (text) - URL to header image
  - `is_published` (boolean) - Whether post is live
  - `published_at` (timestamptz) - Publication date
  - `created_at` (timestamptz) - When post was created
  - `updated_at` (timestamptz) - Last modification date

  ### 4. `job_listings`
  Open positions and career opportunities
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Job title
  - `department` (text) - Department or team
  - `location` (text) - Work location (e.g., 'Austin, TX', 'Remote')
  - `job_type` (text) - Employment type: 'full-time', 'part-time', 'contract'
  - `description` (text) - Detailed job description and requirements
  - `is_active` (boolean) - Whether position is currently open
  - `created_at` (timestamptz) - When listing was posted
  - `updated_at` (timestamptz) - Last modification date

  ### 5. `newsletter_subscribers`
  Email list for marketing and updates
  - `id` (uuid, primary key) - Unique identifier
  - `email` (text, unique) - Subscriber email address
  - `subscribed_at` (timestamptz) - When they subscribed
  - `is_active` (boolean) - Whether subscription is active

  ## Security
  
  All tables have Row Level Security (RLS) enabled.
  
  ### Contact Submissions
  - Public can insert (submit forms)
  - No public read access (privacy protection)
  
  ### Testimonials
  - Public can read approved testimonials only
  - No public insert/update/delete
  
  ### Blog Posts
  - Public can read published posts only
  - No public insert/update/delete
  
  ### Job Listings
  - Public can read active listings only
  - No public insert/update/delete
  
  ### Newsletter Subscribers
  - Public can insert (sign up)
  - No public read access (privacy protection)

  ## Important Notes
  
  1. SMS consent is explicitly tracked for compliance with communication regulations
  2. All timestamps use timestamptz for proper timezone handling
  3. Approved/published flags allow content moderation before going live
  4. Indexes are added on commonly queried fields for performance
  5. Default values prevent null-related issues
*/

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  sms_consent boolean DEFAULT false,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions FOR INSERT
  TO anon
  WITH CHECK (true);

-- Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  company_name text NOT NULL,
  position text,
  quote text NOT NULL,
  rating integer DEFAULT 5,
  is_approved boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(is_approved, display_order);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view approved testimonials"
  ON testimonials FOR SELECT
  TO anon
  USING (is_approved = true);

-- Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text DEFAULT 'Xf Service Team',
  category text DEFAULT 'general',
  featured_image_url text,
  is_published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  TO anon
  USING (is_published = true);

-- Job Listings Table
CREATE TABLE IF NOT EXISTS job_listings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  department text NOT NULL,
  location text NOT NULL,
  job_type text DEFAULT 'full-time',
  description text NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_job_listings_active ON job_listings(is_active, created_at DESC);

ALTER TABLE job_listings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active job listings"
  ON job_listings FOR SELECT
  TO anon
  USING (is_active = true);

-- Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  is_active boolean DEFAULT true,
  subscribed_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  TO anon
  WITH CHECK (true);