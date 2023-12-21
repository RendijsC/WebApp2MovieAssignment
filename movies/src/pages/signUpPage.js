
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';

const SignUpPage = props => {
    const context = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [registered, setRegistered] = useState(false);

   
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

    const getPasswordRequirements = (password) => {
        let message = '';
        if (!/.{8,}/.test(password)) message += 'Password must be at least 8 characters long.<br>';
        if (!/[A-Z]/.test(password)) message += 'Password must contain at least one uppercase letter.<br>';
        if (!/[a-z]/.test(password)) message += 'Password must contain at least one lowercase letter.<br>';
        if (!/\d/.test(password)) message += 'Password must contain at least one digit.<br>';
        if (!/[@$!%*#?&]/.test(password)) message += 'Password must contain at least one special character (@, $, !, %, *, #, ?, &).<br>';
        return message;
    }

    const displayPasswordError = (message) => {
        document.getElementById('passwordErrors').innerHTML = message;
    }

    const validateUsername = (username) => {
        if (username.length < 8) {
            setUserNameError("Username must be 8 characters or more.");
        } else {
            setUserNameError("");
        }
    }

    const register = () => {
        let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])(?=.*[A-Z])[A-Za-z\d@$!%*#?&]{8,}$/;
        const validPassword = passwordRegEx.test(password);

        if (validPassword && password === passwordAgain && userNameError === "") {
            context.register(userName, password);
            setRegistered(true);
        } else {
            const errorMessage = getPasswordRequirements(password);
            displayPasswordError(errorMessage);
        }
    }

    if (registered === true) {
        return <Navigate to="/login" />;
    }

    return (
        <div style={pageStyles}>
            <h2>SignUp Page</h2>
            <p>You must register a username and password to log in</p>
            <div style={formStyles}>
                <input
                    style={inputStyles}
                    value={userName}
                    placeholder="Username"
                    onChange={e => {setUserName(e.target.value); validateUsername(e.target.value);}}
                />
                {userNameError && <div style={{ color: 'red' }}>{userNameError}</div>}
                <input
                    style={inputStyles}
                    value={password}
                    type="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    style={inputStyles}
                    value={passwordAgain}
                    type="password"
                    placeholder="Password Again"
                    onChange={e => setPasswordAgain(e.target.value)}
                />
                <div id="passwordErrors" style={{ color: 'red' }}></div>
                <button style={buttonStyles} onClick={register} disabled={!!userNameError}>
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default SignUpPage;