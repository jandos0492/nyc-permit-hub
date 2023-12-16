import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

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
        navigate("/login");
    };

    return (
        <div ref={dropdownRef}>
            <button className="link profile" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faUser} />
            </button>
            {showMenu && (
                <div className="dropdown-menu">
                    <p className="profile-text">{`Hello ${user.username}! Do you want to log out?`}</p>
                    <button className="profile-button yes" onClick={logout}>Yes</button>
                    <button className="profile-button no" onClick={toggleMenu}>No</button>
                </div>
            )}
        </div>
    );
}

export default ProfileButton;