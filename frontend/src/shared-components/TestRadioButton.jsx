import clsx from "clsx";

const TestRadioButton = ({ checked, onChange, disabled, label }) => {
    return (
        <div
            className={clsx(
                "flex items-center mb-2 text-xs md:text-base",
                label.includes(".jpg") && "flex-row space-x-3 pb-1 md:pb-3"
            )}
        >
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className="flex-shrink-0"
            />
            {label.includes(".jpg") ? (
                <img className="w-12 md:w-20 h-auto rounded-md" src={label} alt="" />
            ) : (
                <div className="ml-3">{label}</div>
            )}
        </div>
    );
};

export default TestRadioButton;
