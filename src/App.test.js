import React from 'react'
import App from './App'

import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

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
    render(<App />)
    const label = screen.getByText('Code challenge!')
    expect(label).toBeInTheDocument()
  })
})
