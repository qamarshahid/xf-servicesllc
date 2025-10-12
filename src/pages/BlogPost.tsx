import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  featured_image_url?: string;
  published_at: string;
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  // Static blog posts data (same as in Blog.tsx)
  const posts: BlogPost[] = [
    {
      id: '1',
      title: '10 Web Design Trends to Watch in 2025',
      slug: '10-web-design-trends-2025',
      excerpt: 'Discover the latest design trends that will shape the future of web development and user experience.',
      content: 'Web design is constantly evolving, and 2025 promises to bring exciting new trends. From AI-powered design tools to immersive 3D experiences, the future of web design is here. In this comprehensive guide, we explore the top trends that will define the digital landscape in 2025.\n\n1. AI-Assisted Design\n2. Immersive 3D Experiences\n3. Minimalist Interfaces\n4. Dark Mode as Standard\n5. Micro-interactions\n\nEach trend brings unique opportunities for creating engaging user experiences.',
      author: 'Sarah Johnson',
      category: 'web-design',
      featured_image_url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop',
      published_at: '2024-12-15'
    },
    {
      id: '2',
      title: 'The Complete Guide to SEO in 2025',
      slug: 'complete-guide-seo-2025',
      excerpt: 'Learn how to optimize your website for search engines and increase your organic traffic.',
      content: 'Search Engine Optimization has become more sophisticated than ever. This guide covers everything you need to know about SEO in 2025, from technical optimization to content strategy.\n\nKey topics covered:\n- Technical SEO fundamentals\n- Content optimization strategies\n- Link building best practices\n- Local SEO techniques\n- Mobile-first indexing\n\nImplementing these strategies will help your website rank higher and attract more organic traffic.',
      author: 'Michael Chen',
      category: 'seo',
      featured_image_url: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop',
      published_at: '2024-12-10'
    },
    {
      id: '3',
      title: 'Building Scalable React Applications',
      slug: 'building-scalable-react-applications',
      excerpt: 'Best practices and patterns for creating maintainable and scalable React applications.',
      content: 'Building applications that can grow and scale is crucial for long-term success. This guide explores proven patterns and best practices for creating React applications that are easy to maintain and scale.\n\nTopics include:\n- Component architecture\n- State management strategies\n- Code splitting and lazy loading\n- Performance optimization\n- Testing strategies\n\nFollow these principles to build robust, scalable applications.',
      author: 'Emily Rodriguez',
      category: 'development',
      featured_image_url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
      published_at: '2024-12-05'
    }
  ];

  const post = posts.find(p => p.slug === slug);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-sakura-muted mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sakura-brand text-white rounded-button font-bold shadow-brand hover:scale-105 transition-transform"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sakura-brand hover:text-sakura-muted transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

          {post.featured_image_url && (
            <div className="aspect-video rounded-card overflow-hidden mb-8 shadow-card">
              <img
                src={post.featured_image_url}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sakura-muted">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{formatDate(post.published_at)}</span>
              </div>
              <span className="px-3 py-1 bg-sakura-brand-light text-sakura-brand rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="text-xl text-sakura-muted mb-8 leading-relaxed">
              {post.excerpt}
            </div>

            <div className="text-sakura-ink leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white border-t border-sakura-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Your Project?</h2>
          <p className="text-sakura-muted mb-8 max-w-2xl mx-auto">
            Our team is ready to help you implement these strategies and grow your business online.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-sakura-brand text-white rounded-button font-bold shadow-brand hover:scale-105 transition-transform"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
