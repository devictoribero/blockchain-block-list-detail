import React from 'react'
import Provider from 'web3-react'
import connectors from './connectors'

// I used the library
// https://github.com/NoahZinsmeister/web3-react
// because it gives you lot of things out of the box.
// such as:
// - checking the connection all the time
// - checking the address status
// - react context out of the box
const Web3Provider = ({children}) => (
  <Provider
    connectors={connectors}
    libraryName='ethers.js'>
    {children}
  </Provider>
)

export default Web3Provider