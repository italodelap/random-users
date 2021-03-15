import React, { useEffect, useState } from 'react'

export const UsersGrid = ({ setSelectedUser, setModalIsOpen }) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getRandomUsers()
    }, [])

    const removeDuplicateUsers = (duplicateUsers) => {
        const flag = {}
        const unique = []

        duplicateUsers.forEach(user => {
            if (!flag[user.id.value]) {
                flag[user.id.value] = true
                unique.push(user)
            }
        })

        return unique
    }

    const getRandomUsers = async () => {
        const data = await fetch('https://randomuser.me/api/?results=70')
        const response = await data.json()
        const usersData = response.results
        
        setUsers(removeDuplicateUsers(usersData))
    }

    return (
        <div className='img-grid'>
            {users &&
                users.map(user => (
                    <div 
                        className='img-wrap'
                        key={user.id.value}
                        onClick={() => {
                            setSelectedUser(user)
                            setModalIsOpen(true)
                        }}
                    >
                        <img 
                            alt={user.name.first}
                            src={user.picture.large}
                        />
                        <div className='img-description'>
                            <p className='img-description-name'>
                                <strong>
                                    {user.name.first} {user.name.last}
                                </strong>
                            </p>
                            <p className='img-description-location'>
                                {user.location.city}, {user.location.state}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )

}