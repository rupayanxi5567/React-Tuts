import { useState } from "react"


function App() {

  const [color, setColor] = useState("black")


  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor : color}}
    >
      <div className="flex text-white  flex-wrap fixed justify-center bottom-12 inset-x-0 px-2" >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-sky-300 px-3 py-2 rounded-2xl" >



          <button 
          onClick={ () => setColor("red") }
          style={{backgroundColor: "red"}}
          className="outline-none px-4 py-1 rounded-full" >Red</button>


          <button 
          onClick={ () => setColor("green") }
          style={{backgroundColor: "green"}}
          className="outline-none px-4 py-1 rounded-full" >green</button>


          <button 
          onClick={ () => setColor("blue") }
          style={{backgroundColor: "blue"}}
          className="outline-none px-4 py-1 rounded-full" >blue</button>


          <button 
          onClick={ () => setColor("yellow") }
          style={{backgroundColor: "yellow"}}
          className="outline-none px-4 py-1 text-black rounded-full" >yellow</button>


          <button 
          onClick={ () => setColor("pink") }
          style={{backgroundColor: "pink"}}
          className="outline-none px-4 py-1 text-black rounded-full" >pink</button>


          <button 
          onClick={ () => setColor("lime") }
          style={{backgroundColor: "lime"}}
          className="outline-none px-4 py-1 rounded-full" >lime</button>


          <button 
          onClick={ () => setColor("grey") }
          style={{backgroundColor: "grey"}}
          className="outline-none px-4 py-1 rounded-full" >grey</button>


          <button 
          onClick={ () => setColor("purple") }
          style={{backgroundColor: "purple"}}
          className="outline-none px-4 py-1 rounded-full" >purple</button>




          <button 
          onClick={ () => setColor("white") }
          style={{backgroundColor: "white"}}
          className="outline-none px-4 py-1 text-black rounded-full" >white</button>




          <button 
          onClick={ () => setColor("black") }
          style={{backgroundColor: "black"}}
          className="outline-none px-4 py-1 rounded-full" >black</button>





        </div>
      </div>
    </div>



  )
}

export default App
