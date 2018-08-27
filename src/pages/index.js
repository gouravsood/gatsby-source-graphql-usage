/* import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
 */

import React from "react";
import Link from 'gatsby-link';

export default  ({ data }) => {
    console.log(data);
    return (
      <div>
        <Link to="/page-2/">Page 2</Link>
        <h2>GitHub Repositories</h2>
        <ul>
          {
            data.githubGraphQl.viewer.repositories.nodes.map(repository => (
              <li>{repository.name} : {repository.url}</li>
            ))
          }
        </ul>
      </div>
    )
}

export const query = graphql`
query RepositoriesQuery {
  githubGraphQl {
    viewer {
      repositories {
        nodes {
          name
          url
        }
      }
    }
  }
}
`