import React, {useState, useEffect} from 'react'
import { useWeb3Context } from 'web3-react'
import Page from '../../components/Page'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import PageTitle from '../../components/PageTitle'
import Grid from '../../components/Grid'
import Box from '../../components/Box'
import {Preview} from '../../components/Card'
import Block from '../../components/Block'

const HomePage = () => (
  <Page
    loading={<Loading/>}
    error={<Error/>}
    render={(
      <>
        <PageTitle>Last Ethereum blocks</PageTitle>
        <BlocksList/>
      </>
    )}
  />
)

export default HomePage


// JSX encapsulated into a component so the file looks more clean.
// it's not a component per se, so I preferred to have it here
const BlocksList = () => {
  const {library} = useWeb3Context()
  const [blocks, setBlocks] = useState([])
  const showBlocks = blocks.length > 0
  
  useEffect(() => {
    library.getBlockNumber().then(numberOfBlocks => {
      let getBlockPromises = []
      for (let i = 1; i <= 10; i++) {
        getBlockPromises.push(library.getBlock(numberOfBlocks - i))
      }
      
      Promise.all(getBlockPromises).then(setBlocks)
    })
  }, [library])

  return (
    <Grid>
      {!showBlocks && [0,1,2,3,4,5,6].map(el => <Box key={el}><Preview/></Box>)}
      {showBlocks && blocks.map(block => <Block key={block.hash} block={block}/>)}
    </Grid>
  )
}
