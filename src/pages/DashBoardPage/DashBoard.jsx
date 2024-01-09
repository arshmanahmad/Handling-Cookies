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
                    This is the DashBoard page and this is the way we have to logout by clicking on the button logout.
                </h1>
                <h3>Click the button to delete account</h3>
                <button onClick={handleDeleteToken}>Logout</button>
            </div>
        </>
    )
}

export default DashBoard