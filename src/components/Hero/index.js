import React from 'react'
import styled from 'styled-components'

const Hero = () => (
  <Wrapper>
    <Overlay/>
    <Component/>
  </Wrapper>
)

export default Hero

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  height: 300px;
  background-image: linear-gradient(to bottom right, #6d56a2, #424fab);
  clip-path: polygon(0 0, 100% 0, 100% 84%, 0% 100%);
  overflow: hidden;
`

const Component = styled.div`
  position: relative;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 66%;
    width: 66%;
    background-color: #232f80;
    border-radius: 60px;
    transform: rotate(-20deg);
    z-index: -1;

    @media screen and (min-width: 768px) {
      bottom: -10%;
      right: -5%;
      height: 230px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 15%;
    height: 66%;
    width: 66%;
    background-color: #6d56a2;
    border-radius: 60px;
    transform: rotate(-45deg);
    z-index: -1;

    @media screen and (min-width: 768px) {
      bottom: -75%;
      left: 16%;
      height: 368px;
    }
  } 
`

const Overlay = styled.div`
position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  background-image: linear-gradient(to bottom, transparent 50%, rgba(1,1,1,0.4));
  clip-path: polygon(0 0, 100% 0, 100% 84%, 0% 100%);
`