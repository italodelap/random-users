import React from 'react'
import Info from './Info'

export default function User ({ selectedUser }) {
    return (
      selectedUser &&
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
            <Info label='Username' data={selectedUser.login.username}/>
            <Info label='Email address' data={selectedUser.email}/>
          </tr>
          <tr>
            <Info label='First name' data={selectedUser.name.first}/>
            <Info label='Last name' data={selectedUser.name.last}/>
          </tr>
          <tr>
            <Info label='Age' data={selectedUser.dob.age}/>
            <Info label='Cell' data={selectedUser.cell}/>
          </tr>
          <tr>
            <Info
              label='Location'
              data={selectedUser.location.street.name + ' ' + selectedUser.location.street.number}
            />
            <Info label='Phone' data={selectedUser.phone}/>
          </tr>
        </tbody>
      </table>
    )
}