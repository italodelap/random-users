import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import UserThumbnail from './UserThumbnail'

export default function UsersGrid({ setSelectedUser, setModalIsOpen }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getRandomUsers()
    // eslint-disable-next-line
  }, [])

  const getRandomUsers = async () => {
    const data = await fetch("https://randomuser.me/api/?results=50")
    const response = await data.json()
    const usersData = response.results.filter(user => user.id.value != null)
    
    setUsers([...users, ...usersData])
  }

  return (
    <InfiniteScroll
      dataLength={users.length}
      next={getRandomUsers}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <div className='img-grid'>
        {users && users.map(user => (
          <div
            className='img-wrap'
            key={user.id.value}
            onClick={() => {
              setSelectedUser(user)
              setModalIsOpen(true)
            }}
          >
            <UserThumbnail name={user.name} picture={user.picture.large} location={user.location} />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  )
}