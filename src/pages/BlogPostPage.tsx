import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Helmet } from 'react-helmet';
import { Post } from '../components/blog/BlogPosts';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem('blog-posts') || '[]');
    const foundPost = posts.find((p: Post) => p.id === id);
    if (foundPost) {
      setPost(foundPost);
    }
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-[#F1F0FB]">
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
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F1F0FB]">
      <Helmet>
        <title>{post.title} | Smartfony Blog</title>
        <meta name="description" content={post.content.slice(0, 155) + '...'} />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12" itemScope itemType="http://schema.org/Article">
          <Button 
            onClick={() => navigate('/blog')} 
            variant="outline"
            className="mb-8 hover:bg-[#9b87f5]/10"
          >
            ← Back to Blog
          </Button>
          
          <header>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1A1F2C] to-[#9b87f5] bg-clip-text text-transparent" itemProp="headline">
              {post.title}
            </h1>
            <meta itemProp="datePublished" content={new Date(post.date).toISOString().split('T')[0]} />
          </header>
          
          <div className="text-[#1A1F2C]/70 mb-8 text-lg">
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          
          <div className="prose prose-lg max-w-none prose-headings:text-[#1A1F2C] prose-p:text-[#1A1F2C]/80 prose-li:text-[#1A1F2C]/80" itemProp="articleBody">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 bg-gradient-to-r from-[#1A1F2C] to-[#9b87f5] bg-clip-text text-transparent">{paragraph.replace('# ', '')}</h2>;
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').map(item => item.replace('- ', ''));
                return (
                  <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
                    {items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                );
              }
              if (paragraph.startsWith('1. ')) {
                const items = paragraph.split('\n').map(item => item.replace(/^\d+\. /, ''));
                return (
                  <ol key={index} className="list-decimal pl-6 mb-4 space-y-2">
                    {items.map((item, i) => <li key={i}>{item}</li>)}
                  </ol>
                );
              }
              return <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>;
            })}
          </div>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-[#1A1F2C]/60">
              <small>
                Published by <span itemProp="publisher" itemScope itemType="http://schema.org/Organization">
                  <meta itemProp="name" content="smartfony.co.uk" />
                </span> technology team | January 2025
              </small>
            </p>
            
            <div className="mt-8 bg-gradient-to-br from-[#F1F0FB] to-[#E5DEFF] p-6 rounded-xl">
              <p className="text-[#1A1F2C] font-medium mb-4">
                Need help choosing the right broadband package for your smart home needs?
              </p>
              <Button 
                onClick={() => navigate('/broadband')} 
                className="bg-[#9b87f5] hover:bg-[#8B5CF6] text-white flex items-center gap-2"
              >
                Compare Broadband Deals
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;