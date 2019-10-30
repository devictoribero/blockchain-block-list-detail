import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, cleanup} from '@testing-library/react'
import Logo from './index'

afterEach(cleanup)

test('Logo should be rendered', () => {
  const {getByText} = render(<Logo/>)
  expect(getByText(/Cryptothereum/i)).toBeInTheDocument()
})