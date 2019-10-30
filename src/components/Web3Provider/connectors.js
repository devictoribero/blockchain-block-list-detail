import { Connectors } from 'web3-react'
const { InjectedConnector, NetworkOnlyConnector } = Connectors

const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] })

const Infura = new NetworkOnlyConnector({
  providerURL: process.env.REACT_APP_WEB3_PROVIDER_URL
})

const connectors = { MetaMask, Infura }

export default connectors