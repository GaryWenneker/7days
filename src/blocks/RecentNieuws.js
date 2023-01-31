import React from 'react';
import Nieuws from '../components/Article/Nieuws';
import Container from '../components/UI/Container';

export default function RecentNieuws({ data, preview }) {
  return (
    <section className='py-10 dark:bg-black dark:text-white lg:py-16'>
      <Container>
        <h2 className='mb-12 text-lg font-semibold uppercase tracking-wider md:text-xl'>
          {data?.title}
        </h2>
        {preview ? 'Articles will show up here' : <Nieuws />}
      </Container>
    </section>
  );
}
