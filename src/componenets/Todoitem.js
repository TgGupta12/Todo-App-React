import React, { useState } from 'react'
import TodoList from './TodoList'
import  './Todoitem.css'
export default function Todoitem(props){
    const [myList,setmyList]=useState(props.todos)
    const handleDelete=(item)=>{
        const reduced=myList.filter((items)=>{
            return item!==items.title
        })
        setmyList(reduced)
        console.log(reduced)

    }
    return(  
            <div>
                {myList.length!==0?
                    myList.map((items,index)=>{
                        return <div className='box'>
                        <TodoList item={items.title} sno={index+1}/>
                        <button onClick={()=>handleDelete(items.title)} className='btn btn-primary' >Delete item</button>
                        </div>

                    })
                :
                    <h2 className='text-center'>LIST IS EMPTY!!</h2>
                }
            </div>
    )
}