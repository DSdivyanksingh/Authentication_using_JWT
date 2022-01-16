import React from 'react';
import {Link} from 'react-router-dom';
import './login.css';

function Login(){
    return(
        <>
        <h1>Login page</h1>
        <form className='login_form'>
            <input type='text' placeholder='username' name='username'></input>
            <input type='password' placeholder='password' name='password'></input>
        </form>
        <Link className='link' to='/'>REGISTER</Link>
        </>
    );
}
export default Login;
