import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Helmet } from 'react-helmet';
import { Post } from '../components/blog/BlogPosts';
import { useState, useEffect } from 'react';

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    // In a real application, this would be an API call
    // For now, we'll use localStorage to persist posts
    const posts = JSON.parse(localStorage.getItem('blog-posts') || '[]');
    const foundPost = posts.find((p: Post) => p.id === id);
    if (foundPost) {
      setPost(foundPost);
    }
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post not found</h1>
            <Button onClick={() => navigate('/blog')} variant="outline">
              Back to Blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{post.title} | Smartfony Blog</title>
        <meta name="description" content={post.content.slice(0, 155) + '...'} />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <article className="max-w-4xl mx-auto" itemScope itemType="http://schema.org/Article">
          <Button 
            onClick={() => navigate('/blog')} 
            variant="outline"
            className="mb-8"
          >
            ← Back to Blog
          </Button>
          
          <header>
            <h1 className="text-4xl font-bold mb-6" itemProp="headline">{post.title}</h1>
            <meta itemProp="datePublished" content={new Date(post.date).toISOString().split('T')[0]} />
          </header>
          
          <div className="text-gray-600 mb-8">
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          
          <div className="prose prose-lg max-w-none" itemProp="articleBody">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('# ', '')}</h2>;
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').map(item => item.replace('- ', ''));
                return (
                  <ul key={index} className="list-disc pl-6 mb-4">
                    {items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                );
              }
              if (paragraph.startsWith('1. ')) {
                const items = paragraph.split('\n').map(item => item.replace(/^\d+\. /, ''));
                return (
                  <ol key={index} className="list-decimal pl-6 mb-4">
                    {items.map((item, i) => <li key={i}>{item}</li>)}
                  </ol>
                );
              }
              return <p key={index} className="mb-4">{paragraph}</p>;
            })}
          </div>

          <footer className="mt-8 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <small>
                Published by <span itemProp="publisher" itemScope itemType="http://schema.org/Organization">
                  <meta itemProp="name" content="smartfony.co.uk" />
                </span> technology team | January 2025
              </small>
            </p>
            
            <p className="mt-4 text-gray-700">
              Need help choosing the right broadband package for your smart home needs? 
              Use our comparison tool to find the best options in your area.
            </p>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;