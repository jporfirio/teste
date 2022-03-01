import React,{useState,useEffect} from "react";
import Modal from "react-modal"
import Button from "./Button";


const modalEdit = () => {
    const[modalIsOpen,setIsOpen] = useState(false)

    const handleOpenModal = () =>
        setIsOpen(true)

    const handleCloseModal = () =>
        setIsOpen(false)



    return (
        <div>
            <Button value="edit" onClick={handleOpenModal}/>
            <Modal 
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}>
                <input type="text" placeholder="edit title" />
                <Button value ="update"/>
                <Button value= "Cancel" onClick={handleCloseModal}/>
            </Modal>
        </div>
    )

}
export default modalEdit;