import React from 'react'

export function ModalUserPicture({ picture, userFirstName }) {
  return (
    <tr>
      <td colSpan='2'>
        <img
          className='modal-image'
          src={picture}
          alt={userFirstName}
        />
      </td>
    </tr>
  )
}
