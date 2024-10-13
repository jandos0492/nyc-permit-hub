import { useState } from "react";
import Field from "./Field";

const AuthForm = ({ fields, submitButtonLabel }) => {
    const [values, setValues] = useState(() => {
        const initialState = {};
        for (let field of fields) {
            initialState[field.label] = ""
        }
        return initialState;
    });

    return (
        <form className="bg-white border border-slate-300 rounded-lg m-4 p-4 font-lato">
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
            <button className="bg-emerald-700 text-white w-full rounded-lg py-2 mt-4">
                {submitButtonLabel}
            </button>
        </form>
    );
};

export default AuthForm;
