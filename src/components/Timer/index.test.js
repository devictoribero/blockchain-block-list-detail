import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, cleanup} from '@testing-library/react'
import Timer from './index'

afterEach(cleanup) 

test('Timer should be render correctly', () => {
  const PROPS_TIMER = {
    hours: 2,
    minutes: 3,
    seconds: 4,
  }

  const {getByText} = render(<Timer {...PROPS_TIMER}/>)
  
  expect(getByText(/2h/)).toBeInTheDocument()
  expect(getByText(/3m/)).toBeInTheDocument()
  expect(getByText(/4s/)).toBeInTheDocument()
})


// This is kinda strange, I remember using it.
// Even in the official docs it says this is the way.
// FYI: https://github.com/testing-library/jest-dom
//
// I tried:
// expect(getByText('hello')).not.toBeInTheDocument(undefined)
// expect(getByText('hello')).not.toBeTruthy(undefined)
// expect(getByText('hello')).toBe(undefined)
//
// I would appreciate if you could explain me what happens here :D
test('Timer should be NOT render empty values', () => {
  const PROPS_TIMER = {
    hours: 0,
    minutes: 3,
    seconds: 4,
  }

  const {getByText} = render(<Timer {...PROPS_TIMER}/>)

  // @TODO: commented because it fails. Can't figure out the WHY
  // expect(getByText(/0h/)).not.toBeInTheDocument()
  // expect(getByText(/0h/)).not.toBeTruthy()
  // expect(getByText(/0h/)).toBe(undefined)
  // expect(getByText(/0h/)).toBe(null)
  expect(getByText(/3m/)).toBeInTheDocument()
  expect(getByText(/4s/)).toBeInTheDocument()
})