import React, { useState } from 'react';
import './FormWithInput.css';
import Todoitem from './Todoitem';

const FormWithInput = () => {
  const[forms,setForms]=useState(true)
  const [myList,SetmyList]=useState([])
  const [inputValue, setInputValue] = useState('');
  const[place,setPlace]=useState("Write your task")
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const seeList=()=>{
    setForms(false)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with value:', inputValue);
    const toDo={
      title:inputValue,
    }
    SetmyList([...myList,toDo])
    console.log(myList)
    setInputValue(" ")
    setPlace("Add another task")
  };

  return (
    <div>
      {
        forms===true?<div className="form-container">
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            required
            value={inputValue}
            onChange={handleChange}
            placeholder={place}
            className="input-field"
          />
          <button type="submit" className="submit-button">Add</button>
          <button type='submit' className='see-button' onClick={seeList}>See My List</button>
        </form>
      </div>:<Todoitem todos={myList}/>
      }
      
    </div>
    
    
  );
};
export default FormWithInput;
