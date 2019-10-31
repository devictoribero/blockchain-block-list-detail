import React from 'react'
import styled from 'styled-components'

const Preview = () => (
  <Wrapper>
    <Section>
      <Title/>
      <Content/>
    </Section>
    <Section>
      <Title/>
      <Content/>
    </Section>
    <Section>
      <Title/>
      <Content/>
    </Section>
  </Wrapper>
)

export default Preview

const Wrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
`
const Section = styled.div`
  display: grid;
  grid-gap: 0.5rem;
`
const Title = styled.section`
  position: relative; 
  width: 150px;
  height: 20px;
  background-color: #cccdd8;
  border-radius: 5px;
`
const Content = styled.section`
  position: relative; 
  width: 100%;
  height: 50px;
  background-color: #f3f3f3;
  border-radius: 5px;
`