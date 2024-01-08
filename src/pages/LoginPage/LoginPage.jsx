import React, { useState } from 'react';
import "./LoginPage.css";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Cookies.set("name", name, { expires: 1 });
        Cookies.set("password", password, { expires: 1 });
        navigate("/DashBoard")
    }

    return (
        <>
            <div className='sign-up-container flex-box'>
                <div className='logo-container'>
                    <div className="login-page-logo">
                        <span class="material-symbols-outlined">key</span>
                    </div>
                    <div className="login-heading">
                        <h2>Login here</h2>
                    </div>
                </div>
                <div className="login-content-container">
                    <div className="login-form-border">
                        <form onSubmit={handleSubmit} action="" className='login-form'>
                            <h2 className='label'>Username</h2>
                            <input className='login-input' value={name} onChange={(e) => setName(e.target.value)} type="text" required />
                            <h2 className='label'>Password</h2>
                            <input className='login-input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
                            <button type='submit'>Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LoginPage