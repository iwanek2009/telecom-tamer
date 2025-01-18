import { useState } from 'react';
import { BlogPost } from './BlogPost';
import { AddPostForm } from './AddPostForm';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

export interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
}

export const BlogPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const { toast } = useToast();

  const handleAddPost = (newPost: Omit<Post, 'id' | 'date'>) => {
    const post: Post = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      ...newPost
    };
    
    setPosts([post, ...posts]);
    setShowAddForm(false);
    
    toast({
      title: "Post Added",
      description: "Your blog post has been published successfully.",
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-end">
        <Button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-primary hover:bg-primary/90"
        >
          {showAddForm ? 'Cancel' : 'Add New Post'}
        </Button>
      </div>

      {showAddForm && (
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <AddPostForm onSubmit={handleAddPost} />
        </div>
      )}

      <div className="grid gap-8">
        {posts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
        
        {posts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No blog posts yet. Be the first to add one!
          </div>
        )}
      </div>
    </div>
  );
};