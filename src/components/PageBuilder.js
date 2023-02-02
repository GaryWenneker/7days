import React from 'react';
import { graphql } from 'gatsby';

import Hero from '@/blocks/Hero';
import RecentArticles from '../blocks/RecentArticles';
import RecentNieuws from '../blocks/RecentNieuws';
import Lifestyle from '../blocks/Lifestyle';
import School from '../blocks/School';
import Raar from '../blocks/Raar';
import Video from '../blocks/Video';
import Quiz from '../blocks/Quiz';
import Nieuwsdossier from '../blocks/Nieuwsdossier';
import ContentImage from '../blocks/ContentImage';
import Perks from '../blocks/Perks';
import Content from '../blocks/Content';
import SearchBox from '../blocks/SearchBox';

export default function PageBuilder({ blocks, preview = false }) {
  return (
    <>
      {blocks &&
        blocks.map((block, i) => {
          switch (block.type) {
            case 'hero':
              return <Hero key={i} data={block} />;
            case 'searchbox':
              return <SearchBox key={i} data={block} />;
            case 'recentArticles':
              return <RecentArticles key={i} data={block} preview={preview} />;
            case 'recentNieuws':
              return <RecentNieuws key={i} data={block} preview={preview} />;
            case 'lifestyle':
                return <Lifestyle key={i} data={block} preview={preview} />;
            case 'school':
                return <School key={i} data={block} preview={preview} />;
            case 'raar':
                return <Raar key={i} data={block} preview={preview} />;
            case 'video':
                return <Video key={i} data={block} preview={preview} />;
            case 'quiz':
                return <Quiz key={i} data={block} preview={preview} />;
            case 'nieuwsdossier':
              return <Nieuwsdossier key={i} data={block} preview={preview} />;                
            case 'content_image':
              return <ContentImage key={i} data={block} preview={preview} />;
            case 'perks':
              return <Perks key={i} data={block} preview={preview} />;
            case 'content':
              return <Content key={i} data={block} preview={preview} />;
            default:
              return (
                <div className='container mx-auto'>
                  <div className='text-center'>
                    Missing Section {block.type}
                  </div>
                </div>
              );
          }
        })}
    </>
  );
}

export const query = graphql`
  fragment Blocks on MarkdownRemarkFrontmatter {
    blocks {
      type
      title
      content
      variant
    }
  }
`;
