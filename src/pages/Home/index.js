import React from 'react'
import Page from '../../components/Page'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import PageTitle from '../../components/PageTitle'

const HomePage = () => (
  <Page
    loading={<Loading/>}
    error={<Error/>}
    render={(
      <>
        <PageTitle>Last Ethereum blocks</PageTitle>
      </>
    )}
  />
)

export default HomePage

