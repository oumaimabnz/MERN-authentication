import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Nabvar from './components/Nabvar'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from './components/NotFound'
import api from './api/axios'

const App = () => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')
  const[isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token")
      if (token) {
        try {
          const res = await api.get('/api/users/me', {
            headers: {Authorization: `Bearer ${token}`}
          })
          setUser(res.data)
        } catch (error) {
          setError("Failed to fetch user data")
          localStorage.removeItem('token')
        }
      }
      setIsLoading(false)
    }
    fetchUser()
  }, [])

  if (isLoading) {
    return (
      <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
        <div className='text-xl text-gray-800'>Loading...</div>
      </div>
    )
  }


  return (
    <Router>
      <Nabvar user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<Home user={user} error={error}/>} />
        <Route 
          path='/login' 
          element={user ? <Navigate to='/' /> : <Login setUser={setUser}/>}
        />
        <Route 
         path='/register' 
         element={user ? <Navigate to='/' /> : <Register setUser={setUser}/>} 
        />
        <Route path='*' element= {<NotFound/>} /> 
      </Routes>
    </Router>
  )
}

export default App