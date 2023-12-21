

import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";

const LoginPage = props => {
    const context = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        context.authenticate(userName, password);
    };

    let location = useLocation();
    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }

    
    const pageStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#282c34', 
        color: 'white'
    };

    const formStyles = {
        display: 'flex',
        flexDirection: 'column',
        width: '300px', 
    };

    const inputStyles = {
        margin: '10px 0',
        padding: '10px',
        borderRadius: '2px',
        border: '1px solid #ddd', 
        fontSize: '16px',
    };

    const buttonStyles = {
        padding: '10px',
        background: '#e91e63', 
        color: 'white',
        border: 'none',
        borderRadius: '2px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '10px', 
    };

    const linkContainerStyles = {
        marginTop: '15px', 
    };

    const linkStyles = {
        color: '#e91e63',
        textDecoration: 'none',
        fontWeight: 'bold',
    };

    return (
        <div style={pageStyles}>
            <h2>Login Page</h2>

            <div style={formStyles}>
                <input
                    style={inputStyles}
                    id="username"
                    placeholder="Username"
                    onChange={e => setUserName(e.target.value)}
                />
                <input
                    style={inputStyles}
                    id="password"
                    type="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
                <button style={buttonStyles} onClick={login}>
                    Login
                </button>
                <div style={linkContainerStyles}>
                    Not a member?{' '}
                    <Link to="/signup" style={linkStyles}>
                        Sign up now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;