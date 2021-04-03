import React from 'react'

export default function Info ({label, data}) {
    return (
        <td>
            <strong>{ label }</strong>
            <br/>
            { data != null ? data : `No information about ${label}` }
        </td>
    )
}