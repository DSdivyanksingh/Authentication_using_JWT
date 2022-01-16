import React from 'react';
import {Link} from 'react-router-dom';
import './register.css';

function Register(){
    return(
        <>
        <h1>Register page</h1>
        <form className='register_form'>
            <div>
            <input className='first_name' type='text' placeholder='First name'></input><input className='last_name' type='text' placeholder='Last name'></input>
            </div>
            <input type='text' placeholder='username' name='username'></input>
            <input type='password' placeholder='password' name='password'></input>
        </form>
        <Link className='link' to='/login'>LOGIN</Link>
        </>
    );
}
export default Register;
