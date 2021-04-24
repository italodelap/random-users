import React from 'react'
import UserProfilePicture from '../UserProfilePicture'
import ModalUserData from '../ModalUserData'

export default function ModalUser ({ selectedUser }) {
  return (
    <table className='modal-data' align='center'>
      <tbody>
        <UserProfilePicture
          picture={selectedUser.picture.large}
          name={selectedUser.name.first}
        />
        <ModalUserData user={selectedUser} />
      </tbody>
    </table>
  )
}