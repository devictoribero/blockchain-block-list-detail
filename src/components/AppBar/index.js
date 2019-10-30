import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const AppBar = ({children}) => <Wrapper>{children}</Wrapper>

AppBar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppBar

const Wrapper = styled.header`
  grid-area: AppBar;
  display: flex;
  justify-content: space-between;
  align-items: center;  
  padding: 1rem;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
`
