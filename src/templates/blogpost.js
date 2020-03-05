// Uncomment this file to create blogposts
// Make sure you also uncomment the contents of `/gatsby-node.js`

// import React from "react"
// import { Link, graphql } from "gatsby"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const BlogPost = ({ data }) => {
//   const { title, body, createdDate, tags } = data.contentfulBlogPost
//   return (
//     <Layout>
//       <SEO title={title} />
//       <div className="blogpost">
//           <Title1>{title}</Title1>
//           <Link to="/blogposts">View all posts</Link>

//         {image && (
//           <img
//             style={{ width: "auto", maxHeight: "400px" }}
//             alt={title}
//             src={image.file.url}
//           />
//         )}
//         {createdDate && (
//           <div>
//             {createdDate}
//           </div>
//         )}
//         <Text2>
//           {tags && tags.map(tag => (
//             <div>{tag}, </div>
//           ))}
//         </Text2>
//         {body && (
//           <Text
//             dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
//           />
//         )}
//         <FlexRow>
//           <div></div>
//           <Link to="/blogposts">View all posts</Link>
//         </FlexRow>
//       </div>
//     </Layout>
//   )
// }
// export default BlogPost
// export const pageQuery = graphql`
//   query($slug: String!) {
//     contentfulBlogPost(slug: { eq: $slug }) {
//       title
//       createdDate(formatString: "MMMM D, YYYY")
//       slug
//       body {
//         childMarkdownRemark {
//           html
//         }
//         body
//       }
//       tags
//     }
//   }
// `
