import React from 'react'

export default function User({ userInfo, selectUser }) {
  const { picture, name, location } = userInfo
  
  return (
    <div className='img-wrap' onClick={selectUser}>
      <img alt={name.first} src={picture.large} />
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
    </div>
  )
}
