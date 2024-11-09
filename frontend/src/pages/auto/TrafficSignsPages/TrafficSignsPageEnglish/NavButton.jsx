const NavButton = ({ icon, onClick, show }) => {

    if (!show) {
        return null
    }

    return (
        <button 
            onClick={onClick}
            className="bg-cyan-800 text-cyan-300 rounded-lg m-3">
            <i className={`fa-solid ${icon} m-2 text-xl md:text-3xl`}></i>
        </button>
    )
}

export default NavButton;