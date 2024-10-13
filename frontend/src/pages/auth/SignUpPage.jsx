import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";

const SignUpPage = () => {
    return (
        <div className="flex justify-center items-center">
            <FormContainer>
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
                />
                <Link
                    className="text-green-600 underline text-sm"
                    to="/"
                >
                    sign in
                </Link>
            </FormContainer>
        </div>
    );
}

export default SignUpPage;