import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "store/session";
import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";

const SignUpPage = () => {
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        if (!values.email.includes("@")) {
            setError("Please Provide a valid email address");
            return;
        }

        if (values.username.length < 4) {
            setError("Username is too short");
            return;
        }

        if (values.password.length < 6) {
            setError("Password is too short");
            return;
        }

        if (values.password !== values["confirm password"]) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await dispatch(
                sessionActions.signup({
                    email: values.email,
                    username: values.username,
                    password: values.password,
                })
            );

            if (response.ok) {
                setError("");
                navigate("/", {
                    state: { accountCreated: true },
                });
            } else {
                const data = await response.json();
                if (data && data.errors) {
                    setError(data.errors[0]);
                } else {
                    setError("Something went wrong. Please try again.");
                }
            }
        } catch (err) {
            if (err && typeof err.json === "function") {
                const data = await err.json();
                if (data && data.errors) setError(data.errors[0]);
            } else {
                setError("An unexpected error occurred. Please try again.");
                console.error(err);
            }
        }
    };

    return (
        <div className="flex justify-center items-center">
            <FormContainer>
                <div className="text-red-700 font-lato">{error}</div>
                <AuthForm
                    fields={[
                        {
                            label: "email",
                            type: "text",
                        },
                        {
                            label: "username",
                            type: "text",
                        },
                        {
                            label: "password",
                            type: "password",
                        },
                        {
                            label: "confirm password",
                            type: "password",
                        },
                    ]}
                    submitButtonLabel="create account"
                    onSubmit={handleSubmit}
                />
                <Link className="text-teal-600 underline text-sm" to="/">
                    sign in
                </Link>
            </FormContainer>
        </div>
    );
};

export default SignUpPage;