import React, { useState } from 'react'
import Modal from 'react-modal'
import Header from './components/Header'
import UsersGrid from './components/UsersGrid'
import ModalUser from './components/ModalUser'

Modal.setAppElement(document.getElementById('root'))

function App() {
  const [selectedUser, setSelectedUser] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const styles = {
    modal: {
      position: 'absolute',
      top: '9%',
      right: '28%',
      bottom: '9%',
      left: '28%',
      borderRadius: '25px'
    }
  }
  
  return (
    <div className='App'>
      <Header />
      <UsersGrid setSelectedUser={setSelectedUser} setModalIsOpen={setModalIsOpen} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{ content: styles.modal }}
      >
        <button className='button-close-modal' onClick={() => setModalIsOpen(false)}>X</button>
        <ModalUser selectedUser={selectedUser} />
      </Modal>
    </div>
  )
}

export default App