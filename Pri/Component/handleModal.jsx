import React, { useState,useEffect } from "react";
import Button from "./Button";
import Modal from 'react-modal'
import SelectUser from "./selectusers";
import UpdateUser from "./upDateUSer";
import GetUsers from "./getUsers";

const HandleModal = () => {
    
    const[modalIsOpen,setIsOpen] = useState(false)
        
    const handleOpenModal = () =>{
      setIsOpen(true)
    }
    
    const handleCloseModal = () => {
      setIsOpen(false)
    }


  return (
    <div>
            
      <Button value ="edit" onClick={() => {
      SelectUser 
      handleOpenModal()}}/>

      <Modal 
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}>
      <input type="text"  onChange={e => GetUsers.setTitle(e.target.value)}  autoFocus />

      <Button value ="update" onClick = {UpdateUser}/>
      <Button value= "Cancel" onClick={handleCloseModal}/>
      </Modal>
        </div>
    )
}

export default HandleModal;