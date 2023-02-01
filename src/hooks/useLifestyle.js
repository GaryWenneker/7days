import { useStaticQuery, graphql } from 'gatsby';
export const useLifestyle = () => {
  const {
    allMarkdownRemark: { edges: lifestyle },
  } = useStaticQuery(
    graphql`
      query LifestyleQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { type: { eq: "lifestyle" } } }
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
  return lifestyle;
};
