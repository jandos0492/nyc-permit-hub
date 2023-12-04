import React from "react";
import { Link } from "react-router-dom";

const CDLCombinationVehicles = () => {
    return (
        <div className="cdl-home-page-container">
            <div className="cdl-home-page">
                <Link to="/cdl/combination-vehicles/learn" className="home-card grey">
                    <span className="home-card-span">Learn</span>
                    <p className="card-description">
                        Learn all the questions and prepare for the NYC CDL Combination Vehicles test
                    </p>
                </Link>
                <Link to="/cdl/combination-vehicles/full-test" className="home-card yellow">
                    <span className="home-card-span">Full Test</span>
                    <p className="card-desctiption">
                        Pass all the questions test and get the result
                    </p>
                </Link>
                <Link to="/cdl/combination-vehicles/express-test" className="home-card red">
                    <span className="home-card-span">Express Test</span>
                    <p className="card-description">
                        Pass only 25 random questions, like the real test in NYC DMV
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default CDLCombinationVehicles;