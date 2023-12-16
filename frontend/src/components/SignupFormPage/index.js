import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupFormPage.css';
function SignupFormPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        if (password !== confirmPassword) {
            return setErrors(["Confirm Password field must be the same as the Password field"]);
        }

        try {
            await dispatch(sessionActions.signup({ email, username, password }));
            navigate("/");
        } catch (res) {
            setEmail("");
            setUsername("");
            setPassword("");
            setConfirmPassword("");
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors)
        }
    }

    return (
        <div className="signup-form-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                {errors && (
                    <ul className="error-list">
                        {errors.map((error, idx) => <li className="error-item" key={idx}>{error}</li>)}
                    </ul>
                )}
                <label className="form-label">
                    Email
                    <input
                        className="form-input"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label className="form-label">
                    Username
                    <input
                        className="form-input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                        autoComplete="new-password"
                        required
                    />
                </label>
                <label className="form-label">
                    Confirm Password
                    <input
                        className="form-input"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        autoComplete="new-password"
                        required
                    />
                </label>
                <button className="submit-button" type="submit">Sign Up</button>
                <div className="login-text">
                    Already Member? <Link to="/login">Please Sign In here</Link>
                </div>
            </form>
        </div>
    );
}

export default SignupFormPage;
