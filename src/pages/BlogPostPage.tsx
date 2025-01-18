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
        <article className="max-w-4xl mx-auto">
          <Button 
            onClick={() => navigate('/blog')} 
            variant="outline"
            className="mb-8"
          >
            ← Back to Blog
          </Button>
          
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="text-gray-600 mb-8">
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;