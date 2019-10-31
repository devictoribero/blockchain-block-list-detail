import React from 'react'
import Provider from 'web3-react'
import connectors from './connectors'

const Web3Provider = ({children}) => (
  <Provider
    connectors={connectors}
    libraryName='ethers.js'>
    {children}
  </Provider>
)

export default Web3Provider