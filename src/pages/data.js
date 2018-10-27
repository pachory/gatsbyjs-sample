import React from 'react'
import { graphql } from 'gatsby'

// GraphQL のレスポンスが引数の props に入ってくる
const Data = props => {
  return (
    <div>
      {props.data.allHnStory.edges.map(edge => {
        const story = edge.node

        return (
          <a style={{ color: 'inherit' }} href={story.url} key={story.id}>
            {story.title}
            <small style={{ display: 'block' }}>
              {story.score} Point | {story.domain}
            </small>
          </a>
        )
      })}
    </div>
  )
}

// Hacker News GraphQL API
// npm で gatsby-source-hacker-news パッケージをインストールする
// https://www.gatsbyjs.org/packages/gatsby-source-hacker-news/?=gatsby-source-hacker-n
export const query = graphql`
  query {
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
`
export default Data
