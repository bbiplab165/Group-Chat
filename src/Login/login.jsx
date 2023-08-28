import { useState } from 'react'
import Style from './Login.module.css'
import axios from 'axios'

function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function handleSubmit(e)
    {
        e.preventDefault()
        const token=await axios.post('http://localhost:3000/login',{email,password})
        console.log(token);
    }
    return (
        <div className={Style.main}>
            <div className={Style.login}>
                <h2>Login</h2>
                <div className={Style.Container}>
                    <label>Email:</label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className={Style.Container}>
                    <label>Password:</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}

export default Login