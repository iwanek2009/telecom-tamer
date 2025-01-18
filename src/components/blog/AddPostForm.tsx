import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Post } from './BlogPosts';

interface AddPostFormProps {
  onSubmit: (post: Omit<Post, 'id' | 'date'>) => void;
}

export const AddPostForm = ({ onSubmit }: AddPostFormProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !author.trim()) return;
    
    onSubmit({
      title: title.trim(),
      content: content.trim(),
      author: author.trim(),
    });

    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          required
        />
      </div>

      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
          Author
        </label>
        <Input
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author name"
          required
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
          Content
        </label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your blog post content here..."
          className="min-h-[200px]"
          required
        />
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
        Publish Post
      </Button>
    </form>
  );
};