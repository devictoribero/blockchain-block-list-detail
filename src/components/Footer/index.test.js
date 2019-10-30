import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, cleanup} from '@testing-library/react'
import Footer from './index'

afterEach(cleanup)

test('Footer should be rendered', () => {
  const links = [{label: 'first_label', url:'url'}]
  const {getByText} = render(<Footer links={links}/>)

  const link = getByText('first_label')
  expect(link).toBeInTheDocument()
  expect(link).toHaveAttribute('href', 'url')
})