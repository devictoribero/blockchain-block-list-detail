import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import {render, cleanup} from '@testing-library/react'
import {BrowserRouter, Route} from 'react-router-dom'
import MainNavigation from './index'
import {MAIN_NAV_CONFIG} from '../../config/main-navigation'

afterEach(cleanup)

function selectByUrl(url) {
  return document.querySelector(`[href="${url}"]`)
}

test('MainNavigation should include all the items', () => {
  const FIRST = { to: '/first', label: 'first', icon: '😀'}
  const SECOND = { to: '/second', label: 'second', icon: '😔'}
  const config = [FIRST, SECOND]

  const {getByText} = render(
    <BrowserRouter>
      <MainNavigation config={config}/>
    </BrowserRouter>
  )

  expect(getByText('😀')).toBeInTheDocument()
  expect(getByText('😔')).toBeInTheDocument()

  const firstByHref = document.querySelector(`[href="${FIRST.to}"]`)
  const secondByHref = document.querySelector(`[href="${SECOND.to}"]`)
  expect(firstByHref).toBeInTheDocument()
  expect(secondByHref).toBeInTheDocument()
})