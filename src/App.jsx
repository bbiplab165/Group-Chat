import { useState } from 'react'
import './App.css'

import Registration from './Registration/Registration'
import Login from './Login/login'
import Home from './home/Home'
import { Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Registration/> */}
      {/* <Login/> */}
      {/* <Home/> */}
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/Registration' element={<Registration/>}/>
      </Routes>
    </>
  )
}

export default App
