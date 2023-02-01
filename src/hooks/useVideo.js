import { useStaticQuery, graphql } from 'gatsby';
export const useVideo = () => {
  const {
    allMarkdownRemark: { edges: video },
  } = useStaticQuery(
    graphql`
      query useVideoQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { type: { eq: "video" } } }
          limit: 9000
        ) {
          edges {
            node {
              id
              excerpt(pruneLength: 120)
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                author
                auteur
                rubrieken
                thumbnail
              }
            }
          }
        }
      }
    `,
  );
  return video;
};
