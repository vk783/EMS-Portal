import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>

        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/Signup' element={<h1>Sign Up</h1>} />
        <Route path='/Signin' element={<h1>Sign In</h1>} />
        <Route path='/about' element={<h1>About</h1>} />
      </Routes>
    </>
  )
}

export default App
