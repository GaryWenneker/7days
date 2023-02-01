import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '@/components/Layout'
import DefaultHead from '../components/Head/DefaultHead'

const Post = ({ data }) => {
  return (
    <Layout nav={true}>
      <section className="container mx-auto px-4 py-24">
        <h1 className="mx-auto my-12 max-w-3xl text-6xl font-bold dark:text-white">
          {data.post.frontmatter.title}
        </h1>
        <div className="flex mx-auto my-12 max-w-3xl font-bold dark:text-white">
          {
            data.post.frontmatter.avatar ?
            <img alt={data.post.frontmatter.auteur} className='mr-5' src={data.post.frontmatter.avatar}/> : <></>
          }
          <div class="text-sky-500 dark:text-sky-400 mt-0 pt-0">
          {data.post.frontmatter.auteur}
          </div>
          <div class="dark:text-gray-300 ml-5">{new Date(data.post.frontmatter.date).toLocaleDateString('nl-NL')}
          
          </div>
          <div class="text-slate-700 dark:text-slate-500 ml-5">
          {data.post.frontmatter.rubrieken.map((item, i) => (
                            <div className='inline-flex bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300'>
                              {item}</div>
                          ))}
          </div>
        </div>
        <div
          className="prose prose-lg mx-auto max-w-3xl dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: data?.post.html }}
        ></div>
      </section>
    </Layout>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const Head = ({ data }) => (
  <DefaultHead data={data.post.frontmatter.seo}>
    {/* Additonal values here */}
    <meta id="oty" property="og:type" content="article" />
  </DefaultHead>
)

export default Post

export const basicPageQuery = graphql`
  query PostQuery($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        id
        date
        title
        author
        auteur
        rubrieken
        avatar
        ...Seo
      }
    }
  }
`
