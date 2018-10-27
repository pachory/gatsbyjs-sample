/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve('./src/templates/story.js')
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allHnStory {
          edges {
            node {
              id
              title
              score
              order
              domain
              url
            }
          }
        }
      }
    `).then(result => {
      // 動的なページ追加
      result.data.allHnStory.edges.forEach(edge => {
        const node = edge.node
        const path = `/posts/${node.id}`
        createPage({
          path: path,
          component: postTemplate,
          context: {
            id: node.id,
          },
        })

        resolve()
      })
    })
  })
}
