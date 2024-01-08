import Cookies from 'js-cookie';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
    const navigation = useNavigate('/');
    const handleDeleteToken = () => {
        Cookies.remove('name');
        Cookies.remove('password');
        navigation('/LoginPage');
    }
    return (
        <>
            <div>
                <h1>
                    Welcome
                </h1>
                <h3>Click the button to delete account</h3>
                <button onClick={handleDeleteToken}>Delete</button>
            </div>
        </>
    )
}

export default DashBoard