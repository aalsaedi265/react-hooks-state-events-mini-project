import React from "react";

function CategoryFilter({categoryArr,setCategory,categorySele}) {

let types= categoryArr.map(el=>{

  const theClass= categorySele === el ? "selected":null

return  (<button
  key={el}
  className={theClass}
  onClick={()=> setCategory(el)}
  >{el} </button>)
})

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {types}
    </div>
  );
}

export default CategoryFilter;
