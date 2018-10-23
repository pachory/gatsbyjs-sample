import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

const RedTitle = styled.h1`
  color: red;
  font-size: 20px;
`

const IndexPage = () => {
  return (
    <Layout>
      <RedTitle>My First Component</RedTitle>
      <Link to="/">Back to Home</Link>
    </Layout>
  )
}

export default IndexPage
