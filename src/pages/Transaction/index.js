import React from 'react'
import PropTypes from 'prop-types'
import Page from '../../components/Page'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import TransactionDetails from './details'

const TransactionPage = ({blockHash, hash}) => (
  <Page
    loading={<Loading/>}
    error={<Error/>}
    render={<TransactionDetails blockHash={blockHash} hash={hash}/>}/>
)

TransactionPage.propTypes = {
  blockHash: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired
}

export default TransactionPage

