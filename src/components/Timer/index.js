import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Timer = ({hours, minutes, seconds}) => {
  const hoursText = useMemo(() => `${hours}h`, [hours])  
  const minutesText = useMemo(() => `${minutes}m`, [minutes])  
  const secondsText = useMemo(() => `${seconds}s`, [seconds])  

  return(
    <Wrapper>
      {!!hours && <TimeText>{hoursText}</TimeText>}
      {!!minutes && <TimeText>{minutesText}</TimeText>}
      {!!seconds && <TimeText>{secondsText}</TimeText>}
    </Wrapper>
  )
}

Timer.propTypes = {
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
}
export default Timer

const Wrapper = styled.time`
  margin: 0 0.25rem;
`

const TimeText = styled.span`
  margin-right: 0.25rem;
`
