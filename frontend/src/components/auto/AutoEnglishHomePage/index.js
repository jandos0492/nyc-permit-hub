import React from "react";
import { Link } from "react-router-dom";
import "./AutoEnglishHomePage.css";

const AutoEnglishHomePage = () => {
    return (
        <div className="auto-home-page-container">
            <div className="auto-home-page">
                <Link to="/auto/english/traffic-signs/learn" className="home-card grey">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/test-page/learn-traffic-signs.jpg`}
                        alt="Learn Traffic Signs"
                        className="card-image"
                    />
                    <span className="home-card-span">Learn Traffic Signs</span>
                    <p className="card-description">
                        Learn all the traffic signs for the NYC permit test
                    </p>
                </Link>
                <Link to="/auto/english/learn" className="home-card grey">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/test-page/learn.jpg`}
                        alt="Learn all questions"
                        className="card-image"
                    />
                    <span className="home-card-span">Learn</span>
                    <p className="card-description">
                        Learn all the questions and prepare for the NYC permit test
                    </p>
                </Link>
                <Link to="/auto/english/full-test" className="home-card grey">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/test-page/full-test.jpg`}
                        alt="Full test"
                        className="card-image"
                    />
                    <span className="home-card-span">Full Test</span>
                    <p className="card-description">
                        Pass all the questions test and get the result
                    </p>
                </Link>
                <Link to="/auto/english/express-test" className="home-card grey">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/test-page/express-test.jpg`}
                        alt="Express test"
                        className="card-image"
                    />
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