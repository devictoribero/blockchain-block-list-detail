import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PageTitle = ({children}) => <Title>{children}</Title>

PageTitle.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageTitle

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.2px;
  color: white;
  margin: 0 0 1rem 0;

  @media screen and (min-width: 550px) {
    font-size: 2rem;
  }
`