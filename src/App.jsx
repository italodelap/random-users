import React, { useState } from 'react'
import Modal from 'react-modal'
import { Header } from './components/Header'
import { UsersGrid } from './components/UsersGrid'
import { ModalUserInformation } from './components/ModalUserInformation'

Modal.setAppElement(document.getElementById('root'))

export function App() {
  const [selectedUser, setSelectedUser] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const modalStyles = { content: {
    position: 'absolute', borderRadius: '25px',
    top: '9%', right: '28%', bottom: '9%', left: '28%'
  }}
  
  return (
    <div className='App'>
      <Header />
      <UsersGrid setSelectedUser={setSelectedUser} setModalIsOpen={setModalIsOpen} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={modalStyles}
      >
        <button className='button-close-modal' onClick={() => setModalIsOpen(false)}>X</button>
        <ModalUserInformation selectedUser={selectedUser} />
      </Modal>
    </div>
  )
}
