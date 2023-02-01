import { useStaticQuery, graphql } from 'gatsby';
export const useNieuwsdossier = () => {
  const {
    allMarkdownRemark: { edges: nieuwsdossier },
  } = useStaticQuery(
    graphql`
      query useNieuwsdossierQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { type: { eq: "nieuwsdossier" } } }
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
  return nieuwsdossier;
};
