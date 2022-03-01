import React,{useState,useEffect} from "react";
import listPost from "./listPost";

const [Title,setTitle] = useState()

const upDate = () => {
    return (
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'put',
            body:JSON.stringify({
                Title:"" 
            })
        })
        .then((response) => response.json())
        .then(data => {
            setTitle(data)
        })
        .catch(error => {
            alert(`Holve um erro ${error}`)
        })
    
    )
}
export default upDate