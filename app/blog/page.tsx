import { allBlogs } from '../../content/blogContent';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default async function BlogPage() {
  
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      {allBlogs
        .map((post) => (
          <Link
            key={post.title}
            className="flex flex-col space-y-1 mb-10"
            href={`/blog/${post.url}`}
          >
            <div className="w-full">
              <div className=' font-serif text-sm mb-2'>{post.title}</div>
              <div className='text-xs text-neutral-600'>{post.shortDescription}</div>
              <button className='text-xs underline'>Read full blog</button>
            </div>
          </Link>
        ))}
    </section>
  );
}
