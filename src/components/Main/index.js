import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Main = ({children}) => <Wrapper>{children}</Wrapper>

Main.propTypes = {
  children: PropTypes.node.isRequired
}

export default Main

const Wrapper = styled.main`
  margin-top: 3rem;
  padding: 1rem;
`