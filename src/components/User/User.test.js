import React from 'react'
import { User } from './index'

import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

describe('<User />', () => {
  const listener = () => console.log('I am a listener')
  const userInfo = {
    picture: { large: 'https://randomuser.me/api/portraits/men/75.jpg' },
    name: { first: 'Brad', last: 'Gibson' },
    location: { city: 'Kilcoole', state: 'Waterford' },
  }

  test('should renders user profile picture', () => {
    const { picture, name } = userInfo
    
    const component = render(<User userInfo={userInfo} selectUser={() => listener()} />)
    const element = component.getByAltText(name.first)
    expect(element.src).toContain(picture.large)
  })

  test('should renders user name', () => {
    const { name } = userInfo
    const expectedName = `${name.first} ${name.last}`

    const component = render(<User userInfo={userInfo} selectUser={() => listener()} />)
    const element = component.getByText(expectedName)
    expect(element).toBeDefined()
  })

  test('should renders user location', () => {
    const { location } = userInfo
    const expectedLocation = `${location.city}, ${location.state}`

    const component = render(<User userInfo={userInfo} selectUser={() => listener()} />)
    const element = component.getByText(expectedLocation)
    expect(element).toBeDefined()
  })
})
