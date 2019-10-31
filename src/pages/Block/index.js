import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useWeb3Context } from 'web3-react'
import Page from '../../components/Page'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import LinkReset from '../../components/LinkReset'
import {Title} from '../../components/Page'
import Grid from '../../components/Grid'
import Emoji from '../../components/Emoji'
import Transaction from '../../components/Transaction'
import {Preview} from '../../components/Card'
import Box from '../../components/Box'

const BlockPage = ({hash}) => (
  <Page
    loading={<Loading/>}
    error={<Error/>}
    render={(
      <>
        <GoBack to='/'>
            <Emoji size='medium' icon='👈' label='finger pointing left'/>
            Go back
        </GoBack>
        <Title>Block transactions</Title>
        <Transactions blockHash={hash}/>
      </>
    )}/>
)

export default BlockPage

const Transactions = ({blockHash}) => {
  const [transactions, setTransactions] = useState([])
  const {library} = useWeb3Context()
  const showTransactions = transactions.length > 0

  useEffect(() => {
    library.getBlock(blockHash, true).then(({transactions}) => setTransactions(transactions))
  }, [blockHash, library])

  return (
    <Grid>
      {!showTransactions && [0,1,2,3,4,5,6].map(el => <Box key={el}><Preview/></Box>)}
      {showTransactions && transactions.map(transaction => (
        <Transaction
          key={transaction.hash}
          transaction={transaction}/>
      ))}
    </Grid>
  )
}

const GoBack = styled(LinkReset)`
  color: white; 
`
