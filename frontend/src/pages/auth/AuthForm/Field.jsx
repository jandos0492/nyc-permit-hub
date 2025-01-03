// const Field = ({ field, onChange, value }) => {
//     return (
//         <div className="flex flex-col my-4" key={field.label}>
//             <label className="text-slate-500 pl-1" htmlFor={field.label}>
//                 {field.label}
//             </label>
//             <input
//                 id={field.label}
//                 type={field.type}
//                 value={value}
//                 onChange={onChange}
//                 className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 focus:outline-cyan-600 w-64"
//                 required
//             />
//         </div>
//     );
// };

// export default Field;

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Field = ({ field, onChange, value }) => {

    const location = useLocation();

    return (
        <div className="flex flex-col my-4" key={field.label}>
            <label className="text-slate-500 pl-1" htmlFor={field.label}>
                {field.label}
            </label>
            <div className="relative w-64">
                <input
                    id={field.label}
                    type={field.type}
                    value={value}
                    onChange={onChange}
                    className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 focus:outline-cyan-600 w-full pr-20"
                    required
                />
                {field.label === "password" && location.pathname !== "/sign-up" && (
                    <Link
                        to="/reset-password"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-teal-600 text-sm underline"
                    >
                        Forgot?
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Field;

