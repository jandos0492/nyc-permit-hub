import React from "react";
import { Link } from "react-router-dom";
import "./CDLHomePage.css"

const CDLHomePage = () => {
    return (
        <div className="cdl-home-page-container">
            <h1 className="header">CDL</h1>
            <div className="cdl-home-page">
                <Link to="/cdl/general-knowledge" className="home-card grey">
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/cdl/general-knowledge.jpg`} 
                        alt="General Knowledge" 
                        className="card-image cdl"
                    />
                    <span className="home-card-span">General Knowledge</span>
                </Link>
                <Link to="/cdl/air-brakes" className="home-card grey">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/cdl/air-brakes.jpg`}
                        alt="General Knowledge"
                        className="card-image cdl"
                    />
                    <span className="home-card-span">Air Brakes</span>
                </Link>
                <Link to="/cdl/combination-vehicles" className="home-card grey">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/cdl/combination-vehicles.jpg`}
                        alt="General Knowledge"
                        className="card-image cdl"
                    />
                    <span className="home-card-span">Combination Vehicle</span>
                </Link>
            </div>
        </div>
    )
}

export default CDLHomePage;