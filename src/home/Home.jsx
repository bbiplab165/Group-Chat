import axios from "axios"
import { useEffect, useState } from "react"

function Home() {
    const [message, setMessage] = useState('')
    const [data, setData] = useState([])
    async function handleSend(e) {
        e.preventDefault()
        const token = localStorage.getItem("token")
        console.log(token);
        await axios.post('http://localhost:3000/chat', { message }, { headers: { "Authorization": token } })
        console.log("done");
    }
    useEffect(() => {
        async function fetchMessages() {
            try {
                console.log("useeffect");
                const response = await axios.get('http://localhost:3000/messages');
                const newMessage = response.data.data;
                console.log(newMessage);
                // console.log(data);
                setData(newMessage);
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        }
        // const interval = setInterval(fetchMessages, 3000);
        // return () => {
        //     clearInterval(interval);
        // };
    }, [])
    return (
        <div>
            <div>
                <h2>Chat App</h2>
                <div>
                    {data.map((item, index) => (
                        <h4 key={index}>{item.message}</h4>
                    ))}
                </div>
                <div>
                    <input type="text" onChange={(e) => setMessage(e.target.value)} />
                    <button onClick={handleSend}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Home