import React from 'react'

export function TableCell({ label, data }) {
  return (
    <td>
      <strong>{label}</strong>
      <br />
      {data != null ? data : `No information about ${label}`}
    </td>
  )
}
