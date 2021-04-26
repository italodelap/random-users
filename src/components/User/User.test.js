import React from 'react'
import { User } from './index'

import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

describe('<User />', () => {
  let component
  
  const picture = { large: 'https://randomuser.me/api/portraits/men/75.jpg' }
  const name = { first: 'Brad', last: 'Gibson' }
  const location = { city: 'Kilcoole', state: 'Waterford' }

  beforeEach(() => {
    const userInfo = { picture, name, location }
    component = render(<User userInfo={userInfo} selectUser={() => {}} />)
  })

  test('should renders user profile picture', () => {
    const element = component.getByAltText(name.first)
    expect(element.src).toContain(picture.large)
  })

  test('should renders user name', () => {
    const expectedName = `${name.first} ${name.last}`
    const element = component.getByText(expectedName)
    expect(element).toBeDefined()
  })

  test('should renders user location', () => {
    const expectedLocation = `${location.city}, ${location.state}`
    const element = component.getByText(expectedLocation)
    expect(element).toBeDefined()
  })
})
