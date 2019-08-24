import React, {useState} from 'react'
import axios from 'axios';



const LoginForm = props => {

    const[user, setUser]= useState({username: '', password: ''})
    
    const handleChange = event => {
        setUser({
            ...user, 
            [event.target.name]: event.target.value
        })
    }

    const handleLogin = event => {
        event.preventDefault()
        axios.post('http://localhost:5000/api/login', user)
        .then(response => 
            localStorage.setItem('token', response.data.payload),
                //console.log(response.data.payload)
                props.history.push('/friendslist')
        )
        .catch(error => console.log('error from login', error.response))
    }



    return(
        <form onSubmit={handleLogin}>
            <h2>Login Here</h2>
            <label>UserName</label>
            <input
            type = 'text'
            name= 'username'
            // value = {user.username}
            onChange={event => handleChange(event)}
            />
            <label>Password</label>
            <input
            type = 'password'
            name = 'password'
            // value = {user.password}
            onChange = {event => handleChange(event)}
            />
            <button>Submit</button>
        </form>
    )
}

export default LoginForm