import { useState } from "react";
import { Link } from "react-router-dom";
import * as resetPasswordService from "services/resetPassword";
import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";

const ResetPasswordRequest = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

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
                            label: "email",
                            type: "text",
                        },
                    ]}
                    submitButtonLabel="Reset Password Request"
                    onSubmit={async (values) => {
                        setError("");
                        setSuccess("");

                        const response =
                            await resetPasswordService.resetPasswordRequest({
                                email: values.email,
                            });
                        const data = await response.json();

                        if (response.ok) {
                            setSuccess(
                                "Password reset link sent successfully."
                            );
                            setTimeout(() => {
                                setSuccess("");
                            }, 2000);
                        } else {
                            setError(
                                data.errors
                                    ? data.errors
                                    : [
                                          "The email is not associated with NYC Permit Hub.",
                                      ]
                            );
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

export default ResetPasswordRequest;
