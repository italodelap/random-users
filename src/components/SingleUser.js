import React from 'react'
import UserData from './UserData'

export default function SingleUser ({ selectedUser }) {
  return (
    <table className='modal-data' align='center'>
      <tbody>
        <tr>
          <td colSpan='2'>
            <img 
              className='modal-image'
              src={selectedUser.picture.large}
              alt={selectedUser.name.first}
            />
          </td>
        </tr>
        <UserData user={selectedUser} />
      </tbody>
    </table>
  )
}