import React,{useState,useEffect} from "react";
import Button from "./Button"
import Modal from "react-modal"

const listPost = () => {
    const [itens,setItens] = useState([])
    const [title, setTitle] = useState("");
    const [id, setId] = useState("");
    const [userId,setUserId]=useState(null)
    {itens.length=10}

    useEffect(() => {
        getUsers();
      }, [])
      
    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => response.json())
        .then(data => {
            setItens(data)
            setTitle(data[0].title)
            setId(data[0].id)
            setUserId(data[0].userId)
        })
        .catch(error => {
            alert(`Holve um erro ${error}`)
        })
      }

      function selectUser(id){
          const item = itens[id-1];
          setTitle(item.title)
          setId(item.id)
          setUserId(item.userId)
        }
        
function updateUser()
{
  const item={title,id,userId}
  console.warn("item",item)
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PUT',
    headers:{
      'Content-Type':'application/json; charset=UTF-8'
    },
    body:JSON.stringify(item)
  }).then((result) => {
    result.json().then(data => {
      console.warn(data)
      setItens(data[0].itens)
      getUsers()
    })
  })
}

    const[modalIsOpen,setIsOpen] = useState(false)

    const handleOpenModal = () =>{
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    return (
    <div>
          <h1>Muito Obrigado por essa experiência</h1>
        <ul>
      {
        itens.map((item, index)=>  ( 
        <li key={index}>
        <Button value ="edit" onClick={() => {
        selectUser(item.id)
        handleOpenModal() 
        }} />
        <br/>
        Title : 
        {item.title}
        <br/>
        id :
        {item.id}
        <br/>
        userId :  
        {item.userId}
        <br/>
        </li>) )
      }
      </ul>
      <Button className = "modal" onClick={handleOpenModal}/>
<Modal 
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}>
      <input type="text"onChange={e => setTitle(e.target.value)} placeholder = {title} autoFocus />
      <Button value ="update" onClick={()=> {
      updateUser()
      handleCloseModal()
      }}></Button>
      <Button value= "Cancel" onClick={handleCloseModal}/>
  </Modal>
        </div>

    )
}

export default listPost