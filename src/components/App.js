import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log({ CATEGORIES, TASKS });

function App() {

const[text, setText]=useState(TASKS)
const [category,setCategory]=useState("All")


function deleteClick(event){
  setText(text.filter(el=> el.text !== event))
}


function addionalItem(x){
setText([...text,x])
}

const visbelItem = text.filter(el=>(
    category==="All" || el.category === category
  ))
let hotCategoy=CATEGORIES.filter(el=> el !=="All")

  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter
      categoryArr={CATEGORIES}
      categorySele={category}
      setCategory={setCategory}
      />
      <NewTaskForm 
      addionalItem={addionalItem}
      hotCategoy={hotCategoy}

      />
     
      <TaskList 
      visbelItem={visbelItem}
      deleteClick={deleteClick}
      />
    </div>
  );
}

export default App;
