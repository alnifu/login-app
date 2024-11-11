// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
];

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        

        if (!username && !password) {
            setError('Username and Password are empty');
            return;
        } else if (!username) {
            setError('Username is empty');
            return;
        } else if (!password) {
            setError('Password is empty');
            return;
        }

        const user = users.find((user) => user.username === username);

        if (!user) {
            setError('Username does not exist');
            return;
        }

        if (user.password !== password) {
            setError('Wrong password');
            return;
        }

        setError('');
        navigate('/success');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            id="user"
                            data-testid="username-input"
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            id="pass"
                            data-testid="password-input"
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-input"
                        />
                    </div>
                    <button type="submit" data-testid="login-button" id="sub" className="login-button">Login</button>

                </form>
                {error && <p data-testid="error-message" className="error-message" id="err">{error}</p>}
            </div>

        </div>
    );
}

export default Login;
