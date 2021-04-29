import React from 'react'
import { ModalUserPicture } from './index'

import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

describe('<ModalUserPicture />', () => {
  let component
  const pictureUrl = 'https://randomuser.me/api/portraits/men/75.jpg'
  const firstName = 'John'

  beforeEach(() => {
    component = render(
      <table>
        <tbody>
          <ModalUserPicture picture={pictureUrl} userFirstName={firstName} />
        </tbody>
      </table>
    )
  })

  test('renders user profile picture', () => {
    const element = component.getByAltText(firstName)
    expect(element).toBeDefined()
  })
})
