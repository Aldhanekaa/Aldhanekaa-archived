const path = require("path")
const gatsby = require("gatsby")
const _ = require("lodash")

const posts = []

module.exports.onCreateNode = async ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    posts.push(node)
  }

  if (node.internal.mediaType === "text/markdown") {
    // console.log(posts)

    // const nodeFile = node
    const fileId = node.id

    const isThere =
      posts[
        _.findIndex(posts, function (post) {
          return post.parent == fileId
        })
      ]

    if (isThere) {
      createNodeField({
        node: isThere,
        name: "slug",
        value: node.name,
      })
      createNodeField({
        node: isThere,
        name: "type",
        value: node.relativeDirectory,
      })

      createNodeField({
        node: isThere,
        name: "birthtime",
        value: node.birthtime,
      })
    }
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplateComponent = require.resolve("./src/templates/blog.tsx")
  const posts = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            id
            titles
            slug
            cover {
              file {
                url
              }
            }
            createdAt(fromNow: true)
            description {
              description
            }
            content {
              content
            }
            tags
          }
        }
      }
    }
  `)
  //   console.log(blogPostTemplateComponent)
  posts.data.allContentfulBlogPost.edges.forEach(post => {
    createPage({
      component: blogPostTemplateComponent,
      path: `/blog/${post.node.slug}`,
      context: {
        rawMarkdownBody: post.node.content.content,
        title: post.node.titles,
        photo: post.node.cover.file.url,
        desc: post.node.description.description,
      },
    })
  })
}

/*
{
    "id": "901cd371-95c1-5b14-ad2f-7addea132879",
    "children": [],
    "parent": "7aca566b-7451-5cfc-90a2-763f4e4f4dbf",
    "internal": {
        "content": "\n# Quranhub is awesome!\n\nlanguage:\n\n1. TypeScript\n2. JavaScript\n\ntechnologies:\n\n1. Reactjs\n2. Nextjs\n",
        "type": "MarkdownRemark",
        "contentDigest": "9045e5c4543af5cf810793657db4b8c9",
        "owner": "gatsby-transformer-remark",
        "counter": 46
    },
    "frontmatter": {
        "title": "Quranhub",
        "date": "18-05-2021",
        "preview": "https://quranhub.vercel.app",
        "repo": "https://github.com/aldhanekaa/quranhub",
        "type": "Project"
    },
    "excerpt": "",
    "rawMarkdownBody": "\n# Quranhub is awesome!\n\nlanguage:\n\n1. TypeScript\n2. JavaScript\n\ntechnologies:\n\n1. Reactjs\n2. Nextjs\n",
    "fileAbsolutePath": "/Users/aldhaneka/Documents/Dev/gatsby/web-warrior/src/projects/quranhub.md"
}
{
    "id": "7aca566b-7451-5cfc-90a2-763f4e4f4dbf",
    "children": [
        "901cd371-95c1-5b14-ad2f-7addea132879"
    ],
    "parent": null,
    "internal": {
        "contentDigest": "7b67fc6cf2e80ec67a19f4b87b9b6f0f",
        "type": "File",
        "mediaType": "text/markdown",
        "description": "File \"src/projects/quranhub.md\"",
        "owner": "gatsby-source-filesystem",
        "counter": 37,
        "content": "---\ntitle: \"Quranhub\"\ndate: \"18-05-2021\"\npreview: \"https://quranhub.vercel.app\"\nrepo: \"https://github.com/aldhanekaa/quranhub\"\ntype:
\"Project\"\n---\n\n# Quranhub is awesome!\n\nlanguage:\n\n1. TypeScript\n2. JavaScript\n\ntechnologies:\n\n1. Reactjs\n2. Nextjs\n"
    },
    "sourceInstanceName": "src",
    "relativePath": "projects/quranhub.md",
    "extension": "md",
    "prettySize": "248 B",
    "modifiedTime": "2021-05-18T13:55:59.538Z",
    "accessTime": "2021-05-18T22:25:06.260Z",
    "changeTime": "2021-05-18T13:55:59.538Z",
    "birthTime": "2021-05-18T13:48:18.517Z",
    "root": "/",
    "dir": "/Users/aldhaneka/Documents/Dev/gatsby/web-warrior/src/projects",
    "base": "quranhub.md",
    "ext": ".md",
    "name": "quranhub",
    "absolutePath": "/Users/aldhaneka/Documents/Dev/gatsby/web-warrior/src/projects/quranhub.md",
    "relativeDirectory": "projects",
    "dev": 16777230,
    "mode": 33188,
    "nlink": 1,
    "uid": 501,
    "rdev": 0,
    "blksize": 4096,
    "ino": 18517049,
    "size": 248,
    "blocks": 8,
    "atimeMs": 1621376706259.6077,
    "mtimeMs": 1621346159537.89,
    "ctimeMs": 1621346159537.89,
    "birthtimeMs": 1621345698517.327,
    "atime": "2021-05-18T22:25:06.260Z",
    "mtime": "2021-05-18T13:55:59.538Z",
    "ctime": "2021-05-18T13:55:59.538Z",
    "birthtime": "2021-05-18T13:48:18.517Z"
}
*/
