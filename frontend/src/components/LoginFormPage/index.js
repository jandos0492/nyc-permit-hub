import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./LoginFormPage.css";

function LoginFormPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        try {
            await dispatch(sessionActions.login({ credential, password, }));
            navigate("/home");
        } catch (res) {
            setPassword("");
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        }
    };

    return (
            <div className="login-form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    {errors && (
                        <ul className="error-list">
                            {errors.map((error, idx) => <li className="error-item" key={idx}>{error}</li>)}
                        </ul>
                    )}
                    <label className="form-label">
                        Username or Email
                        <input
                            className="form-input"
                            type="text"
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            autoComplete="username"
                            required
                        />
                    </label>
                    <label className="form-label">
                        Password
                        <input
                            className="form-input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                            required
                        />
                    </label>
                    <button className="submit-button" type="submit">Log In</button>
                    <div className="forgot-password">
                    <a href="https://nyc-permit-hub.onrender.com/reset-password">Forgot Password?</a>
                    </div>
                    <div className="sign-up-text">
                        Don't have an account? <Link to="/signup">Please Sign Up here</Link>
                    </div>
                </form>
            </div>
        );
}

export default LoginFormPage;
