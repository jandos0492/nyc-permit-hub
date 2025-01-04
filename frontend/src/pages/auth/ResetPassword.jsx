import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as resetPasswordService from "services/resetPassword";
import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";

const ResetPassword = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const { token } = useParams();
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <FormContainer>
                {error && (
                    <div className="text-red-700 font-lato mb-4">{error}</div>
                )}
                {success && (
                    <div className="text-green-700 font-lato mb-4">
                        {success}
                    </div>
                )}
                <AuthForm
                    fields={[
                        {
                            label: "password",
                            type: "password",
                        },
                        {
                            label: "confirm password",
                            type: "password",
                        },
                    ]}
                    submitButtonLabel="reset password"
                    onSubmit={async (values) => {
                        setError("");
                        setSuccess("");

                        if (values.password !== values["confirm password"]) {
                            values.password = "";
                            values["confirm password"] = "";
                            setError("Passwords do not match");
                            return;
                        }

                        const response =
                            await resetPasswordService.resetPassword({
                                token,
                                password: values.password,
                            });

                        const data = await response.json();

                        if (response.ok) {
                            setSuccess(
                                "Password reset successful. You can now log in with your new password."
                            );
                            setTimeout(() => {
                                setSuccess("");
                                navigate("/");
                            }, 2000);
                        } else {
                            console.log(data);
                            if (data.message) {
                                setError(data.message);
                            } else if (data.errors.length) {
                                setError(data.errors[0]);
                            }
                        }
                    }}
                />
                <Link className="text-teal-600 underline text-sm" to="/">
                    sign in
                </Link>
            </FormContainer>
        </div>
    );
};

export default ResetPassword;
