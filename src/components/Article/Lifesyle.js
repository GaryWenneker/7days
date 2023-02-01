import React from 'react';
import ArticleCard from './ArticleCard';
import { useLifestyle } from '../../hooks/useLifestyle';

export default function Recent() {
  const posts = useLifestyle();

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
      {posts && posts.map((item, i) => <ArticleCard key={i} data={item} />)}
    </div>
  );
}
