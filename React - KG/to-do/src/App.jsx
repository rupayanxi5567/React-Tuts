import AddTodoFnc from "./components/AddTodoFnc"
import AppName from "./components/AppName"
import TodoItem1 from "./components/TodoItem1"
import TodoItem2 from "./components/TodoItem2"
import "./App.css"


function App() {
  // const [count, setCount] = useState(0)

  return (
  <>
      <center className="todo_container" >
        <AppName/>
        <div class="container text-center">
          <AddTodoFnc/>

<div className="item_container">
<TodoItem1/>
<TodoItem2/>
</div>







    </div>
      </center>
  </>
    
  )
}

export default App
