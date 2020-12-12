/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

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
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '5vh 1rem 3vh 1rem'
        }}
      >
        <main>{children}</main>
        <div style={{flex: '1 0 0'}}></div>
        <footer style={{
          marginTop: `2rem`,
          textAlign: 'center'
        }}>
          <a href="https://sailingtomars.com/" style={{fontSize: "0.5rem", color: '#333', textDecoration: 'none'}}>made by brother spense</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
