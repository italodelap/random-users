import React from 'react'
import UserProfilePicture from '../UserProfilePicture'
import UserData from '../UserData'

export default function SingleUser ({ selectedUser }) {
  return (
    <table className='modal-data' align='center'>
      <tbody>
        <UserProfilePicture
          picture={selectedUser.picture.large}
          name={selectedUser.name.first}
        />
        <UserData user={selectedUser} />
      </tbody>
    </table>
  )
}