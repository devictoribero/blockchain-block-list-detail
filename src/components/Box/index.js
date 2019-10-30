import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Box = ({children}) => <Wrapper>{children}</Wrapper>

Box.propTypes= {
  children: PropTypes.node.isRequired
}

export default Box

const Wrapper = styled.div`
  padding: 1.5rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 35px -2px rgba(0,0,0,0.07);
`