import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

// GraphQL のレスポンスが引数の props に入ってくる
const Data = props => {
  return (
    <Layout>
      {props.data.allHnStory.edges.map(edge => {
        const story = edge.node
        const path = '/posts/' + story.id

        return (
          <Link to={path} style={{ color: 'inherit' }}>
            {story.title}
            <small style={{ display: 'block' }}>
              {story.score} Point | {story.domain}
            </small>
          </Link>
        )
      })}

      <Link to="/">Go back to the homepage</Link>
    </Layout>
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
