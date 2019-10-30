import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LINKS_REL = 'noopener noreferrer'

const Footer = ({links}) => (
  <Component>
    <List>
      {links.map(({label, url}) =>
        <ListElement key={url}>
          <Link href={url} target='_blank' rel={LINKS_REL}>{label}</Link>
        </ListElement>  
      )}
    </List>
  </Component>
)

Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
}

const Component = styled.footer`
  margin-top: 3rem;
  padding: 3rem 1rem;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`
const ListElement = styled.li`
  position: relative;
  list-style: none;
  margin-right: 1.25rem;
  margin-bottom: 0.5rem;
`
const Link = styled.a`
  color: #2d2d2d;
  font-size: 0.9rem;
  box-shadow: 0 1px 0 0 currentColor;
  text-decoration: none;

  &:hover {
    box-shadow: none;
  }
`

export default Footer