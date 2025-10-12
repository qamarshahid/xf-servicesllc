import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { getBlogPosts, type BlogPost } from '../lib/api';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    try {
      const data = await getBlogPosts();
      setPosts(data);
    } catch (error) {
      console.error('Error loading blog posts:', error);
    } finally {
      setLoading(false);
    }
  }

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'web-design', label: 'Web Design' },
    { id: 'seo', label: 'SEO' },
    { id: 'development', label: 'Development' },
    { id: 'it-trends', label: 'IT Trends' }
  ];

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  if (loading) {
    return (
      <div className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-12 bg-sakura-border rounded w-96 mx-auto mb-8"></div>
            <div className="h-6 bg-sakura-border rounded w-64 mx-auto mb-16"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-sakura-bg rounded-2xl p-8">
                  <div className="h-48 bg-sakura-border rounded-xl mb-6"></div>
                  <div className="h-6 bg-sakura-border rounded mb-4"></div>
                  <div className="h-4 bg-sakura-border rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Main Content */}
            <div>
              <h1 className="text-6xl md:text-7xl font-bold text-sakura-ink leading-[0.9] mb-8">
                Insights & knowledge for your business
              </h1>
              <p className="text-2xl text-sakura-ink leading-relaxed mb-12">
                Stay updated with the latest trends, tips, and insights in web development, design, and digital marketing to help your business grow.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-sakura-ink rounded-xl font-semibold text-sakura-ink hover:bg-sakura-ink hover:text-white transition-all duration-300 group"
              >
                Subscribe to Updates
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Side - Featured Post */}
            {posts.length > 0 ? (
              <div className="bg-sakura-bg rounded-2xl border border-sakura-border overflow-hidden">
                <img 
                  src={posts[0].featured_image || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=300&fit=crop'} 
                  alt={posts[0].title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-10">
                  <div className="flex items-center gap-6 text-sm text-sakura-muted mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {new Date(posts[0].created_at).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {posts[0].read_time || '5'} min read
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-sakura-ink mb-4">{posts[0].title}</h3>
                  <p className="text-sakura-ink leading-relaxed mb-6 text-lg">{posts[0].excerpt}</p>
                  <Link
                    to={`/blog/${posts[0].slug}`}
                    className="inline-flex items-center gap-2 text-sakura-brand font-semibold hover:text-sakura-brand-light transition-colors text-lg"
                  >
                    Read More
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-sakura-bg rounded-2xl p-16 border border-sakura-border text-center">
                <div className="w-20 h-20 bg-sakura-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Calendar size={40} className="text-sakura-brand" />
                </div>
                <h3 className="text-2xl font-bold text-sakura-ink mb-4">No Posts Yet</h3>
                <p className="text-sakura-ink text-lg">
                  We're working on creating valuable content for you. Check back soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Categories & Posts */}
      <section className="py-24 px-4 bg-sakura-bg">
        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-20">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-sakura-brand text-white'
                    : 'bg-white text-sakura-ink border border-sakura-border hover:border-sakura-brand'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl border border-sakura-border overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={post.featured_image || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=300&fit=crop'} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center gap-6 text-sm text-sakura-muted mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {new Date(post.created_at).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        {post.read_time || '5'} min read
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-sakura-ink mb-4 line-clamp-2">{post.title}</h3>
                    <p className="text-sakura-ink leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sakura-brand font-semibold hover:text-sakura-brand-light transition-colors group"
                    >
                      Read More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-sakura-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Calendar size={40} className="text-sakura-brand" />
              </div>
              <h3 className="text-3xl font-bold text-sakura-ink mb-4">No Posts Found</h3>
              <p className="text-sakura-ink text-lg">
                No posts available for the selected category. Try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-sakura-bg rounded-3xl p-16 border border-sakura-border">
            <h2 className="text-4xl font-bold text-sakura-ink leading-tight mb-8">
              Stay updated with our <span className="text-sakura-brand">latest posts</span>
            </h2>
            <p className="text-xl text-sakura-ink leading-relaxed mb-12 max-w-2xl mx-auto">
              Get notified when we publish new articles about web development, design trends, and business growth tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 border border-sakura-border rounded-xl focus:ring-2 focus:ring-sakura-brand focus:border-transparent transition-all text-lg"
              />
              <button className="px-8 py-4 bg-sakura-brand text-white rounded-xl font-semibold hover:bg-sakura-brand/90 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}