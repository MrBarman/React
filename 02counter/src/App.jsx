import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)

  const increaseValue = ()=>{
    if(counter<20){
      counter = counter+1
      setCounter(counter)
    }
  }

const decreaseValue = () =>{
  if(counter>0)
    setCounter(counter - 1)
}
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={increaseValue}>Increase</button>
      <br /> 
      <br/>
      <button onClick={decreaseValue}>Decrease</button>
    </>
  )
}

export default App
