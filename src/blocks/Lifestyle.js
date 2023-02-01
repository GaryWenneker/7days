import React from 'react';
import Article from '../components/Article/Lifesyle';
import Container from '../components/UI/Container';

export default function LifeStyle({ data, preview }) {
  return (
    <section className='dark:bg-black dark:text-white'>
      <Container>
        {/* <h2 className='mb-12 text-lg font-semibold uppercase tracking-wider md:text-xl'>
          {data?.title}
        </h2> */}
        {preview ? 'Articles will show up here' : <Article />}
      </Container>
    </section>
  );
}
