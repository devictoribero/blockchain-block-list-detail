import React from 'react'
import styled from 'styled-components'
import author from './config'

const fullName = `${author.name} ${author.lastName}`

const Author = () => (
  <LinkWrapper>
    <a
      target='_blank'
      rel='noopener noreferrer'
      href='https://www.linkedin.com/in/victorribero/'>
      <Text>
        {fullName}
        <span role='img' aria-label='man coding'>👨‍💻</span>
      </Text>
    </a>
  </LinkWrapper>
)
  
export default Author

const Text = styled.span`
  display: block;
  padding: 0.75rem 1.5rem;
  color: rgb(102,63,180);
  font-weight: bold;
  text-decoration: none;
`
const LinkWrapper = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 35px -2px rgba(0,0,0,0.07);
`
