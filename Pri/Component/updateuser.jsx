import React from "react";

function UpdateUser()
{
  const item= {title,id,userId}
  console.warn("item",item)
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PUT',
    headers:{
      'Content-Type':'application/json; charset=UTF-8'
    },
    body:JSON.stringify(item)
  }).then((result) => {
    result.json().then(data => {
      setItens(data)
      console.log(data)
    })
  })
}

export default UpdateUser;