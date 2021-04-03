import React from 'react'
import Info from './Info'

export default function User ({ selectedUser }) {
    return (
        <table className='modal-data' align='center'>
          <tbody>
            <tr>
              <td colSpan='2'>
                <img 
                  className='modal-image'
                  src={selectedUser && selectedUser.picture.large}
                  alt={selectedUser && selectedUser.name.first}
                />
              </td>
            </tr>
            <tr>
              <Info label='Username' data={selectedUser.login.username}></Info>
              <Info label='Email address' data={selectedUser.email}></Info>
            </tr>
            <tr>
              <Info label='First name' data={selectedUser.name.first}></Info>
              <Info label='Last name' data={selectedUser.name.last}></Info>
            </tr>
            <tr>
              <Info label='Age' data={selectedUser.dob.age}></Info>
              <Info label='Cell' data={selectedUser.cell}></Info>
            </tr>
            <tr>
              <Info
                label='Location'
                data={selectedUser.location.street.name + ' ' + selectedUser.location.street.number}
              >
              </Info>
              <Info label='Phone' data={selectedUser.phone}></Info>
            </tr>
          </tbody>
        </table>
    )
}