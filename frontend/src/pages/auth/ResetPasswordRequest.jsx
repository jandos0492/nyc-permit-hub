import { useState } from "react";
import { Link } from "react-router-dom";
import * as resetPasswordService from "services/resetPassword";
import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";

const ResetPasswordRequest = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

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
                    isSubmitting={isSubmitting}
                    onSubmit={async (values) => {
                        setError("");
                        setSuccess("");
                        setIsSubmitting(true);

                        const response =
                            await resetPasswordService.resetPassword({
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
                            console.log(data);
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
                <div className="flex justify-around w-full max-w-xs">
                    <Link
                        className="text-teal-600 underline text-sm"
                        to="/sign-up"
                    >
                        create an account
                    </Link>
                    <Link
                        className="text-teal-600 underline text-sm"
                        to="/"
                    >
                        sign in
                    </Link>
                </div>
            </FormContainer>
        </div>
    );
};

export default ResetPasswordRequest;
