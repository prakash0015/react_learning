import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter, setCounter] = useState(15);
  const addValue = () => {
    if(counter >= 20) {
      alert("Counter is already at maximum value");
      return;
    }
    setCounter(counter + 1); 
    setCounter(counter + 1); 
    setCounter(counter + 1); 
    setCounter(counter + 1); 

  }

  const removeValue = () => {
    if(counter <= 0) {
      alert("Counter is already at minimum value");
      return;
    }
    counter = counter - 1;
    setCounter(counter);
  }

  return (
    <>
      <h1>this is good</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>remove Value</button>
    </>
  )
}

export default App
