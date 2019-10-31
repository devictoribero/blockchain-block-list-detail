import React, {useState, useEffect} from 'react'
import { useWeb3Context } from 'web3-react'
import styled from 'styled-components'
import {getBlockUrl} from '../../config/routes'
import LinkReset from '../../components/LinkReset'
import PageTitle from '../../components/PageTitle'
import { AddressField } from '@aragon/ui'
import Emoji from '../../components/Emoji'
import Box from '../../components/Box'

const COMMON_TITLE = 'Details transaction'

const TransactionDetails = ({blockHash, hash}) => {
  const {library} = useWeb3Context()
  const [transaction, setTransaction] = useState()

  useEffect(() => {
    library.getTransaction(hash).then(setTransaction)
  }, [blockHash, hash, library])

  const pageTitle = transaction 
    ? `${COMMON_TITLE} #${transaction.transactionIndex}`
    : COMMON_TITLE

  return (
    <>
      <GoBack to={getBlockUrl({blockHash})}>
          <Emoji size='medium' icon='👈' label='finger pointing left'/>
          Go back
      </GoBack>
      <PageTitle>{pageTitle}</PageTitle>
      {transaction && (
        <Box>
          <Details title='Reference'>{transaction.hash}</Details>
          <Details title='Transfer information'>
            <Transfer>
              <TransferLocation>
                From
                <AddressField address={transaction.from}/>
              </TransferLocation>
              <TransferLocation>
                To
                <AddressField address={transaction.to}/>
              </TransferLocation>
            </Transfer>
          </Details>

          <Details title='Extras'>
            The sender did {transaction.nonce} transaction/s before this one.
          </Details>
        </Box>
      )}
    </>
  )
}

export default TransactionDetails

const GoBack = styled(LinkReset)`
  color: white; 
`

const Details = ({title, children}) => (
  <DetailsWrapper>
    <DetailsLabel>{title}</DetailsLabel>
    <DetailsContent>{children}</DetailsContent>
  </DetailsWrapper>
)
const DetailsWrapper = styled.section`
  margin-bottom: 1.5rem;
`
const DetailsLabel = styled.span`
  color: #1a1a1a;
  font-weight: bold;
  font-size: 1.15rem;
  margin-bottom: 0.25rem;
  display: block;
`
const DetailsContent = styled.div`
  word-break: break-all;
  color: #5f5f5f;
  font-size: 0.9rem;
`

const Transfer = styled.div`
  display: grid;
  grid-gap: 0.5rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
`
const TransferLocation = styled.section`
  display: grid;
  grid-gap: 0.25rem;
  font-variant: all-small-caps;

  input {
    width: 100%;
  }
`