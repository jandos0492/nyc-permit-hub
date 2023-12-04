import React from "react";
import { Link } from "react-router-dom";

const CDLAirBrakesHomePage = () => {
    return (
        <div className="cdl-home-page-container">
            <div className="cdl-home-page">
                <Link to="/cdl/air-brakes/learn" className="home-card grey">
                    <span className="home-card-span">Learn</span>
                    <p className="card-description">
                        Learn all the questions and prepare for the NYC CDL Air Brakes test
                    </p>
                </Link>
                <Link to="/cdl/air-brakes/full-test" className="home-card yellow">
                    <span className="home-card-span">Full Test</span>
                    <p className="card-desctiption">
                        Pass all the questions test and get the result
                    </p>
                </Link>
                <Link to="/cdl/air-brakes/express-test" className="home-card red">
                    <span className="home-card-span">Express Test</span>
                    <p className="card-description">
                        Pass only 30 random questions, like the real test in NYC DMV
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default CDLAirBrakesHomePage;