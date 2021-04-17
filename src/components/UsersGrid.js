import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function UsersGrid({ setSelectedUser, setModalIsOpen }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getRandomUsers()
    // eslint-disable-next-line
  }, [])

  const getRandomUsers = async () => {
    const data = await fetch("https://randomuser.me/api/?results=50")
    const response = await data.json()
    const usersData = response.results.filter((user, index) => {
      return response.results.indexOf(user) === index
    })
    
    setUsers([...users, ...usersData])
  }

  return (
    <InfiniteScroll
      dataLength={users.length}
      next={getRandomUsers}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <div className="img-grid">
        {
          users && users.map((user, index) => (
            <div
              className="img-wrap"
              key={index + "" + user.id.value}
              onClick={() => {
                setSelectedUser(user)
                setModalIsOpen(true)
              }}
            >
              {/* user-thumbnail */}
              <img alt={user.name.first} src={user.picture.large} />
              <div className="img-description">
                <p className="img-description-name">
                  <strong>
                    {user.name.first} {user.name.last}
                  </strong>
                </p>
                <p className="img-description-location">
                  {user.location.city}, {user.location.state}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </InfiniteScroll>
  )
}