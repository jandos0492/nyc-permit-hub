import React from "react";
import { Link } from "react-router-dom";
import "./AutoChooseLanguage.css";

const AutoChooseLanguage = () => {
    return (
        <div className="home-page-container">
            <h1 className="header">Auto: Choose Language</h1>
            <div className="home-container">
                <div className="section">
                    <Link to="/auto/english">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/language/english.jpg`}
                            alt="English language"
                            className="big-image"
                        />
                        <p>English Version</p>
                    </Link>
                </div>
                <div className="section">
                    <Link to="/auto/russian">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/language/russian.jpg`}
                            alt="Russian language"
                            className="big-image"
                        />
                        <p>Russian Version</p>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default AutoChooseLanguage;