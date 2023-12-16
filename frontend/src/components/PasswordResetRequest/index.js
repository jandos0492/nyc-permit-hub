import React, { useState } from "react";
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

    const handleResetRequest = async (e) => {
        e.preventDefault();
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
                setTimeout(() => {
                    setValidEmail("");
                }, 2000);
                setEmail("");
            } else {
                setErrors(data.errors ? data.errors : ["The email is not associated with this NYC Permit Hub."]);
                setEmail("");
            }

        } catch (error) {
            setErrors(["Error requesting password reset."]);
        }
    };

    return (
        <div className="password-reset-request-container">
            <form
                className="password-reset-request-form"
                onSubmit={handleResetRequest}
            >
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
                >
                    Request Reset Password
                </button>
                {validEmail && <p className="valid-email">{validEmail}</p>}
            </form>
        </div>
    );
};

export default PasswordResetRequest;