import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const savedPosts = localStorage.getItem('blog-posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      // Initialize with the default post
      const defaultPost = {
        id: '1',
        title: 'Smart Meters Set to Replace Traditional Energy Meters in the UK – What You Need to Know',
        content: `Around 600,000 UK households will have the opportunity to upgrade to smart meters as the Radio Teleswitch Service (RTS) transitions to newer technology in June 2025. This development offers an exciting opportunity to explore how modern internet connectivity can enhance home energy management.

Understanding the Transition to Smart Meters
The traditional RTS system, which has supported many UK households—particularly those on Economy 7 or Economy 10 tariffs—is being phased out in favor of newer, more advanced technologies. This upgrade aligns with the UK's broader shift toward digital solutions, making home energy management smarter and more efficient.

How Smart Meters Connect to the Internet
Smart meters are designed to work seamlessly with most internet connections. Here are key points to keep in mind:

Standard Broadband Compatibility: Smart meters work well with standard broadband connections.
Minimal Data Usage: They require very little data, so there's no need to worry about exceeding your internet limits.
Basic Internet Sufficiency: Even basic internet packages are typically enough for smart meter functionality.
Provider Support: Most internet providers offer guidance and assistance with setup if required.

Potential Benefits for Households
Upgrading to a smart meter brings several advantages, including:

Real-Time Energy Monitoring: Track your energy usage live and make informed adjustments.
Accurate Readings: No more estimated bills—smart meters ensure precise billing.
Access to Detailed Usage Data: Easily review and manage your energy consumption.
Smart Home Integration: Many smart meters can connect with other smart home devices, enhancing automation and efficiency.

Internet Requirements for Smart Meters
For the best smart meter performance, it's essential to have a reliable internet connection. Consider the following:

Stable Internet Connection: Ensure your broadband is reliable to avoid interruptions.
Strong Indoor Signal: Good Wi-Fi coverage throughout your home will support connectivity.
Consult Your Provider: Discuss your current broadband plan with your provider to ensure it meets your needs.

Preparing for the Future
As the UK continues modernizing its energy infrastructure, reliable broadband is becoming a critical component of home management. Reviewing your current broadband package is a proactive step to ensure your home is ready for the future of smart energy management.

Explore Broadband Options for Your Smart Home
Visit our broadband comparison section to explore internet packages available in your area.

Need help finding the perfect broadband package for your smart home? Use our easy-to-use comparison tool to identify the best options for your household.`,
        date: '2024-01-15T12:00:00.000Z',
        author: 'Smartfony Technology Team'
      };
      setPosts([defaultPost]);
      localStorage.setItem('blog-posts', JSON.stringify([defaultPost]));
    }
  }, []);

  const handleAddPost = (newPost: Omit<Post, 'id' | 'date'>) => {
    const post: Post = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      ...newPost
    };
    
    const updatedPosts = [post, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('blog-posts', JSON.stringify(updatedPosts));
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