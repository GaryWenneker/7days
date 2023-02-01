import { useStaticQuery, graphql } from 'gatsby';
export const useSchool = () => {
  const {
    allMarkdownRemark: { edges: school },
  } = useStaticQuery(
    graphql`
      query useSchoolQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { type: { eq: "school" } } }
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
  return school;
};
