import './App.css';
import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root') //important?

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={() => setModalIsOpen(false)} 
        style = {
          {
          overlay: {
            backgroundColor: 'grey'
          },
          content: {
            color: 'orange'
        }}}
        >
        <h2>Modal title</h2>
        <p>Modal Body</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

 export default App;
