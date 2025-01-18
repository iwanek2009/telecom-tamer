import { Post } from './BlogPosts';

interface BlogPostProps {
  post: Post;
}

export const BlogPost = ({ post }: BlogPostProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <article className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <div className="text-sm text-gray-500 mb-4">
        By {post.author} • {formattedDate}
      </div>
      <div className="prose max-w-none">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </article>
  );
};