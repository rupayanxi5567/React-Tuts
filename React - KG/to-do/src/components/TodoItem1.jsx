import React from 'react'

const TodoItem1 = () => {

    let todoName = "Buy Milk";
    let todoDate = "4/2/2024";

  return (
    <div>
      
    <div class="row">
    <div class="col-4">
      {/* <input type="text" placeholder="Enter your todo here" name="" id="" /> */}
      {todoName}
    </div>
    <div class="col-4">
      {/* <input type="date" name="" id="" /> */}
      {todoDate}
    </div>
    <div class="col-2 ">
    <button type="button" class="btn btn-danger">Delete</button>
    </div>
    </div>
    </div>
  )
}

export default TodoItem1
