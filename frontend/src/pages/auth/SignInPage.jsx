import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "store/session";
import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";

const SignInPage = () => {
    const [error, setError] = useState("");
    const location = useLocation();
    const dispatch = useDispatch();

    return (
        <div className="flex justify-center items-center">
            <FormContainer>
                <div className="text-red-700 font-lato">{error}</div>
                {location.state?.accountCreated && (
                    <div className="mt-2 mb-8 p-4 py-2 border border-emerald-500 rounded-lg bg-green-200 text-emerald-700 font-lato">
                        Account created successfully. Please sign in
                    </div>
                )}
                <AuthForm
                    fields={[
                        {
                            label: "username",
                            type: "text",
                        },
                        {
                            label: "password",
                            type: "password",
                        },
                    ]}
                    submitButtonLabel="sign in"
                    onSubmit={async (values) => {
                        try {
                            await dispatch(
                                sessionActions.login({
                                    credential: values.username,
                                    password: values.password,
                                })
                            );
                            setError("");
                        } catch (res) {
                            const data = await res.json();
                            if (data && data.errors) setError(data.errors[0]);
                        }
                    }}
                />
                <Link
                    className="text-green-600 underline text-sm"
                    to="/sign-up"
                >
                    create an account
                </Link>
            </FormContainer>
        </div>
    );
};

export default SignInPage;
