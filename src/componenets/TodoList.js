import React, { useState } from 'react'
import "./TodoList.css"
export default function TodoList(props){
    const[color,setColor]=useState("btn btn-primary")
    const[Done,setDone]=useState("Mark Completed")
    return(
        <div className='todoList'>
            <h2>Task no {props.sno}</h2>
            <p className='desc'>{props.item}</p>
            <button className={color} onClick={()=>{
                setDone("Completed")
                setColor("btn btn-danger")
            }}>{Done}</button>
        </div>
    )
}