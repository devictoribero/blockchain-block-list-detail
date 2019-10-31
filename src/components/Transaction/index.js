import React from 'react'
import PropTypes from 'prop-types'
import {getBlockTransactionUrl} from '../../config/routes'
import Emoji from '../Emoji'
import Card from '../Card'

const EMOJI_TEXT_CAUTION = 'A triangle with an exclamation mark inside'
const EMOJI_TEXT_PAGE_WITH_CURL = 'A white piece of paper, curled up at the bottom to the left or right'
const ICON_SIZE = 'small'

const Transaction = ({
  transaction: {
    blockHash,
    hash: transactionHash,
    transactionIndex,
    confirmations,
    nonce,
  }
}) => {
  const tags = [
    {
      text: confirmations === null || confirmations === undefined
        ? 'no confirmations'
        : `${confirmations} confirmations`,
      icon: <Emoji icon='⚠️' size={ICON_SIZE} label={EMOJI_TEXT_CAUTION}/>
    }, {
      text: `${nonce} previous transactions`,
      icon: <Emoji icon='📃' size={ICON_SIZE} label={EMOJI_TEXT_PAGE_WITH_CURL}/>
    }
  ]

  return (
    <Card
      title={`Transaction #${transactionIndex}`}
      url={getBlockTransactionUrl({blockHash, transactionHash})}
      tags={tags}/>
  )
}

Transaction.propTypes = {
  transaction: PropTypes.object.isRequired
}

export default Transaction
