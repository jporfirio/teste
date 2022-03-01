import React,{ useState,useEffect } from 'react'
import listPost from '../Component/listPost'
import Modal from "react-modal"

Modal . setAppElement ( '#root' ) ;

 
const App = () => {

return (
  <div>
    {listPost()}
  </div>
)
}

export default App