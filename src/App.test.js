import React from 'react'
import { App } from './App'

import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

describe('true is truthy and false is falsy', () => {
  test('true is truthy', () => {
    expect(true).toBe(true)
  })

  test('false is falsy', () => {
    expect(false).toBe(false)
  })
})

describe('<App />', () => {
  test('should renders content', () => {
    const component = render(<App />)
    const element = component.getByText('Code challenge!')
    expect(element).toBeDefined()
  })
})
