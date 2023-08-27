import { useState } from 'react'
import Style from './Registration.module.css'
import axios from 'axios'

function Registration() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(name, email, password, phone);
        await axios.post('http://localhost:3000/createUser', {name, email, password, phone})
            .then(response => {
                console.log("send in backend", response.data);
            }).catch(error => {
                console.error("Error sending to backend:", error);
            });
    }

        return (
            <div className={Style.pageContainer}>
                <div className={Style.main}>
                    <form>
                        <h3>Registration :</h3>
                        <div className={Style.container}>
                            <label>Name :</label>
                            <input type="text" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className={Style.container}>
                            <label>Email :</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={Style.container}>
                            <label>Phone Number :</label>
                            <input type="text" onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className={Style.container}>
                            <label>Password :</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type='submit' onClick={handleSubmit}>submit</button>
                    </form>
                </div>
            </div>
        )
    }

    export default Registration