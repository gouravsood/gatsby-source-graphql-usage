<p align="center">
  <a href="https://next.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Sample Gatsby's project integrated with GraphQL Server hosted separately
</h1>

This sample project has been created to showcase how one can integrate another GraphQL API in gatsby project. This integration with another GraphQL server is achieved using [gatsby-source-graphql](https://github.com/wyze/gatsby-source-graphql) plugin. You can find simple configuration and the steps to setup the project.

## 🚀 Quick start

1.  **Clone this repo.**

    ```sh
    git clone https://github.com/gouravsood/gatsby-source-graphql-usage
    ```

2.  **Install the dependencies**

    ```sh
    npm install
    ```

3.  **Get GitHub Access Token**

    - Navigate into Github Settings > Developer Settings > Personal access tokens. or directly go here https://github.com/settings/tokens
    - Click 'Generate new token' and assign scope provided here in the documentation https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql

4.  **Run the application!**

    ```sh
    GITHUB_TOKEN=<token-generated-above> gatsby develop
    ```

5.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://next.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://next.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples head [to our documentation](https://next.gatsbyjs.org/docs/).** In particular, check out the “Guides”, API reference, and “Advanced Tutorials” sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gouravsood/gatsby-source-graphql-usage)
