import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter_value, setCounter_value] = useState(10)


    let add_value = () => {
        setCounter_value(counter_value+1)
    }
    let dec_value = () => {
      
      setCounter_value(counter_value - 1)
    }

  


  return (
    <>
      <h1>Chai aur react running</h1>
      <h2>Counter Value: {counter_value} </h2>
      <button
        onClick={dec_value}
      >Decrease Value {counter_value} </button>
      <br />
      <button
        onClick={add_value}
      >Increase Value {counter_value} </button>
    </>
  )
}

export default App
