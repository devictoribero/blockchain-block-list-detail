import React, {useEffect} from 'react'
import { useWeb3Context } from 'web3-react'

function useConnectWeb3 () {
  const context = useWeb3Context()

  useEffect(() => {
    context.setFirstValidConnector(['MetaMask', 'Infura'])
  }, [context])

  return {
    context,
    isLoading: !context.active && !context.error,
    hasError: context.error,
  }
}

export default useConnectWeb3