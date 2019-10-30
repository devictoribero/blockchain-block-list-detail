import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Emoji = ({size = 'medium', icon, label}) => (
  <Wrapper
    tabIndex='0'
    data-testid='emoji'
    role='img'
    size={size}
    aria-label={label}>
    {icon}
  </Wrapper>
)

Emoji.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default Emoji

const Wrapper = styled.span`
  display: inline-flex;
  font-size: ${({size}) => size === 'medium'
    ? '1.25rem'
    : size === 'large'
      ? '1.5rem'
      : '0.75rem'};
`