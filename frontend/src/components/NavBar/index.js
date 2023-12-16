import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse as farFaHouse } from "@fortawesome/free-solid-svg-icons";
import ProfileButton from "./ProfileButton";
import "./NavBar.css";

const NavBar = ({ isAuthenticated }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const menuRef = useRef();
    const sessionUser = useSelector((state) => state.session.user);
    const isAdmin = useSelector((state) => state.session.user?.isAdmin);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const iconSize = windowWidth < 600 ? "lg" : "2x";

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="container">
                {isMobile ? (
                    <div ref={menuRef}>
                        <button className="hamburger-menu" onClick={toggleMenu}>
                            <i className="fas fa-bars"></i>
                        </button>
                        {isMenuOpen && isAuthenticated && (
                            <nav className="mobile-nav">
                                <Link className="home-icon" to="/home">
                                    <FontAwesomeIcon icon={farFaHouse} size={iconSize} />
                                </Link>
                                {isAdmin && (
                                    <Link to="/all-users" className="link">All Users</Link>
                                )}
                                <Link to="/results" className="link" onClick={toggleMenu}>
                                    Test History
                                </Link>
                                <Link to="/auto/choose-language" className="link">
                                    Auto
                                </Link>
                                <Link to="/cdl" className="link">
                                    CDL
                                </Link>
                                <Link to="/contact-me" className="link">
                                    Contact Me
                                </Link>
                                <ProfileButton user={sessionUser} />
                            </nav>
                        )}
                        {isMenuOpen && !isAuthenticated && (
                            <nav className="mobile-nav">
                                <Link to="/login" className="link">
                                    Login
                                </Link>
                                <Link to="/signup" className="link">
                                    Sign Up
                                </Link>
                            </nav>
                        )}
                    </div>
                ) : (
                    isAuthenticated ? (
                        <nav>
                            <Link className="link" to="/home">
                                <FontAwesomeIcon icon={farFaHouse} size={iconSize} />
                            </Link>
                            {isAdmin && (
                                <Link to="/all-users" className="link">All Users</Link>
                            )}
                            <Link to="/results" className="link">
                                Test History
                            </Link>
                            <Link to="/auto/choose-language" className="link">
                                Auto
                            </Link>
                            <Link to="/cdl" className="link">
                                CDL
                            </Link>
                            <Link to="/contact-me" className="link">
                                Contact Me
                            </Link>
                            <ProfileButton user={sessionUser} />
                        </nav>
                    ) : (
                        <nav>
                            <Link to="/login" className="link">
                                Login
                            </Link>
                            <Link to="/signup" className="link">
                                Sign Up
                            </Link>
                        </nav>
                    )
                )}
            </div>
        </header>
    );
};

export default NavBar;
