import React from 'react'
import { Header } from './index'

import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

describe('<Header />', () => {
  test('renders content', () => {
    const component = render(<Header />)
    const element = component.getByText('Random User API')
    expect(element).toBeDefined()
  })
})