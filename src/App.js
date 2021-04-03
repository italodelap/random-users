import React, { useState } from 'react'
import Modal from 'react-modal'

import Header from './components/Header'
import UsersGrid from './components/UsersGrid'
import User from './components/User'

Modal.setAppElement('#root')

function App() {

  const [selectedUser, setSelectedUser] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  
  return (
    <div className='App'>
      <Header/>
      <UsersGrid
        setSelectedUser={setSelectedUser}
        setModalIsOpen={setModalIsOpen}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: {
            position: 'absolute',
            top: '9%',
            right: '28%',
            bottom: '9%',
            left: '28%',
            borderRadius: '25px'
          }
        }}
      >
        <button className='button-close-modal' onClick={() => setModalIsOpen(false)}>X</button>
        <User selectedUser={selectedUser} />
      </Modal>
    </div>
  )

}

export default App
