import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, cleanup} from '@testing-library/react'
import Emoji from './index'

afterEach(cleanup)

test('Emoji should be rendered', () => {
  const {getByText} = render(<Emoji icon='😀' label='happy face'/>)

  expect(getByText('😀')).toBeInTheDocument()
})

test('Emoji should be accessible', () => {
  const {queryByLabelText} = render(<Emoji icon='😀' label='happy face'/>)

  expect(queryByLabelText('happy face')).toBeInTheDocument()
})