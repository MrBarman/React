import { useState } from 'react'
import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <h1>Redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
