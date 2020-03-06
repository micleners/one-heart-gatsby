import React from "react"
import { Link } from "gatsby"

import { Text, Heading } from "rebass"
import Layout from "../components/layout"
import SEO from "../components/seo"

const example1 = ({ data }) => {
  console.log(data.contentfulSession)
  console.log(data.contentfulSession.startDate)
  console.log(data.contentfulSession.endDate)
  console.log(data.contentfulSession.classDays)
  return (
    <Layout>
      <SEO title="Week 1" />
      <Text>Session Start Date: {data.contentfulSession.startDate}</Text>
      <Text>Session End Date: {data.contentfulSession.endDate}</Text>
      <Heading py={3}>
        Classes Offered
      </Heading>
      {data.contentfulSession.classDays.map(offering => (
        <Text>{offering.name}, </Text>
      ))}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default example1
export const pageQuery = graphql`
  query {
    contentfulSession(week: { eq: 1 }) {
      startDate
      endDate
      week
      classDays {
        day
        endTime
        startTime
        name
        contentful_id
      }
    }
  }
`
