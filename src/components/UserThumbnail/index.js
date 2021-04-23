import React from 'react'

export default function UserThumbnail({ name, picture, location }) {
  return <>
    <img alt={name.first} src={picture} />
    <div className='img-description'>
      <p className='img-description-name'>
        <strong>
          {`${name.first} ${name.last}`}
        </strong>
      </p>
      <p className='img-description-location'>
        {`${location.city}, ${location.state}`}
      </p>
    </div>
  </>
}
