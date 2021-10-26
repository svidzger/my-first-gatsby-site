import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to my first Gatsby website.</p>
      <StaticImage
        alt="Frog with butterfly."
        src="../images/frog-with-butterfly.jpg"
      />
    </Layout>
  )
}

export default IndexPage