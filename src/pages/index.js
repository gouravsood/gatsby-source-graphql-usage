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

export default  ({ data }) => {
    console.log(data);
    return (
      <div>
        <h2>GitHub Repositories</h2>
        <ul>
          {
            data.repositories.nodes.map(repository => (
              <li>{repository.name} : {repository.url}</li>
            ))
          }
        </ul>
      </div>
    )
}

export const query = graphql`
query RepositoriesQuery {
  viewer {
    repositories(privacy: PUBLIC, affiliations: OWNER, isFork: false, first: 100) {
      nodes {
        name
        url
      }
    }
  }
}
`