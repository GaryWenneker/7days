import { useStaticQuery, graphql } from 'gatsby';
export const useRecentNieuws = () => {
  const {
    allMarkdownRemark: { edges: nieuws },
  } = useStaticQuery(
    graphql`
      query RecentNieuwsQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { type: { eq: "nieuws" } } }
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
  return nieuws;
};
