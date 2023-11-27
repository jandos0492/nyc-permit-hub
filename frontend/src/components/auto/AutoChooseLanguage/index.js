import React from "react";
import { Link } from "react-router-dom";

const AutoChooseLanguage = () => {
    return (
        <div className="home-container">
            <div className="section">
                <Link to="/auto/english">
                    <img src={`${process.env.PUBLIC_URL}/images/language/english.jpg`} alt="English language" />
                    <p>English Version</p>
                </Link>
            </div>
            <div className="section">
                <Link to="/auto/russian">
                    <img src={`${process.env.PUBLIC_URL}/images/language/russian.jpg`} alt="Russian language" />
                    <p>Russian Version</p>
                </Link>
            </div>
        </div>
    )
};

export default AutoChooseLanguage;