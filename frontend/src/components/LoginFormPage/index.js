import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./LoginFormPage.css";

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    // useEffect(() => {
    //     if (errors.length > 0) {
    //         const timeout = setTimeout(() => {
    //             setErrors([]);
    //             setCredential("");
    //             setPassword("");
    //         }, 3000);

    //         return () => clearTimeout(timeout);
    //     }
    // }, [errors]);

    useEffect(() => {
        if (sessionUser) {
            navigate("/");
        }
    })

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
                    <a href="http://localhost:3001/reset-password">Forgot Password?</a>
                </div>
            </form>
        </div>
    );
}

export default LoginFormPage;