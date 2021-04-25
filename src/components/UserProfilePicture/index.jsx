import React from 'react'

export function UserProfilePicture({ picture, name }) {
  return (
    <tr>
      <td colSpan='2'>
        <img className='modal-image' src={picture} alt={name} />
      </td>
    </tr>
  )
}
