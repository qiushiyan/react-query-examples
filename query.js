exports.allPages = `
    query MyQuery {
      allMdx(sort: {fields: {group: ASC}}) {
        edges {
          previous {
            fields {
              slug
            }
          }
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
          next {
            fields {
              slug
            }
          }
        }
      }
    }
`;
