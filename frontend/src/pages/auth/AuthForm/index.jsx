import { useState } from "react";
import Field from "./Field";

const AuthForm = ({ fields, submitButtonLabel, onSubmit }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [values, setValues] = useState(() => {
        const initialState = {};
        for (let field of fields) {
            initialState[field.label] = "";
        }
        return initialState;
    });

    return (
        <form
            onSubmit={async (e) => {
                setIsLoading(true);
                e.preventDefault();
                await onSubmit(values);
                setIsLoading(false);
            }}
            className="bg-white border border-slate-300 rounded-lg m-4 p-4 font-lato"
        >
            {fields.map((field) => (
                <Field
                    key={field.label}
                    field={field}
                    onChange={(e) => {
                        setValues({ ...values, [field.label]: e.target.value });
                    }}
                    value={values[field.label]}
                />
            ))}
            <button className="bg-emerald-700 text-white w-full rounded-lg py-2 mt-4 relative">
                {submitButtonLabel}
                {isLoading && (
                    <div className="absolute top-0 right-4 flex items-center h-full">
                        <i className="fa-regular fa-spinner text-green-300 text-xl animate-spin"></i>
                    </div>
                )}
            </button>
        </form>
    );
};

export default AuthForm;
