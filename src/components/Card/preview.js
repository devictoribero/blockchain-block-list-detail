import React from 'react'
import styled from 'styled-components'

// Since I don't know if metaMask supports SSR (I don't think so),
// I thought about using a preview so the uses feels a better experience
const Preview = () => (
  <Wrapper>
    <Number/>
    <Tag/>
    <Link/>
  </Wrapper>
)

export default Preview

const Wrapper = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-areas: "number . . " "hash hash hash" "tag tag ." ". . link"
`

const Number = styled.span`
  grid-area: number;
  width: 100%;
  height: 20px;
  background-color: #f3f3f3;
  border-radius: 10px;
`

const Tag = styled.span`
  grid-area: tag;
  width: 100%;
  height: 20px;
  background-color: #EDE5FF;
  border-radius: 10px;
`

const Link = styled.span`
  grid-area: link;
  width: 100%;
  height: 20px;
  border-radius: 10px;
  background-color: #232f80;
`

