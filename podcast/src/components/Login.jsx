import React from 'react'
import {useNavigate } from 'react-router-dom' ;

export default function  Login(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    // function handleLogin() {
    //     console.log("ive log in")
    // }

    return(
        <div className="landing-page">
            <div className="page">
                <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>

            <label className="landing-label" htmlFor="email">email</label>
            <input 
            value={email}
            type="email"
            placeholder="email account" 
            id="email"
            name="email"
            />

            
            <label htmlFor="password">password</label>
            <input
            value={password} 
            type="password"
            placeholder="*********" 
            id="password"
            name="password"
            />
            
            
            <button className="btn-login" type="submit" onClick={() => navigate('preview-shows')}>Log In</button>
            
            
        </form>
        
        <button className="link-btn" onClick={ ()=> props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
        </div>
    )
}