import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ResetPassword.css"

const ResetPassword = () => {
    const { token } = useParams();
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isPasswordUpdated, setIsPasswordUpdated] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const handleResetPassword = async () => {
        try {
            const xsrfToken = document.cookie
                .split("; ")
                .find((row) => row.startsWith("XSRF-TOKEN="))
                .split("=")[1];

            const response = await fetch(`/api/reset-password/${token}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-XSRF-TOKEN": xsrfToken,
                },
                body: JSON.stringify({ password }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Password reset successful. You can now log in with your new password.");
                setIsPasswordUpdated(true);
                setPassword("");
                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            } else {
                // const data = await response.json();
                setErrors(data.errors);
                setMessage(data.message || "Password reset failed.");
            }
        } catch (error) {
            setMessage("Error resetting password.");
        }
    };

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setErrors([]);
    //         setMessage("")
    //     }, 5000);

    //     return () => clearTimeout(timeout);
    // }, [errors, message]);

    return (
        <div className="password-reset-container">
            <div className="password-reset-form">
                {errors && (
                    <ul className="error-list">
                        {errors.map((error, idx) => <li className="error-item" key={idx}>{error}</li>)}
                    </ul>
                )}
                <label className="form-label">New Password:</label>
                <input
                    className="form-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="submit-button"
                    onClick={handleResetPassword}
                    disabled={isPasswordUpdated}>
                    Reset Password
                </button>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
};

export default ResetPassword;