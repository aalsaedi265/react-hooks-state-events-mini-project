import React from "react";
import Task from "./Task";

function TaskList({visbelItem, deleteClick}) {

let render= visbelItem.map(el=>(

  <Task
  key={el.text}
  category={el.category}
  text={el.text}
  deleteClick={deleteClick}
  />
))

  return (
    <div className="tasks">
      {render}
    </div>
  );
}

export default TaskList;
