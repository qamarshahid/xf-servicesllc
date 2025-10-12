import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { getBlogPostBySlug, type BlogPost } from '../lib/api';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (slug) {
      loadPost(slug);
    }
  }, [slug]);

  async function loadPost(slug: string) {
    try {
      const data = await getBlogPostBySlug(slug);
      setPost(data);
      if (!data) {
        setError(true);
      }
    } catch (err) {
      console.error('Error loading blog post:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-sakura-border border-t-sakura-brand rounded-full animate-spin"></div>
          <p className="text-sakura-muted mt-4">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
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
