import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, cleanup} from '@testing-library/react'
import Main from './index'

afterEach(cleanup) 

test('Main should render its children', () => {
  const {getByText} = render(
      <Main>
        <div>hello</div>
      </Main>
    )

  expect(getByText(/hello/i)).toBeInTheDocument()
})
