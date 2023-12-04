import React from "react";
import { Link } from "react-router-dom";

const CDLGeneralKnowledgeHomePage = () => {
    return (
        <div className="cdl-home-page-container">
            <div className="cdl-home-page">
                <Link to="/cdl/general-knowledge/learn" className="home-card grey">
                    <span className="home-card-span">Learn</span>
                    <p className="card-description">
                        Learn all the questions and prepare for the NYC CDL General Knowledge test
                    </p>
                </Link>
                <Link to="/cdl/general-knowledge/full-test" className="home-card yellow">
                    <span className="home-card-span">Full Test</span>
                    <p className="card-desctiption">
                        Pass all the questions test and get the result
                    </p>
                </Link>
                <Link to="/cdl/general-knowledge/express-test" className="home-card red">
                    <span className="home-card-span">Express Test</span>
                    <p className="card-description">
                        Pass only 50 random questions, like the real test in NYC DMV
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default CDLGeneralKnowledgeHomePage;