import React from 'react'
import {Form, Field, withFormik} from 'formik'
import { axiosWithAuth } from '../utils/axiosWithAuth.js'

import FriendsList from './FriendsList.js'

const FriendsListForm = () => {

    return (
        <div>
         <Form>
            <Field type="text" name="name" placeholder="Name" />
            <Field type="text" name="age" placeholder="Age" />
            <Field type="email" name="email" placeholder="Email" />
            <button type='submit' >Submit</button>
        </Form> 
        <FriendsList/>
        </div>
    )
}

const FormWithFormik = withFormik({

    mapPropsToValues({name, age, email}){
       return{
        name: name || '',
        age: age || '',
        email: email || '',
        }
    },
    handleSubmit(values){
        //console.log(values)
        axiosWithAuth().post('http://localhost:5000/api/friends', values)
        .then(res => console.log('formik response', res.data))
        .catch(err => console.log(err.response))
    }
})(FriendsListForm )
export default FormWithFormik