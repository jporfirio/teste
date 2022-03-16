import React, { useEffect, useState } from "react";
import HandleModal from "./handleModal";

const GetUsers = () => {
  const [itens, setItens] = useState([])
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [userId, setUserId] = useState(null)
  { itens.length = 10 } // porque essa linha?

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')

      .then((response) => response.json())
      .then(data => {
        console.log(data)
        setItens(data)
        // aqui tá pegando title, id e userId do data, mas data é um array, não tem essas propriedades
        setTitle(data.title)
        setId(data.id)
        setUserId(data.userId)
      })
      .catch(error => {
        alert(`Holve um erro ${error}`)
      })
  }, [])

  return (
    <div>
      <ul>
        {/* 
          talvez seja mais interessante fazer um componente pra cada linha dessa lista
          assim cada um é responsável pela sua modal
          aí cada linha poderia receber o post e a função pra atualizar a modal quando o usuário salvasse a edição
         */}
        {itens.map((item, index) => (
          <li key={index}>
            {/*
              pensa no modal como uma função a parte
              de preferência, ela teria entradas e saídas
              poderia fazer um onSubmit e quando o cara clicasse no botão dentro ele chamasse esse método
              aí passaria pra ele a função que atualizaria o post do usuário
             */}
            <HandleModal /> 
            <br />
            Title :
            {item.title}
            <br />
            id :
            {item.id}
            <br />
            userId :
            {item.userId}
            <br />
          </li>))
        }
      </ul>
    </div>
  )
}

export default GetUsers;