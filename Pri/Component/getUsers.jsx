import React,{ useEffect, useState } from "react"; 
import HandleModal from "./handleModal";


const GetUsers = () => {

    const [itens,setItens] = useState([])
    const [title, setTitle] = useState("");
    const [id, setId] = useState("");
    const [userId,setUserId]=useState(null)
    {itens.length=10}

    useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/posts/')
    
    .then((response) => response.json())
    .then(data => {
      console.log(data)
      setItens(data)
      setTitle(data.title)
      setId(data.id)
      setUserId(data.userId)
    })
    .catch(error => {
      alert(`Holve um erro ${error}`)
    })
},[])


    return (
        <div>
        <ul>
        {
        itens.map((item, index)=>  ( 
        <li key={index}>
        <HandleModal/>
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
        </div>
    )
  }
  
  export default GetUsers;