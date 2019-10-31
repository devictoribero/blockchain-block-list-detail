import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Preview from './preview'
import LinkReset from '../LinkReset'
import Box from '../Box'
import { Badge } from '@aragon/ui'
import Emoji from '../Emoji'

const EMOJI_PROPS = {
  icon: '👉',
  size: 'small',
  label: 'A finger pointing to the right',
}

const Card = ({title, url, tags = []}) => {
  return (
    <Box>
      <Wrapper>
        <Title>{title}</Title>
        <Content>
          {tags.length > 0 && tags.map(tag =>
            <Badge key={tag.text}>{tag.text} {tag.icon}</Badge>
          )}
        </Content>
        {url && (
          <Link to={url}> See more details <Emoji {...EMOJI_PROPS}/></Link>
        )}
      </Wrapper>
    </Box>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.array
}

export default Card
export {Preview}

const Wrapper= styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.span`
  font-weight: bold;
  color: black;
`

const Content = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0.5rem 0;

  > * {
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }
`

const Link = styled(LinkReset)`
  font-size: 0.8rem;
  font-weight: 600;
  color: #572cbb;
  text-align: right;

  &:hover {
    text-decoration: underline !important;
  }
`