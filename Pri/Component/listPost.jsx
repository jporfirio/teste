import React,{useState,useEffect} from "react";
import Button from "./modalEdit.jsx"
import modalEdit from "./modalEdit.jsx";



const listPost = () => {

    const [itens,setItens] = useState([])

   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then(data => {
        setItens(data)
    })
    .catch(error => {
        alert(`Holve um erro ${error}`)
    })
},[])
{itens.length=10}
    return (
        <div>
            <ul>
                {
                    itens.map((item, index)=>  ( 
                    <li key={index}>
                        <Button value = "edit" onClick={modalEdit.handleOpenModal} />
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

export default listPost