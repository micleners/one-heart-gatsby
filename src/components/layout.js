import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { theme } from "../utils"
import { ThemeProvider, createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Lato, Arial, Verdana;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      linear-gradient(180deg, rgba(255, 61, 0, 0.8) 32.29%, #ffc107 100%);
    background-attachment: fixed;
    
    h1, h2, h3, h4, h5, h6 {
      font-family: Montserrat, "Arial Black", Arial !important;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <GlobalStyle />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}
          <a href="https://www.onehearthorses.org/">
            One Heart Equestrian Therapy, Inc.
          </a>
        </footer>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
