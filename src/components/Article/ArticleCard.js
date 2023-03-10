import React from 'react';
import Link from '../../resolvers/Link';

export default function ArticleCard({ data }) {
  const { node: post } = data;
  return (
    <article className='mb-8'>
      <h2 className='mb-4 text-2xl font-bold'>
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
      </h2>
      <div class="dark:text-gray-300 ml-5">
          {new Date(post.frontmatter.date).toLocaleDateString('nl-NL')}
      </div>
      <div className="flex mx-auto mb-1 max-w-3xl font-bold dark:text-white">
          <div class="text-sky-500 dark:text-sky-400">
          {post.frontmatter.auteur}
          </div>          
          {
            post.frontmatter.auteur ? 
              <div class="text-slate-700 dark:text-slate-500 ml-2">
                {
                  post.frontmatter.rubrieken.map((item, i) => (
                    <div className='inline-flex bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300'>
                      {item}</div>
                  ))}
                
              </div> : <div class="text-slate-700 dark:text-slate-500">
                        {
                          post.frontmatter.rubrieken.map((item, i) => (
                            <div className='inline-flex bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300'>
                              {item}</div>
                          ))}
                        
                      </div>
          }
      </div>

      <div className='prose mb-3 dark:prose-invert'>{post.excerpt}</div>
      <Link to={post.fields.slug}>
        Read more <div className='sr-only'>about {post.frontmatter.title}</div>
      </Link>
    </article>
  );
}
