import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "@reach/router"

const LinkReset = ({to, children, ...props}) => (
  <Link style={{textDecoration: 'none'}} to={to} {...props}>
    {children}
  </Link>
)

LinkReset.propTypes= {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default LinkReset
