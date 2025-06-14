import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { id: 1, title: 'The Future of Private Aviation', date: '2023-01-10', preview: 'A look at upcoming trends in the industry.' },
  { id: 2, title: 'Top 5 Jet Destinations', date: '2023-02-15', preview: 'Where to fly for luxury and relaxation.' },
  { id: 3, title: 'Why Choose JetElite', date: '2023-03-20', preview: 'Discover the JetElite difference.' },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Blog</h2>
      <div className="space-y-4">
        {posts.map(p => (
          <div key={p.id} className="bg-gray-900 p-4 rounded">
            <h3 className="text-xl mb-1"><Link to={`/blog/${p.id}`}>{p.title}</Link></h3>
            <p className="text-sm text-gray-400 mb-1">{p.date}</p>
            <p className="text-gray-300">{p.preview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
