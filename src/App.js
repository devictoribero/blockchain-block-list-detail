import React, {Suspense} from 'react'
import { Router } from "@reach/router";
import routes from './config/routes'
import Web3Provider from './components/Web3Provider'

// In this scenario, is not worth-it to lazy-load the pages but I did anyway
// so you can see I know how it works and that I'm capable of applying it.
//
// We understand for lazy load when something is download on demand. Usually the app
// is built-in-one. It means all the pages and components are included in the main bundle.
//
// By lazy loading we reduce the main bundle because the pages that
// are lazy loaded have another "bundle" which is downloaded when
// we navigate to to its route.
//
// I say this is not worth it now because, the fact we are doing different request it's
// worse than the fact of saving a hundred of Bytes which is what the /home weights
//
// Not only pages can be lazy-loaded, we can do it with components too.
const LoadHome = React.lazy(() => import('./pages/Home'))
const LoadBlockTransactions = React.lazy(() => import('./pages/Block'))
// In the future
//const LoadTransaction = React.lazy(() => import('./pages/Transaction'))

const App = () => (
  <Web3Provider>
    <Suspense fallback={<div></div>}>
      <Router>
        <LoadHome path={routes.home} />
        <LoadBlockTransactions exact path={routes.block}/>
        {/* <LoadTransaction exact path={routes.transaction}/> */}
      </Router>
    </Suspense>
  </Web3Provider>
)

export default App
