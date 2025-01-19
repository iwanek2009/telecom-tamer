import { Link } from 'react-router-dom';
import { Post } from './BlogPosts';
import { slugify } from '@/lib/utils';

interface BlogPostProps {
  post: Post;
}

export const BlogPost = ({ post }: BlogPostProps) => {
  const postSlug = slugify(post.title);
  
  return (
    <article className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <Link to={`/blog/${postSlug}`} className="block group">
        <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
          {post.title}
        </h2>
      </Link>
      
      <div className="text-gray-600 mb-4">
        <span>By {post.author}</span>
        <span className="mx-2">•</span>
        <span>{new Date(post.date).toLocaleDateString()}</span>
      </div>
      
      <p className="text-gray-700 mb-4">
        {post.content.slice(0, 200)}...
      </p>
      
      <Link 
        to={`/blog/${postSlug}`}
        className="text-primary hover:text-primary/90 font-medium transition-colors"
      >
        Read more →
      </Link>
    </article>
  );
};