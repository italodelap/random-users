import React from 'react'

export const User = ({ selectedUser }) => {
    
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
              <td> <strong>Username</strong> <br/> {selectedUser && selectedUser.login.username} </td>
              <td> <strong>Email address</strong> <br/> {selectedUser && selectedUser.email} </td>
            </tr>
            <tr>
              <td> <strong>First name</strong> <br/> {selectedUser && selectedUser.name.first} </td>
              <td> <strong>Last name</strong> <br/> {selectedUser && selectedUser.name.last} </td>
            </tr>
            <tr>
              <td> <strong>Age</strong> <br/> {selectedUser && selectedUser.dob.age} </td>
              <td> <strong>Cell</strong> <br/> {selectedUser && selectedUser.cell} </td>
            </tr>
            <tr>
              <td>
                <strong>Location</strong> <br/>
                {selectedUser && (selectedUser.location.street.name + ' ' + selectedUser.location.street.number)}
              </td>
              <td> <strong>Phone</strong> <br/> {selectedUser && selectedUser.phone} </td>
            </tr>
          </tbody>
        </table>
    )

}