import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = ({children}) => <Wrapper>{children}</Wrapper>

Title.propTypes = {
  children: PropTypes.node.isRequired
}

export default Title

const Wrapper = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.2px;
  color: white;
  margin: 0 0 1rem 0;

  @media screen and (min-width: 550px) {
    font-size: 2rem;
  }
`