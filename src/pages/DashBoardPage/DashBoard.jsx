import React from 'react'
import { Cookies } from 'react-cookie'

const DashBoard = ({ user }) => {
    const handleDeleteToken = () => {
        Cookies.remove('user');
        window.location.href = '/';
    }
    return (
        <>
            <div>
                <h1>
                    Welcome {user.name}
                </h1>
                <h3>Click the button to delete account</h3>
                <button onClick={handleDeleteToken}>Delete</button>
            </div>
        </>
    )
}

export default DashBoard