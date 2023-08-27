import Style from './Login.module.css'

function Login() {
    return (
        <div className={Style.main}>
            <div className={Style.login}>
                <h2>Login</h2>
                <div className={Style.Container}>
                    <label>Email:</label>
                    <input type="text" />
                </div>
                <div className={Style.Container}>
                    <label>Password:</label>
                    <input type="password" />
                </div>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Login