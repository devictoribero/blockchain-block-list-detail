import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Grid = ({children}) => <List>{children}</List>

Grid.propTypes = {
  children: PropTypes.node.isRequired
}

export default Grid

const List = styled.ul`
  display: grid;
  grid-gap: 0.75rem;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  word-break: break-all;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
`

