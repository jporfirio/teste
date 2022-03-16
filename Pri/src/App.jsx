import React, { useState, useEffect } from 'react'
import Modal from "react-modal"
import GetUsers from '../Component/getUsers'

Modal.setAppElement('#root');

const App = () => {
  return (
    <div>
      {/*
        o nome desse componente talvez pudesse deixar mais claro o que tá fazendo
        o nome leva a pensar que é uma função pra buscar os usuários
        mas na realidade ele é uma lista dos posts que faz a busca internamente
      */}
      <GetUsers />
    </div>
  )
}

export default App