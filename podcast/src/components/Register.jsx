/*eslint-disable */
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function  Register(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [userName, setUserName] = React.useState('');

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("email")
    }

    return(
        <div className="landing-page">
            <div className="page">
                <h2>Register</h2>
        <form className="register-form"onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={userName}
            type="text" 
            name="name"
            id="name"
            placeholder="full name"/>
            


            <label htmlFor="email">email</label>
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
        <button className="link-btn" onClick={()=> props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
        </div>
    )

}
