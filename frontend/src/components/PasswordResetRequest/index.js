import React, { useState, useEffect } from "react";
import "./PasswordResetRequest.css";

const PasswordResetRequest = () => {
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([]);
    const [validEmail, setValidEmail] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setErrors("");
        setValidEmail("");
    };

    const handleResetRequest = async () => {
        try {
            const xsrfToken = document.cookie
                .split("; ")
                .find((row) => row.startsWith("XSRF-TOKEN="))
                .split("=")[1];

            const response = await fetch("/api/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-XSRF-TOKEN": xsrfToken,
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setValidEmail("The password request was successful. Please check your email.")
                setEmail("");
            } else {
                setErrors(data.errors ? data.errors : ["The email is not associated with this NYC Permit Hub."]);
                setEmail("");
            }

        } catch (error) {
            setErrors(["Error requesting password reset."]);
        }
    };

    // showing the errors and validEmail only for 3 seconds if they appear in the page;
    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setErrors([]);
    //         setValidEmail("");
    //     }, 5000);

    //     return () => clearTimeout(timeout);
    // }, [errors, validEmail])

    return (
        <div className="password-reset-request-container">
            <div className="password-reset-request-form">
                {errors && (
                    <ul className="error-list">
                        {errors.map((error, idx) => <li className="error-item" key={idx}>{error}</li>)}
                    </ul>
                )}
                <label className="form-label">Email:</label>
                <input
                    className="form-input"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <button
                    className="submit-button"
                    onClick={handleResetRequest}>
                    Request Reset Password
                </button>
                {validEmail && <p className="valid-email">{validEmail}</p>}
            </div>
        </div>
    );
};

export default PasswordResetRequest;