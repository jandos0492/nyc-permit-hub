// import React, { useState, useEffect } from "react";
// import { useDispatch } from 'react-redux';
// import * as sessionActions from '../../store/session';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faUser } from "@fortawesome/free-solid-svg-icons";


// function ProfileButton({ user }) {
//     const dispatch = useDispatch();
//     const [showMenu, setShowMenu] = useState(false);

//     const openMenu = () => {
//         if (showMenu) return;
//         setShowMenu(true);
//     };

//     useEffect(() => {
//         if (!showMenu) {
//             return;
//         };

//         const closeMenu = () => {
//             setShowMenu(false);
//         };

//         document.addEventListener('click', closeMenu);

//         return () => document.removeEventListener("click", closeMenu);
//     }, [showMenu]);

//     const logout = (e) => {
//         e.preventDefault();
//         dispatch(sessionActions.logout());
//     };

//     return (
//         <>
//             <button onClick={openMenu}>
//                 <FontAwesomeIcon icon={ faUser } />
//             </button>
//             {showMenu && (
//             <ul className="profile-dropdown">
//                 <li>{user.username}</li>
//                 <li>{user.email}</li>
//                 <li>
//                     <button onClick={logout}>Log Out</button>
//                 </li>
//             </ul>
//             )}
//         </>
//     );
// }

// export default ProfileButton;

import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
    };

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <div ref={dropdownRef}>
            <button onClick={toggleMenu}>
                <FontAwesomeIcon icon={faUser} />
            </button>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>
                        <button onClick={logout}>Log Out</button>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default ProfileButton;
