import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  console.log(data)
  const story = data.hnStory
  return (
    <Layout>
      <h1>{story.title}</h1>
    </Layout>
  )
}

// $id は gatsby-node.js の createPage で context 内で渡している id が割り当てられる
export const query = graphql`
  query($id: String!) {
    hnStory(id: { eq: $id }) {
      id
      title
      score
      order
      domain
      url
    }
  }
`
