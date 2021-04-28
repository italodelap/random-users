import React from 'react'
import { ModalUserData } from '../ModalUserData'

export function ModalUserInformation ({ selectedUser }) {
  const streetName = selectedUser.location.street.name
  const streetNumber = selectedUser.location.street.number

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
        <tr>
          <ModalUserData label='Username' data={selectedUser.login.username} />
          <ModalUserData label='Email address' data={selectedUser.email} />
        </tr>
        <tr>
          <ModalUserData label='First name' data={selectedUser.name.first} />
          <ModalUserData label='Last name' data={selectedUser.name.last} />
        </tr>
        <tr>
          <ModalUserData label='Age' data={selectedUser.dob.age} />
          <ModalUserData label='Cell' data={selectedUser.cell} />
        </tr>
        <tr>
          <ModalUserData label='Location' data={`${streetName} ${streetNumber}`} />
          <ModalUserData label='Phone' data={selectedUser.phone} />
        </tr>
      </tbody>
    </table>
  )
}