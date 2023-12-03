import React from "react";
import { Link } from "react-router-dom";
import "./CDLHomePage.css"

const CDLHomePage = () => {
    return (
        <div className="cdl-home-page-container">
            <div className="cdl-home-page">
                <Link to="/cdl/general-knowledge" className="home-card grey">
                    <span className="home-card-span">General Knowledge</span>
                </Link>
                <Link to="/cdl/air-brakes" className="home-card green">
                    <span className="home-card-span">Air Brakes</span>
                </Link>
                <Link to="/cdl/combination-vehicle" className="home-card yellow">
                    <span className="home-card-span">Combination Vehicle</span>
                </Link>
            </div>
        </div>
    )
}

export default CDLHomePage;