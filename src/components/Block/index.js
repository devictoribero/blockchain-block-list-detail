import React from 'react'
import PropTypes from 'prop-types'
import {getBlockUrl} from '../../config/routes'
import Emoji from '../Emoji'
import Card from '../Card'

const MAGIC_NUMBER = 1000
const EMOJI_TEXT_GRAPH = 'Random bar graph'
const EMOJI_TEXT_CYCLE = 'Two arrows forming a circle, pointing in an anticlockwise direction.'
const EMOJI_TEXT_HOURGLASS = 'A classic hourglass, its sand still flowing from the top to bottom bulb'
const ICON_SIZE = 'small'

const fixDecimals = number => number.toFixed(2)
const calculateMillions = number => number / Math.pow(10, 6)
const generateHumanDateFormat = timestamp => {
  const date = new Date(timestamp * MAGIC_NUMBER) // got this from internet 😂
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return `${hours}h ${minutes}min ${seconds}s`
}

const Block = ({
  block: {
    hash,
    number,
    gasUsed,
    gasLimit,
    timestamp,
    transactions
  }
}) => {
  const millionOfGasUsed = fixDecimals(calculateMillions(gasUsed))
  const millionsOfGasLimit = fixDecimals(calculateMillions(gasLimit))

  const blockDate = generateHumanDateFormat(timestamp)

  const blockTags = [
    {
      text: `Gas ${millionOfGasUsed}M/${millionsOfGasLimit}M`,
      icon: <Emoji icon='📊' size={ICON_SIZE} label={EMOJI_TEXT_GRAPH}/>
    }, {
      text: `${transactions.length} transactions`,
      icon: <Emoji icon='🔄' size={ICON_SIZE} label={EMOJI_TEXT_CYCLE}/>
    }, {
      text: `Collated ${blockDate} ago`,
      icon: <Emoji icon='⏳' size={ICON_SIZE} label={EMOJI_TEXT_HOURGLASS}/>
    }
  ]

  return (
    <Card
      title={`Block #${number}`}
      url={getBlockUrl({hash})}
      tags={blockTags}/>
  )
}

Block.propTypes = {
  block: PropTypes.object.isRequired
}

export default Block
