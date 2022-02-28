import React from "react";

function Task({category,text,deleteClick}) {
function deleteEvent(){
  deleteClick(text)
}

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={deleteEvent} className="delete">X</button>
    </div>
  );
}

export default Task;
