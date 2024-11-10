import clsx from "clsx";

const NavButton = ({ icon, onClick, show }) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "bg-cyan-800 text-cyan-300 rounded-lg m-3",
                !show && "invisible pointer-events-none"
            )}
        >
            <i className={`fa-solid ${icon} m-2 text-xl md:text-3xl`}></i>
        </button>
    );
};

export default NavButton;
