import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './context/usercontext'
import UserContextProvider from './context/userContextProvider'
import Login from './components/login'
import Profile from './components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
   <UserContextProvider>
    <h1>Mini Context API samle project</h1>
    <Login></Login>
    <Profile></Profile>
   </UserContextProvider>
  )
}

export default App
