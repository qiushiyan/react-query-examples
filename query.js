exports.allPages = `
    query MyQuery {
      allMdx(sort: {fields: {group: ASC}}) {
        edges {
          node {
            frontmatter {
              title
            }
            tableOfContents
            internal {
              contentFilePath
            }
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
`;
