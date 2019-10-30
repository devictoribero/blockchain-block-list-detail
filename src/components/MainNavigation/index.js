import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LinkReset from '../LinkReset'
import Emoji from '../Emoji'

const MainNavigation = ({config}) => {
  const elements = Object.values(config)
  
  return (
    <Nav>
      {elements.map(({to, label, icon}) => (
        <NavItem key={to} to={to}>
          <Emoji size='large' label={label} icon={icon}/>
        </NavItem>
      ))}
    </Nav>
  )
}

MainNavigation.propTypes = {
  config: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ).isRequired
}
export default MainNavigation

const Nav = styled.nav`
  display: flex;
  > *:not(:last-child) {
    margin-right: 1rem;
  }
`

const NavItem = styled(LinkReset)`
  background-color: white;
  padding: 0.5rem;
  border-radius: 5px;
`