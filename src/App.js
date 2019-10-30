import React, {Suspense} from 'react'
import { Router } from "@reach/router";
import routes from './config/routes'

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

const App = () => (
  <Suspense fallback={<div></div>}>
    <Router>
      <LoadHome path={routes.home} />
    </Router>
  </Suspense>
)

export default App
