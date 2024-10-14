const Field = ({ field, onChange, value }) => {
    return (
        <div className="flex flex-col my-4" key={field.label}>
            <label className="text-slate-500 pl-1" htmlFor={field.label}>
                {field.label}
            </label>
            <input
                id={field.label}
                type={field.type}
                value={value}
                onChange={onChange}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 focus:outline-cyan-600 w-64"
                required
            />
        </div>
    );
};

export default Field;
