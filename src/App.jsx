import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Registration from './Registration/Registration'
import Login from './Login/login'
import Home from './home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Registration/> */}
      {/* <Login/> */}
      <Home/>
    </>
  )
}

export default App
