import React from 'react'
import { TableCell } from '../TableCell'

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
          <TableCell label='Username' data={selectedUser.login.username} />
          <TableCell label='Email address' data={selectedUser.email} />
        </tr>
        <tr>
          <TableCell label='First name' data={selectedUser.name.first} />
          <TableCell label='Last name' data={selectedUser.name.last} />
        </tr>
        <tr>
          <TableCell label='Age' data={selectedUser.dob.age} />
          <TableCell label='Cell' data={selectedUser.cell} />
        </tr>
        <tr>
          <TableCell label='Location' data={`${streetName} ${streetNumber}`} />
          <TableCell label='Phone' data={selectedUser.phone} />
        </tr>
      </tbody>
    </table>
  )
}