import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'


const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My blog posts">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted on {node.frontmatter.date}</p>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
            <small>Last time modified {node.parent.modifiedTime}</small>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        body
        parent {
          ... on File {
            id
            name
            modifiedTime(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }`

export default BlogPage