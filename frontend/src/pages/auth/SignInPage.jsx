import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";

const SignInPage = () => {
    return (
        <div className="flex justify-center items-center">
            <FormContainer>
            <AuthForm 
                fields={[
                    {
                        label: "username",
                        type: "text",
                    },
                    {
                        label: "password",
                        type: "password"
                    }
                ]}
                submitButtonLabel="sign in"
            />
            <Link className="text-green-600 underline text-sm" to="/sign-up">create an account</Link>
            </FormContainer>
        </div>
    );
};

export default SignInPage;
