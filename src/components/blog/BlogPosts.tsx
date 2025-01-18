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
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      title: 'Smart Meters Set to Replace Traditional Energy Meters in UK - What You Need to Know',
      content: `Around 600,000 UK households will have the opportunity to upgrade to smart meters when the Radio Teleswitch Service (RTS) transitions to newer technology in June 2025. This change presents an opportunity to explore how modern internet connectivity can enhance home energy management.

Understanding the Changes
The traditional RTS system, which has served many UK households, particularly those on Economy 7 or Economy 10 tariffs, is being updated to embrace newer technologies. This shift aligns with the broader movement toward digital solutions in home management.

Internet and Smart Meter Connection
When considering smart meter installation, here's what homeowners might want to consider about their internet connection:
• Smart meters typically work well with standard broadband connections
• The data usage is minimal
• A basic internet connection is usually sufficient
• Many providers offer support with setup

Potential Benefits for Households
The transition to smart meters can offer several advantages:
• Real-time energy monitoring
• More accurate readings
• Easier access to usage information
• Potential for integration with other smart home features

Internet Requirements
For optimal smart meter performance, consider:
• Having a stable internet connection
• Ensuring good indoor signal coverage
• Discussing options with your internet provider

Looking Ahead
As the UK continues to modernize its energy infrastructure, having reliable internet becomes increasingly valuable for home management. Consider reviewing your current broadband package to ensure it meets your household's growing connectivity needs.

Visit our broadband comparison section to explore internet options in your area.

Need help choosing the right broadband package for your smart home needs? Use our comparison tool to find the best options in your area.`,
      date: '2024-01-15T12:00:00.000Z',
      author: 'Smartfony Technology Team'
    }
  ]);
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