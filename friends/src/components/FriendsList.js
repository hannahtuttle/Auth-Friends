import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth.js'



const FriendsList = () => {

    const [friend, setFriend]= useState([])

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(response =>
            setFriend(response.data)
             //console.log('response from friendslist', response.data)
            )
        .catch(error => console.log('error from friendslist', error.response))
    }, [])

    return(
        <div>
            {friend.map(person => {
                return(
                    <div key={person.id}>
                        <p>{person.name}</p>
                        <p>{person.age}</p>
                        <p>{person.email}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FriendsList