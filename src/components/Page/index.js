import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useConnectWeb3 from '../../components/Web3Provider/use-connect-web3'
import AppBar from '../AppBar'
import Logo from '../Logo'
import Author from '../Author'
import MainNavigation from '../MainNavigation'
import Hero from '../Hero'
import Main from '../Main'
import Footer from '../Footer'
import {MAIN_NAV_CONFIG} from '../../config/main-navigation'
import {links} from '../../config/footer'

const Page = ({loading, error, render}) => {
  const {isLoading, hasError} = useConnectWeb3()

  return (
    <Wrapper>
      <AppBar>
        <Logo/>
        <MainNavigation config={MAIN_NAV_CONFIG}/>
      </AppBar>
      <Hero/>
      <Main>
        {isLoading && loading}
        {hasError && error}
        {!isLoading && !hasError && render}
      </Main>
      <Author/>
      <Footer links={links}/>
    </Wrapper>
  )
}

Page.propTypes = {
  loading: PropTypes.node.isRequired,
  error: PropTypes.node.isRequired,
  render: PropTypes.node.isRequired,
}

export default Page

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
`
