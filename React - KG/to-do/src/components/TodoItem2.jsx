import React from 'react'

const TodoItem2 = () => {

    let todoName = "Go to College";
    let todoDate = "5/2/2024";

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

export default TodoItem2
