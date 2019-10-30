import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, cleanup} from '@testing-library/react'
import Author from './index'
import author from './config'

afterEach(cleanup) 

const fullName = `${author.name} ${author.lastName}`

test('Author should be rendered', () => {
  const {getByText} = render(<Author/>)

  expect(getByText(fullName)).toBeInTheDocument()
})
