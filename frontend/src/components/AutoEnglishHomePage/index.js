import React from "react";
import { Link } from "react-router-dom";
import "./AutoEnglishHomePage.css";

const AutoEnglishHomePage = () => {
    return (
        <div className="auto-english-home-page-container">
            <div className="auto-english-home-page">
                <Link to="/auto/english/traffic-signs/learn" className="home-card grey">
                    <span className="home-card-span">Learn Traffic Signs</span>
                    <p className="card-description">
                        Learn all the traffic signs for the NYC permit test
                    </p>
                </Link>
                <Link to="/auto/english/learn" className="home-card green">
                    <span className="home-card-span">Learn</span>
                    <p className="card-description">
                        Learn all the questions and prepare for the NYC permit test
                    </p>
                </Link>
                <Link to="/auto/english/full-test" className="home-card yellow">
                    <span className="home-card-span">Full Test</span>
                    <p className="card-description">
                        Pass all the questions test and get the result
                    </p>
                </Link>
                <Link to="/express-test" className="home-card red">
                    <span className="home-card-span">Express Test</span>
                    <p className="card-description">
                        Pass only 20 random questions, like the real test in NYC DMV
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default AutoEnglishHomePage;