import React, { useState } from "react";

function NewTaskForm({addionalItem,hotCategoy}) {
  
const [name,setName]=useState("")
const [category,setCategory]=useState("code")

  function submit(event){
    event.preventDefault()
    addionalItem({
      category:category,
      text:name
    })


  }
  
function change(E){
  setCategory(E.target.value)
}

  return (
    
    <form onSubmit={submit}
    className="new-task-form">
    
      <label>
        Details
    
        <input 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        type="text" name="text" />
    
      </label>
      <label>
        Category

        <select 
        value={category}
        onChange={change}
        name="category">
         {hotCategoy.map(el=> <option key={el}>{el}</option> )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
