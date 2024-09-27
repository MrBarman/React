import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData){
        dispatch(login({userData}))
      }else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-green-50'>
      <div className='w-full block'>
        <Header />
        <main>
          Todo: <Outlet />
        </main>
        <Footer />
      </div>
      </div>
  ) : (<h1>Mega Blog app with Appwrite Loading...</h1>)
}

export default App
