import React from 'react'
import Page from '../../components/Page'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

const HomePage = () => (
  <Page
    loading={<Loading/>}
    error={<Error/>}
    render={(
      <>
        <div>home still working</div>
      </>
    )}
  />
)

export default HomePage

