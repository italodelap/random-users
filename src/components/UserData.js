import React from 'react'
import TableCell from './TableCell'

export default function UserData({ user }) {
  const userLocation = `${user.location.street.name} ${user.location.street.number}`
  return (
    <>
      <tr>
        <TableCell label='Username' data={user.login.username} />
        <TableCell label='Email address' data={user.email} />
      </tr>
      <tr>
        <TableCell label='First name' data={user.name.first} />
        <TableCell label='Last name' data={user.name.last} />
      </tr>
      <tr>
        <TableCell label='Age' data={user.dob.age} />
        <TableCell label='Cell' data={user.cell} />
      </tr>
      <tr>
        <TableCell label='Location' data={userLocation} />
        <TableCell label='Phone' data={user.phone} />
      </tr>
    </>
  )
}
