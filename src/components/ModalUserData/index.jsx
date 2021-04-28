import React from 'react'

export function ModalUserData({ label, data }) {
  return (
    <td>
      <strong>{label}</strong>
      <br />
      {data
        ? data
        : `No information about ${label}`
      }
    </td>
  )
}
