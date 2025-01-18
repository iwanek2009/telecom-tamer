import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BlogPosts } from '../components/blog/BlogPosts';
import { Helmet } from 'react-helmet';

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Smart Meter Internet Requirements UK Guide 2025 | Compare Broadband Deals</title>
        <meta 
          name="description" 
          content="Discover how smart meters affect your home internet needs in 2025. Compare broadband packages suitable for smart home technology. Expert advice on connectivity requirements and deals."
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