import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BlogPosts } from '../components/blog/BlogPosts';
import { Helmet } from 'react-helmet';

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Blog | Smartfony - Mobile & Broadband News</title>
        <meta 
          name="description" 
          content="Stay updated with the latest news and insights about mobile phones, broadband, and technology trends."
        />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Latest Updates</h1>
        <BlogPosts />
      </main>

      <Footer />
    </div>
  );
};

export default Blog;