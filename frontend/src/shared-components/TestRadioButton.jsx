const TestRadioButton = ({ checked, onChange, disabled, label }) => {
    return (
        <div className="flex items-center mb-2 text-xs md:text-base">
            <input
                type="radio"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            <div className="ml-3">{label}</div>
        </div>
    );
};

export default TestRadioButton;