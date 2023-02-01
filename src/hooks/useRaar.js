import { useStaticQuery, graphql } from 'gatsby';
export const useRaar = () => {
  const {
    allMarkdownRemark: { edges: raar },
  } = useStaticQuery(
    graphql`
      query useRaarQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { type: { eq: "raar" } } }
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
  return raar;
};
