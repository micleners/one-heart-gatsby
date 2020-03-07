import React from "react"
import { Link } from "gatsby"

import { Flex, Box, Text, Heading } from "rebass"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Accordion from "../components/accordion"

// const example1 = ({ data }) => {
const example1 = ({ data }) => {
  console.log(data)
  console.log(data.contentfulWeek.classDays)
  const tuesdayClasses = data.contentfulWeek.classDays
    .filter(offering => offering.day === "Tuesday")
    .sort((a, b) => a.startTime - b.startTime)

  const thursdayClasses = data.contentfulWeek.classDays.filter(
    offering => offering.day === "Thursday"
  )

  const saturdayClasses = data.contentfulWeek.classDays.filter(
    offering => offering.day === "Saturday"
  )

  console.log(tuesdayClasses)
  console.log(thursdayClasses)
  console.log(saturdayClasses)

  const Class = ({ classArray, day }) => (
    <>
      <Heading py={3} as="h2" fontSize={5}>
        {day} Classes
      </Heading>
      {classArray.map(offering => (
        <Flex
          flexDirection="column"
          my={3}
          sx={{
            border: "1px solid #004d42",
          }}
          bg="rgba(255, 255, 255, 0.4)"
          pb={3}
        >
          <Flex
            p={3}
            key={offering.id}
            flexDirection="row"
            justifyContent="space-between"
            bg="rgba(255, 255, 255, 0.8)"
          >
            <Heading as="h3" fontSize={4}>
              {offering.startTime}
            </Heading>
            <Heading as="h3" fontSize={4}>
              {offering.name}
            </Heading>
          </Flex>
          {offering.horses.map(horse => (
            <Flex flexDirection="column">
              <Flex
                p={3}
                key={offering.id}
                flexDirection="row"
                justifyContent="space-between"
              >
                <Flex
                  flexGrow="1"
                  alignItems="center"
                  justifyContent="center"
                  fontSize={3}
                  p={3}
                  bg="rgba(255, 255, 255, 0.4)"
                >
                  {horse.horse_name}
                </Flex>
                <Flex
                  p={3}
                  ml={3}
                  flexGrow="3"
                  flexDirection={["column", "row"]}
                  bg="rgba(255, 255, 255, 0.4)"
                >
                  {horse.equipment.map(equipment => (
                    <Text
                      p={3}
                      m={1}
                      flexGrow="1"
                      bg="rgba(255, 255, 255, 0.4)"
                    >
                      {equipment}
                    </Text>
                  ))}
                </Flex>
              </Flex>
              <Flex mx={3} flexDirection="column">
                <Text>Other Equipment: {horse.otherEquipment}</Text>
                <Text>Special Notes: {horse.specialNotes}</Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      ))}
    </>
  )

  return (
    <Layout>
      <SEO title="Week 1" />
      <Accordion title="1" content="apples">
        So tasty
      </Accordion>
      <Text>Session Start Date: {data.contentfulWeek.startDate}</Text>
      <Class classArray={tuesdayClasses} day="Tuesday" />
      <Class classArray={thursdayClasses} day="Thursday" />
      <Class classArray={saturdayClasses} day="Saturday" />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default example1
export const pageQuery = graphql`
  query {
    contentfulWeek {
      classDays {
        className
        day
        name
        horses {
          horse_name
          equipment
          specialNotes
          otherEquipment
        }
        startTime(formatString: "h:mma")
      }
      totalWeeks
      note
      startDate(formatString: "MMM D, YYYY")
    }
  }
`
