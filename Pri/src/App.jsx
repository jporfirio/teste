import React,{ useState,useEffect } from 'react'
import Modal from "react-modal"
import GetUsers from '../Component/getUsers'

Modal . setAppElement ( '#root' ) ;

 
const App = () => {

return (
  <div>
    <GetUsers/>
  </div>
)
}

export default App