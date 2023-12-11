import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <div className="section">
                <Link to="/auto/choose-language">
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/vehicle_type/auto.jpg`} 
                        alt="Auto" 
                        className="big-image"
                    />
                    <p>Auto Permit</p>
                </Link>
            </div>
            <div className="section">
                <Link to="/cdl">
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/vehicle_type/truck.jpg`} 
                        alt="Truck" 
                        className="big-image"
                    />
                    <p>CDL Permit</p>
                </Link>
            </div>
        </div>
    )
}

export default Home