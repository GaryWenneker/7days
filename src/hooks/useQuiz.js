import { useStaticQuery, graphql } from 'gatsby';
export const useQuiz = () => {
  const {
    allMarkdownRemark: { edges: quiz },
  } = useStaticQuery(
    graphql`
      query useQuizQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { type: { eq: "quiz" } } }
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
  return quiz;
};
