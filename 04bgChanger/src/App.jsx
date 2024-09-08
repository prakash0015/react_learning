import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style = {{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap- justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button onC className="outline-none px-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}} onMouseOver={() => {setColor("red")}}>
            Red
          </button>
          <button className="outline-none px-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}} onMouseOver={() => {setColor("blue")}}>
            Blue
          </button>
          <button className="outline-none px-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}} onMouseOver={() => {setColor("green")}}>
            Green
          </button>
          <button className="outline-none px-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}} onMouseOver={() => {setColor("purple")}}>
            Purple
          </button>
          <button className="outline-none px-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "indigo"}} onMouseOver={() => {setColor("indigo")}}>
            Indigo
          </button>
          <button className="outline-none px-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}} onMouseOver={() => {setColor("black")}}>
            Black
          </button>
          <button className="outline-none px-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "white"}} onMouseOver={() => {setColor("white")}}>
            White
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
