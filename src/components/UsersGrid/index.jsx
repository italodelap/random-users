import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import User from '../User'

export default function UsersGrid({ setSelectedUser, setModalIsOpen }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
    // eslint-disable-next-line
  }, [])

  const getUsers = async () => {
    const data = await fetch('https://randomuser.me/api/?results=50')
    const response = await data.json()
    const usersData = response.results.filter(user => user.id.value != null)
    setUsers([...users, ...usersData])
  }

  const loading = () => (<h4>Loading...</h4>)

  const selectUser = user => {
    setSelectedUser(user)
    setModalIsOpen(true)
  }

  return (
    <InfiniteScroll dataLength={users.length} next={getUsers} hasMore={true} loader={loading()}>
      <div className='img-grid'>
        {users && users.map(user =>
          <User key={user.id.value} userInfo={user} selectUser={() => selectUser(user)} />
        )}
      </div>
    </InfiniteScroll>
  )
}