import React from 'react';
import { useParams, Link } from 'react-router-dom';

const posts = {
  1: 'The Future of Private Aviation - Full article coming soon...',
  2: 'Top 5 Jet Destinations - Full article coming soon...',
  3: 'Why Choose JetElite - Full article coming soon...',
};

export default function BlogDetailPage() {
  const { id } = useParams();
  const content = posts[id];

  if (!content) return <p className="p-4">Article not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link to="/blog" className="text-gold hover:underline">&larr; Back to Blog</Link>
      <div className="mt-4 bg-gray-900 p-4 rounded">
        <p>{content}</p>
      </div>
    </div>
  );
}
