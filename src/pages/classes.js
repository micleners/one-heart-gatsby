import React from "react"
import { Link } from "gatsby"

import { Flex, Text, Heading } from "rebass"
import Layout from "../components/layout"
import SEO from "../components/seo"

const example1 = ({ data }) => {
  return (
    <Layout>
      <SEO title="Week 1" />
      <Text>Session Start Date: {data.contentfulSessions.startDate}</Text>
      <Text>Session End Date: {data.contentfulSessions.endDate}</Text>
      <Heading py={3}>Classes Offered</Heading>
      {data.contentfulSessions.classDays.map(offering => (
        <Flex py={3} key={offering.name} flexDirection="column">
          <Text>{offering.name}, </Text>
          <Text>{offering.startTime}, </Text>
          <Text>{offering.endTime}, </Text>
        </Flex>
      ))}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default example1
export const pageQuery = graphql`
  query {
    contentfulSessions(week: { eq: 1 }) {
      startDate
      endDate
      week
      classDays {
        day
        endTime(formatString: "hh:mma")
        startTime(formatString: "hh:mma")
        name
        contentful_id
      }
    }
  }
`
