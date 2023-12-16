import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./ContactMe.css";

const ContactMe = () => {
    const user = useSelector((state) => state.session.user);
    const [name, setName] = useState("");
    const [email, setEmail] = useState(user.email);
    const [message, setMessage] = useState("");
    const [emailSent, setEmailSent] = useState(false);
    const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        try {
            const xsrfToken = document.cookie
                .split("; ")
                .find((row) => row.startsWith("XSRF-TOKEN="))
                .split("=")[1];

            const response = await fetch("http://localhost:3000/api/contact-me", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-XSRF-TOKEN": xsrfToken,
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setEmailSent(true);

                setTimeout(() => {
                    setEmailSent(false);
                }, 2000);
            } else {
                setErrors(data.errors);
            }

        } catch (error) {
            setErrors(["Error sending email."]);
        }

        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div className="contact-me-page-container">
            <h1 className="header">Contact Me</h1>
            <div className="contact-me-container">
                <form onSubmit={handleSubmit} className="contact-me-form">
                    {errors && (
                        <ul className="error-list">
                            {errors.map((error, idx) => <li className="error-item" key={idx}>{error}</li>)}
                        </ul>
                    )}
                    {emailSent && <p className="email-sent">Message sent successfully!</p>}
                    <label className="form-label">
                        Name:
                        <input
                            className="form-input"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label className="form-label">
                        Email:
                        <input
                            className="form-input"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="" className="form-label">
                        Message:
                        <textarea
                            cols="30" rows="8"
                            className="form-input"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        >
                        </textarea>
                    </label>
                    <button className="submit-button" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe;