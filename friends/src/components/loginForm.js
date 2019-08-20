import React, {useState} from 'react'

const LoginForm = () => {

    const[user, setUser]= useState({username: '', password: ''})

    const handleSumbit = event => {
        event.preventDefault()
    }

    const handleChange = event => {
        setUser({
            ...user, 
            [event.target.name]: event.target.value
        })
    }


    return(
        <form>
            <label>UserName</label>
            <input
            type = 'text'
            name= 'username'
            value = {user.username}
            onChnage={handleChange}
            />
            <label>Password</label>
            <input
            type = 'password'
            name = 'password'
            value = {user.password}
            onChange = {handleChange}
            />
        </form>
    )
}